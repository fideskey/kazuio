import { Header } from '@/components/kazuio/header'
import { Hero } from '@/components/kazuio/hero'
import { Pillars } from '@/components/kazuio/pillars'
import { CareLevels } from '@/components/kazuio/care-levels'
import { Conversation } from '@/components/kazuio/conversation'
import { Library } from '@/components/kazuio/library'
import { Identity } from '@/components/kazuio/identity'
import { Footer } from '@/components/kazuio/footer'
import { FAQ } from '@/components/kazuio/faq'

export default function Page() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <CareLevels />
        <Conversation />
        <Library />
        <Identity />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
