import type { Metadata } from 'next'
import { ArrowRight, KeyRound } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Entrar — Kazuio',
  description: 'Acesse sua conta do Kazuio.',
}

export default function Page() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[560px] flex-col items-center justify-center px-5 py-16 text-center md:px-8">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-deep/[0.06] text-gold">
        <KeyRound className="h-7 w-7" />
      </span>

      <p className="eyebrow mt-6 justify-center">Entrar no Kazuio</p>
      <h1 className="mt-3 font-serif text-3xl leading-[1.12] text-navy md:text-[2.4rem]">
        O acesso ao Kazuio é feito por quem já tem um plano ativo.
      </h1>
      <p className="mt-5 max-w-[440px] text-sm leading-7 text-kmuted">
        Para começar a conversar, primeiro escolha um dos planos disponíveis. Assim que sua assinatura estiver ativa,
        você recebe as instruções de acesso à sua conta.
      </p>

      <a
        href="/precos"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-deep transition-transform hover:scale-[1.02]"
      >
        Ver planos e preços
        <ArrowRight className="h-4 w-4" />
      </a>

      <p className="mt-6 text-xs text-kmuted">Já assina o Kazuio e está com dúvidas para acessar? Fale com a gente.</p>
    </main>
  )
}
