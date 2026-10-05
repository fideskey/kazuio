import type { Metadata } from 'next'
import { LegalPage } from '@/components/kazuio/legal-page'

export const metadata: Metadata = {
  title: 'Termos e Condições — Kazuio',
  description: 'Termos e condições de uso do Kazuio.',
}

export default function Page() {
  return (
    <LegalPage
      title="Termos e Condições"
      updated="outubro de 2026"
      intro="Estes Termos e Condições regulam o uso do Kazuio, um espaço de reflexão com inteligência artificial. Ao usar o Kazuio, você concorda com os termos abaixo."
      summary={[
        'O Kazuio é uma IA de reflexão — não substitui psicólogo, psiquiatra, autoridade religiosa nem atendimento de emergência.',
        'É destinado exclusivamente a maiores de 18 anos.',
        'Você tem 7 dias após assinar um plano para se arrepender e pedir reembolso total, sem precisar justificar (art. 49 do Código de Defesa do Consumidor) — veja a seção 5.1.',
        'Você pode cancelar ou excluir sua conta quando quiser.',
      ]}
      sections={[
        {
          heading: '1. Natureza do serviço',
          paragraphs: [
            'O Kazuio é uma inteligência artificial de acompanhamento emocional. Ela combina reflexões baseadas em Psicologia, Fé e Filosofia — sempre por meio de perguntas ou citações verificadas de autores e tradições reconhecidas, nunca de conselhos diretos ou afirmações fechadas.',
            'O Kazuio NÃO é, e não substitui:',
            '— Um serviço de psicologia, psicoterapia ou aconselhamento psicológico profissional;',
            '— Um serviço de psiquiatria ou medicina — não diagnostica, não prescreve tratamento nem medicação;',
            '— Um serviço de orientação religiosa oficial de qualquer tradição;',
            '— Atendimento de emergência ou crise.',
            'O Kazuio nunca finge ser humano. Ao usar o serviço, você reconhece estar conversando com uma inteligência artificial.',
          ],
        },
        {
          heading: '2. Situações de emergência',
          paragraphs: [
            'Se você está em risco imediato ou pensando em se machucar, o Kazuio não é suficiente. Procure ajuda imediatamente:',
            '— CVV — Centro de Valorização da Vida: ligue 188 (gratuito, 24h) ou acesse cvv.org.br para chat online.',
            '— SAMU: 192',
            '— Polícia: 190 · Bombeiros: 193',
            '— CAPS (Centro de Atenção Psicossocial) ou UPA 24h da sua cidade, ou o pronto-socorro mais próximo.',
          ],
        },
        {
          heading: '3. Idade mínima',
          paragraphs: [
            'Este serviço é destinado exclusivamente a maiores de 18 anos. No cadastro, você confirma ativamente ter 18 anos ou mais. Se, ao longo do uso, identificarmos ou suspeitarmos que um usuário é menor de idade, a conversa será encerrada com orientação para buscar um adulto de confiança, e a conta poderá ser suspensa.',
          ],
        },
        {
          heading: '4. Cadastro e conta',
          paragraphs: [
            'Para usar o Kazuio, você precisa criar uma conta com email e senha, ou entrar com sua conta Google. Você é responsável por manter a confidencialidade da sua senha e por todas as atividades realizadas na sua conta.',
          ],
        },
        {
          heading: '5. Planos e assinatura',
          paragraphs: [
            '— O Kazuio é oferecido exclusivamente por meio de planos pagos, sem versão gratuita.',
            '— Os valores e limites de cada plano são exibidos na página de Preços e na tela de assinatura antes da confirmação do pagamento, processado via Mercado Pago. A assinatura é mensal e renova automaticamente até ser cancelada: a primeira cobrança ocorre logo após a confirmação da contratação, e as seguintes a cada mês, no valor do plano escolhido, por meio de cobrança recorrente no Mercado Pago. Se uma cobrança for recusada, o Mercado Pago pode tentar cobrar novamente. Para cancelar a renovação, escreva para kazuio@kazuio.com.',
            '— Limites de mensagens: Experiência, 80; Essencial, 320; Completo, 640 mensagens por ciclo de 30 dias. Cada mensagem que você envia conta como uma; as respostas do Kazuio não contam. Ao atingir o limite, não é possível enviar novas mensagens até o início do ciclo seguinte; as mensagens não usadas não se acumulam. O ciclo de uso de 30 dias não coincide necessariamente com a data da cobrança.',
            '— Alterações de preço serão comunicadas com antecedência.',
          ],
        },
        {
          heading: '5.1 Direito de arrependimento (Código de Defesa do Consumidor)',
          paragraphs: [
            'Como a contratação do Kazuio é feita fora de um estabelecimento físico (compra digital), você tem direito de se arrepender da assinatura em até 7 (sete) dias corridos a partir da confirmação do pagamento, conforme o art. 49 da Lei nº 8.078/1990 (Código de Defesa do Consumidor) — sem precisar apresentar nenhuma justificativa.',
            'Para exercer esse direito, entre em contato pelo email kazuio@kazuio.com dentro desse prazo. Ao receber o seu pedido, o Kazuio envia a confirmação de recebimento, cancela a assinatura e comunica imediatamente o exercício do direito ao Mercado Pago, administrador do pagamento, para que a cobrança não seja lançada na sua fatura ou, se já lançada, seja estornada (Decreto nº 7.962/2013, art. 5º).',
            'Os valores pagos durante esse prazo são devolvidos de imediato e de forma integral, pelo mesmo meio de pagamento utilizado (CDC, art. 49, parágrafo único). O momento em que o valor aparece na sua fatura ou conta depende do meio de pagamento e da instituição financeira.',
            'Após o prazo de 7 dias, o cancelamento continua disponível a qualquer momento, mas passa a valer somente a partir do fim do ciclo já pago, sem reembolso proporcional do período em curso.',
          ],
        },
        {
          heading: '6. Uso adequado',
          paragraphs: [
            'Você concorda em não usar o Kazuio para: contornar o protocolo de segurança em situações de risco; enviar conteúdo ilegal, ofensivo ou que viole direitos de terceiros; tentar extrair, copiar ou redistribuir a base de citações verificadas do Kazuio; ou usar o serviço para fins diferentes do acompanhamento pessoal e reflexivo a que se destina.',
          ],
        },
        {
          heading: '7. Conteúdo e citações',
          paragraphs: [
            'O Kazuio cita exclusivamente de uma base de dados curada e verificada de autores, filósofos e textos religiosos — nunca de memória livre nem de buscas na internet. Ainda assim, como toda inteligência artificial, o Kazuio pode eventualmente cometer erros na formulação das respostas; verifique qualquer informação importante de forma independente.',
            'Se uma resposta parecer incorreta, ofensiva ou insegura, você pode nos avisar — veja a seção 11 da nossa Política de Privacidade.',
          ],
        },
        {
          heading: '8. Privacidade',
          paragraphs: [
            'O tratamento dos seus dados pessoais está detalhado na nossa Política de Privacidade, que faz parte integrante destes Termos.',
          ],
        },
        {
          heading: '9. Rescisão',
          paragraphs: [
            'Você pode encerrar sua conta a qualquer momento pelas Configurações. Reservamo-nos o direito de suspender ou encerrar contas que violem estes Termos, com aviso prévio quando possível.',
          ],
        },
        {
          heading: '10. Alterações destes Termos',
          paragraphs: [
            'Podemos atualizar estes Termos periodicamente. A data no topo desta página reflete a versão vigente. Alterações relevantes serão comunicadas dentro do serviço e por email com antecedência mínima de 30 (trinta) dias antes de entrarem em vigor. Se você não concordar, poderá cancelar sua assinatura antes dessa data.',
          ],
        },
        {
          heading: '11. Foro e legislação aplicável',
          paragraphs: [
            'Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro do domicílio do consumidor para dirimir quaisquer controvérsias, nos termos do art. 101, I, do Código de Defesa do Consumidor.',
          ],
        },
      ]}
    />
  )
}
