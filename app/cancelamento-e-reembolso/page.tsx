import type { Metadata } from 'next'
import { LegalPage } from '@/components/kazuio/legal-page'

export const metadata: Metadata = {
  title: "Política de Cancelamento, Renovação e Reembolso — Kazuio",
  description: "Renovação, cancelamento, arrependimento e reembolso das assinaturas do Kazuio.",
}

export default function Page() {
  return (
    <LegalPage
      title="Política de Cancelamento, Renovação e Reembolso"
      updated="[data da publicação]"
      intro="Esta política explica como funcionam a renovação, o cancelamento e o reembolso das assinaturas do Kazuio. Ela faz parte dos Termos de Uso."
      sections={[
        {
          heading: "1. Assinatura e renovação automática",
          paragraphs: [
            "Os planos do Kazuio (Experiência, R$ 19,99/mês; Essencial, R$ 39,99/mês; Completo, R$ 79,99/mês) são assinaturas mensais com renovação automática. A primeira cobrança ocorre na contratação, e as seguintes uma vez por mês, no valor do plano escolhido, por cobrança recorrente no Mercado Pago, no meio de pagamento que você cadastrou. Se uma cobrança for recusada, o Mercado Pago pode tentar novamente. Os valores e a periodicidade são mostrados antes da confirmação do pagamento.",
          ],
        },
        {
          heading: "2. Direito de arrependimento: reembolso integral em até 7 dias",
          paragraphs: [
            "Como a contratação é feita pela internet, você pode desistir em até 7 (sete) dias corridos contados da confirmação do primeiro pagamento, sem precisar justificar (art. 49 do Código de Defesa do Consumidor e art. 5º do Decreto nº 7.962/2013).",
            "Como pedir: no app, em Faturação → «Exercer arrependimento e pedir reembolso», ou pelo e-mail kazuio@kazuio.com dentro do prazo.",
            "O que acontece:",
            "— você recebe na tela um número de protocolo e pode acompanhar cada etapa em «Seus pedidos»;",
            "— a assinatura é cancelada e o acesso ao chat é encerrado imediatamente;",
            "— pedimos ao Mercado Pago a devolução integral de todos os valores pagos dentro do prazo, pelo mesmo meio de pagamento. O reembolso só é dado como concluído quando o Mercado Pago o confirma. O momento em que o valor aparece na sua fatura ou conta depende do meio de pagamento e da instituição financeira.",
            "O uso do serviço durante esses 7 dias não reduz o valor devolvido.",
          ],
        },
        {
          heading: "3. Cancelamento da renovação (a qualquer momento)",
          paragraphs: [
            "Você pode cancelar a renovação automática quando quiser, sem multa nem taxa, no app, em Faturação → «Cancelar renovação», ou pelo e-mail kazuio@kazuio.com. Não haverá nova cobrança, e o acesso continua até o fim do período já pago. Depois do prazo de 7 dias do direito de arrependimento, não há reembolso proporcional do período em curso.",
          ],
        },
        {
          heading: "4. Troca de plano",
          paragraphs: [
            "Para trocar de plano, a renovação do plano atual é cancelada (ele continua valendo até o fim do período pago, sem reembolso do restante), e o novo plano começa quando o Mercado Pago confirmar o pagamento. Nunca há duas assinaturas cobrando ao mesmo tempo.",
          ],
        },
        {
          heading: "5. Limite de mensagens e ciclo de uso",
          paragraphs: [
            "O limite de mensagens do seu plano (80, 320 ou 640 por mês) vale por ciclo mensal, contado a partir da data de início da assinatura. Mensagens não usadas não passam para o mês seguinte.",
          ],
        },
        {
          heading: "6. Exclusão da conta",
          paragraphs: [
            "Excluir a conta (Configurações → «Excluir minha conta») apaga a assinatura junto com os seus dados. Se houver uma assinatura ativa, cancele antes a renovação em Faturação → «Cancelar renovação», para que o Mercado Pago não volte a cobrar. [BLOQUEO TÉCNICO, no publicar: hoy excluir la cuenta no cancela la suscripción en Mercado Pago; corregir la app o mantener este aviso tras revisión del abogado.]",
          ],
        },
        {
          heading: "7. Contato",
          paragraphs: [
            "Dúvidas ou pedidos: kazuio@kazuio.com. Operado por Gustavo Merladett Mecol, CPF [CPF A COMPLETAR], SP.",
          ],
        },
      ]}
    />
  )
}
