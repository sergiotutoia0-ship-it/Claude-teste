# Eleven Labs — Site

Site estático (HTML/CSS/JS puro, sem build) com o fluxo:

**Página inicial → Checkout → Pagamento aprovado → Brand**

| Arquivo | O que é |
|---|---|
| `index.html` | Página inicial: serviços, vídeo, planos e botões para o checkout |
| `checkout.html` | Dados do cliente, cartão ou Pix, resumo do plano e aprovação do pagamento |
| `brand.html` | Só abre depois do pagamento aprovado. Configuração da marca (logo, cores, voz, tom) com prévia |
| `assets/style.css` | Estilos compartilhados |

## Como abrir
Abra `index.html` no navegador, ou rode `python3 -m http.server` e acesse http://localhost:8000.

## O que trocar
- **Vídeo:** em `index.html`, procure `TROQUE O VÍDEO AQUI` e coloque o seu arquivo (`assets/apresentacao.mp4`) ou um link do YouTube.
- **Preços/planos:** em `index.html` (cards) e no objeto `PLANOS` em `checkout.html`.
- **Pagamento real:** hoje a função `processarPagamento` em `checkout.html` **simula** a aprovação.
  Para cobrar de verdade, troque por uma chamada a um backend integrado a um gateway
  (Stripe, Mercado Pago, Pagar.me…) e só redirecione para `brand.html` quando o gateway confirmar.
