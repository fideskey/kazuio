'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, KeyRound, UserPlus } from 'lucide-react'
import { Header } from '@/components/kazuio/header'
import { Footer } from '@/components/kazuio/footer'

type Aba = 'entrar' | 'cadastrar'

export default function Page() {
  const [aba, setAba] = useState<Aba>('entrar')

  // --- Aba "Entrar" (já tem conta) ---
  // O login de verdade já existe e funciona em app.kazuio.com — este
  // projeto (landing) não está conectado ao Supabase ainda, então aqui só
  // linkamos para lá em vez de duplicar um formulário que não teria efeito.
  function handleEntrar(e: FormEvent) {
    e.preventDefault()
    window.location.href = 'https://app.kazuio.com'
  }

  // --- Aba "Cadastrar" (ainda não tem conta) ---
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [aceitaTermos, setAceitaTermos] = useState(false)
  const [confirmaIdade, setConfirmaIdade] = useState(false)
  const [erro, setErro] = useState('')

  function handleCadastrar(e: FormEvent) {
    e.preventDefault()
    setErro('')

    if (!email || !senha) {
      setErro('Preencha e-mail e senha para continuar.')
      return
    }
    if (senha.length < 8) {
      setErro('A senha precisa ter pelo menos 8 caracteres.')
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

    // Guarda a intenção de cadastro no navegador da pessoa (não em um
    // servidor — este projeto ainda não está conectado ao Supabase).
    // Quando a assinatura for confirmada em /precos, esses dados podem ser
    // reaproveitados para finalizar a criação da conta de verdade.
    try {
      sessionStorage.setItem(
        'kazuio_cadastro_pendente',
        JSON.stringify({ email, aceitaTermos, confirmaIdade, criadoEm: new Date().toISOString() })
      )
    } catch {
      // Se o navegador bloquear sessionStorage (modo privado, etc.), segue
      // o fluxo mesmo assim — a pessoa só vai precisar digitar de novo na
      // hora de assinar.
    }

    window.location.href = '/precos'
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />

      <main className="mx-auto flex min-h-[70vh] max-w-[480px] flex-col items-center px-5 py-16 md:px-8">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-deep/[0.06] text-gold">
          <KeyRound className="h-7 w-7" />
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
            <p className="text-center text-sm leading-6 text-kmuted">
              Você será direcionado para o Kazuio para entrar com sua conta.
            </p>
            <div>
              <label htmlFor="email-entrar" className="mb-1.5 block text-xs font-medium text-navy">E-mail</label>
              <input
                id="email-entrar"
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="senha-entrar" className="mb-1.5 block text-xs font-medium text-navy">Senha</label>
              <input
                id="senha-entrar"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.01]"
            >
              Entrar
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
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
                placeholder="Mínimo 8 caracteres"
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold"
              />
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
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-deep transition-transform hover:scale-[1.01]"
            >
              <UserPlus className="h-4 w-4" />
              Continuar para os planos
            </button>
            <p className="text-center text-[11px] text-kmuted">
              Depois de criar seus dados, você escolhe um plano para ativar sua conta.
            </p>
          </form>
        )}
      </main>

      <Footer />
    </div>
  )
}
