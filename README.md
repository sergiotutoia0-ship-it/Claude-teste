# Lume Labs — Site

Site estático (HTML/CSS/JS, sem build) da Lume Labs: vídeos 3D (Reels) para negócios.

**Fluxo:** Página inicial → Checkout (dados + Pix) → Pagamento aprovado → Brand (briefing) → WhatsApp

| Arquivo | O que é |
|---|---|
| `index.html` | Página inicial: vídeo, o serviço, como funciona, plano de R$ 29,90 e dúvidas |
| `checkout.html` | Etapa 1: nome, e-mail, WhatsApp. Etapa 2: Pix. Ao aprovar, vai para a Brand |
| `brand.html` | Só abre com pagamento aprovado. Briefing: empresa, ramo, duração, voz, logo, cores, roteiro. Envia tudo pelo WhatsApp |
| `assets/common.js` | WhatsApp, Instagram, preço, rodapé e dados do pedido (compartilhado) |
| `assets/style.css` | Identidade visual (preto + roxo neon, Anton + Space Grotesk) |

## Como abrir
Abra `index.html` no navegador, ou rode `python3 -m http.server` e acesse http://localhost:8000.

## Pagamento real (Mercado Pago)
Em `checkout.html`, `DEMO = true` simula o Pix e aprova sozinho em ~4 s.
Para cobrar de verdade, coloque `DEMO = false` e crie no seu backend:

- `POST /api/pix` → cria o pagamento Pix no Mercado Pago e devolve `{ pedidoId, qrCodeBase64, copiaECola }`
- `GET /api/pix/:pedidoId` → devolve `{ status: "pending" | "approved" | "rejected" }`

A chave secreta do Mercado Pago fica só no backend.
