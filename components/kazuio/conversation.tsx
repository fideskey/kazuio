import { Mic, Send, MoveLeft, MoreHorizontal, Wifi, SignalHigh, BatteryFull } from 'lucide-react'
import { Logo } from './logo'
import { FaithIcon, PhilosophyIcon, PsychologyIcon } from './icons'

const CHAT = [
  { who: 'Você', text: 'Estou muito ansioso com uma decisão que preciso tomar no trabalho. Tenho medo de escolher errado.' },
  { who: 'Kazuio', text: 'Quando você imagina as duas opções à sua frente, o que pesa mais em cada uma delas: o que te atrai ou o que te assusta?' },
  { who: 'Você', text: 'Acho que o que me assusta mais é sair da zona de conforto e me arrepender depois.' },
  { who: 'Kazuio', text: 'O que seria, para você, escolher bem — mesmo que a escolha não saia exatamente como imaginou?' },
]

const SIDE = [
  { who: 'Você', text: 'Briguei com minha mãe e agora estou me sentindo culpado.' },
  { who: 'Kazuio', text: 'Quando você pensa nessa culpa, ela vem mais do que você disse durante a discussão ou do que gostaria de ter conseguido dizer?' },
  { who: 'Você', text: 'Acho que do que eu disse...' },
  { who: 'Kazuio', text: 'E se você pudesse voltar àquela conversa, o que gostaria que sua mãe tivesse entendido sobre você?' },
]

const PILLARS = [
  { icon: PsychologyIcon, title: 'Compreender emoções, comportamentos e padrões.', tag: 'Psicologia' },
  { icon: FaithIcon, title: 'Encontrar sentido, esperança e direção na espiritualidade.', tag: 'Fé' },
  { icon: PhilosophyIcon, title: 'Questionar ideias e ampliar sua visão de mundo.', tag: 'Filosofia' },
]

export function Conversation() {
  return (
    <section id="como-funciona" className="mx-auto max-w-[1220px] px-5 py-12 md:px-8 md:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_0.8fr_0.95fr] lg:gap-14">
        <div>
          <p className="eyebrow">Como acontece</p>
          <h2 className="mt-3 max-w-[390px] font-serif text-3xl leading-[1.08] text-navy md:text-[2.7rem]">
            Veja como uma conversa pode mudar a forma de olhar para uma situação.
          </h2>
          <div className="mt-9 space-y-4">
            {SIDE.map((m, i) => (
              <div key={i} className="max-w-[390px]">
                <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-kmuted">{m.who}</span>
                <p className={`rounded-[18px] px-4 py-3 text-[12px] leading-5 ${m.who === 'Kazuio' ? 'border border-line bg-paper shadow-[0_6px_20px_rgba(20,40,63,0.03)]' : 'bg-[#efe8dc]'}`}>
                  {m.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[390px] border-l border-gold pl-4 text-sm leading-6 text-kmuted">
            Não damos respostas prontas. Perguntamos. Porque, muitas vezes, a primeira resposta que damos a nós mesmos não é a mais profunda.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-[282px] rounded-[2.8rem] bg-[#152331] p-2 shadow-[0_28px_70px_rgba(20,40,63,0.18)] ring-1 ring-black/10 md:w-[300px]">
            <div className="absolute -inset-3 -z-10 rounded-[3.3rem] bg-gold/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.3rem] bg-paper">
              <div className="relative flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-medium text-ink">
                <span>9:41</span>
                <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
                <div className="flex items-center gap-1"><SignalHigh className="h-3.5 w-3.5" /><Wifi className="h-3.5 w-3.5" /><BatteryFull className="h-3.5 w-3.5" /></div>
              </div>

              <div className="flex items-center justify-between border-b border-line/70 px-4 py-2.5">
                <MoveLeft className="h-4 w-4 text-navy" />
                <Logo markClassName="h-6" wordClassName="text-[0.64rem] tracking-[0.28em]" />
                <MoreHorizontal className="h-4 w-4 text-navy" />
              </div>

              <div className="h-[440px] space-y-3 overflow-hidden px-3.5 py-3.5">
                {CHAT.map((m, i) => (
                  <div key={i} className={`flex flex-col ${m.who === 'Você' ? 'items-end' : 'items-start'}`}>
                    <span className="mb-1 px-1 text-[9px] font-semibold text-ink/55">{m.who}</span>
                    <div className={`max-w-[92%] rounded-[16px] px-3 py-2.5 text-[10.5px] leading-[1.55] ${m.who === 'Kazuio' ? 'rounded-tl-md border border-line bg-cream' : 'rounded-tr-md bg-[#e9dfcf]'}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 px-3.5 pb-4 pt-1">
                <div className="flex flex-1 items-center gap-2 rounded-full border border-line bg-cream px-3.5 py-2">
                  <span className="flex-1 text-[10px] text-kmuted">Escreva sua mensagem...</span>
                  <Mic className="h-3.5 w-3.5 text-kmuted" />
                </div>
                <button type="button" aria-label="Enviar" className="flex h-8 w-8 items-center justify-center rounded-full bg-deep text-cream"><Send className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          </div>
        </div>

        <div id="pilares">
          <p className="eyebrow">Três pilares</p>
          <h2 className="mt-3 max-w-[390px] font-serif text-3xl leading-[1.08] text-navy md:text-[2.7rem]">
            Psicologia, Fé e Filosofia — em equilíbrio.
          </h2>
          <p className="mt-5 max-w-[370px] text-sm leading-6 text-kmuted">
            Kazuio reúne diferentes formas de olhar para a experiência humana sem transformar nenhuma delas em uma resposta pronta.
          </p>

          <ul className="mt-9 space-y-7">
            {PILLARS.map(({ icon: Icon, title, tag }) => (
              <li key={tag} className="flex gap-4 border-b border-line/70 pb-6 last:border-b-0">
                <span className="mt-0.5 shrink-0 text-gold"><Icon className="h-9 w-9" /></span>
                <div>
                  <p className="text-sm leading-5 text-ink">{title}</p>
                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-kmuted">{tag}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
