import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { FaithIcon, PhilosophyIcon, PsychologyIcon } from '@/components/kazuio/icons'

export const metadata: Metadata = {
  title: 'Pilares — Kazuio',
  description: 'Psicologia, Fé e Filosofia — os três pilares que sustentam cada conversa no Kazuio.',
}

const PILARES = [
  {
    icon: PsychologyIcon,
    tag: 'Psicologia',
    title: 'Entender por que sentimos o que sentimos',
    body: 'A Psicologia nos ajuda a nomear emoções, reconhecer padrões de comportamento e entender por que certas situações pesam mais do que outras. Kazuio usa essa lente para fazer perguntas que ajudam você a olhar para dentro com mais clareza — nunca para rotular, diagnosticar ou reduzir o que você vive a um termo técnico.',
    extra: 'Quando fizer sentido, o Kazuio pode trazer uma reflexão de pensadores e autores reconhecidos da Psicologia — sempre de uma biblioteca curada e verificada, nunca inventada.',
  },
  {
    icon: FaithIcon,
    tag: 'Fé',
    title: 'Encontrar sentido além do que se vê',
    body: 'Para muita gente, a fé é onde a esperança mora quando tudo o mais parece incerto. Kazuio respeita isso: se você pertence a uma tradição religiosa — Catolicismo, Evangelismo ou Espiritismo — e quiser que a conversa passe por esse lugar, o Kazuio pode trazer reflexões dessa tradição específica, sempre de fontes reais e verificadas.',
    extra: 'Kazuio nunca tenta te convencer de uma fé, nem julga a que você já tem (ou a ausência dela). A fé só entra na conversa se e quando você quiser que ela entre.',
  },
  {
    icon: PhilosophyIcon,
    tag: 'Filosofia',
    title: 'Questionar em vez de aceitar respostas prontas',
    body: 'A Filosofia é o convite para olhar de novo para aquilo que parecia óbvio. Grandes pensadores, ao longo de séculos, já se perguntaram sobre o sofrimento, a liberdade, a incerteza e o sentido da vida — e essas perguntas continuam vivas hoje. Kazuio usa essa tradição para ampliar sua visão de mundo, não para te empurrar para uma filosofia específica.',
    extra: 'A ideia não é te dar uma doutrina para seguir, mas te mostrar que outras mentes brilhantes já pensaram sobre isso — e que pensar junto com elas pode abrir um caminho novo.',
  },
]

export default function Page() {
  return (
    <main>
      <section className="mx-auto max-w-[900px] px-5 pb-4 pt-14 md:px-8 md:pt-20">
        <p className="eyebrow">Três pilares</p>
        <h1 className="mt-3 max-w-[760px] font-serif text-[2.4rem] leading-[1.08] text-navy sm:text-[3.2rem]">
          Nenhuma pergunta da vida cabe em uma única lente.
        </h1>
        <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-ink/78">
          Por isso o Kazuio não escolhe um caminho só. Ele equilibra três formas diferentes de olhar para a experiência
          humana — Psicologia, Fé e Filosofia — para que a conversa vá aonde ela realmente precisa ir, sem forçar
          nenhuma delas a virar a resposta certa para tudo.
        </p>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-10 md:px-8 md:py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          {PILARES.map(({ icon: Icon, tag, title, body, extra }) => (
            <div key={tag} className="rounded-[24px] border border-line bg-paper px-7 py-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-deep/[0.06] text-gold">
                <Icon className="h-8 w-8" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-navy">{tag}</p>
              <h2 className="mt-2 font-serif text-xl leading-[1.2] text-navy">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-kmuted">{body}</p>
              <p className="mt-4 text-sm leading-6 text-kmuted/85">{extra}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-10 md:px-8 md:py-14">
        <div className="border-t border-line/80 pt-10">
          <h2 className="font-serif text-2xl leading-[1.15] text-navy md:text-3xl">Por que equilíbrio, e não escolha</h2>
          <p className="mt-4 max-w-[640px] text-sm leading-7 text-kmuted">
            Um psicólogo não vai te citar um versículo. Um líder religioso não vai te explicar um viés cognitivo. Um
            filósofo não vai perguntar sobre sua infância. Cada um desses olhares, sozinho, é parcial — não porque
            esteja errado, mas porque a vida humana é grande demais para uma única disciplina explicar sozinha.
          </p>
          <p className="mt-4 max-w-[640px] text-sm leading-7 text-kmuted">
            O Kazuio não tenta ser nenhum desses profissionais. Ele é uma conversa que sabe transitar entre os três
            olhares, na medida certa para o que você está vivendo — sem nunca deixar de te lembrar que, quando a
            situação pedir um cuidado profissional de verdade, ele vai te apontar para lá.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 pb-16 md:px-8 md:pb-24">
        <div className="relative overflow-hidden rounded-[28px] bg-deep px-8 py-10 text-cream md:px-14 md:py-14">
          <div className="relative z-10 max-w-[560px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold2">Talvez seja hora de conversar</p>
            <h2 className="mt-4 max-w-[510px] font-serif text-3xl leading-[1.08] md:text-[2.5rem]">
              Veja como esses três pilares se encontram numa conversa real.
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
  )
}
