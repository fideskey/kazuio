import type { Metadata } from 'next'
import { LegalPage } from '@/components/kazuio/legal-page'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Kazuio',
  description: 'Como o Kazuio trata os dados e a privacidade das conversas.',
}

export default function Page() {
  return (
    <LegalPage
      title="Política de Privacidade"
      updated="agosto de 2026"
      intro="Esta Política de Privacidade explica como o Kazuio coleta, usa, armazena e protege suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)."
      sections={[
        {
          heading: '1. Quem somos',
          paragraphs: [
            'Kazuio é um espaço de acompanhamento emocional que combina Psicologia, Fé e Filosofia. Somos uma inteligência artificial — nunca fingimos ser humanos. Não somos um serviço de psicologia, psiquiatria ou medicina licenciado, não diagnosticamos, não prescrevemos tratamento, e não substituímos o acompanhamento de um profissional de saúde mental.',
          ],
        },
        {
          heading: '2. Dados sensíveis: um aviso especial',
          paragraphs: [
            'O conteúdo das suas conversas com o Kazuio — incluindo referências ao seu estado emocional, saúde mental ou situação de vida — é tratado como dado pessoal sensível nos termos do art. 5º, II da LGPD (dado referente à saúde). Por isso, o tratamento desses dados é feito com base no consentimento específico e destacado, conforme exige o art. 11, I da LGPD para dados sensíveis — não com base em interesse legítimo nem em qualquer outra hipótese menos restritiva. Pedimos esse consentimento explicitamente no momento do cadastro, não através de um aceite genérico.',
          ],
        },
        {
          heading: '3. Quais informações coletamos',
          paragraphs: [
            '— Dados de cadastro: nome e email.',
            '— Conteúdo das conversas: as mensagens que você troca com o Kazuio, para dar continuidade ao acompanhamento entre uma conversa e outra.',
            '— Resumo de memória entre conversas: quando você inicia uma conversa nova, geramos um resumo curto e cumulativo da sua situação (não a transcrição completa das conversas anteriores), para que o Kazuio não precise repetir perguntas já respondidas. Esse resumo fica associado ao seu perfil e é apagado junto com sua conta.',
            '— Uso do serviço: quantidade de mensagens utilizadas, e se cada citação oferecida foi marcada como útil ou não (para melhorar a curadoria — de forma agregada, não vinculada a você especificamente).',
            '— Localização aproximada: estado e cidade dentro do Brasil, deduzidos do seu endereço IP no momento do login — nunca sua localização GPS exata. Usado apenas para estatísticas agregadas de uso.',
            '— Dados de pagamento: caso você assine um plano pago, os dados de pagamento são processados diretamente pelo Mercado Pago; o Kazuio não armazena números de cartão nem dados financeiros completos.',
          ],
        },
        {
          heading: '4. Como usamos essas informações',
          paragraphs: [
            'Usamos seus dados exclusivamente para: (a) manter a continuidade do acompanhamento entre conversas; (b) gerar um resumo interno breve da sua situação, para que o Kazuio não "esqueça" o que você já contou; (c) avaliar, de forma agregada e anônima, se as citações oferecidas realmente ajudam as pessoas; e (d) cumprir obrigações legais quando aplicável.',
            'Não usamos seus dados para treinar modelos de inteligência artificial de terceiros, nem para fins de publicidade.',
          ],
        },
        {
          heading: '5. Compartilhamento com terceiros',
          paragraphs: [
            'Não vendemos, alugamos nem compartilhamos o conteúdo das suas conversas com terceiros para fins comerciais. Utilizamos os seguintes fornecedores, que atuam como operadores de dados sob nossas instruções, não como destinatários finais dos seus dados:',
            '— Anthropic (empresa responsável pelo modelo de IA Claude, que gera as respostas do Kazuio): processa o conteúdo das suas mensagens em infraestrutura localizada principalmente nos Estados Unidos. Isso caracteriza transferência internacional de dados, amparada por Cláusulas-Padrão Contratuais (SCCs) previstas em Acordo de Processamento de Dados (DPA) com a Anthropic. Seus dados não são utilizados para treinar modelos de terceiros, e são retidos pela Anthropic por prazo curto (atualmente 7 dias) antes de exclusão automática.',
            '— Voyage AI: processa trechos do conteúdo das suas mensagens para viabilizar a busca de reflexões relevantes na nossa biblioteca curada (busca semântica). Também envolve processamento fora do Brasil.',
            '— Supabase (nossa infraestrutura de banco de dados): armazena seus dados de forma segura, hospedados em servidores localizados no Brasil (São Paulo).',
            '— Mercado Pago: processa os dados relacionados ao pagamento da sua assinatura (como CPF e status da transação), operando como controlador independente dos dados de pagamento propriamente ditos (os dados do seu cartão nunca chegam até o Kazuio).',
          ],
        },
        {
          heading: '6. Seus direitos (art. 18 da LGPD)',
          paragraphs: [
            'Você tem direito a, a qualquer momento:',
            '— Acessar os dados que temos sobre você;',
            '— Corrigir dados incompletos, inexatos ou desatualizados (ex: editar seu nome em Configurações);',
            '— Apagar seu histórico de conversas, a qualquer momento, pelo botão "Apagar todo o histórico" em Configurações;',
            '— Eliminar totalmente sua conta e todos os dados associados, pelo botão "Excluir minha conta" em Configurações;',
            '— Revogar seu consentimento ao tratamento de dados sensíveis a qualquer momento, o que pode implicar o encerramento da conta, já que o serviço depende desse tratamento para funcionar;',
            '— Solicitar informações sobre com quem compartilhamos seus dados, entrando em contato pelo canal abaixo.',
          ],
        },
        {
          heading: '7. Segurança',
          paragraphs: [
            'Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo criptografia em trânsito (conexões HTTPS) e em repouso, controle de acesso restrito, e políticas de segurança em nível de linha de banco de dados que impedem que um usuário acesse os dados de outro.',
          ],
        },
        {
          heading: '8. Retenção de dados',
          paragraphs: [
            'Mantemos seus dados enquanto sua conta estiver ativa. Ao excluir sua conta, seus dados pessoais e o conteúdo das conversas são apagados permanentemente dos nossos sistemas de produção.',
          ],
        },
        {
          heading: '9. Incidentes de segurança',
          paragraphs: [
            'Em caso de incidente de segurança que possa acarretar risco relevante aos seus dados, notificaremos a Autoridade Nacional de Proteção de Dados (ANPD) e, quando aplicável, você, conforme exigido pela LGPD.',
          ],
        },
        {
          heading: '10. Contato',
          paragraphs: [
            'Para exercer qualquer um dos direitos acima, ou tirar dúvidas sobre esta política, entre em contato pelo email: kazuio@kazuio.com',
          ],
        },
        {
          heading: 'Aviso',
          paragraphs: [
            'Este documento foi elaborado com base em pesquisa regulatória de boa fé e não substitui a revisão de um advogado brasileiro especializado em proteção de dados. Recomendamos essa revisão profissional antes de um lançamento comercial.',
          ],
        },
      ]}
    />
  )
}
