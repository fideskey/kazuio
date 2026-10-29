// Cliente Supabase do site institucional (kazuio.com), usado só pra login
// real na página /login antes de entrar em /chat. Mesma chave pública
// (publishable/anon) já usada no app — é seguro reutilizar, a proteção
// real dos dados vem das políticas de RLS no banco, não do sigilo desta
// chave. Sessão fica salva no localStorage do próprio navegador, sob o
// domínio kazuio.com — o /chat (proxy pra app.kazuio.com) já enxerga essa
// mesma sessão automaticamente, sem precisar logar de novo.
import { createClient } from '@supabase/supabase-js'
import { RECUPERACAO_FLAG, tratarEventoAuth } from './recuperacaoSenha'

const SUPABASE_URL = 'https://uzzmxteysziypvweppkb.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_4GKI2RVlQfmHgC_hYBVkXQ_Kl6CQ4Me'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

// Se um link de recuperação de senha for aberto numa página do site e este cliente o consumir,
// leva a pessoa ao formulário de senha nova do app (/chat). Ver lib/recuperacaoSenha.ts.
if (typeof window !== 'undefined') {
  supabase.auth.onAuthStateChange((event) => {
    tratarEventoAuth(event, {
      pathname: window.location.pathname,
      marcar: () => sessionStorage.setItem(RECUPERACAO_FLAG, String(Date.now())),
      ir: (destino) => window.location.replace(destino),
    })
  })
}
