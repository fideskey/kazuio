import type { Metadata } from 'next'
import { ArrowRight, Brain, Cross, Columns3, CheckCircle2 } from 'lucide-react'
import { FaithIcon, PhilosophyIcon, PsychologyIcon } from '@/components/kazuio/icons'
import { Header } from '@/components/kazuio/header'
import { Footer } from '@/components/kazuio/footer'

export const metadata: Metadata = {
  title: 'Pilares — Kazuio',
  description: 'Psicologia, Fé e Filosofia: os três pilares que orientam a experiência Kazuio.',
}

const PILARES = [
  {
    icon: PsychologyIcon,
    label: 'Psicologia',
    title: 'Olhar para dentro com mais clareza.',
    intro: 'A Psicologia oferece ferramentas para compreender emoções, comportamentos e padrões — nunca para reduzir uma pessoa a um diagnóstico.',
    questions: ['O que você está sentindo de verdade?', 'Existe um padrão que vem se repetindo?', 'O que essa situação está despertando em você?'],
    note: 'A lente psicológica ajuda a compreender. Não substitui avaliação ou acompanhamento profissional.',
  },
  {
    icon: FaithIcon,
    label: 'Fé',
    title: 'Encontrar sentido, esperança e direção.',
    intro: 'A espiritualidade pode oferecer uma linguagem para momentos em que lógica e planejamento não são suficientes. Kazuio respeita a tradição escolhida por você.',
    questions: ['O que sustenta você quando tudo parece incerto?', 'Que significado essa experiência tem para você?', 'Que valores ou crenças você gostaria de preservar?'],
    note: 'A fé só entra na conversa quando você quiser. Kazuio nunca tenta converter, convencer ou julgar.',
  },
  {
    icon: PhilosophyIcon,
    label: 'Filosofia',
    title: 'Questionar aquilo que parecia óbvio.',
    intro: 'A Filosofia convida a examinar ideias, escolhas e certezas. Muitas vezes, uma pergunta nova abre mais espaço do que uma resposta definitiva.',
    questions: ['E se a forma de olhar para isso estivesse limitando suas opções?', 'O que está sob seu controle?', 'Que escolha faria sentido de acordo com os seus próprios valores?'],
    note: 'A Filosofia amplia possibilidades. Não existe uma única doutrina que o Kazuio tente impor.',
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <section className="mx-auto max-w-[980px] px-5 pb-10 pt-16 md:px-8 md:pt-24">
          <p className="eyebrow">Três pilares</p>
          <h1 className="mt-4 max-w-[880px] font-serif text-[2.7rem] leading-[1.04] text-navy sm:text-[4rem]">
            Psicologia, Fé e Filosofia — três caminhos para olhar para a mesma vida.
          </h1>
          <p className="mt-7 max-w-[730px] text-[17px] leading-8 text-ink/75">
            O Kazuio não escolhe uma única lente para interpretar o que você vive. Ele combina perspectivas diferentes e deixa a conversa mostrar qual delas pode ser útil naquele momento.
          </p>
        </section>

        <section className="mx-auto max-w-[1220px] px-5 py-8 md:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            {PILARES.map(({ icon: Icon, label, title, intro, questions, note }) => (
              <article key={label} className="relative overflow-hidden rounded-[30px] border border-line bg-paper p-7 md:p-8">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-gold/10" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/25 bg-cream text-gold">
                  <Icon className="h-8 w-8" />
                </span>
                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">{label}</p>
                <h2 className="mt-3 font-serif text-[1.7rem] leading-[1.08] text-navy">{title}</h2>
                <p className="mt-4 text-sm leading-6 text-kmuted">{intro}</p>
                <div className="mt-7 border-t border-line pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-kmuted">Perguntas que essa lente pode abrir</p>
                  <ul className="mt-4 space-y-3">
                    {questions.map((q) => (
                      <li key={q} className="flex gap-3 text-sm leading-5 text-ink/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-7 rounded-2xl bg-cream px-4 py-4 text-xs leading-5 text-kmuted">{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1220px] px-5 py-10 md:px-8 md:py-16">
          <div className="rounded-[30px] bg-deep px-8 py-10 text-cream md:px-12 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="eyebrow text-gold2">O equilíbrio é a ideia</p>
                <h2 className="mt-4 font-serif text-3xl leading-[1.08] md:text-[2.8rem]">Nenhuma dessas perspectivas precisa vencer.</h2>
                <p className="mt-5 text-sm leading-7 text-cream/65">
                  Uma conversa pode começar pela emoção, passar por uma pergunta filosófica e terminar encontrando sentido naquilo que você acredita. O importante é que a perspectiva ajude você — e não o contrário.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Psicologia', icon: Brain },
                  { label: 'Fé', icon: Cross },
                  { label: 'Filosofia', icon: Columns3 },
                ].map(({ label, icon: Icon }) => (
                  <div key={label} className="rounded-2xl border border-cream/12 bg-white/[0.05] p-5">
                    <Icon className="h-6 w-6 text-gold2" />
                    <p className="mt-4 text-sm font-semibold text-cream">{label}</p>
                    <p className="mt-1 text-xs leading-5 text-cream/55">Uma lente. Não uma sentença.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-5 py-10 md:px-8 md:py-14">
          <div className="border-t border-line pt-10">
            <h2 className="font-serif text-2xl text-navy md:text-3xl">Uma distinção importante</h2>
            <p className="mt-4 text-sm leading-7 text-kmuted">
              Ter Psicologia, Fé e Filosofia como pilares não significa que o Kazuio seja psicólogo, líder religioso ou filósofo. Significa que essas tradições orientam a forma como a experiência é explorada. Quando uma situação exige diagnóstico, tratamento, aconselhamento religioso formal ou outra forma de cuidado especializado, o Kazuio reconhece esse limite.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1220px] px-5 pb-20 md:px-8 md:pb-28">
          <div className="rounded-[30px] border border-line bg-paper px-8 py-10 md:px-12 md:py-12">
            <p className="eyebrow">Próximo passo</p>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-[2.5rem]">Veja esses três pilares funcionando dentro de uma conversa.</h2>
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
