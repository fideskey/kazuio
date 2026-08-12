import type { Metadata } from 'next'
import { Check, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Preços — Kazuio',
  description: 'Conheça os planos do Kazuio.',
}

const PLANOS = [
  {
    nome: 'Experiência',
    preco: 'R$ 19,99',
    periodo: '/mês',
    resumo: 'Para quem quer sentir como é conversar com o Kazuio, no seu próprio ritmo.',
    mensagens: '80 mensagens por mês',
    destaque: false,
    itens: [
      '80 mensagens por mês (o equivalente a 2 conversas completas)',
      'Acesso aos três pilares: Psicologia, Fé e Filosofia',
      'Citações reais de uma biblioteca curada e verificada',
      'Histórico salvo entre conversas',
      'Privacidade total — suas conversas nunca são compartilhadas',
    ],
  },
  {
    nome: 'Essencial',
    preco: 'R$ 39,99',
    periodo: '/mês',
    resumo: 'Para quem quer voltar sempre que precisar, sem contar as mensagens.',
    mensagens: '320 mensagens por mês',
    destaque: true,
    itens: [
      '320 mensagens por mês (o equivalente a 8 conversas completas)',
      'Tudo do plano Experiência',
      'Espaço para conversas mais longas e recorrentes',
      'Ideal para quem está passando por um momento que precisa de acompanhamento contínuo',
    ],
  },
  {
    nome: 'Completo',
    preco: 'R$ 79,99',
    periodo: '/mês',
    resumo: 'Para quem quer o Kazuio como um espaço de reflexão constante na rotina.',
    mensagens: '640 mensagens por mês',
    destaque: false,
    itens: [
      '640 mensagens por mês (o equivalente a 16 conversas completas)',
      'Tudo do plano Essencial',
      'Sem se preocupar com limite no dia a dia',
      'Feito para quem quer fazer do Kazuio um hábito de cuidado consigo mesmo',
    ],
  },
]

function MercadoPagoBadge() {
  return (
    <div className="mt-6 flex items-center gap-2 rounded-full border border-line/70 bg-paper px-3.5 py-2 text-[10.5px] text-kmuted">
      <Lock className="h-3.5 w-3.5 shrink-0 text-navy/60" />
      Pagamento processado com segurança pelo Mercado Pago
    </div>
  )
}

export default function Page() {
  return (
    <main>
      <section className="mx-auto max-w-[900px] px-5 pb-4 pt-14 text-center md:px-8 md:pt-20">
        <p className="eyebrow justify-center">Planos</p>
        <h1 className="mx-auto mt-3 max-w-[700px] font-serif text-[2.4rem] leading-[1.08] text-navy sm:text-[3.1rem]">
          Escolha o ritmo de conversa que faz sentido para você agora.
        </h1>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-8 text-ink/78">
          Todos os planos dão acesso completo aos três pilares do Kazuio — Psicologia, Fé e Filosofia — e à mesma
          biblioteca de citações verificadas. A única diferença entre eles é quantas mensagens você tem disponíveis
          por mês.
        </p>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-7 lg:grid-cols-3">
          {PLANOS.map((plano) => (
            <div
              key={plano.nome}
              className={`relative flex flex-col rounded-[26px] border px-7 py-8 ${
                plano.destaque ? 'border-gold bg-deep text-cream shadow-[0_24px_60px_rgba(32,57,47,0.14)] lg:-translate-y-3' : 'border-line bg-paper text-ink'
              }`}
            >
              {plano.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-deep">
                  Mais escolhido
                </span>
              )}

              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${plano.destaque ? 'text-gold2' : 'text-navy'}`}>
                {plano.nome}
              </p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`font-serif text-4xl ${plano.destaque ? 'text-cream' : 'text-navy'}`}>{plano.preco}</span>
                <span className={`text-sm ${plano.destaque ? 'text-cream/60' : 'text-kmuted'}`}>{plano.periodo}</span>
              </div>
              <p className={`mt-3 text-sm leading-6 ${plano.destaque ? 'text-cream/70' : 'text-kmuted'}`}>{plano.resumo}</p>

              <p className={`mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] ${plano.destaque ? 'text-gold2' : 'text-gold'}`}>
                {plano.mensagens}
              </p>

              <ul className="mt-5 space-y-3">
                {plano.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-6">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plano.destaque ? 'text-gold2' : 'text-gold'}`} />
                    <span className={plano.destaque ? 'text-cream/85' : 'text-kmuted'}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <button
                  type="button"
                  disabled
                  className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold opacity-60 cursor-not-allowed ${
                    plano.destaque ? 'bg-gold text-deep' : 'bg-deep text-cream'
                  }`}
                >
                  Assinar {plano.nome}
                </button>
                <p className={`mt-3 text-center text-[11px] ${plano.destaque ? 'text-cream/50' : 'text-kmuted'}`}>Em breve disponível.</p>
                {plano.destaque ? (
                  <div className="mt-6 flex items-center gap-2 rounded-full border border-cream/20 px-3.5 py-2 text-[10.5px] text-cream/70">
                    <Lock className="h-3.5 w-3.5 shrink-0" />
                    Pagamento processado com segurança pelo Mercado Pago
                  </div>
                ) : (
                  <MercadoPagoBadge />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 pb-16 md:px-8 md:pb-24">
        <div className="border-t border-line/80 pt-10 text-center">
          <h2 className="font-serif text-2xl leading-[1.2] text-navy md:text-3xl">Ainda com dúvidas sobre qual plano escolher?</h2>
          <p className="mx-auto mt-4 max-w-[480px] text-sm leading-6 text-kmuted">
            Não existe plano errado para começar. A maioria das pessoas começa pelo Experiência e muda depois, conforme
            sente que quer voltar com mais frequência.
          </p>
        </div>
      </section>
    </main>
  )
}
