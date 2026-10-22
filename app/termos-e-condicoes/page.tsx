import type { Metadata } from 'next'
import { LegalPage } from '@/components/kazuio/legal-page'

export const metadata: Metadata = {
  title: "Termos de Uso — Kazuio",
  description: "Termos de uso do Kazuio.",
}

export default function Page() {
  return (
    <LegalPage
      title="Termos de Uso"
      updated="[data da publicação]"
      intro="Estes Termos regulam o uso do Kazuio (kazuio.com e app.kazuio.com). Ao criar uma conta ou usar o Kazuio, você concorda com eles."
      summary={[
        "O Kazuio é uma inteligência artificial de reflexão. Não substitui psicólogo, psiquiatra, autoridade religiosa nem atendimento de emergência.",
        "É exclusivo para maiores de 18 anos.",
        "Há três planos mensais pagos, com limite de mensagens por mês. A assinatura renova automaticamente até você cancelar.",
        "Você pode desistir em até 7 dias corridos após o pagamento e receber o valor de volta (art. 49 do CDC).",
      ]}
      sections={[
        {
          heading: "1. Quem presta o serviço",
          paragraphs: [
            "O Kazuio é operado por Gustavo Merladett Mecol, pessoa física, inscrito no CPF sob o nº [CPF A COMPLETAR], com endereço em SP. Atendimento: kazuio@kazuio.com.",
          ],
        },
        {
          heading: "2. Natureza do serviço",
          paragraphs: [
            "O Kazuio é um espaço de reflexão com inteligência artificial [VERIFICAR CON ABOGADO: el texto actual dice «acompanhamento emocional»; evaluar art. 282 del Código Penal y Resoluciones CFP 11/2018 y 04/2020]. Ele oferece perguntas e citações verificadas de autores e tradições da Psicologia, da Fé e da Filosofia, nunca conselhos profissionais.",
            "O Kazuio NÃO é e não substitui:",
            "— um serviço de psicologia, psicoterapia ou aconselhamento psicológico;",
            "— um serviço de psiquiatria ou medicina: não diagnostica, não prescreve tratamento nem medicação;",
            "— orientação religiosa oficial de qualquer tradição;",
            "— atendimento de emergência ou crise.",
            "O Kazuio nunca finge ser humano. Ao usar o serviço, você reconhece que está conversando com uma inteligência artificial, que pode cometer erros.",
          ],
        },
        {
          heading: "3. Situações de emergência",
          paragraphs: [
            "Se você está em risco imediato ou pensando em se machucar, o Kazuio não é suficiente. Procure ajuda agora:",
            "— CVV — Centro de Valorização da Vida: ligue 188 (gratuito, 24 horas) ou acesse cvv.org.br;",
            "— SAMU: 192;",
            "— Polícia: 190 · Bombeiros: 193;",
            "— CAPS, UPA 24h ou o pronto-socorro mais próximo.",
          ],
        },
        {
          heading: "4. Idade mínima",
          paragraphs: [
            "O Kazuio é destinado exclusivamente a pessoas com 18 anos ou mais. No cadastro, você confirma ativamente ter 18 anos ou mais. Se identificarmos ou suspeitarmos que um usuário é menor de idade, a conversa será encerrada com a orientação de procurar um adulto de confiança, e a conta poderá ser encerrada e seus dados excluídos. [VERIFICAR CON ABOGADO: ECA Digital.] [NOTA INTERNA, no publicar: hoy la confirmación de 18 años solo existe en el registro por correo; añadirla al acceso con Google antes de publicar esta frase.]",
          ],
        },
        {
          heading: "5. Conta",
          paragraphs: [
            "Você pode criar uma conta com e-mail e senha ou entrar com sua conta Google. Você é responsável por manter sua senha em sigilo e pelas atividades realizadas na sua conta. Para usar o chat, é preciso aceitar o consentimento específico sobre dados de saúde emocional descrito na Política de Privacidade.",
          ],
        },
        {
          heading: "6. Planos, preços e limites",
          paragraphs: [
            "O Kazuio é oferecido apenas por meio de planos pagos, sem versão gratuita do chat. Todos os planos dão acesso aos mesmos recursos; muda apenas a quantidade de mensagens:",
            "— Experiência: R$ 19,99 por mês, até 80 mensagens por mês;",
            "— Essencial: R$ 39,99 por mês, até 320 mensagens por mês;",
            "— Completo: R$ 79,99 por mês, até 640 mensagens por mês.",
            "Conta como mensagem cada mensagem que você envia; as respostas do Kazuio não contam. O ciclo de uso é mensal e começa na data de início da sua assinatura (por exemplo, de 15 de um mês a 14 do mês seguinte). Ao atingir o limite, não é possível enviar novas mensagens até o início do ciclo seguinte. Mensagens não usadas não se acumulam. Os preços e limites vigentes também aparecem na página de Preços e na tela de assinatura antes do pagamento. Mudanças de preço serão comunicadas com pelo menos 30 dias de antecedência.",
          ],
        },
        {
          heading: "7. Pagamento, renovação, cancelamento e reembolso",
          paragraphs: [
            "O pagamento é processado pelo Mercado Pago. A assinatura é mensal e renova automaticamente, no valor do plano escolhido, até ser cancelada. Você pode cancelar a renovação a qualquer momento, sem multa, no app, em Faturação → «Cancelar renovação», ou pelo e-mail kazuio@kazuio.com. O acesso continua até o fim do período já pago. Em até 7 dias corridos após a confirmação do primeiro pagamento, você pode exercer o direito de arrependimento e receber o valor pago de volta integralmente. As regras completas estão na Política de Cancelamento, Renovação e Reembolso (kazuio.com/cancelamento-e-reembolso), que faz parte destes Termos.",
          ],
        },
        {
          heading: "8. Uso adequado",
          paragraphs: [
            "Você concorda em não usar o Kazuio para: contornar os mecanismos de segurança em situações de risco; enviar conteúdo ilegal, ofensivo ou que viole direitos de terceiros; tentar extrair, copiar ou redistribuir a biblioteca de citações; tentar acessar dados de outras pessoas ou atacar o serviço; ou usar o serviço para fins diferentes da reflexão pessoal.",
          ],
        },
        {
          heading: "9. Conteúdo, citações e propriedade intelectual",
          paragraphs: [
            "O Kazuio cita exclusivamente de uma biblioteca curada e verificada, nunca de memória livre nem de buscas na internet. Ainda assim, a inteligência artificial pode errar na formulação das respostas. Verifique de forma independente qualquer informação importante. A plataforma, a interface, a organização da biblioteca e a marca Kazuio pertencem ao operador. As citações pertencem aos seus autores e são usadas para fins de reflexão.",
          ],
        },
        {
          heading: "10. Privacidade",
          paragraphs: [
            "O tratamento dos seus dados está descrito na Política de Privacidade, que faz parte destes Termos.",
          ],
        },
        {
          heading: "11. Encerramento",
          paragraphs: [
            "Você pode excluir sua conta a qualquer momento em Configurações → «Excluir minha conta». Podemos suspender ou encerrar contas que violem estes Termos, com aviso prévio quando possível.",
          ],
        },
        {
          heading: "12. Alterações destes Termos",
          paragraphs: [
            "Alterações relevantes serão comunicadas no app e por e-mail com pelo menos 30 dias de antecedência. Se você não concordar, poderá cancelar a assinatura sem ônus antes da entrada em vigor. Se a alteração afetar o tratamento de dados sensíveis ou as condições de pagamento, pediremos um novo aceite.",
          ],
        },
        {
          heading: "13. Lei aplicável e foro",
          paragraphs: [
            "Estes Termos são regidos pelas leis do Brasil. Fica eleito o foro do domicílio do consumidor (art. 101, I, do Código de Defesa do Consumidor).",
          ],
        },
      ]}
    />
  )
}
