import type { Metadata } from 'next'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Header } from '@/components/kazuio/header'
import { Footer } from '@/components/kazuio/footer'

export const metadata: Metadata = {
  title: 'Quem Somos — Kazuio',
  description: 'A história e o propósito por trás do Kazuio.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
      <section className="mx-auto max-w-[980px] px-5 pb-4 pt-16 md:px-8 md:pt-24">
        <p className="eyebrow">Quem somos</p>
        <h1 className="mt-4 max-w-[850px] font-serif text-[2.6rem] leading-[1.05] text-navy sm:text-[3.6rem]">
          Nascemos de uma pergunta simples: e se alguém pudesse sempre te ouvir, sem pressa e sem julgamento?
        </h1>
        <p className="mt-7 max-w-[650px] text-[17px] leading-8 text-ink/78">
          Kazuio começou com uma constatação incômoda: quase todo mundo, em algum momento, precisa colocar em palavras
          algo que não sabe nomear — e nem sempre tem, naquele instante, alguém disponível pra ouvir. Um amigo que está
          longe. Um psicólogo com agenda cheia até o mês que vem. Uma família que ama, mas que a gente não quer sobrecarregar
          de novo. Ou simplesmente ninguém que esteja acordado às três da manhã, quando o pensamento não para.
        </p>
      </section>

      <section className="mx-auto max-w-[900px] px-5 py-10 md:px-8 md:py-14">
        <div className="border-t border-line/80 pt-10">
          <h2 className="font-serif text-2xl leading-[1.15] text-navy md:text-3xl">O que nos moveu a construir isso</h2>
          <p className="mt-4 max-w-[640px] text-sm leading-7 text-kmuted">
            Não acreditamos que uma conversa com inteligência artificial deva fingir ser terapia, nem que deva
            entregar respostas prontas como se a vida de alguém coubesse numa lista de dicas. Acreditamos em outra coisa:
            que a maior parte de nós já carrega, dentro de si, mais clareza do que imagina — e que às vezes só precisa de
            uma pergunta bem colocada, no momento certo, pra encontrar essa clareza.
          </p>
          <p className="mt-4 max-w-[640px] text-sm leading-7 text-kmuted">
            Por isso o Kazuio não foi desenhado para dar conselhos. Foi desenhado para perguntar — devagar, com cuidado,
            sem pressa de chegar a uma conclusão antes da hora. E quando fizer sentido, para oferecer uma reflexão real,
            vinda de uma biblioteca curada de Psicologia, Filosofia e Fé, nunca inventada, nunca fora de contexto.
          </p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-line/80 pt-10 sm:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl text-navy">Por que três olhares, e não um só</h3>
            <p className="mt-3 text-sm leading-6 text-kmuted">
              A vida raramente cabe numa única lente. Às vezes o que ajuda é entender um padrão emocional. Às vezes é uma
              pergunta que reorganiza a forma de pensar. Às vezes é sentir que aquilo que se vive tem um sentido maior do
              que o momento presente. Não escolhemos por você qual dessas vozes é a certa — deixamos as três disponíveis,
              com equilíbrio, para que a conversa vá aonde ela realmente precisa ir.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-navy">O que prometemos, com honestidade</h3>
            <p className="mt-3 text-sm leading-6 text-kmuted">
              Kazuio não é psicólogo, não é psiquiatra, não é uma autoridade religiosa e não substitui nenhum deles.
              Não diagnostica, não prescreve, não promete resolver a vida de ninguém em uma conversa. O que prometemos é
              presença: um espaço que existe pra te ouvir de verdade, te ajudar a pensar com mais clareza, e te apontar
              para ajuda profissional real sempre que a situação pedir isso.
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-line bg-paper px-6 py-6 md:px-8">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-green" />
          <p className="text-sm leading-6 text-kmuted">
            Toda conversa que você tem com o Kazuio é privada. Não vendemos, não compartilhamos e não usamos o que você
            conta para anúncios. É um espaço seu — construído para ser seguro antes de qualquer outra coisa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 pb-16 md:px-8 md:pb-24">
        <div className="relative overflow-hidden rounded-[28px] bg-deep px-8 py-10 text-cream md:px-14 md:py-14">
          <div className="relative z-10 max-w-[560px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold2">Talvez seja hora de conversar</p>
            <h2 className="mt-4 max-w-[510px] font-serif text-3xl leading-[1.08] md:text-[2.5rem]">
              Você não precisa ter as palavras certas. Só precisa começar.
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
