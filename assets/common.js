// Dados da empresa usados em todas as páginas
const LUME = {
  whatsapp: '5598984141843',
  instagram: 'eu.sergiotutoia',
  produto: 'Vídeo 3D único',
  preco: 29.90,
};
const brl = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Pedido guardado entre as etapas (checkout -> brand)
const Pedido = {
  get() { try { return JSON.parse(sessionStorage.getItem('lume_pedido')) || null; } catch (_) { return null; } },
  set(p) { try { sessionStorage.setItem('lume_pedido', JSON.stringify(p)); } catch (_) {} },
};

const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z"/></svg>';

function waLink(texto) {
  return `https://wa.me/${LUME.whatsapp}?text=${encodeURIComponent(texto)}`;
}

// Rodapé + botão flutuante do WhatsApp
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <p class="brand">Lume Labs</p>
    <a class="ig" href="https://instagram.com/${LUME.instagram}" target="_blank" rel="noreferrer">@${LUME.instagram}</a>
    <div class="legal">
      <p>CONNEX TECNOLOGIA E SERVICOS DIGITAIS INOVA SIMPLES (I.S.)</p>
      <p>CNPJ 59.102.026/0001-93</p>
      <p>Nova Avenida Comum, 267 · Comum · Tutóia – MA · CEP 65580-000</p>
      <p>Responsável: Sérgio Tutoia</p>
    </div>
    <p style="margin-top:14px">© ${new Date().getFullYear()} Lume Labs</p>`;
  document.body.appendChild(footer);

  const wa = document.createElement('a');
  wa.className = 'wa-float';
  wa.href = waLink('Olá, Sérgio! Quero um vídeo 3D para o meu negócio.');
  wa.target = '_blank'; wa.rel = 'noreferrer';
  wa.setAttribute('aria-label', 'Falar no WhatsApp');
  wa.innerHTML = WA_ICON;
  document.body.appendChild(wa);
});
