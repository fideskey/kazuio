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
      updated="10 de agosto de 2026"
      intro="A privacidade das suas conversas é um princípio central do Kazuio. Esta política explica quais dados coletamos, como usamos e quais são os seus direitos."
      sections={[
        {
          heading: '1. Quais dados coletamos',
          paragraphs: [
            'Coletamos os dados necessários para criar e manter sua conta (como e-mail), o conteúdo das conversas que você tem com o Kazuio, e informações técnicas básicas de uso do serviço (como dispositivo e horário de acesso).',
          ],
        },
        {
          heading: '2. Como usamos seus dados',
          paragraphs: [
            'Os dados são usados exclusivamente para operar o Kazuio, manter o histórico das suas conversas quando aplicável, e melhorar a qualidade das respostas e reflexões oferecidas.',
            'Suas conversas nunca são vendidas, compartilhadas com anunciantes ou usadas para fins publicitários.',
          ],
        },
        {
          heading: '3. Compartilhamento de dados',
          paragraphs: [
            'Não compartilhamos o conteúdo das suas conversas com terceiros, exceto quando exigido por lei ou ordem judicial, ou com prestadores de serviço estritamente necessários para operar a infraestrutura do Kazuio, sob obrigações de confidencialidade.',
          ],
        },
        {
          heading: '4. Segurança',
          paragraphs: [
            'Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração indevida.',
          ],
        },
        {
          heading: '5. Seus direitos',
          paragraphs: [
            'Você pode solicitar a qualquer momento acesso, correção ou exclusão dos seus dados pessoais, entrando em contato pelo e-mail contato@kazuio.com.',
          ],
        },
        {
          heading: '6. Alterações desta política',
          paragraphs: [
            'Esta Política de Privacidade pode ser atualizada periodicamente. A data da última atualização estará sempre indicada no topo desta página.',
          ],
        },
      ]}
    />
  )
}
