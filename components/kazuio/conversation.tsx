import { Mic, Send } from 'lucide-react'
import { Logo } from './logo'
import { BookIcon, DialogueIcon, PresenceIcon, QuestionIcon } from './icons'

const PHONE_CHAT = [
  { who: 'Você', text: 'Estou muito ansioso com uma decisão que preciso tomar no trabalho. Tenho medo de escolher errado.' },
  { who: 'Kazuio', text: 'Quando você imagina as duas opções à sua frente, o que pesa mais em cada uma delas: o que te atrai ou o que te assusta?' },
  { who: 'Você', text: 'Acho que o que me assusta mais é sair da zona de conforto e me arrepender depois.' },
  { who: 'Kazuio', text: 'O que seria, para você, escolher bem — mesmo que a escolha não saia exatamente como imaginou?' },
]

const PHONE_QUOTE = {
  text: 'A ansiedade é a vertigem da liberdade.',
  source: 'Søren Kierkegaard — O Conceito de Angústia',
}

const FEATURES = [
  { icon: DialogueIcon, title: 'Converse livremente', body: 'Fale sobre o que está vivendo, sem julgamentos.' },
  { icon: QuestionIcon, title: 'Seja guiado por perguntas', body: 'Perguntas que ajudam você a pensar melhor.' },
  { icon: BookIcon, title: 'Reflexões que conectam', body: 'Fontes reais quando fizer sentido.' },
  { icon: PresenceIcon, title: 'Feito para você', body: 'Cada conversa é única.' },
]

function QuoteBubble({ text, source }: { text: string; source: string }) {
  return (
    <div className="flex items-start gap-2 rounded-[14px] border border-gold/35 bg-paper px-3 py-2.5">
      <BookIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
      <div>
        <p className="font-serif text-[10.5px] italic leading-[1.5] text-navy">&quot;{text}&quot;</p>
        <p className="mt-1 text-[8.5px] font-semibold uppercase tracking-[0.1em] text-kmuted">{source}</p>
      </div>
    </div>
  )
}

function ChatMessages({ messages }: { messages: { who: string; text: string }[] }) {
  return (
    <>
      {messages.map((m, i) => (
        <div key={i} className={`flex flex-col ${m.who === 'Você' ? 'items-end' : 'items-start'}`}>
          <span className="mb-1 px-1 text-[8.5px] font-semibold text-ink/55">{m.who}</span>
          <div className={`max-w-[92%] rounded-[14px] px-3 py-2 text-[10px] leading-[1.5] ${m.who === 'Kazuio' ? 'rounded-tl-md border border-line bg-cream' : 'rounded-tr-md bg-[#e9dfcf]'}`}>
            {m.text}
          </div>
        </div>
      ))}
    </>
  )
}

export function Conversation() {
  return (
    <section id="como-funciona" className="mx-auto max-w-[1220px] px-5 py-14 md:px-8 md:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_310px] lg:gap-16">
        {/* 1 — A explicação, ao lado do mockup do celular. */}
        <div>
          <p className="eyebrow">Como acontece</p>
          <h2 className="mt-3 max-w-[540px] font-serif text-3xl leading-[1.08] text-navy md:text-[2.35rem]">
            Veja como uma conversa pode mudar a forma de olhar para uma situação.
          </h2>
          <p className="mt-5 max-w-[480px] text-sm leading-6 text-kmuted">
            Kazuio não te dá respostas prontas. Ele te ajuda a{' '}
            <strong className="font-semibold text-navy">pensar com perguntas</strong> que abrem novas perspectivas.
          </p>

          <div className="mt-8 border-t border-line/80 pt-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:max-w-[440px]">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-5 w-5 text-gold" />
                  <h3 className="mt-2.5 text-[12px] font-semibold leading-4 text-navy">{title}</h3>
                  <p className="mt-1.5 text-[11px] leading-5 text-kmuted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2 — Uma única conversa no celular. */}
        <div className="mx-auto w-[280px] shrink-0">
          <div className="relative rounded-[2.6rem] bg-[#152331] p-2.5 shadow-[0_28px_70px_rgba(20,40,63,0.18)] ring-1 ring-black/10">
            <div className="absolute -inset-4 -z-10 rounded-[3.1rem] bg-gold/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.15rem] bg-paper">
              <div className="flex items-center justify-between border-b border-line/70 px-4 py-3">
                <span className="text-[10px] font-medium text-ink">9:41</span>
                <Logo markClassName="h-5.5" wordClassName="text-[0.65rem] tracking-[0.22em]" />
                <span />
              </div>

              <div className="h-[430px] space-y-2.5 overflow-hidden px-3.5 py-3.5">
                <ChatMessages messages={PHONE_CHAT} />
                <QuoteBubble text={PHONE_QUOTE.text} source={PHONE_QUOTE.source} />
              </div>

              <div className="flex items-center gap-2 px-3.5 pb-4 pt-1.5">
                <div className="flex flex-1 items-center gap-2 rounded-full border border-line bg-cream px-3.5 py-2.5">
                  <span className="flex-1 text-[9.5px] text-kmuted">Escreva sua mensagem...</span>
                  <Mic className="h-3.5 w-3.5 text-kmuted" />
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deep text-cream">
                  <Send className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-[10px] uppercase tracking-[0.16em] text-kmuted">
            Uma conversa que continua onde você estiver.
          </p>
        </div>
      </div>
    </section>
  )
}
