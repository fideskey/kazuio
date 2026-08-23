import Image from 'next/image'
import { SearchX, Stethoscope, Compass } from 'lucide-react'

const NOT = [
  { icon: Stethoscope, title: 'Não é terapia', body: 'Não substitui psicólogos, psiquiatras ou outros profissionais.' },
  { icon: Compass, title: 'Não dá conselhos', body: 'Não pretende dizer o que você deve fazer.' },
  { icon: SearchX, title: 'Não é um buscador', body: 'Não sai procurando respostas na internet para cada pergunta.' },
]

export function Identity() {
  return (
    <section id="sobre" className="mx-auto max-w-[1220px] px-5 py-10 md:px-8 md:py-16">
      <a
        href="/precos"
        id="começar"
        className="group relative block overflow-hidden rounded-[28px]"
        aria-label="Começar uma conversa com o Kazuio — ver planos"
      >
        <Image
          src="/images/cta-conversar.png"
          alt="Talvez você não precise de uma resposta agora. Talvez só precise começar a conversar. Entre no Kazuio e veja como é conversar com uma inteligência artificial que não tenta resolver sua vida por você. Sua conversa é privada, segura e nunca compartilhada."
          width={1496}
          height={1051}
          className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
        />
      </a>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {NOT.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex items-start gap-3 border-t border-line pt-5">
            <Icon className="h-6 w-6 shrink-0 text-navy/70" strokeWidth={1.15} />
            <div>
              <p className="text-xs font-semibold text-navy">{title}</p>
              <p className="mt-1.5 text-[11px] leading-5 text-kmuted">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
