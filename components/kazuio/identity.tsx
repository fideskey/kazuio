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
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
          />
        </a>
      </div>
    </section>
  )
}
