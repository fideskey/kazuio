import type { Metadata } from 'next'
import { LegalPage } from '@/components/kazuio/legal-page'

export const metadata: Metadata = {
  title: "Política de Privacidade — Kazuio",
  description: "Como o Kazuio trata os dados e a privacidade das conversas.",
}

export default function Page() {
  return (
    <LegalPage
      title="Política de Privacidade"
      updated="[data da publicação]"
      intro="Esta Política de Privacidade explica como o Kazuio coleta, usa, armazena, compartilha e protege suas informações, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)."
      summary={[
        "Suas conversas podem conter dados sensíveis de saúde. Só as tratamos com o seu consentimento específico, registrado com data e versão.",
        "Não vendemos seus dados e não os usamos para publicidade.",
        "Você pode apagar uma conversa, todo o histórico ou a conta inteira a qualquer momento, pelo próprio app.",
        "Algumas empresas que nos prestam serviços ficam fora do Brasil. Abaixo explicamos quais são, o que recebem e por quê.",
      ]}
      sections={[
        {
          heading: "1. Quem é o responsável pelos seus dados",
          paragraphs: [
            "O Kazuio é operado por Gustavo Merladett Mecol, pessoa física, inscrito no CPF sob o nº [CPF A COMPLETAR], com endereço em SP. Contato, inclusive para assuntos de privacidade: kazuio@kazuio.com.",
          ],
        },
        {
          heading: "2. O que é o Kazuio",
          paragraphs: [
            "O Kazuio é um espaço de reflexão com inteligência artificial que combina Psicologia, Fé e Filosofia. Somos uma inteligência artificial e nunca fingimos ser humanos. Não somos um serviço de psicologia, psiquiatria ou medicina; não diagnosticamos, não prescrevemos tratamento e não substituímos o acompanhamento de um profissional de saúde mental. O serviço é destinado exclusivamente a maiores de 18 anos.",
          ],
        },
        {
          heading: "3. Dados sensíveis: consentimento específico",
          paragraphs: [
            "O conteúdo das suas conversas pode revelar informações sobre sua saúde emocional e mental, que são dados pessoais sensíveis (art. 5º, II, da LGPD). Por isso, tratamos esse conteúdo com base no seu consentimento específico e destacado (art. 11, I, da LGPD), pedido em um aviso próprio, separado do aceite dos Termos: no cadastro por e-mail ou, se você entrar com o Google, no primeiro acesso ao chat. Esse consentimento é necessário para usar o Kazuio. Sem ele, o chat não funciona; o próprio servidor confere o aceite antes de processar qualquer mensagem. O aceite fica registrado com a data e a versão do texto aceito.",
            "Se você mencionar sua religião ou tradição de fé, esse dado também é sensível. Para usá-lo na personalização das reflexões e citações, pedimos um consentimento separado e opcional. Você pode recusá-lo sem perder acesso ao restante do app.",
            "Você pode revogar esses consentimentos a qualquer momento (veja a seção 10).",
          ],
        },
        {
          heading: "4. Quais dados coletamos",
          paragraphs: [
            "— Dados de cadastro: nome e e-mail. Se você entrar com o Google, o Google nos informa também seu nome completo e o endereço da sua foto de perfil, que ficam registrados na sua conta.",
            "— Conteúdo das conversas: as mensagens que você troca com o Kazuio.",
            "— Resumo de memória: um resumo curto e cumulativo das suas conversas anteriores, para que o Kazuio não precise repetir perguntas já respondidas.",
            "— Estado da conversa: marcações técnicas sobre a etapa da conversa. Não incluem hipóteses psicológicas nem dados de fé.",
            "— Uso do serviço: quantas mensagens você usou no ciclo e, se você marcar, se uma citação foi útil.",
            "— Registros de consentimento: versão e data do aceite; se você autorizou ou não o uso do dado de fé.",
            "— Localização aproximada: país, estado e cidade, estimados a partir do seu endereço IP por um serviço externo (ipapi.co), no máximo uma vez por sessão do navegador. Nunca usamos GPS. Esse dado fica registrado no seu perfil, pode ser visto pelo administrador e é usado para estatísticas de uso.",
            "— Resultado da identificação automática de risco: apenas o tipo e o resultado (sim/não), vinculados à mensagem, sem cópia do texto.",
            "— Dados de assinatura e pagamento: plano, situação e datas da assinatura, valores e identificadores das transações no Mercado Pago. Não armazenamos números de cartão nem dados bancários completos.",
            "— Estatísticas de visitas ao site: por meio do Vercel Web Analytics, coletamos de forma agregada as páginas visitadas, o país, a origem do acesso (site de referência), os parâmetros de campanha (UTM) e o tipo de dispositivo, sem cookies de rastreamento entre sites.",
          ],
        },
        {
          heading: "5. Para que usamos e com que base legal",
          paragraphs: [
            "— Prestar o serviço contratado (conta, chat, cota de mensagens, assinatura): execução de contrato (art. 7º, V, da LGPD).",
            "— Tratar o conteúdo das conversas, o resumo de memória e a identificação de risco: consentimento específico (art. 11, I, da LGPD).",
            "— Personalizar reflexões com a sua tradição de fé: consentimento específico e opcional (art. 11, I, da LGPD).",
            "— Guardar registros de pagamento e de pedidos de cancelamento e reembolso: cumprimento de obrigação legal e exercício regular de direitos (art. 7º, II e VI, da LGPD).",
            "— Estatísticas de visitas ao site e localização aproximada para estatísticas de uso: legítimo interesse (art. 7º, IX, da LGPD), de forma limitada [VERIFICAR CON ABOGADO: base legal de la localización por IP guardada en el perfil].",
            "Não usamos seus dados para publicidade nem os vendemos. Não usamos suas conversas para treinar modelos de inteligência artificial.",
            "[VERIFICAR CON ABOGADO: Marco Civil, art. 15 (registros de acceso 6 meses). Hoy no se conservan; decidir si aplica a persona física y, si aplica, implementarlo antes de afirmarlo.]",
          ],
        },
        {
          heading: "6. Com quem compartilhamos e onde os dados são processados",
          paragraphs: [
            "Não vendemos nem cedemos seus dados para fins comerciais. Os fornecedores abaixo tratam dados em nosso nome, apenas para prestar o serviço:",
            "— Supabase: banco de dados e autenticação. Servidores em São Paulo, Brasil.",
            "— Anthropic (Estados Unidos): gera as respostas do Kazuio e recebe o conteúdo das mensagens necessárias para isso.",
            "— Voyage AI (Estados Unidos): recebe apenas até 6 palavras-chave curtas de temas (por exemplo, «luto», «ansiedade»), sem seu nome, e-mail ou o texto das mensagens, para buscar reflexões na nossa biblioteca.",
            "— Vercel: hospeda o site e mede as visitas de forma agregada. Pode envolver processamento fora do Brasil.",
            "— SendGrid (Twilio) (Estados Unidos): envia os e-mails da conta, como confirmação de cadastro e recuperação de senha.",
            "— Mercado Pago (Brasil): processa os pagamentos e as assinaturas, como controlador independente dos dados de pagamento.",
            "— Google (Estados Unidos): autentica seu acesso se você escolher entrar com a conta Google.",
            "— ipapi.co: recebe seu endereço IP para estimar país, estado e cidade. Pode envolver processamento fora do Brasil.",
            "Transferência internacional. Quando um fornecedor está fora do Brasil, há transferência internacional de dados (art. 33 da LGPD). O que fazemos para reduzir os riscos:",
            "— Enviamos a cada fornecedor apenas o necessário para a sua função. A Voyage AI, por exemplo, recebe só palavras-chave.",
            "— Usamos as modalidades comerciais dos serviços, cujos termos declaram não usar os dados enviados para treinar modelos [VERIFICAR CON ABOGADO: confirmar en los términos vigentes de Anthropic y Voyage AI].",
            "— Não enviamos dados de pagamento a esses fornecedores.",
            "[VERIFICAR CON ABOGADO: DPA con cada proveedor extranjero y cláusulas-padrão de la Resolución CD/ANPD nº 19/2024. No afirmar «garantimos» hasta tenerlo.]",
          ],
        },
        {
          heading: "7. Dados recebidos do Google",
          paragraphs: [
            "Se você entrar com sua conta Google, recebemos apenas seu e-mail e as informações básicas do perfil público (nome e foto de perfil). Usamos esses dados exclusivamente para autenticar sua identidade, criar e dar acesso à sua conta. O uso de informações recebidas das APIs do Google segue a Política de Dados do Usuário dos Serviços de API do Google (Google API Services User Data Policy), incluindo os requisitos de Uso Limitado. Não usamos, não compartilhamos e não transferimos esses dados para publicidade nem os vendemos.",
          ],
        },
        {
          heading: "8. Por quanto tempo guardamos",
          paragraphs: [
            "— Conta e perfil (nome, e-mail, localização aproximada, contador de mensagens, resumo de memória, registros de consentimento): enquanto a conta existir. São apagados quando você exclui a conta.",
            "— Conversas e mensagens: até você apagá-las (uma conversa, todo o histórico ou a conta). Hoje não há exclusão automática por prazo.",
            "— Resultado da identificação de risco (sem texto): é apagado junto com a mensagem a que se refere.",
            "— Estatísticas da busca de citações: sem identificação de usuário nem de conversa e com data registrada apenas por dia. São mantidas para melhorar a biblioteca [VERIFICAR CON ABOGADO: definir plazo máximo].",
            "— Registros técnicos de cota: até 30 dias.",
            "— Pagamentos e pedidos de assinatura, cancelamento e reembolso: quando você exclui a conta, a assinatura é apagada. Os registros de pagamentos e pedidos (valores, datas e identificadores do Mercado Pago) são mantidos, desvinculados da conta, para cumprir obrigações legais, fiscais e de defesa do consumidor [VERIFICAR CON ABOGADO: plazo].",
            "— Nos fornecedores: a Anthropic aplica sua própria política de retenção (segundo a informação disponível, até 30 dias, ou mais se a conversa for sinalizada pelos seus sistemas de segurança) [VERIFICAR CON ABOGADO: confirmar con la política vigente]. O Mercado Pago e o Google seguem suas próprias políticas. Os registros técnicos de infraestrutura são mantidos pelo prazo curto definido pelos fornecedores.",
          ],
        },
        {
          heading: "9. Como apagar seus dados e sua conta",
          paragraphs: [
            "— Uma conversa: na lista de conversas, escolha a conversa e exclua. Apagamos a conversa, suas mensagens e os registros técnicos ligados a ela.",
            "— Todo o histórico: em Configurações → «Apagar todo o histórico». Apaga todas as conversas, mensagens, o resumo de memória e os dados derivados delas.",
            "— A conta inteira: em Configurações → «Excluir minha conta». Apaga seu perfil, conversas, mensagens, resumo de memória, assinatura e seu login (e-mail e senha ou vínculo com o Google). Por segurança, podemos pedir que você entre novamente antes de confirmar. A exclusão não pode ser desfeita. Os registros de pagamento seguem a regra da seção 8.",
            "— Também pode pedir por e-mail: kazuio@kazuio.com.",
          ],
        },
        {
          heading: "10. Seus direitos (art. 18 da LGPD)",
          paragraphs: [
            "Você pode, a qualquer momento: confirmar se tratamos seus dados e acessá-los; corrigir dados incompletos ou desatualizados (por exemplo, seu nome, em Configurações); pedir anonimização, bloqueio ou eliminação de dados desnecessários; pedir a portabilidade em formato estruturado; saber com quem compartilhamos seus dados; revogar seus consentimentos; e se opor a um tratamento específico. A revogação do consentimento de saúde impede o uso do chat, porque o serviço depende desse tratamento; a do consentimento de fé não afeta o restante do app.",
            "Atendemos gratuitamente. Quando possível, respondemos de imediato em formato simplificado. A declaração completa é fornecida em até 15 dias. Para exercer seus direitos: kazuio@kazuio.com.",
          ],
        },
        {
          heading: "11. Segurança",
          paragraphs: [
            "Usamos conexões criptografadas (HTTPS), criptografia dos dados armazenados pela infraestrutura, acesso restrito e regras no banco de dados que impedem que um usuário veja os dados de outro.",
          ],
        },
        {
          heading: "12. Incidentes de segurança",
          paragraphs: [
            "Se ocorrer um incidente que possa acarretar risco ou dano relevante, comunicaremos a ANPD e as pessoas afetadas em até 3 dias úteis a partir do momento em que soubermos que ele afetou dados pessoais, conforme a Resolução CD/ANPD nº 15/2024, e manteremos o registro do incidente por pelo menos 5 anos.",
          ],
        },
        {
          heading: "13. Encarregado e contato",
          paragraphs: [
            "Encarregado pelo tratamento de dados pessoais (art. 41 da LGPD): Gustavo Merladett Mecol. Contato: kazuio@kazuio.com.",
          ],
        },
        {
          heading: "14. Conteúdo problemático da IA",
          paragraphs: [
            "O Kazuio cita apenas de uma biblioteca verificada, mas nenhuma inteligência artificial está livre de erros. Se uma resposta parecer incorreta, ofensiva ou insegura, escreva para kazuio@kazuio.com contando o que aconteceu. Este canal não é para emergências: em risco imediato, ligue para o CVV (188) ou para o SAMU (192).",
          ],
        },
        {
          heading: "15. Identificação automatizada de risco (art. 20 da LGPD)",
          paragraphs: [
            "Um sistema automatizado identifica sinais de risco (por exemplo, menção a autolesão) para adaptar a resposta e priorizar canais de ajuda. Essa identificação não encerra seu contrato nem lhe nega direitos. Você pode pedir a revisão de decisões tomadas unicamente com base em tratamento automatizado e informações sobre os critérios usados, pelo e-mail kazuio@kazuio.com.",
          ],
        },
        {
          heading: "16. Menores de idade",
          paragraphs: [
            "O Kazuio é destinado exclusivamente a maiores de 18 anos. Se identificarmos uma conta de menor de idade, ela será encerrada e seus dados excluídos. [VERIFICAR CON ABOGADO: ECA Digital.]",
          ],
        },
        {
          heading: "17. Alterações desta Política",
          paragraphs: [
            "Alterações relevantes serão comunicadas no app e por e-mail com pelo menos 30 dias de antecedência. Se a alteração mudar o tratamento de dados sensíveis, pediremos um novo aceite antes de você continuar usando o chat.",
          ],
        },
      ]}
    />
  )
}
