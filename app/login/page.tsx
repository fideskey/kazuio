'use client'

import { useState, type FormEvent, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { ArrowRight, UserPlus, Eye, EyeOff } from 'lucide-react'
import { Header } from '@/components/kazuio/header'
import { Footer } from '@/components/kazuio/footer'
import { supabase } from '@/lib/supabaseClient'

type Aba = 'entrar' | 'cadastrar'

function LoginPageContent() {
  const searchParams = useSearchParams()
  const planoId = searchParams.get('plano')
  const [aba, setAba] = useState<Aba>('entrar')

  // --- Aba "Entrar" (já tem conta) ---
  // Login real, direto aqui na página (não é mais só um botão que manda
  // pro app) — assim a pessoa não vê a tela de chat nem as opções de
  // cadastro se repetindo atrás de um modal. Como /chat é servido sob o
  // mesmo domínio kazuio.com (via proxy pra app.kazuio.com), a sessão
  // criada aqui pelo Supabase já é reconhecida automaticamente lá também.
  const [emailEntrar, setEmailEntrar] = useState('')
  const [senhaEntrar, setSenhaEntrar] = useState('')
  const [mostrarSenhaEntrar, setMostrarSenhaEntrar] = useState(false)
  const [erroEntrar, setErroEntrar] = useState('')
  const [carregandoEntrar, setCarregandoEntrar] = useState(false)

  async function handleEntrar(e: FormEvent) {
    e.preventDefault()
    setErroEntrar('')

    if (!emailEntrar || !senhaEntrar) {
      setErroEntrar('Preencha e-mail e senha para continuar.')
      return
    }

    setCarregandoEntrar(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: emailEntrar,
      password: senhaEntrar,
    })
    setCarregandoEntrar(false)

    if (error) {
      setErroEntrar(
        error.message.toLowerCase().includes('invalid login credentials')
          ? 'E-mail ou senha incorretos.'
          : 'Não foi possível entrar agora. Tente novamente em instantes.'
      )
      return
    }

    if (planoId) {
      const { data: { session } } = await supabase.auth.getSession()
      try {
        const res = await fetch('https://uzzmxteysziypvweppkb.supabase.co/functions/v1/assinatura', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session?.access_token}` },
          body: JSON.stringify({ action: 'iniciar', planId: planoId }),
        })
        const data = await res.json()
        if (data.checkoutUrl) {
          window.location.href = data.checkoutUrl
          return
        }
      } catch {
        // Se falhar, segue pro chat normalmente -- a pessoa pode tentar
        // assinar de novo pela tela de Faturação.
      }
    }

    window.location.href = '/chat'
  }

  async function handleEntrarComGoogle() {
    setErroEntrar('')
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/chat` },
    })
    if (error) setErroEntrar('Não foi possível entrar com o Google agora. Tente novamente.')
  }

  async function handleEsqueciSenha() {
    setErroEntrar('')
    if (!emailEntrar) {
      setErroEntrar('Digite seu e-mail acima primeiro, depois clique em "Esqueceu sua senha?".')
      return
    }
    const { error } = await supabase.auth.resetPasswordForEmail(emailEntrar)
    if (error) {
      setErroEntrar('Não foi possível enviar o e-mail de recuperação agora. Tente novamente.')
    } else {
      setErroEntrar('')
      window.alert('Enviamos um link de recuperação de senha para o seu e-mail.')
    }
  }

  // --- Aba "Cadastrar" (ainda não tem conta) ---
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [aceitaTermos, setAceitaTermos] = useState(false)
  const [confirmaIdade, setConfirmaIdade] = useState(false)
  const [erro, setErro] = useState('')
  const [carregandoCadastro, setCarregandoCadastro] = useState(false)
  const [cadastroConcluido, setCadastroConcluido] = useState(false)

  const SENHA_FORTE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/

  async function handleCadastrar(e: FormEvent) {
    e.preventDefault()
    setErro('')

    if (!email || !senha) {
      setErro('Preencha e-mail e senha para continuar.')
      return
    }
    if (!SENHA_FORTE.test(senha)) {
      setErro('A senha precisa ter letra maiúscula, minúscula, número e um símbolo (ex: !@#$%), com pelo menos 6 caracteres.')
      return
    }
    if (!aceitaTermos) {
      setErro('Você precisa aceitar os Termos e a Política de Privacidade para continuar.')
      return
    }
    if (!confirmaIdade) {
      setErro('É preciso confirmar que você tem 18 anos ou mais.')
      return
    }

    setCarregandoCadastro(true)
    const { error: signUpError } = await supabase.auth.signUp({ email, password: senha })
    setCarregandoCadastro(false)

    if (signUpError) {
      setErro(
        signUpError.message.toLowerCase().includes('already registered')
          ? 'Já existe uma conta com esse e-mail.'
          : /^password should contain/i.test(signUpError.message)
          ? 'A senha precisa ter letra maiúscula, minúscula, número e um símbolo (ex: !@#$%).'
          : 'Não foi possível criar a conta agora. Tente novamente.'
      )
      return
    }

    setCadastroConcluido(true)
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />

      <main className="mx-auto flex min-h-[70vh] max-w-[480px] flex-col items-center px-5 py-16 md:px-8">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-deep/[0.06]">
          <Image src="/brand/kazuio-mark.png" alt="" width={290} height={442} className="h-9 w-auto object-contain" />
        </span>

        <p className="eyebrow mt-6 justify-center">Kazuio</p>
        <h1 className="mt-3 text-center font-serif text-3xl leading-[1.12] text-navy md:text-[2.2rem]">
          Entrar no Kazuio
        </h1>

        <div className="mt-8 flex w-full rounded-full border border-line bg-paper p-1">
          <button
            type="button"
            onClick={() => setAba('entrar')}
            className={`flex-1 rounded-full py-2.5 text-xs font-semibold transition-colors ${
              aba === 'entrar' ? 'bg-deep text-cream' : 'text-navy/70 hover:text-navy'
            }`}
          >
            Já tenho conta
          </button>
          <button
            type="button"
            onClick={() => setAba('cadastrar')}
            className={`flex-1 rounded-full py-2.5 text-xs font-semibold transition-colors ${
              aba === 'cadastrar' ? 'bg-deep text-cream' : 'text-navy/70 hover:text-navy'
            }`}
          >
            Ainda não tenho conta
          </button>
        </div>

        {aba === 'entrar' ? (
          <form onSubmit={handleEntrar} className="mt-8 w-full space-y-4">
            <div>
              <label htmlFor="email-entrar" className="mb-1.5 block text-xs font-medium text-navy">E-mail</label>
              <input
                id="email-entrar"
                type="email"
                value={emailEntrar}
                onChange={(e) => setEmailEntrar(e.target.value)}
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="senha-entrar" className="mb-1.5 block text-xs font-medium text-navy">Senha</label>
              <div className="relative">
                <input
                  id="senha-entrar"
                  type={mostrarSenhaEntrar ? 'text' : 'password'}
                  value={senhaEntrar}
                  onChange={(e) => setSenhaEntrar(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 pr-11 text-sm text-ink outline-none focus:border-gold"
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenhaEntrar((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/50 hover:text-navy"
                  aria-label={mostrarSenhaEntrar ? 'Esconder senha' : 'Mostrar senha'}
                >
                  {mostrarSenhaEntrar ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {erroEntrar && <p className="text-xs font-medium text-red-600">{erroEntrar}</p>}

            <button
              type="submit"
              disabled={carregandoEntrar}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
            >
              {carregandoEntrar ? 'Entrando…' : 'Entrar'}
              {!carregandoEntrar && <ArrowRight className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={handleEntrarComGoogle}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.01]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z" />
                <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.96v2.33A9 9 0 0 0 9 18z" />
                <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.03l2.99-2.33z" />
                <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.97L3.95 7.3C4.66 5.17 6.65 3.58 9 3.58z" />
              </svg>
              Continuar com Google
            </button>

            <button
              type="button"
              onClick={handleEsqueciSenha}
              className="block w-full text-center text-xs font-medium text-navy/70 underline underline-offset-2 hover:text-navy"
            >
              Esqueceu sua senha?
            </button>
          </form>
        ) : cadastroConcluido ? (
          <div className="mt-8 w-full space-y-4 text-center">
            <p className="text-sm leading-6 text-ink/80">
              Quase lá! Mandamos um link de confirmação para <strong className="text-navy">{email}</strong>.
              Abra seu e-mail e clique no link — depois volte aqui e entre normalmente para continuar.
            </p>
            <button
              type="button"
              onClick={() => { setCadastroConcluido(false); setAba('entrar') }}
              className="text-xs font-medium text-navy underline underline-offset-2"
            >
              Já confirmei — ir para o login
            </button>
          </div>
        ) : (
          <form onSubmit={handleCadastrar} className="mt-8 w-full space-y-4">
            <div>
              <label htmlFor="email-cadastro" className="mb-1.5 block text-xs font-medium text-navy">E-mail</label>
              <input
                id="email-cadastro"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="senha-cadastro" className="mb-1.5 block text-xs font-medium text-navy">Crie uma senha</label>
              <input
                id="senha-cadastro"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
              <p className="mt-1.5 text-[11px] leading-4 text-kmuted">
                Precisa ter letra maiúscula, minúscula, número e símbolo (ex: !@#$%). Mínimo 6 caracteres.
              </p>
            </div>

            <label className="flex items-start gap-2.5 text-xs leading-5 text-kmuted">
              <input
                type="checkbox"
                checked={aceitaTermos}
                onChange={(e) => setAceitaTermos(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
              />
              <span>
                Li e aceito os{' '}
                <a href="/termos-e-condicoes" target="_blank" className="font-medium text-navy underline underline-offset-2">
                  Termos e Condições
                </a>{' '}
                e a{' '}
                <a href="/politica-de-privacidade" target="_blank" className="font-medium text-navy underline underline-offset-2">
                  Política de Privacidade
                </a>{' '}
                do Kazuio.
              </span>
            </label>

            <label className="flex items-start gap-2.5 text-xs leading-5 text-kmuted">
              <input
                type="checkbox"
                checked={confirmaIdade}
                onChange={(e) => setConfirmaIdade(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
              />
              <span>Confirmo que tenho 18 anos de idade ou mais.</span>
            </label>

            {erro && <p className="text-xs font-medium text-red-600">{erro}</p>}

            <button
              type="submit"
              disabled={carregandoCadastro}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-deep transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
            >
              <UserPlus className="h-4 w-4" />
              {carregandoCadastro ? 'Criando conta…' : 'Criar conta grátis'}
            </button>
            <p className="text-center text-[11px] text-kmuted">
              Depois de confirmar seu e-mail, você escolhe um plano para ativar sua conta.
            </p>
          </form>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LoginPageContent />
    </Suspense>
  )
}
