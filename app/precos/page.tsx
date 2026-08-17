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
      'Privacidade total — suas conversas nunca são compartilhadas',
    ],
  },
  {
    id: '6aba5db1-3b7a-4732-a124-a46c7f3cfcd5',
    nome: 'Essencial',
    preco: 'R$ 39,99',
    periodo: '/mês',
    resumo: 'Para quem quer voltar sempre que precisar, sem contar as mensagens.',
    mensagens: '320 mensagens / mês',
    destaque: true,
    itens: [
      'Tudo do plano Experiência',
      'Espaço para conversas mais longas e recorrentes',
      'Ideal para quem está passando por um momento que precisa de acompanhamento contínuo',
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
      'Sem se preocupar com limite no dia a dia',
      'Feito para quem quer fazer do Kazuio um hábito de cuidado consigo mesmo',
    ],
  },
]

const DUVIDAS = [
  ['O que conta como mensagem?', 'Cada mensagem que você envia ao Kazuio conta para o limite do seu plano. O saldo disponível aparece dentro da experiência de assinatura.'],
  ['Todos os planos têm os três pilares?', 'Sim. Psicologia, Fé e Filosofia fazem parte da proposta do Kazuio em todos os planos — o que muda é só a quantidade de mensagens disponíveis por mês.'],
  ['Posso trocar de plano depois?', 'Sim. Não existe plano errado para começar — a maioria das pessoas começa pelo Experiência e muda depois, conforme sente que quer voltar com mais frequência.'],
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
                    Mais escolhido
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
