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
    <footer className="mx-auto max-w-[1220px] px-5 pb-8 md:px-8">
      <div className="border-t border-line pt-10 md:pt-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_0.8fr]">
          <div>
            <a href="#top" aria-label="Kazuio — início"><Logo markClassName="h-9" wordClassName="text-[1rem]" /></a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-kmuted">Perguntas que guiam. Reflexões que conectam.</p>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-block text-xs font-semibold text-navy underline decoration-gold/60 underline-offset-4">Começar a conversar →</a>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">Navegue</h3>
            <ul className="mt-4 space-y-2.5">{NAVEGUE.map(([label, href]) => <li key={label}><a href={href} className="text-xs text-kmuted transition-colors hover:text-navy">{label}</a></li>)}</ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">Suporte</h3>
            <ul className="mt-4 space-y-2.5">{SUPORTE.map(([label, href]) => <li key={label}><a href={href} className="text-xs text-kmuted transition-colors hover:text-navy">{label}</a></li>)}</ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">Kazuio</h3>
            <p className="mt-4 text-xs leading-5 text-kmuted">Psicologia · Fé · Filosofia</p>
            <p className="mt-3 text-xs leading-5 text-kmuted">Uma IA transparente, ética e ao seu lado.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-5 text-[10px] text-kmuted md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kazuio. Todos os direitos reservados.</p>
          <p>Perguntas que guiam. Reflexões que conectam.</p>
        </div>
      </div>
    </footer>
  )
}
