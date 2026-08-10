import { ArrowRight, SearchX, Stethoscope, Compass } from 'lucide-react'

const APP_URL = 'https://app.kazuio.com/'

const NOT = [
  { icon: Stethoscope, title: 'Não é terapia', body: 'Não substitui psicólogos, psiquiatras ou outros profissionais.' },
  { icon: Compass, title: 'Não dá conselhos', body: 'Não pretende dizer o que você deve fazer.' },
  { icon: SearchX, title: 'Não é um buscador', body: 'Não sai procurando respostas na internet para cada pergunta.' },
]

export function Identity() {
  return (
    <section id="sobre" className="mx-auto max-w-[1220px] px-5 py-10 md:px-8 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="eyebrow">O que é Kazuio</p>
          <h2 className="mt-3 max-w-[520px] font-serif text-3xl leading-[1.08] text-navy md:text-[2.8rem]">
            Um espaço para colocar o que você vive em palavras e enxergar com mais clareza.
          </h2>
          <p className="mt-5 max-w-[540px] text-sm leading-6 text-kmuted">
            Kazuio conversa com você, faz perguntas que ajudam a aprofundar o que está vivendo e, quando fizer sentido, conecta a reflexão a conhecimentos reais de Psicologia, Fé e Filosofia.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {NOT.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-t border-line pt-5">
                <Icon className="h-6 w-6 text-navy/70" strokeWidth={1.15} />
                <p className="mt-3 text-xs font-semibold text-navy">{title}</p>
                <p className="mt-2 text-[11px] leading-5 text-kmuted">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="começar" className="relative overflow-hidden rounded-[28px] bg-deep px-8 py-10 text-cream md:px-11 md:py-12">
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-70" aria-hidden="true">
            <svg viewBox="0 0 300 500" fill="none" className="h-full w-full">
              <circle cx="235" cy="72" r="17" fill="var(--gold)" opacity=".9" />
              <path d="M235 90C200 145 120 140 170 220C215 290 255 315 205 385C165 440 205 460 225 490" stroke="var(--gold)" strokeWidth="5" strokeLinecap="round" opacity=".85" />
            </svg>
          </div>
          <div className="relative z-10 max-w-[560px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold2">Talvez seja hora de conversar</p>
            <h2 className="mt-4 max-w-[510px] font-serif text-3xl leading-[1.08] md:text-[2.65rem]">
              Talvez você não precise de uma resposta agora. Talvez só precise{' '}
              <span className="text-gold2">começar a conversar.</span>
            </h2>
            <p className="mt-5 max-w-[470px] text-sm leading-6 text-cream/70">Entre no Kazuio e veja como é conversar com uma inteligência artificial que não tenta resolver sua vida por você.</p>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-deep transition-transform hover:-translate-y-0.5">
              Começar uma conversa com o Kazuio
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-[11px] text-cream/50">A conversa começa no app.kazuio.com.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
