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
      updated="10 de agosto de 2026"
      intro="Estes Termos e Condições regulam o uso do Kazuio, um espaço de reflexão com inteligência artificial. Ao usar o Kazuio, você concorda com os termos abaixo."
      sections={[
        {
          heading: '1. O que é o Kazuio',
          paragraphs: [
            'Kazuio é um espaço de conversa e reflexão apoiado por inteligência artificial, que utiliza perguntas — e, quando fizer sentido, referências de uma biblioteca própria de Psicologia, Fé e Filosofia — para ajudar você a pensar com mais clareza sobre o que está vivendo.',
            'Kazuio não é terapia, não é aconselhamento profissional e não é um buscador de respostas na internet. As limitações do serviço estão descritas na própria Home e nesta seção de Termos.',
          ],
        },
        {
          heading: '2. Quem pode usar',
          paragraphs: [
            'O uso do Kazuio é destinado a maiores de 18 anos, ou a menores com autorização e supervisão de um responsável legal, conforme a legislação aplicável.',
          ],
        },
        {
          heading: '3. Uso responsável',
          paragraphs: [
            'Você concorda em não utilizar o Kazuio para fins ilícitos, para obter aconselhamento médico, psicológico ou jurídico definitivo, ou em situações de emergência ou risco à vida — nesses casos, procure imediatamente um profissional de saúde ou serviço de emergência local.',
          ],
        },
        {
          heading: '4. Limitação de responsabilidade',
          paragraphs: [
            'As reflexões e perguntas oferecidas pelo Kazuio têm caráter exploratório e não substituem orientação profissional. O Kazuio não se responsabiliza por decisões tomadas exclusivamente com base nas conversas realizadas na plataforma.',
          ],
        },
        {
          heading: '5. Alterações destes termos',
          paragraphs: [
            'Estes Termos podem ser atualizados periodicamente. A data da última atualização estará sempre indicada no topo desta página.',
          ],
        },
        {
          heading: '6. Contato',
          paragraphs: [
            'Dúvidas sobre estes Termos podem ser enviadas para contato@kazuio.com.',
          ],
        },
      ]}
    />
  )
}
