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
      updated="agosto de 2026"
      intro="Estes Termos e Condições regulam o uso do Kazuio, um espaço de reflexão com inteligência artificial. Ao usar o Kazuio, você concorda com os termos abaixo."
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
            '— Ou procure o pronto-socorro mais próximo.',
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
          heading: '5. Plano gratuito e assinatura',
          paragraphs: [
            '— O plano gratuito inclui um número limitado de mensagens/conversas de uso, conforme informado na interface do produto.',
            '— Ao atingir o limite, você pode assinar um dos planos pagos disponíveis para continuar conversando.',
            '— Os valores e limites de cada plano são exibidos na tela de assinatura antes da confirmação do pagamento, processado via Mercado Pago, podendo ser cancelado a qualquer momento.',
            '— Alterações de preço serão comunicadas com antecedência.',
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
            'Podemos atualizar estes Termos periodicamente. A data no topo desta página reflete a versão vigente. Mudanças significativas serão comunicadas dentro do serviço.',
          ],
        },
        {
          heading: '11. Foro e legislação aplicável',
          paragraphs: [
            'Estes Termos são regidos pelas leis da República Federativa do Brasil.',
          ],
        },
        {
          heading: 'Aviso',
          paragraphs: [
            'Este documento foi elaborado com base em pesquisa regulatória de boa fé e não substitui a revisão de um advogado brasileiro especializado antes de um lançamento comercial.',
          ],
        },
      ]}
    />
  )
}
