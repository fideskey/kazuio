// Recuperação de senha: o formulário de senha nova vive no app (/chat, js/auth.js), que já detecta
// PASSWORD_RECOVERY e retém a sessão até a senha ser trocada. O site institucional só precisa
// (1) pedir o e-mail com redirectTo = /chat e (2) encaminhar para /chat qualquer link de recuperação
// que caia numa página do site (ex.: a raiz, que é o Site URL do Supabase).
//
// Marcador compartilhado com o app: /chat é servido sob o mesmo domínio (proxy), então o
// sessionStorage da aba é o mesmo. O nome e o valor (Date.now() em texto) precisam ser IGUAIS aos
// de js/auth.js (RECUPERACAO_FLAG) no app.
export const RECUPERACAO_FLAG = 'kazuio_recuperacao_pendente'

export const DESTINO_RECUPERACAO = '/chat'

export function urlRecuperacao(origin: string): string {
  return `${origin}${DESTINO_RECUPERACAO}`
}

// Confirmação de cadastro: conta nova, sem assinatura -> escolher plano (igual ao app).
export const DESTINO_CONFIRMACAO_CADASTRO = '/precos'

export function urlConfirmacaoCadastro(origin: string): string {
  return `${origin}${DESTINO_CONFIRMACAO_CADASTRO}`
}

// Script síncrono para o <head> do layout: roda antes de qualquer módulo React, enquanto o
// fragmento (#access_token=...&type=recovery, ou #error=...) ainda está na URL. Leva o fragmento
// intacto para /chat, onde o <head> do app o lê. É texto puro (não usa nada do bundle).
export const SCRIPT_ENCAMINHAR_RECUPERACAO = `(function(){try{
var h=location.hash.replace(/^#/,'');if(!h)return;
var p=new URLSearchParams(h);
var rec=p.get('type')==='recovery'&&!!p.get('access_token');
var err=!!(p.get('error_code')||p.get('error'));
if(!rec&&!err)return;
if(location.pathname==='${DESTINO_RECUPERACAO}'||location.pathname.indexOf('${DESTINO_RECUPERACAO}/')===0)return;
if(rec){try{sessionStorage.setItem('${RECUPERACAO_FLAG}',String(Date.now()));}catch(e){}}
location.replace('${DESTINO_RECUPERACAO}'+location.hash);
}catch(e){}})();`

// Plano B, caso o supabase-js do site consuma o fragmento antes do script acima (não deveria:
// ele precisa de uma ida à rede antes de limpar a URL). Ao receber PASSWORD_RECOVERY, grava o
// marcador e vai para /chat; a sessão já está no localStorage do domínio, e o app abre o
// formulário de senha nova ao ver o marcador.
type Ambiente = {
  pathname: string
  marcar: () => void
  ir: (destino: string) => void
}

export function tratarEventoAuth(event: string, ambiente: Ambiente): boolean {
  if (event !== 'PASSWORD_RECOVERY') return false
  if (ambiente.pathname === DESTINO_RECUPERACAO || ambiente.pathname.startsWith(`${DESTINO_RECUPERACAO}/`)) return false
  try { ambiente.marcar() } catch { /* storage bloqueado: o app ainda recebe a sessão */ }
  ambiente.ir(DESTINO_RECUPERACAO)
  return true
}
