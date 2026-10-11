// F-02 / D-A5 en el login del sitio: regla de contraseña, mensajes y cableado de la página.
// Ejecutar: node --test tests/   (Node >= 22.18; SENHA_MOD apunta a otra copia del módulo para las pruebas de mutantes)
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const raiz = path.resolve(import.meta.dirname, '..')
const mod = await import(pathToFileURL(process.env.SENHA_MOD || path.join(raiz, 'lib/senha.ts')).href)
const { SENHA_FORTE, SENHA_REGRAS, validarSenhaNova, mensagemErroCadastro } = mod

// Lista DOCUMENTADA por Supabase (docs: Password security). Modelo independiente del regex (por conjuntos).
const SIMBOLOS = '!@#$%^&*()_+-=[]{};\':"\\|<>?,./`~'
const oraculo = (pw) => {
  const cs = [...pw]
  return cs.length >= 8 && cs.some((c) => c >= 'a' && c <= 'z') && cs.some((c) => c >= 'A' && c <= 'Z') &&
    cs.some((c) => c >= '0' && c <= '9') && cs.some((c) => SIMBOLOS.includes(c))
}

test('la lista documentada tiene 32 símbolos y todos se aceptan (sin falsos rechazos)', () => {
  assert.equal([...SIMBOLOS].length, 32)
  for (const c of SIMBOLOS) assert.equal(validarSenhaNova('Abcdef1' + c), null, JSON.stringify(c))
})

test('contraseñas válidas', () => {
  for (const p of ['Abcde1!x', 'Senha Forte 1!', 'Ação1234!', 'Aa1!😀bcd', 'Aa1!€€€€', 'Aa1!' + 'x'.repeat(60)]) {
    assert.equal(validarSenhaNova(p), null, p)
  }
})

test('contraseñas inválidas: falta una clase', () => {
  for (const p of ['abcdefg1!', 'ABCDEFG1!', 'Abcdefgh!', 'Abcdefg1', '']) assert.equal(validarSenhaNova(p), SENHA_REGRAS, p)
})

test('longitud: 8 aceptada, 7 rechazada', () => {
  assert.equal(validarSenhaNova('Abcde1!x'), null)
  assert.equal(validarSenhaNova('Abcd1!x'), SENHA_REGRAS)
})

test('espacios, tab, acentos, ç, ñ, €, £, emoji y comillas tipográficas NO cuentan como símbolo', () => {
  for (const c of [' ', '\t', 'ç', 'é', 'ñ', 'ª', 'º', '¡', '¿', '€', '£', '😀', '“', '”', '—', '…', '«']) {
    assert.equal(validarSenhaNova('Abcdef1' + c), SENHA_REGRAS, JSON.stringify(c))
  }
  assert.equal(validarSenhaNova('Abc def 1'), SENHA_REGRAS)
  assert.equal(validarSenhaNova('Ação 1234'), SENHA_REGRAS)
})

test('valores nulos/indefinidos no rompen', () => {
  assert.equal(validarSenhaNova(undefined), SENHA_REGRAS)
  assert.equal(validarSenhaNova(null), SENHA_REGRAS)
})

test('fuzz 30000: el regex coincide con el modelo del servidor documentado', () => {
  const A2 = [...'abcXYZ019 !@#$%^&*()_+-=[]{};\':"\\|<>?,./`~çéñ€\t']
  const A1 = [...'abcXYZ019 çéñ€£\t']
  let s = 12345
  const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff }
  for (let i = 0; i < 30000; i++) {
    const A = i % 2 ? A1 : A2
    const n = Math.floor(rnd() * 14)
    let p = ''
    for (let k = 0; k < n; k++) p += A[Math.floor(rnd() * A.length)]
    assert.equal(SENHA_FORTE.test(p), oraculo(p), JSON.stringify(p))
  }
})

test('el mensaje de regla dice lo esencial', () => {
  for (const w of ['8 caracteres', 'maiúscula', 'minúscula', 'número', 'símbolo', '! @ # $ % & * ? - _ .', 'Espaço', 'acentos', 'emojis']) {
    assert.ok(SENHA_REGRAS.includes(w), w)
  }
  for (const c of '!@#$%&*?-_.') assert.ok(SIMBOLOS.includes(c), c)
})

test('mensajes de error del cadastro', () => {
  assert.equal(mensagemErroCadastro({ message: 'User already registered' }), 'Já existe uma conta com esse e-mail.')
  assert.equal(mensagemErroCadastro({ message: 'x', code: 'weak_password' }), SENHA_REGRAS)
  assert.equal(mensagemErroCadastro({ message: 'Password should contain at least one character of each: abc' }), SENHA_REGRAS)
  assert.equal(mensagemErroCadastro({ message: 'Password should be at least 8 characters.' }), SENHA_REGRAS)
  assert.equal(mensagemErroCadastro({ message: 'rate limit' }), 'Não foi possível criar a conta agora. Tente novamente.')
  assert.equal(mensagemErroCadastro({}), 'Não foi possível criar a conta agora. Tente novamente.')
  // "already registered" tiene prioridad aunque venga con otro código
  assert.equal(mensagemErroCadastro({ message: 'User already registered', code: 'weak_password' }), 'Já existe uma conta com esse e-mail.')
})

test('el sitio y el chat usan EXACTAMENTE la misma regla y el mismo texto', () => {
  const chat = process.env.CHAT_AUTH_JS // ruta al js/auth.js del chat (repo albita); sin ella, esta comparación se omite
  if (!chat || !fs.existsSync(chat)) return
  const src = fs.readFileSync(chat, 'utf8')
  const re = src.match(/const SENHA_FORTE = (\/.*\/);?\s*$/m)
  const msg = src.match(/const SENHA_REGRAS = '(.*)';?\s*$/m)
  assert.ok(re && msg)
  assert.equal(eval(re[1]).source, SENHA_FORTE.source)
  assert.equal(msg[1], SENHA_REGRAS)
})

test('cableado de app/login/page.tsx', () => {
  const page = fs.readFileSync(path.join(raiz, 'app/login/page.tsx'), 'utf8')
  assert.match(page, /from '@\/lib\/senha'/)
  assert.doesNotMatch(page, /const SENHA_FORTE/, 'no debe quedar una regla local duplicada')
  assert.match(page, /validarSenhaNova\(senha\)/)
  assert.match(page, /mensagemErroCadastro\(signUpError\)/)
  assert.doesNotMatch(page, /6 caracteres|\{6,\}/, 'no debe quedar la regla de 6 caracteres')
  assert.match(page, /Mínimo 8 caracteres\. Espaço, acentos \(ç, é…\) e emojis não contam como símbolo/)
  assert.match(page, /resetPasswordForEmail\(emailEntrar, \{\s*redirectTo: `\$\{window\.location\.origin\}\/chat`/)
  assert.match(page, /emailRedirectTo: destinoConfirmacaoCadastro\(window\.location\.origin\)/)
  assert.match(page, /return `\$\{origin\}\/precos`/)
})
