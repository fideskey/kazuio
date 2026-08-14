import type { Metadata } from 'next'
import { ArrowRight, ShieldCheck, SearchX, BookOpen, Sparkles } from 'lucide-react'
import { FaithIcon, PhilosophyIcon, PsychologyIcon } from '@/components/kazuio/icons'
import { Header } from '@/components/kazuio/header'
import { Footer } from '@/components/kazuio/footer'

export const metadata: Metadata = {
  title: 'Biblioteca — Kazuio',
  description: 'A biblioteca própria e verificada do Kazuio: centenas de citações reais de Psicologia, Filosofia e Fé, cada uma com fonte exata.',
}

const PILARES = [
  {
    icon: PsychologyIcon,
    label: 'Psicologia',
    autores: 'Carl Rogers, Erich Fromm, Viktor Frankl, Irvin Yalom, Aaron Beck, Albert Ellis, entre outros.',
    cobre: 'Ansiedade, autoestima, luto, relacionamentos, padrões de comportamento e sentido de vida.',
  },
  {
    icon: PhilosophyIcon,
    label: 'Filosofia',
    autores: 'Marco Aurélio (Meditações), Sócrates (Apologia), Albert Camus, entre outros.',
    cobre: 'Para quem busca compreender a própria vida através da razão — não só da fé.',
  },
  {
    icon: FaithIcon,
    label: 'Fé',
    autores: 'Catolicismo (Catecismo, Santo Agostinho, Santa Teresa d\u2019Ávila), Evangelismo (Spurgeon, Tim Keller, John Piper) e Espiritismo (Allan Kardec, Chico Xavier).',
    cobre: 'Três tradições tratadas com o mesmo peso e respeito. A pessoa escolhe se quer esse lado da reflexão.',
  },
]

const CITACOES_REAIS = [
  {
    texto: 'A solidão existencial não se cura com companhia, mas com a capacidade de estar em relação autêntica consigo mesmo e com os outros.',
    autor: 'Irvin Yalom',
    pilar: 'Psicologia',
  },
  {
    texto: 'A qualquer momento que quiseres, está em teu poder recolher-te a ti mesmo, e estar em paz, livre de toda perturbação.',
    autor: 'Marco Aurélio',
    pilar: 'Filosofia · Meditações',
  },
  {
    texto: 'Quem perdoa, vence.',
    autor: 'Chico Xavier (pelo Espírito Emmanuel)',
    pilar: 'Fé · Espiritismo',
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-[980px] px-5 pb-10 pt-16 md:px-8 md:pt-24">
          <p className="eyebrow">Biblioteca Kazuio</p>
          <h1 className="mt-4 max-w-[880px] font-serif text-[2.7rem] leading-[1.04] text-navy sm:text-[4rem]">
            Não inventamos conhecimento para preencher uma resposta.
          </h1>
          <p className="mt-7 max-w-[730px] text-[17px] leading-8 text-ink/75">
            Quando o Kazuio traz uma reflexão de um autor, um filósofo ou uma tradição de fé, essa citação nunca vem da memória da IA nem de uma busca aberta na internet. Ela vem de uma biblioteca própria — centenas de citações verificadas uma a uma, cada uma com fonte exata.
          </p>
        </section>

        {/* Como funciona a garantia */}
        <section className="mx-auto max-w-[1220px] px-5 py-8 md:px-8 md:py-10">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: BookOpen, title: 'Biblioteca própria', body: 'Centenas de citações, cada uma com autor, obra e referência verificados antes de entrar na base.' },
              { icon: ShieldCheck, title: 'Nunca inventada', body: 'O Kazuio nunca escreve uma citação com as próprias palavras — só usa o texto real, exatamente como foi dito.' },
              { icon: SearchX, title: 'Sem busca durante a conversa', body: 'Nenhuma citação vem de uma pesquisa aberta na internet no meio da conversa.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-[24px] border border-line bg-paper p-6">
                <Icon className="h-7 w-7 text-gold" />
                <p className="mt-4 text-sm font-semibold text-navy">{title}</p>
                <p className="mt-2 text-sm leading-6 text-kmuted">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Os 3 pilares detalhados */}
        <section className="mx-auto max-w-[1220px] px-5 py-8 md:px-8 md:py-14">
          <p className="eyebrow">Três fontes de reflexão</p>
          <h2 className="mt-3 max-w-[700px] font-serif text-3xl leading-[1.08] text-navy md:text-[2.5rem]">
            Cada pilar tem sua própria coleção de vozes reais.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PILARES.map(({ icon: Icon, label, autores, cobre }) => (
              <article key={label} className="relative overflow-hidden rounded-[30px] border border-line bg-paper p-7 md:p-8">
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/25 bg-cream text-gold">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-serif text-[1.5rem] leading-[1.1] text-navy">{label}</h3>
                <p className="mt-4 text-sm leading-6 text-kmuted">{autores}</p>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-kmuted">O que cobre</p>
                  <p className="mt-3 text-sm leading-6 text-ink/75">{cobre}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Temas */}
        <section className="mx-auto max-w-[1220px] px-5 py-8 md:px-8 md:py-14">
          <div className="rounded-[30px] bg-deep px-8 py-10 text-cream md:px-12 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="eyebrow text-gold2">Organizada por tema de vida</p>
                <h2 className="mt-4 font-serif text-3xl leading-[1.08] md:text-[2.5rem]">
                  Dezenas de temas — não uma lista genérica.
                </h2>
                <p className="mt-5 text-sm leading-7 text-cream/70">
                  Cada citação é classificada pelo tema de vida que ela realmente aborda. Isso permite ao Kazuio encontrar, entre centenas de opções, a reflexão que conversa de verdade com o que você está vivendo — não uma frase genérica encaixada à força.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['Esperança', 'Sofrimento', 'Confiança', 'Ansiedade', 'Transformação', 'Perdão', 'Identidade', 'Propósito', 'Medo', 'Missão', 'Responsabilidade', 'Luto', 'Sentido', 'Liberdade', 'Alegria'].map((tema) => (
                  <span key={tema} className="rounded-full border border-cream/15 bg-white/[0.05] px-4 py-2 text-xs text-cream/75">
                    {tema}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Amostra de citações reais */}
        <section className="mx-auto max-w-[1220px] px-5 py-8 md:px-8 md:py-14">
          <p className="eyebrow">Direto da biblioteca</p>
          <h2 className="mt-3 max-w-[700px] font-serif text-3xl leading-[1.08] text-navy md:text-[2.5rem]">
            Três exemplos reais, verificados.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CITACOES_REAIS.map(({ texto, autor, pilar }) => (
              <div key={autor} className="rounded-[24px] border border-line bg-paper p-7">
                <Sparkles className="h-6 w-6 text-gold" strokeWidth={1.3} />
                <blockquote className="mt-5 font-serif text-lg italic leading-snug text-navy">
                  “{texto}”
                </blockquote>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">{autor}</p>
                <p className="mt-1 text-xs text-kmuted">{pilar}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nota de limite */}
        <section className="mx-auto max-w-[900px] px-5 py-10 md:px-8 md:py-14">
          <div className="border-t border-line pt-10">
            <h2 className="font-serif text-2xl text-navy md:text-3xl">Uma biblioteca em crescimento constante</h2>
            <p className="mt-4 text-sm leading-7 text-kmuted">
              A biblioteca do Kazuio cresce continuamente, com curadoria cuidadosa — cada citação nova passa por verificação antes de entrar na base. Quando uma reflexão pede uma referência que ainda não temos verificada, o Kazuio prefere não citar nada a citar algo genérico ou inventado.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-[1220px] px-5 pb-20 md:px-8 md:pb-28">
          <div className="rounded-[30px] border border-line bg-paper px-8 py-10 md:px-12 md:py-12">
            <p className="eyebrow">Próximo passo</p>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-[2.5rem]">Veja essa biblioteca funcionando dentro de uma conversa real.</h2>
            <a href="/como-funciona" className="mt-7 inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3.5 text-sm font-semibold text-cream hover:scale-[1.02]">
              Como funciona <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
