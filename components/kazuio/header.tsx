'use client'

import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from './logo'

const NAV = [
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Pilares', href: '/pilares' },
  { label: 'Como Funciona', href: '/como-funciona' },
  { label: 'Preços', href: '/precos' },
  { label: 'Login', href: '/login' },
]


export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/40 bg-cream/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1220px] items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a href="/" aria-label="Kazuio — início" className="shrink-0">
          <Logo markClassName="h-9 md:h-10" wordClassName="text-[1.02rem] md:text-[1.1rem]" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] font-medium text-ink/70 transition-colors hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/precos"
            className="hidden items-center gap-1.5 rounded-full bg-deep px-5 py-2.5 text-[12px] font-medium text-cream shadow-sm transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Começar a conversar
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-line p-2 text-navy lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line/60 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-[1220px] flex-col gap-1 px-5 py-4" aria-label="Principal (móvel)">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-ink/80 hover:bg-paper hover:text-navy"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/precos"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-deep px-6 py-3.5 text-center text-sm font-medium text-cream"
            >
              Começar a conversar
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
