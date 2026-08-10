import Image from 'next/image'
import { ShieldCheck, SearchX, Quote } from 'lucide-react'
import { BookIcon } from './icons'

const ITEMS = [
  { icon: BookIcon, title: 'Biblioteca própria', body: 'com fontes confiáveis e verificadas.' },
  { icon: ShieldCheck, title: 'Fontes reais', body: 'Referências verificáveis. Nada de citações inventadas.' },
  { icon: SearchX, title: 'Sem busca durante a conversa', body: 'Kazuio não sai procurando respostas na internet para completar uma reflexão.' },
]

export function Library() {
  return (
    <section id="biblioteca" className="mx-auto max-w-[1220px] px-5 py-10 md:px-8 md:py-16">
      <div className="relative overflow-hidden rounded-[28px] bg-deep text-cream">
        <div className="absolute inset-0 opacity-25">
          <Image src="/images/library.jpg" alt="" fill className="object-cover object-left" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/95 to-deep/80" />

        <div className="relative grid lg:grid-cols-[1.35fr_0.75fr]">
          <div className="px-7 py-11 md:px-12 md:py-14">
            <p className="eyebrow text-gold2">Conhecimento com responsabilidade</p>
            <h2 className="mt-4 max-w-[640px] font-serif text-3xl leading-[1.08] text-cream md:text-[2.7rem]">
              Não inventamos conhecimento para preencher uma resposta.
            </h2>
            <p className="mt-5 max-w-[590px] text-sm leading-6 text-cream/70">
              Quando uma reflexão pede uma referência, Kazuio pode trazer uma passagem de um livro, filósofo ou tradição religiosa — sempre a partir da biblioteca que construímos e verificamos.
            </p>

            <div className="mt-10 grid gap-7 sm:grid-cols-3">
              {ITEMS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="border-t border-cream/15 pt-5">
                  <Icon className="h-7 w-7 text-gold2" />
                  <p className="mt-3 text-xs leading-5 text-cream/75"><span className="font-semibold text-cream">{title}.</span> {body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-end px-7 pb-10 md:px-10 lg:pb-12">
            <div className="w-full rounded-2xl border border-cream/10 bg-white/[0.06] p-6 backdrop-blur-sm">
              <Quote className="h-7 w-7 text-gold2" strokeWidth={1.2} />
              <blockquote className="mt-5 font-serif text-xl italic leading-snug text-cream">
                O que importa não é ter respostas para tudo, mas aprender a fazer melhores perguntas diante da vida.
              </blockquote>
              <cite className="mt-5 block text-[10px] font-semibold uppercase not-italic tracking-[0.2em] text-gold2">Mário Sérgio Cortella</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
