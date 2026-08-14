
const NAVEGUE = [
  ['Quem Somos', '/quem-somos'],
  ['Pilares', '/pilares'],
  ['Biblioteca', '/biblioteca'],
  ['Como funciona', '/como-funciona'],
]

const LEGAL = [
  ['Termos e Condições', '/termos-e-condicoes'],
  ['Política de Privacidade', '/politica-de-privacidade'],
  ['Política de Cookies', '/politica-de-cookies'],
]

function InstagramIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  )
}

function TikTokIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M14.2 4.2c.5 1.8 1.5 3 3.4 3.2v2.5c-1.3-.1-2.5-.5-3.4-1.2v5.1c0 3.1-2 5.1-4.9 5.1-2.6 0-4.5-1.8-4.5-4.3 0-2.7 2.2-4.7 5-4.7.3 0 .6 0 .9.1v2.6a3.7 3.7 0 0 0-.9-.1c-1.3 0-2.3.8-2.3 2 0 1 .8 1.8 1.9 1.8 1.3 0 2.3-.8 2.3-2.5V4.2h2.5Z" fill="currentColor" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/kazuio.app/', icon: InstagramIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@kazuio_ia', icon: TikTokIcon },
]

export function Footer() {
  return (
    <footer className="bg-deep text-cream">
      <div className="mx-auto max-w-[1220px] px-5 pb-8 pt-10 md:px-8 md:pt-12">
        <div className="grid gap-10 md:grid-cols-[1.25fr_1fr_1.25fr_0.9fr]">
          <div>
            <a href="/" className="font-serif text-2xl tracking-[0.08em] text-cream" aria-label="Kazuio — início">Kazuio</a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-cream/65">Perguntas que guiam. Reflexões que conectam.</p>
            <a href="/precos" className="mt-5 inline-block text-xs font-semibold text-gold2 hover:text-cream">Começar a conversar →</a>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/80">Navegue</h3>
            <ul className="mt-4 space-y-2.5">
              {NAVEGUE.map(([label, href]) => (
                <li key={label}><a href={href} className="text-xs text-cream/60 transition-colors hover:text-cream">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/80">Informações</h3>
            <ul className="mt-4 space-y-2.5">
              {LEGAL.map(([label, href]) => (
                <li key={label}><a href={href} className="text-xs text-cream/60 transition-colors hover:text-cream">{label}</a></li>
              ))}
              <li><a href="/#faq" className="text-xs text-cream/60 transition-colors hover:text-cream">Perguntas frequentes</a></li>
              <li><a href="mailto:kazuio@kazuio.com" className="text-xs text-cream/60 transition-colors hover:text-cream">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/80">Siga-nos</h3>
            <div className="mt-4 flex items-center gap-2.5">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href || undefined}
                  target={href ? '_blank' : undefined}
                  rel={href ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  title={href ? label : `${label} — link ainda não configurado`}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border border-gold2/30 text-gold2 transition-colors ${href ? 'hover:border-gold2 hover:bg-gold2/10' : 'cursor-default opacity-80'}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-5 max-w-[180px] text-xs leading-5 text-cream/50">Psicologia · Fé · Filosofia</p>
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
