import { Logo } from './logo'

const APP_URL = 'https://app.kazuio.com/'
const NAVEGUE = [
  ['Como funciona', '#como-funciona'],
  ['Pilares', '#pilares'],
  ['Biblioteca', '#biblioteca'],
  ['Sobre', '#sobre'],
]
const SUPORTE = [
  ['Perguntas frequentes', '#faq'],
  ['Privacidade', '#faq'],
  ['Termos de uso', '#faq'],
  ['Contato', 'mailto:contato@kazuio.com'],
]

export function Footer() {
  return (
    <footer className="bg-deep text-cream">
      <div className="mx-auto max-w-[1220px] px-5 pb-8 pt-10 md:px-8 md:pt-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_0.8fr]">
          <div>
            <a href="#top" aria-label="Kazuio — início"><Logo onDark markClassName="h-9" wordClassName="text-[1rem]" /></a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-cream/65">Perguntas que guiam. Reflexões que conectam.</p>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-block text-xs font-semibold text-gold2 underline decoration-gold2/50 underline-offset-4">Começar a conversar →</a>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/80">Navegue</h3>
            <ul className="mt-4 space-y-2.5">{NAVEGUE.map(([label, href]) => <li key={label}><a href={href} className="text-xs text-cream/60 transition-colors hover:text-cream">{label}</a></li>)}</ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/80">Suporte</h3>
            <ul className="mt-4 space-y-2.5">{SUPORTE.map(([label, href]) => <li key={label}><a href={href} className="text-xs text-cream/60 transition-colors hover:text-cream">{label}</a></li>)}</ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/80">Kazuio</h3>
            <p className="mt-4 text-xs leading-5 text-cream/60">Psicologia · Fé · Filosofia</p>
            <p className="mt-3 text-xs leading-5 text-cream/60">Uma IA transparente, ética e ao seu lado.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cream/15 pt-5 text-[10px] text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kazuio. Todos os direitos reservados.</p>
          <p>Perguntas que guiam. Reflexões que conectam.</p>
        </div>
      </div>
    </footer>
  )
}
