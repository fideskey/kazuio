import { FaithIcon, PhilosophyIcon, PsychologyIcon } from './icons'

const PILLARS = [
  { icon: PsychologyIcon, tag: 'Psicologia', body: 'Compreender emoções, comportamentos e padrões.' },
  { icon: FaithIcon, tag: 'Fé', body: 'Encontrar sentido, esperança e direção na espiritualidade.' },
  { icon: PhilosophyIcon, tag: 'Filosofia', body: 'Questionar ideias e ampliar sua visão de mundo.' },
]

export function Pillars() {
  return (
    <section id="pilares" className="bg-deep text-cream">
      <div className="mx-auto max-w-[1220px] px-5 py-12 md:px-8 md:py-16">
        <div className="text-center">
          <p className="eyebrow justify-center text-gold2">Três pilares</p>
          <h2 className="mx-auto mt-3 max-w-[640px] font-serif text-3xl leading-[1.08] text-cream md:text-[2.7rem]">
            Psicologia, Fé e Filosofia — em equilíbrio.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-sm leading-6 text-cream/70">
            Kazuio reúne diferentes formas de olhar para a experiência humana sem transformar nenhuma delas em uma resposta pronta.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, tag, body }) => (
            <div key={tag} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/[0.07] text-gold2">
                <Icon className="h-9 w-9" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cream">{tag}</p>
              <p className="mt-2 max-w-[260px] text-sm leading-6 text-cream/70">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-cream/15 bg-white/[0.05] px-6 py-6 md:px-8">
          <span className="mt-0.5 shrink-0 text-gold2">
            <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
              <path d="M16 26c0-8 5-13 12-13-1 8-6 13-12 13Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M16 26c0-8-5-13-12-13 1 8 6 13 12 13Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity=".55" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-cream">Três perspectivas. Uma conversa.</p>
            <p className="mt-1.5 text-sm leading-6 text-cream/70">
              Kazuio não toma partido por você. Ele te ajuda a pensar melhor para que você possa escolher com mais consciência.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
