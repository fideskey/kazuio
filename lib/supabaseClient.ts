// Cliente Supabase do site institucional (kazuio.com), usado só pra login
// real na página /login antes de entrar em /chat. Mesma chave pública
// (publishable/anon) já usada no app — é seguro reutilizar, a proteção
// real dos dados vem das políticas de RLS no banco, não do sigilo desta
// chave. Sessão fica salva no localStorage do próprio navegador, sob o
// domínio kazuio.com — o /chat (proxy pra app.kazuio.com) já enxerga essa
// mesma sessão automaticamente, sem precisar logar de novo.
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://uzzmxteysziypvweppkb.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_4GKI2RVlQfmHgC_hYBVkXQ_Kl6CQ4Me'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
