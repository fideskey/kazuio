import type { Metadata } from 'next'
import { Check, Lock, MessageCircle } from 'lucide-react'
import { Header } from '@/components/kazuio/header'
import { Footer } from '@/components/kazuio/footer'
import { AssinarButton } from '@/components/kazuio/assinar-button'

export const metadata: Metadata = {
  title: 'Preços — Kazuio',
  description: 'Conheça os planos do Kazuio e escolha o ritmo de conversa que faz sentido para você.',
}

const PLANOS = [
  {
    id: '8106e077-88ca-4590-98e6-d5ac298be98d',
    nome: 'Experiência',
    preco: 'R$ 19,99',
    periodo: '/mês',
    resumo: 'Para quem quer sentir como é conversar com o Kazuio, no seu próprio ritmo.',
    mensagens: '80 mensagens / mês',
    destaque: false,
    itens: [
      'Acesso aos três pilares: Psicologia, Fé e Filosofia',
      'Citações reais de uma biblioteca curada e verificada',
      'Histórico salvo entre conversas',
      'Suas conversas não são vendidas nem usadas para publicidade (veja a Política de Privacidade)',
    ],
  },
  {
    id: '6aba5db1-3b7a-4732-a124-a46c7f3cfcd5',
    nome: 'Essencial',
    preco: 'R$ 39,99',
    periodo: '/mês',
    resumo: 'Para quem quer voltar com mais frequência, com quatro vezes mais mensagens que o plano Experiência.',
    mensagens: '320 mensagens / mês',
    destaque: true,
    itens: [
      'Tudo do plano Experiência',
      '320 mensagens por mês para conversas mais longas e recorrentes',
      'O Kazuio não substitui acompanhamento profissional de saúde',
    ],
  },
  {
    id: '35f57d46-477a-4339-8ecf-2244991d07f8',
    nome: 'Completo',
    preco: 'R$ 79,99',
    periodo: '/mês',
    resumo: 'Para quem quer o Kazuio como um espaço de reflexão constante na rotina.',
    mensagens: '640 mensagens / mês',
    destaque: false,
    itens: [
      'Tudo do plano Essencial',
      '640 mensagens por mês, o dobro do plano Essencial',
      'Feito para quem quer fazer do Kazuio um hábito de cuidado consigo mesmo',
    ],
  },
]

const DUVIDAS = [
  ['O que conta como mensagem?', 'Cada mensagem que você envia ao Kazuio conta como uma. As respostas do Kazuio não são contadas. Você acompanha quantas já usou no chat, em “X de Y mensagens usadas”.'],
  ['Qual é o limite e o que acontece quando ele acaba?', 'O limite é de 80 (Experiência), 320 (Essencial) ou 640 (Completo) mensagens por ciclo de 30 dias. Ao atingir o limite, você não consegue enviar novas mensagens até o ciclo seguinte começar, e as mensagens não usadas não se acumulam. Esse ciclo de uso não coincide necessariamente com a data da cobrança mensal.'],
  ['A assinatura renova sozinha?', 'Sim. A assinatura é mensal e renova automaticamente pelo Mercado Pago até ser cancelada. Os valores e as condições de cancelamento e reembolso estão nos Termos e Condições (seções 5 e 5.1).'],
  ['Todos os planos têm os três pilares?', 'Sim. Psicologia, Fé e Filosofia fazem parte da proposta do Kazuio em todos os planos — o que muda é só a quantidade de mensagens disponíveis por ciclo de 30 dias.'],
  ['Posso trocar de plano depois?', 'Sim, em Faturação, no chat. A renovação do plano atual é cancelada (você mantém o acesso dele até o fim do período pago, sem reembolso do restante) e o novo plano só começa quando o Mercado Pago confirmar o pagamento. Você nunca é cobrado por dois planos ao mesmo tempo.'],
  ['O pagamento é seguro?', 'Sim. O pagamento é processado diretamente pelo Mercado Pago — o Kazuio não armazena os dados do seu cartão.'],
]

export default function Page() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <section className="mx-auto max-w-[980px] px-5 pb-10 pt-16 text-center md:px-8 md:pt-24">
          <p className="eyebrow justify-center">Planos</p>
          <h1 className="mx-auto mt-4 max-w-[750px] font-serif text-[2.6rem] leading-[1.05] text-navy sm:text-[3.6rem]">
            Escolha o ritmo de conversa que faz sentido para você agora.
          </h1>
          <p className="mx-auto mt-7 max-w-[600px] text-[17px] leading-8 text-ink/75">
            Todos os planos dão acesso completo aos três pilares do Kazuio — Psicologia, Fé e Filosofia — e à mesma
            biblioteca de citações verificadas. A única diferença entre eles é quantas mensagens você tem disponíveis
            por mês.
          </p>
        </section>

        <section className="mx-auto max-w-[1220px] px-5 py-8 md:px-8 md:py-14">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
            {PLANOS.map((plano) => (
              <article
                key={plano.nome}
                className={`relative flex h-full flex-col rounded-[30px] border px-7 py-8 md:px-8 md:py-9 ${
                  plano.destaque ? 'border-gold bg-deep text-cream shadow-[0_24px_70px_rgba(32,57,47,0.16)] lg:-translate-y-3' : 'border-line bg-paper'
                }`}
              >
                {plano.destaque && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-deep">
                    Intermediário
                  </span>
                )}
                <p className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${plano.destaque ? 'text-gold2' : 'text-gold'}`}>{plano.nome}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className={`font-serif text-4xl ${plano.destaque ? 'text-cream' : 'text-navy'}`}>{plano.preco}</span>
                  <span className={`text-sm ${plano.destaque ? 'text-cream/55' : 'text-kmuted'}`}>{plano.periodo}</span>
                </div>
                <p className={`mt-4 min-h-[72px] text-sm leading-6 ${plano.destaque ? 'text-cream/68' : 'text-kmuted'}`}>{plano.resumo}</p>
                <div className={`mt-6 flex items-center gap-2 rounded-2xl px-4 py-3 ${plano.destaque ? 'bg-white/[0.07]' : 'bg-cream'}`}>
                  <MessageCircle className={`h-4 w-4 ${plano.destaque ? 'text-gold2' : 'text-gold'}`} />
                  <span className={`text-xs font-semibold ${plano.destaque ? 'text-cream' : 'text-navy'}`}>{plano.mensagens}</span>
                </div>
                <ul className="mt-6 space-y-3.5">
                  {plano.itens.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-5">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plano.destaque ? 'text-gold2' : 'text-gold'}`} />
                      <span className={plano.destaque ? 'text-cream/78' : 'text-kmuted'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <AssinarButton planId={plano.id} planoNome={plano.nome} destaque={plano.destaque} />
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-[700px] items-start gap-3 rounded-2xl border border-line bg-paper px-5 py-4 text-xs leading-5 text-kmuted">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-navy/55" />
            Pagamento processado com segurança pelo Mercado Pago. O Kazuio não armazena os dados do seu cartão.
          </div>

          <div className="mx-auto mt-4 max-w-[700px] rounded-2xl border border-line bg-paper px-5 py-4 text-xs leading-5 text-kmuted">
            <p className="font-semibold text-navy">Antes de assinar</p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>A assinatura é mensal e renova automaticamente, no valor do plano escolhido, até ser cancelada. A primeira cobrança ocorre logo após a confirmação e as seguintes a cada mês, por cobrança recorrente no Mercado Pago.</li>
              <li>Você cancela a renovação quando quiser, no chat, em Faturação. Não há nova cobrança e o acesso continua até o fim do período já pago.</li>
              <li>Você pode se arrepender em até 7 dias corridos após a contratação e receber o valor pago de volta, integralmente e de imediato, pelo chat (Faturação → Exercer arrependimento) ou escrevendo para kazuio@kazuio.com. O acesso é encerrado ao exercer o direito. Detalhes nos <a href="/termos-e-condicoes" className="underline underline-offset-2">Termos e Condições</a> (seções 5 e 5.1).</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-5 py-10 md:px-8 md:py-16">
          <h2 className="text-center font-serif text-2xl leading-[1.2] text-navy md:text-3xl">Dúvidas frequentes sobre os planos</h2>
          <div className="mt-8 divide-y divide-line border-t border-line">
            {DUVIDAS.map(([pergunta, resposta]) => (
              <div key={pergunta} className="py-6">
                <p className="text-sm font-semibold text-navy">{pergunta}</p>
                <p className="mt-2 text-sm leading-6 text-kmuted">{resposta}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
