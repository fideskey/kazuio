import { Mic, Send, Plus, MessageSquare } from 'lucide-react'
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

const LAPTOP_CHAT = [
  { who: 'Você', text: 'Briguei com minha mãe e agora estou me sentindo culpado.' },
  { who: 'Kazuio', text: 'Quando você pensa nessa culpa, ela vem mais do que você disse durante a discussão ou do que gostaria de ter conseguido dizer?' },
  { who: 'Você', text: 'Acho que do que eu disse...' },
  { who: 'Kazuio', text: 'E se você pudesse voltar àquela conversa, o que gostaria que sua mãe tivesse entendido sobre você?' },
]

const LAPTOP_QUOTE = {
  text: 'Além das ideias de certo e de errado, há um campo. Encontro-te lá.',
  source: 'Rumi',
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
        <p className="font-serif text-[10.5px] italic leading-[1.5] text-navy">"{text}"</p>
        <p className="mt-1 text-[8.5px] font-semibold uppercase tracking-[0.1em] text-kmuted">{source}</p>
      </div>
    </div>
  )
}

export function Conversation() {
  return (
    <section id="como-funciona" className="mx-auto max-w-[1220px] px-5 py-12 md:px-8 md:py-20">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow">Como acontece</p>
          <h2 className="mt-3 max-w-[420px] font-serif text-3xl leading-[1.08] text-navy md:text-[2.5rem]">
            Veja como uma conversa pode mudar a forma de olhar para uma situação.
          </h2>
          <p className="mt-5 max-w-[420px] text-sm leading-6 text-kmuted">
            Kazuio não te dá respostas prontas. Ele te ajuda a{' '}
            <strong className="font-semibold text-navy">pensar com perguntas</strong> que abrem novas perspectivas.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line/80 pt-8 sm:grid-cols-4 lg:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="mt-3 text-sm font-semibold text-navy">{title}</h3>
                <p className="mt-1.5 max-w-[190px] text-[12px] leading-5 text-kmuted">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-center">
          <div className="relative w-[250px] shrink-0 rounded-[2.4rem] bg-[#152331] p-2 shadow-[0_28px_70px_rgba(20,40,63,0.18)] ring-1 ring-black/10">
            <div className="absolute -inset-3 -z-10 rounded-[2.9rem] bg-gold/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-paper">
              <div className="flex items-center justify-between border-b border-line/70 px-4 py-2.5">
                <span className="text-[9px] font-medium text-ink">9:41</span>
                <Logo markClassName="h-5" wordClassName="text-[0.6rem] tracking-[0.22em]" />
                <span />
              </div>

              <div className="h-[380px] space-y-2.5 overflow-hidden px-3 py-3">
                {PHONE_CHAT.map((m, i) => (
                  <div key={i} className={`flex flex-col ${m.who === 'Você' ? 'items-end' : 'items-start'}`}>
                    <span className="mb-0.5 px-1 text-[8.5px] font-semibold text-ink/55">{m.who}</span>
                    <div className={`max-w-[92%] rounded-[14px] px-3 py-2 text-[10px] leading-[1.5] ${m.who === 'Kazuio' ? 'rounded-tl-md border border-line bg-cream' : 'rounded-tr-md bg-[#e9dfcf]'}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
                <QuoteBubble text={PHONE_QUOTE.text} source={PHONE_QUOTE.source} />
              </div>

              <div className="flex items-center gap-2 px-3 pb-3.5 pt-1">
                <div className="flex flex-1 items-center gap-2 rounded-full border border-line bg-cream px-3 py-2">
                  <span className="flex-1 text-[9px] text-kmuted">Escreva sua mensagem...</span>
                  <Mic className="h-3 w-3 text-kmuted" />
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep text-cream">
                  <Send className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[560px]">
            <div className="overflow-hidden rounded-t-xl border border-line/80 bg-paper shadow-[0_28px_70px_rgba(20,40,63,0.12)]">
              <div className="grid grid-cols-[0.34fr_0.66fr]">
                <div className="border-r border-line/70 bg-cream px-4 py-4">
                  <Logo markClassName="h-6" wordClassName="text-[0.62rem] tracking-[0.22em]" />
                  <div className="mt-5 flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[10px] font-medium text-navy">
                    <Plus className="h-3 w-3" />
                    Nova conversa
                  </div>
                  <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.14em] text-kmuted">Conversas</p>
                  <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-2 text-[10px] text-navy shadow-sm">
                    <MessageSquare className="h-3 w-3 text-gold" />
                    Decisão no trabalho
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="border-b border-line/70 px-5 py-3 text-[10px] font-medium text-ink/60">Briguei com minha mãe</div>
                  <div className="flex-1 space-y-3 px-5 py-4">
                    {LAPTOP_CHAT.map((m, i) => (
                      <div key={i} className={`flex flex-col ${m.who === 'Você' ? 'items-end' : 'items-start'}`}>
                        <span className="mb-1 px-1 text-[9px] font-semibold text-ink/55">{m.who}</span>
                        <div className={`max-w-[78%] rounded-[14px] px-3.5 py-2.5 text-[11px] leading-[1.55] ${m.who === 'Kazuio' ? 'rounded-tl-md border border-line bg-cream' : 'rounded-tr-md bg-[#e9dfcf]'}`}>
                          {m.text}
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-start">
                      <div className="max-w-[78%]">
                        <QuoteBubble text={LAPTOP_QUOTE.text} source={LAPTOP_QUOTE.source} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border-t border-line/70 px-5 py-3">
                    <div className="flex flex-1 items-center gap-2 rounded-full border border-line bg-cream px-3.5 py-2">
                      <span className="flex-1 text-[10px] text-kmuted">Escreva sua mensagem...</span>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-deep text-cream">
                      <Send className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto h-3 w-[92%] rounded-b-xl bg-gradient-to-b from-line/70 to-line/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
