// Executar: node --test tests/recuperacaoSenha.test.ts   (Node 24: os tipos são removidos sem configuração extra)
// Opcional: AUTH_JS_APP=<caminho do js/auth.js do app> para conferir o nome do marcador contra o app real.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import {
  RECUPERACAO_FLAG,
  DESTINO_RECUPERACAO,
  SCRIPT_ENCAMINHAR_RECUPERACAO,
  tratarEventoAuth,
  urlRecuperacao,
  urlConfirmacaoCadastro,
} from '../lib/recuperacaoSenha.ts'

const raiz = new URL('..', import.meta.url)
const ler = (p: string) => readFileSync(new URL(p, raiz), 'utf8')

// Executa o script do <head> num navegador simulado.
function rodarScript(pathname: string, hash: string, opts: { storageQuebrado?: boolean } = {}) {
  const storage = new Map<string, string>()
  let destino: string | null = null
  const sessionStorage = {
    setItem: (k: string, v: string) => {
      if (opts.storageQuebrado) throw new Error('SecurityError')
      storage.set(k, v)
    },
  }
  const location = { pathname, hash, replace: (u: string) => { destino = u } }
  runInNewContext(SCRIPT_ENCAMINHAR_RECUPERACAO, { location, sessionStorage, URLSearchParams, String, Date })
  return { destino, storage }
}

const HASH_REC = '#access_token=tok.abc&expires_at=1&refresh_token=r1&token_type=bearer&type=recovery'

test('RS-01 raiz com link de recuperação vai para /chat com o fragmento intacto e grava o marcador', () => {
  const r = rodarScript('/', HASH_REC)
  assert.equal(r.destino, '/chat' + HASH_REC)
  assert.match(r.storage.get(RECUPERACAO_FLAG) ?? '', /^\d{13}$/)
})

test('RS-02 qualquer outra página do site (ex.: /login, /precos) também encaminha', () => {
  for (const p of ['/login', '/precos', '/quem-somos']) {
    assert.equal(rodarScript(p, HASH_REC).destino, '/chat' + HASH_REC, p)
  }
})

test('RS-03 em /chat não faz nada (o app trata sozinho; evita laço)', () => {
  assert.equal(rodarScript('/chat', HASH_REC).destino, null)
  assert.equal(rodarScript('/chat/', HASH_REC).destino, null)
  assert.equal(rodarScript('/chat/index.html', HASH_REC).destino, null)
})

test('RS-04 link vencido (#error=...otp_expired) vai para /chat, que mostra a mensagem, sem marcador', () => {
  const h = '#error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired'
  const r = rodarScript('/', h)
  assert.equal(r.destino, '/chat' + h)
  assert.equal(r.storage.has(RECUPERACAO_FLAG), false)
})

test('RS-05 sem fragmento, âncora comum ou outro tipo de link (cadastro): não faz nada', () => {
  assert.equal(rodarScript('/', '').destino, null)
  assert.equal(rodarScript('/', '#pilares').destino, null)
  assert.equal(rodarScript('/', '#access_token=t&type=signup').destino, null)
  assert.equal(rodarScript('/', '#type=recovery').destino, null) // sem token não há sessão a recuperar
})

test('RS-06 sessionStorage bloqueado não impede o encaminhamento', () => {
  assert.equal(rodarScript('/', HASH_REC, { storageQuebrado: true }).destino, '/chat' + HASH_REC)
})

test('RS-07 plano B: PASSWORD_RECOVERY fora de /chat grava o marcador e vai para /chat', () => {
  const chamadas: string[] = []
  const ok = tratarEventoAuth('PASSWORD_RECOVERY', {
    pathname: '/', marcar: () => chamadas.push('marcar'), ir: (d) => chamadas.push('ir:' + d),
  })
  assert.equal(ok, true)
  assert.deepEqual(chamadas, ['marcar', 'ir:/chat'])
})

test('RS-08 plano B: outros eventos ou já em /chat não fazem nada; marcar com erro ainda redireciona', () => {
  const nada = { pathname: '/', marcar: () => assert.fail('não devia marcar'), ir: () => assert.fail('não devia ir') }
  for (const ev of ['INITIAL_SESSION', 'SIGNED_IN', 'SIGNED_OUT', 'TOKEN_REFRESHED', 'USER_UPDATED']) {
    assert.equal(tratarEventoAuth(ev, nada), false, ev)
  }
  assert.equal(tratarEventoAuth('PASSWORD_RECOVERY', { ...nada, pathname: '/chat' }), false)
  let foi = ''
  assert.equal(tratarEventoAuth('PASSWORD_RECOVERY', {
    pathname: '/login', marcar: () => { throw new Error('bloqueado') }, ir: (d) => { foi = d },
  }), true)
  assert.equal(foi, '/chat')
})

test('RS-09 urlRecuperacao usa a origem atual (produção e preview)', () => {
  assert.equal(urlRecuperacao('https://kazuio.com'), 'https://kazuio.com/chat')
  assert.equal(urlRecuperacao('https://www.kazuio.com'), 'https://www.kazuio.com/chat')
  assert.equal(DESTINO_RECUPERACAO, '/chat')
})

test('RS-10 /login pede o e-mail de recuperação COM redirectTo para /chat', () => {
  const src = ler('app/login/page.tsx')
  const chamadas = src.match(/resetPasswordForEmail\([\s\S]*?\)\s*\n/g) ?? []
  assert.equal(chamadas.length, 1, 'esperada uma única chamada')
  assert.match(chamadas[0], /redirectTo:\s*urlRecuperacao\(window\.location\.origin\)/)
  assert.match(src, /import \{ [^}]*\burlRecuperacao\b[^}]* \} from '@\/lib\/recuperacaoSenha'/)
})

test('RS-11 o layout injeta o script como PRIMEIRO elemento do <head>', () => {
  const src = ler('app/layout.tsx')
  const head = src.slice(src.indexOf('<head>'))
  const iScript = head.indexOf('SCRIPT_ENCAMINHAR_RECUPERACAO')
  const iLd = head.indexOf('application/ld+json')
  assert.ok(iScript > 0 && iScript < iLd, 'script de recuperação deve vir antes do JSON-LD')
})

test('RS-12 o cliente do site registra o plano B só no navegador', () => {
  const src = ler('lib/supabaseClient.ts')
  assert.match(src, /typeof window !== 'undefined'/)
  assert.match(src, /onAuthStateChange\(\(event\) => \{\s*tratarEventoAuth\(/)
})

test('RS-14 destino FIXO: o fragmento nunca muda o domínio nem o caminho de destino', () => {
  const hostis = [
    HASH_REC + '&redirect_to=https://evil.example',
    '#type=recovery&access_token=x&next=//evil.example/x',
    '#//evil.example/?type=recovery&access_token=x',
    '#@evil.example&type=recovery&access_token=x',
    '#error=x&error_code=y&redirect=javascript:alert(1)',
  ]
  for (const h of hostis) {
    const r = rodarScript('/', h)
    if (r.destino === null) continue // não encaminhar também é seguro
    const u = new URL(r.destino, 'https://kazuio.com')
    assert.equal(u.origin, 'https://kazuio.com', h)
    assert.equal(u.pathname, '/chat', h)
    assert.ok(r.destino.startsWith('/chat#'), h)
  }
})

test('RS-15 o script não registra nem envia nada: sem rede, logs, cookies ou localStorage; o marcador guarda só a hora', () => {
  const proibidos = ['fetch', 'XMLHttpRequest', 'sendBeacon', 'console', 'Image', 'WebSocket', 'localStorage',
    'cookie', 'postMessage', 'open(', 'import(', 'eval', 'Function', 'href', 'assign(']
  for (const p of proibidos) assert.ok(!SCRIPT_ENCAMINHAR_RECUPERACAO.includes(p), p)
  const r = rodarScript('/', HASH_REC)
  assert.deepEqual([...r.storage.keys()], [RECUPERACAO_FLAG])
  assert.ok(!(r.storage.get(RECUPERACAO_FLAG) ?? '').includes('tok'))
  // O plano B recebe só o nome do evento (nunca a sessão/token).
  assert.equal(tratarEventoAuth.length, 2)
  assert.match(ler('lib/supabaseClient.ts'), /onAuthStateChange\(\(event\) =>/)
})

test('RS-16 cadastro em /login pede confirmação com emailRedirectTo para /precos', () => {
  const src = ler('app/login/page.tsx')
  const bloco = src.slice(src.indexOf('supabase.auth.signUp('), src.indexOf('setCarregandoCadastro(false)'))
  assert.match(bloco, /emailRedirectTo:\s*urlConfirmacaoCadastro\(window\.location\.origin\)/)
  assert.equal(urlConfirmacaoCadastro('https://kazuio.com'), 'https://kazuio.com/precos')
})

test('RS-17 senha mínima de 8 em /login (igual ao servidor) e nenhum texto dizendo 6', () => {
  const src = ler('app/login/page.tsx')
  const m = src.match(/const SENHA_FORTE = \/(.+)\/\n/)
  assert.ok(m, 'SENHA_FORTE não encontrado')
  const re = new RegExp(m[1])
  assert.equal(re.test('Ab1!xyz'), false, '7 caracteres deve falhar')
  assert.equal(re.test('Ab1!wxyz'), true, '8 caracteres deve passar')
  assert.doesNotMatch(src, /\b6 caracteres/)
  assert.match(src, /Mínimo 8 caracteres/)
})

test('RS-13 o nome do marcador é o mesmo do app (js/auth.js) e do <head> do app', () => {
  assert.equal(RECUPERACAO_FLAG, 'kazuio_recuperacao_pendente')
  const p = process.env.AUTH_JS_APP
  if (!p) return // sem a cópia do app, fica só a checagem literal acima
  assert.ok(existsSync(p), `AUTH_JS_APP não existe: ${p}`)
  const appAuth = readFileSync(p, 'utf8')
  assert.match(appAuth, new RegExp(`const RECUPERACAO_FLAG = '${RECUPERACAO_FLAG}'`))
})
