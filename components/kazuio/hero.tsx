import Image from 'next/image'
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react'
import { JourneyIcon } from './icons'

const APP_URL = 'https://app.kazuio.com/'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="relative min-h-[620px] lg:min-h-[670px]">
          {/* A paisagem não é um card: ela entra e desaparece no fundo da própria página. */}
          <div className="pointer-events-none absolute inset-y-0 right-[-9%] w-[76%] lg:w-[67%]">
            <div className="absolute inset-0 opacity-95 [mask-image:linear-gradient(90deg,transparent_0%,black_18%,black_78%,transparent_100%)]">
              <Image
                src="/images/hero-path.png"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream" />
          </div>

          <div className="relative z-10 flex min-h-[620px] items-center py-16 lg:min-h-[670px] lg:py-20">
            <div className="max-w-[590px]">
              <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-kmuted">
                <span className="h-px w-9 bg-gold/70" />
                Um espaço para reflexão
              </div>

              <h1 className="font-serif text-[3rem] leading-[0.98] text-navy text-balance sm:text-[4rem] lg:text-[4.55rem]">
                Você não precisa de uma resposta.
                <span className="mt-2 block text-gold">Às vezes, precisa de uma pergunta melhor.</span>
              </h1>

              <p className="mt-7 max-w-[520px] text-[17px] leading-8 text-ink/78 md:text-[18px]">
                Kazuio é um espaço de reflexão com inteligência artificial que conversa com você para compreender o que está vivendo e{' '}
                <strong className="font-semibold text-navy">enxergar novas perspectivas.</strong>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3.5 text-sm font-medium text-cream shadow-[0_12px_30px_rgba(32,57,47,0.12)] transition-transform hover:-translate-y-0.5"
                >
                  Começar a conversar
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-medium text-navy transition-colors hover:text-gold"
                >
                  Saiba mais
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex max-w-[430px] items-start gap-3 border-t border-line/80 pt-5 text-[12px] leading-5 text-kmuted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                <span>Suas conversas são privadas, seguras e nunca compartilhadas.</span>
              </div>

              <div className="mt-10 hidden items-center gap-3 text-[11px] text-kmuted md:flex">
                <JourneyIcon className="h-6 w-6 text-gold" />
                <span>Uma conversa de cada vez. Uma perspectiva de cada vez.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
