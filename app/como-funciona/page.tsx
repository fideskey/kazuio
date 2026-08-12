import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { DialogueIcon, QuestionIcon, BookIcon, PresenceIcon } from '@/components/kazuio/icons'
import { Header } from '@/components/kazuio/header'
import { Footer } from '@/components/kazuio/footer'

export const metadata: Metadata = {
  title: 'Como Funciona — Kazuio',
  description: 'Entenda o passo a passo de uma conversa com o Kazuio.',
}

const ETAPAS = [
  {
    icon: DialogueIcon,
    numero: '01',
    title: 'Você conta o que está vivendo',
    body: 'Não existe um jeito certo de começar. Pode ser uma frase confusa, um desabafo, ou só "não sei o que estou sentindo". O Kazuio não espera clareza — ele te ajuda a construí-la a partir de onde você está agora.',
  },
  {
    icon: QuestionIcon,
    numero: '02',
    title: 'Kazuio faz perguntas, não dá respostas prontas',
    body: 'Em vez de te dizer o que fazer, o Kazuio pergunta o que vai aprofundando a conversa: o que pesa mais, o que você já tentou, o que mudaria se a situação fosse diferente. É um processo, parecido com o de uma boa conversa terapêutica — sem pressa de chegar a uma conclusão antes da hora.',
  },
  {
    icon: BookIcon,
    numero: '03',
    title: 'Quando fizer sentido, uma reflexão real entra na conversa',
    body: 'Depois de entender melhor o que você está vivendo, o Kazuio pode trazer uma citação — de Psicologia, Filosofia, ou da tradição religiosa que você escolher. Sempre de uma biblioteca curada e verificada. Kazuio nunca inventa uma citação, nunca atribui uma frase à pessoa errada.',
  },
  {
    icon: PresenceIcon,
    numero: '04',
    title: 'A conversa aponta para um próximo passo possível',
    body: 'O objetivo final não é só refletir — é sair da conversa enxergando algo com mais clareza, com um caminho concreto pela frente, por menor que seja. E se a situação pedir cuidado profissional de verdade, o Kazuio é honesto sobre isso e te aponta na direção certa.',
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
      <section className="mx-auto max-w-[900px] px-5 pb-4 pt-14 md:px-8 md:pt-20">
        <p className="eyebrow">Como funciona</p>
        <h1 className="mt-3 max-w-[760px] font-serif text-[2.4rem] leading-[1.08] text-navy sm:text-[3.2rem]">
          Uma conversa que não tenta resolver sua vida em uma única resposta.
        </h1>
        <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-ink/78">
          O Kazuio foi construído como um processo, não como um mecanismo de perguntas e respostas. Cada conversa segue
          um caminho — às vezes curto, às vezes mais longo — que respeita o tempo que cada pessoa precisa para colocar
          em palavras o que está vivendo.
        </p>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-10 md:px-8 md:py-14">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {ETAPAS.map(({ icon: Icon, numero, title, body }) => (
            <div key={numero} className="border-t border-line/80 pt-6">
              <div className="flex items-center gap-4">
                <span className="font-serif text-3xl text-gold/60">{numero}</span>
                <Icon className="h-7 w-7 text-navy/70" />
              </div>
              <h2 className="mt-4 font-serif text-xl leading-[1.2] text-navy">{title}</h2>
              <p className="mt-3 max-w-[420px] text-sm leading-6 text-kmuted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-10 md:px-8 md:py-14">
        <div className="border-t border-line/80 pt-10">
          <h2 className="font-serif text-2xl leading-[1.15] text-navy md:text-3xl">Um processo, não uma fórmula</h2>
          <p className="mt-4 max-w-[640px] text-sm leading-7 text-kmuted">
            Nem toda conversa segue esse caminho na mesma velocidade. Algumas pessoas chegam a uma reflexão na primeira
            troca de mensagens. Outras precisam de várias conversas, ao longo de vários dias, até sentir que
            realmente entenderam o que estavam vivendo — e está tudo bem assim. O Kazuio guarda o essencial do que foi
            conversado, então você não precisa recomeçar do zero toda vez que voltar.
          </p>
          <p className="mt-4 max-w-[640px] text-sm leading-7 text-kmuted">
            O que não muda é o compromisso por trás de cada etapa: nunca inventar uma citação, nunca fingir ter certeza
            sobre algo que exige cuidado profissional, e nunca apressar uma pessoa a chegar numa conclusão antes da
            hora dela.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 pb-16 md:px-8 md:pb-24">
        <div className="relative overflow-hidden rounded-[28px] bg-deep px-8 py-10 text-cream md:px-14 md:py-14">
          <div className="relative z-10 max-w-[560px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold2">Talvez seja hora de conversar</p>
            <h2 className="mt-4 max-w-[510px] font-serif text-3xl leading-[1.08] md:text-[2.5rem]">
              Pronto para experimentar uma conversa assim?
            </h2>
            <a
              href="/precos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-deep transition-transform hover:scale-[1.02]"
            >
              Conheça os planos do Kazuio
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  )
}
