import type { Metadata } from 'next'
import { LegalPage } from '@/components/kazuio/legal-page'

export const metadata: Metadata = {
  title: 'Política de Cookies — Kazuio',
  description: 'Como o Kazuio utiliza cookies e tecnologias similares.',
}

export default function Page() {
  return (
    <LegalPage
      title="Política de Cookies"
      updated="agosto de 2026"
      intro="Esta página explica quais tecnologias de armazenamento local o Kazuio utiliza e como você pode gerenciá-las."
      sections={[
        {
          heading: '1. O que usamos',
          paragraphs: [
            'O Kazuio usa o armazenamento local do seu navegador (localStorage) para manter sua sessão ativa depois que você faz login — isto é, para que você não precise digitar sua senha a cada mensagem. Essa tecnologia cumpre a mesma função de um cookie de autenticação, mas tecnicamente não é um cookie tradicional.',
          ],
        },
        {
          heading: '2. O que NÃO usamos',
          paragraphs: [
            'Não usamos cookies ou tecnologias similares de rastreamento publicitário, não vendemos dados de navegação a terceiros, e não exibimos anúncios de terceiros dentro do serviço.',
          ],
        },
        {
          heading: '3. Dados de localização aproximada',
          paragraphs: [
            'No momento do login, consultamos um serviço externo para estimar seu estado e cidade a partir do seu endereço IP (nunca sua localização GPS exata). Isso é usado apenas para estatísticas agregadas de uso, não para rastreamento individual entre sites.',
          ],
        },
        {
          heading: '4. Como gerenciar',
          paragraphs: [
            'Você pode apagar os dados de armazenamento local do Kazuio a qualquer momento pelas configurações de privacidade do seu navegador. Isso vai encerrar sua sessão, exigindo que você faça login novamente.',
          ],
        },
      ]}
    />
  )
}
