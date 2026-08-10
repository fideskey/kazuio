import { Ear, Moon, RefreshCw, Signpost, CloudFog, Users } from 'lucide-react'

const REASONS = [
  { icon: Ear, text: 'Não sei o que fazer.' },
  { icon: Moon, text: 'Só precisava falar com alguém.' },
  { icon: RefreshCw, text: 'Estou repetindo o mesmo padrão e não entendo por quê.' },
  { icon: Signpost, text: 'Preciso tomar uma decisão.' },
  { icon: CloudFog, text: 'Estou bem... mas alguma coisa não está.' },
  { icon: Users, text: 'Já conversei com todo mundo e continuo confuso.' },
]

export function Reasons() {
  return (
    <section className="mx-auto max-w-[1220px] px-5 py-12 md:px-8 md:py-20">
      <div className="flex items-end justify-between gap-8">
        <div>
          <p className="eyebrow">Talvez você tenha chegado aqui porque...</p>
          <h2 className="mt-3 max-w-[620px] font-serif text-3xl leading-[1.08] text-navy md:text-[2.7rem]">
            Nem sempre é fácil explicar o que está acontecendo. Tudo bem começar por onde der.
          </h2>
        </div>
        <p className="hidden max-w-[280px] text-right text-xs leading-5 text-kmuted md:block">Não precisa escolher a frase certa. Pode começar pela primeira coisa que vier à cabeça.</p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-4 border-y border-line/80 md:grid-cols-3 lg:grid-cols-6">
        {REASONS.map(({ icon: Icon, text }, index) => (
          <div key={text} className={`flex min-h-[180px] flex-col items-center justify-center px-4 py-8 text-center ${index > 0 ? 'border-t border-line/70 md:border-t-0 md:border-l' : ''}`}>
            <Icon className="h-7 w-7 text-navy/65" strokeWidth={1.15} />
            <p className="mt-5 text-[12px] italic leading-5 text-ink text-pretty">“{text}”</p>
          </div>
        ))}
      </div>
    </section>
  )
}
