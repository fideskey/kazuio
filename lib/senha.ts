// Regra de senha do cadastro do site (F-02 opção B / D-A5). Mesma regra e mesmo texto do chat (chat/js/auth.js).
// O servidor (Supabase) é a autoridade; esta checagem só evita um vai-e-volta.
// Símbolo = a lista DOCUMENTADA pelo Supabase (docs: Password security):  !@#$%^&*()_+-=[]{};'\:"|<>?,./`~
// (os 32 sinais ASCII de pontuação; espaço, acentos, € e emojis NÃO contam).
export const SENHA_REGRAS =
  'A senha precisa ter pelo menos 8 caracteres, com letra maiúscula, letra minúscula, número e um símbolo como ! @ # $ % & * ? - _ . Espaço, acentos (ç, é…) e emojis não contam como símbolo.'

export const SENHA_FORTE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|<>?,.\/`~]).{8,}$/

/** Devolve null se a senha é aceitável, ou o texto de erro a mostrar. */
export function validarSenhaNova(senha: string): string | null {
  return SENHA_FORTE.test(senha || '') ? null : SENHA_REGRAS
}

/** Tradução do erro devolvido por supabase.auth.signUp para o texto mostrado no cadastro. */
export function mensagemErroCadastro(erro: { message?: string; code?: string }): string {
  const message = erro.message || ''
  if (message.toLowerCase().includes('already registered')) return 'Já existe uma conta com esse e-mail.'
  if (erro.code === 'weak_password' || /^password should (be at least|contain)/i.test(message)) return SENHA_REGRAS
  return 'Não foi possível criar a conta agora. Tente novamente.'
}
