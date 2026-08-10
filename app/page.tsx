import { Header } from '@/components/kazuio/header'
import { Hero } from '@/components/kazuio/hero'
import { Features } from '@/components/kazuio/features'
import { Conversation } from '@/components/kazuio/conversation'
import { Library } from '@/components/kazuio/library'
import { Reasons } from '@/components/kazuio/reasons'
import { Identity } from '@/components/kazuio/identity'
import { Footer } from '@/components/kazuio/footer'
import { FAQ } from '@/components/kazuio/faq'

export default function Page() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Features />
        <Conversation />
        <Library />
        <Reasons />
        <Identity />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
