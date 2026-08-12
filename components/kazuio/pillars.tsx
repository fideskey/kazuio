import { FaithIcon, PhilosophyIcon, PsychologyIcon } from './icons'

const PILLARS = [
  {
    icon: PsychologyIcon,
    tag: 'Psicologia',
    title: 'Entender o que acontece por dentro.',
    body: 'A Psicologia ajuda a olhar para emoções, comportamentos e padrões que às vezes se repetem sem que a gente perceba.',
    points: ['Nomear o que você sente', 'Reconhecer padrões e gatilhos', 'Olhar para comportamentos com mais clareza'],
  },
  {
    icon: FaithIcon,
    tag: 'Fé',
    title: 'Encontrar sentido quando faltam respostas.',
    body: 'A fé pode ser um lugar de esperança, propósito e direção. Kazuio respeita sua tradição — ou a ausência dela — sem tentar convencer você de nada.',
    points: ['Refletir sobre propósito e esperança', 'Conectar a conversa à sua tradição', 'Encontrar palavras para momentos difíceis'],
  },
  {
    icon: PhilosophyIcon,
    tag: 'Filosofia',
    title: 'Questionar aquilo que parecia óbvio.',
    body: 'A Filosofia abre espaço para examinar ideias, escolhas e crenças. Às vezes, mudar a pergunta muda também a forma de enxergar o problema.',
    points: ['Questionar premissas e certezas', 'Ampliar perspectivas', 'Pensar sobre escolhas, liberdade e sentido'],
  },
]

export function Pillars() {
  return (
    <section id="pilares" className="bg-deep text-cream">
      <div className="mx-auto max-w-[1220px] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="eyebrow justify-center text-gold2">Três pilares</p>
          <h2 className="mt-4 font-serif text-3xl leading-[1.06] text-cream md:text-[3.2rem]">
            Psicologia, Fé e Filosofia — em equilíbrio.
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-7 text-cream/68 md:text-base">
            A vida humana não cabe em uma única explicação. Kazuio combina três formas de olhar para aquilo que você está vivendo,
            sem transformar nenhuma delas em uma resposta pronta.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PILLARS.map(({ icon: Icon, tag, title, body, points }) => (
            <article
              key={tag}
              className="group relative overflow-hidden rounded-[28px] border border-cream/12 bg-white/[0.055] px-7 py-8 transition-transform duration-300 hover:-translate-y-1 md:px-8 md:py-9"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-gold2/10" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-gold2/10" />

              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold2/30 bg-gold2/10 text-gold2">
                <Icon className="h-8 w-8" />
              </span>

              <p className="relative mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold2">{tag}</p>
              <h3 className="relative mt-3 font-serif text-[1.65rem] leading-[1.1] text-cream">{title}</h3>
              <p className="relative mt-4 text-sm leading-6 text-cream/68">{body}</p>

              <div className="relative mt-7 border-t border-cream/12 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">Na prática</p>
                <ul className="mt-4 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-[13px] leading-5 text-cream/78">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 rounded-[24px] border border-gold2/25 bg-gold2/[0.08] px-6 py-6 md:px-8 md:py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[700px]">
              <p className="text-sm font-semibold text-cream">Três perspectivas. Uma conversa.</p>
              <p className="mt-2 text-sm leading-6 text-cream/65">
                Kazuio não decide qual lente é a certa para você. Ele usa a que fizer sentido para a conversa — e deixa você decidir o que fazer com aquilo que descobriu.
              </p>
            </div>
            <a href="/pilares" className="shrink-0 text-sm font-semibold text-gold2 underline decoration-gold2/40 underline-offset-4 hover:text-cream">
              Conheça os três pilares →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
