import { Header } from './header'
import { Footer } from './footer'

export type LegalSection = {
  heading: string
  paragraphs: string[]
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main className="mx-auto max-w-[760px] px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow">Kazuio</p>
        <h1 className="mt-3 font-serif text-3xl leading-[1.1] text-navy md:text-[2.6rem]">{title}</h1>
        <p className="mt-3 text-xs text-kmuted">Última atualização: {updated}</p>

        <p className="mt-8 text-sm leading-7 text-ink/85">{intro}</p>

        <div className="mt-10 space-y-9 border-t border-line/80 pt-9">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-lg text-navy">{s.heading}</h2>
              <div className="mt-3 space-y-3">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-7 text-ink/80">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
