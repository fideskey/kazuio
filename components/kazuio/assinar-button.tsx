'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export function AssinarButton({
  planId,
  planoNome,
  destaque,
}: {
  planId: string
  planoNome: string
  destaque: boolean
}) {
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function handleClick() {
    setErro('')
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      // Sem conta ainda -- manda pro login/cadastro, guardando a intenção
      // do plano escolhido pra retomar depois de entrar.
      window.location.href = `/login?plano=${planId}`
      return
    }

    setCarregando(true)
    try {
      const res = await fetch('https://uzzmxteysziypvweppkb.supabase.co/functions/v1/assinatura', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ action: 'iniciar', planId }),
      })
      const data = await res.json()
      if (data.error || !data.checkoutUrl) {
        setErro('Não foi possível iniciar a assinatura agora. Tente novamente.')
        setCarregando(false)
        return
      }
      window.location.href = data.checkoutUrl
    } catch {
      setErro('Não foi possível iniciar a assinatura agora. Tente novamente.')
      setCarregando(false)
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={carregando}
        className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 ${
          destaque ? 'bg-gold text-deep' : 'bg-deep text-cream'
        }`}
      >
        {carregando ? 'Carregando…' : `Assinar ${planoNome}`}
      </button>
      {erro && <p className="mt-2 text-center text-xs text-red-600">{erro}</p>}
    </div>
  )
}
