const FAQ_ITEMS = [
  ['Kazuio é terapia?', 'Não. Kazuio é um espaço de reflexão e não substitui psicólogos, psiquiatras ou outros profissionais de saúde.'],
  ['Kazuio dá conselhos?', 'A proposta é diferente: em vez de entregar respostas prontas, Kazuio faz perguntas para ajudar você a pensar e enxergar outras perspectivas.'],
  ['De onde vêm as citações?', 'Quando uma referência faz sentido, Kazuio usa uma biblioteca própria com fontes reais e verificáveis. A proposta não é inventar citações para preencher uma resposta.'],
  ['Kazuio pesquisa na internet durante a conversa?', 'Não. A experiência é construída a partir da metodologia e da biblioteca do próprio Kazuio.'],
]

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-[1220px] px-5 py-12 md:px-8 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="mt-3 font-serif text-3xl leading-[1.08] text-navy md:text-[2.7rem]">Antes de começar, talvez você queira saber.</h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {FAQ_ITEMS.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {q}
                <span className="text-lg font-light text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-[680px] pr-8 text-sm leading-6 text-kmuted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
