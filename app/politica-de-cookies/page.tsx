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
      updated="10 de agosto de 2026"
      intro="Esta página explica o que são cookies, quais tipos o Kazuio utiliza e como você pode gerenciá-los."
      sections={[
        {
          heading: '1. O que são cookies',
          paragraphs: [
            'Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles ajudam o site a lembrar preferências e a entender como é utilizado.',
          ],
        },
        {
          heading: '2. Cookies que utilizamos',
          paragraphs: [
            'Utilizamos cookies essenciais, necessários para o funcionamento básico do site, e cookies analíticos, que nos ajudam a entender de forma agregada e anônima como as pessoas navegam pela Home do Kazuio, para melhorar a experiência.',
            'Não utilizamos cookies de publicidade ou de rastreamento entre sites de terceiros.',
          ],
        },
        {
          heading: '3. Como gerenciar cookies',
          paragraphs: [
            'Você pode configurar seu navegador para bloquear ou apagar cookies a qualquer momento. Bloquear cookies essenciais pode afetar o funcionamento de partes do site.',
          ],
        },
        {
          heading: '4. Alterações desta política',
          paragraphs: [
            'Esta Política de Cookies pode ser atualizada periodicamente. A data da última atualização estará sempre indicada no topo desta página.',
          ],
        },
        {
          heading: '5. Contato',
          paragraphs: [
            'Dúvidas sobre esta política podem ser enviadas para contato@kazuio.com.',
          ],
        },
      ]}
    />
  )
}
