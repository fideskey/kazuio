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
  summary,
  sections,
}: {
  title: string
  updated: string
  intro: string
  summary?: string[]
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

        {summary && summary.length > 0 && (
          <div className="mt-6 rounded-xl border border-gold/40 bg-gold/10 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-navy">Em resumo, em linguagem simples</p>
            <ul className="mt-2 space-y-1.5">
              {summary.map((s, i) => (
                <li key={i} className="text-sm leading-6 text-ink/85">— {s}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-kmuted">Este resumo não substitui o texto completo abaixo.</p>
          </div>
        )}

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
