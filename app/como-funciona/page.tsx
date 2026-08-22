import type { Metadata } from 'next'
import { ArrowRight, ShieldCheck, HeartHandshake, BookMarked, Sparkles } from 'lucide-react'
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
    body: 'Em vez de te dizer o que fazer, o Kazuio pergunta o que vai aprofundando a conversa: o que pesa mais, o que você já tentou, o que mudaria se a situação fosse diferente.',
  },
  {
    icon: BookIcon,
    numero: '03',
    title: 'Quando fizer sentido, uma reflexão real entra na conversa',
    body: 'O Kazuio pode trazer uma citação — de Psicologia, Filosofia, ou da tradição religiosa que você escolher. Sempre de uma biblioteca curada e verificada. Nunca uma citação inventada.',
  },
  {
    icon: PresenceIcon,
    numero: '04',
    title: 'A conversa aponta para um próximo passo possível',
    body: 'O objetivo é sair enxergando algo com mais clareza, com um caminho concreto pela frente. Se a situação pedir cuidado profissional de verdade, o Kazuio é honesto sobre isso.',
  },
]

const PRINCIPIOS = [
  { icon: ShieldCheck, title: 'Privado e seguro', body: 'Suas conversas são protegidas.' },
  { icon: HeartHandshake, title: 'Sem julgamentos', body: 'Um espaço seguro, para ser real.' },
  { icon: BookMarked, title: 'Fontes reais', body: 'Nunca uma citação inventada.' },
  { icon: Sparkles, title: 'No seu ritmo', body: 'Você guia a conversa.' },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <section className="mx-auto max-w-[980px] px-5 pb-10 pt-16 md:px-8 md:pt-24">
          <p className="eyebrow">Como funciona</p>
          <h1 className="mt-4 max-w-[850px] font-serif text-[2.6rem] leading-[1.05] text-navy sm:text-[3.6rem]">
            Uma conversa que não tenta resolver sua vida em uma única resposta.
          </h1>
          <p className="mt-7 max-w-[700px] text-[17px] leading-8 text-ink/75">
            O Kazuio foi construído como um processo, não como um mecanismo de perguntas e respostas. Cada conversa
            segue um caminho — às vezes curto, às vezes mais longo — que respeita o tempo que cada pessoa precisa
            para colocar em palavras o que está vivendo.
          </p>
        </section>

        <section className="mx-auto max-w-[1220px] px-5 py-8 md:px-8 md:py-14">
          <div className="grid gap-5 sm:grid-cols-2">
            {ETAPAS.map(({ icon: Icon, numero, title, body }) => (
              <article key={numero} className="relative overflow-hidden rounded-[26px] border border-cream/12 bg-deep p-7 md:p-8">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-3xl text-gold2/50">{numero}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-gold2">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-xl leading-[1.2] text-cream">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-cream/68">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-5 py-10 md:px-8 md:py-14">
          <div className="border-t border-line/80 pt-10">
            <p className="eyebrow">Três níveis de cuidado</p>
            <h2 className="mt-4 font-serif text-2xl leading-[1.15] text-navy md:text-3xl">
              Uma conversa que reconhece o que você está vivendo
            </h2>
            <p className="mt-4 max-w-[640px] text-sm leading-7 text-kmuted">
              Kazuio não trata toda conversa da mesma forma. Dependendo do que você compartilha, a resposta muda de
              tom e de prioridade — sempre com o mesmo compromisso de fundo: cuidar bem de você.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <div className="rounded-[22px] border border-line bg-paper p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Nível 1</p>
                <h3 className="mt-2 font-serif text-lg leading-[1.2] text-navy">Acompanhamento diário</h3>
                <p className="mt-3 text-sm leading-6 text-kmuted">
                  A maior parte das conversas. Reflexão, escuta e perspectiva a partir da Psicologia, da Filosofia e
                  da Fé — para os altos e baixos do dia a dia.
                </p>
              </div>
              <div className="rounded-[22px] border border-line bg-paper p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Nível 2</p>
                <h3 className="mt-2 font-serif text-lg leading-[1.2] text-navy">Atenção reforçada</h3>
                <p className="mt-3 text-sm leading-6 text-kmuted">
                  Quando o tema pede mais cuidado, Kazuio prioriza a escuta atenta e incentiva, sempre que fizer
                  sentido, buscar apoio profissional qualificado.
                </p>
              </div>
              <div className="rounded-[22px] border border-line bg-paper p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Nível 3</p>
                <h3 className="mt-2 font-serif text-lg leading-[1.2] text-navy">Resposta a momentos de crise</h3>
                <p className="mt-3 text-sm leading-6 text-kmuted">
                  Se surgem sinais de risco real, a prioridade muda por completo: a segurança da pessoa vem antes de
                  qualquer outra coisa, e Kazuio conecta com recursos de ajuda apropriados.
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-[640px] text-sm leading-7 text-kmuted">
              Kazuio não substitui acompanhamento profissional de saúde mental — é uma ponte para o bem-estar, todos
              os dias.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1220px] px-5 py-10 md:px-8 md:py-14">
          <div className="rounded-[30px] bg-deep px-8 py-10 text-cream md:px-12 md:py-12">
            <p className="eyebrow text-gold2">Princípios da experiência</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PRINCIPIOS.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-6 w-6 text-gold2" />
                  <p className="mt-3.5 text-sm font-semibold text-cream">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-cream/60">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-5 py-10 md:px-8 md:py-14">
          <div className="border-t border-line/80 pt-10">
            <h2 className="font-serif text-2xl leading-[1.15] text-navy md:text-3xl">Um processo, não uma fórmula</h2>
            <p className="mt-4 max-w-[640px] text-sm leading-7 text-kmuted">
              Nem toda conversa segue esse caminho na mesma velocidade. Algumas pessoas chegam a uma reflexão na
              primeira troca de mensagens. Outras precisam de várias conversas, ao longo de vários dias, até sentir
              que realmente entenderam o que estavam vivendo — e está tudo bem assim. O Kazuio guarda o essencial do
              que foi conversado, então você não precisa recomeçar do zero toda vez que voltar.
            </p>
            <p className="mt-4 max-w-[640px] text-sm leading-7 text-kmuted">
              O que não muda é o compromisso por trás de cada etapa: nunca inventar uma citação, nunca fingir ter
              certeza sobre algo que exige cuidado profissional, e nunca apressar uma pessoa a chegar numa conclusão
              antes da hora dela.
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


