import { MessageCircle, HeartPulse, ShieldAlert } from 'lucide-react'

const NIVEIS = [
  {
    icon: MessageCircle,
    tag: 'Nível 1',
    title: 'Acompanhamento diário',
    body: 'Reflexão e escuta para o cotidiano, com Psicologia, Filosofia e Fé trabalhando juntas.',
  },
  {
    icon: HeartPulse,
    tag: 'Nível 2',
    title: 'Atenção reforçada',
    body: 'Em temas mais sensíveis, Kazuio prioriza a escuta cuidadosa e incentiva buscar apoio profissional.',
  },
  {
    icon: ShieldAlert,
    tag: 'Nível 3',
    title: 'Resposta a momentos de crise',
    body: 'Diante de sinais de risco real, a segurança da pessoa vem sempre primeiro.',
  },
]

export function CareLevels() {
  return (
    <section className="bg-deep text-cream">
      <div className="mx-auto max-w-[1220px] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="eyebrow justify-center text-gold2">Cuidado em camadas</p>
          <h2 className="mt-4 font-serif text-3xl leading-[1.06] text-cream md:text-[3.2rem]">
            Kazuio se adapta ao que você está vivendo.
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-7 text-cream/68 md:text-base">
            Nem toda conversa pede o mesmo tipo de cuidado. Por isso Kazuio reconhece três níveis — do dia a dia
            até momentos que pedem mais atenção.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {NIVEIS.map(({ icon: Icon, tag, title, body }) => (
            <article
              key={tag}
              className="group relative overflow-hidden rounded-[28px] border border-cream/12 bg-white/[0.055] px-7 py-8 transition-transform duration-300 hover:-translate-y-1 md:px-8 md:py-9"
            >
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold2/30 bg-gold2/10 text-gold2">
                <Icon className="h-8 w-8" />
              </span>

              <p className="relative mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold2">{tag}</p>
              <h3 className="relative mt-3 font-serif text-[1.4rem] leading-[1.15] text-cream">{title}</h3>
              <p className="relative mt-4 text-sm leading-6 text-cream/68">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 rounded-[24px] border border-gold2/25 bg-gold2/[0.08] px-6 py-6 md:px-8 md:py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[700px]">
              <p className="text-sm font-semibold text-cream">Um cuidado que se ajusta ao momento.</p>
              <p className="mt-2 text-sm leading-6 text-cream/65">
                Kazuio não substitui acompanhamento profissional de saúde mental — é uma ponte para o bem-estar,
                todos os dias.
              </p>
            </div>
            <a
              href="/como-funciona"
              className="shrink-0 text-sm font-semibold text-gold2 underline decoration-gold2/40 underline-offset-4 hover:text-cream"
            >
              Entenda como isso funciona →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
