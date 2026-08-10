import { BookIcon, DialogueIcon, PresenceIcon, QuestionIcon } from './icons'

const ITEMS = [
  { icon: DialogueIcon, title: 'Converse livremente', body: 'Fale sobre o que está vivendo, sem julgamentos.' },
  { icon: QuestionIcon, title: 'Seja guiado por perguntas', body: 'Kazuio faz perguntas que ajudam você a pensar melhor.' },
  { icon: BookIcon, title: 'Reflexões que conectam', body: 'Quando fizer sentido, traz referências reais e verificáveis.' },
  { icon: PresenceIcon, title: 'Feito para você', body: 'Cada conversa é única. Kazuio acompanha o seu caminho.' },
]

export function Features() {
  return (
    <section className="mx-auto max-w-[1220px] px-5 pb-14 md:px-8 md:pb-20">
      <div className="relative overflow-hidden border-y border-line/80 py-7 md:py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              className={`px-5 py-2 md:px-7 ${index > 0 ? 'border-t border-line/70 md:border-t-0 md:border-l' : ''}`}
            >
              <Icon className="h-7 w-7 text-gold" />
              <h3 className="mt-4 text-sm font-semibold text-navy">{title}</h3>
              <p className="mt-2 max-w-[230px] text-[12px] leading-5 text-kmuted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
