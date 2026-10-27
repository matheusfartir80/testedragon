# 📋 CONTINUAR O PROJETO — ADELSON FILM (passagem de bastão)

Este arquivo explica o projeto para **qualquer IA** (Gemini, Argon, Claude, GPT) ou para o próprio dono continuar de onde parou.

## O que é o projeto

Site comercial de **uma página (One-Page)** da **AdelsonFilm — Películas de Controle Solar** (Garanhuns, PE), feito em HTML/CSS/JS puro, rápido e pronto para publicar grátis (Netlify Drop ou GitHub Pages).

## Estrutura de Arquivos

| Arquivo / Pasta | Para que serve |
|---|---|
| `index.html` | Design e código completo do site (carrossel arrastável, faixa animada, comparador antes/depois, modal do Google e seções). |
| `textos.js` | **"Bloco de notas"**: todos os textos, WhatsApp, endereço, Instagram e nomes das fotos para editar fácil sem mexer no código. |
| `fotos/logo.svg` e `logo.png` | Logo em losango vetorizada (fundo externo transparente, losango preto puro sem textura, cores originais amarelo e azul ciano). |
| `fotos/fachada.png` | Foto real da fachada da loja física em Garanhuns - PE. |
| `fotos/hero-*.jpg` | Fotos dos 3 cards principais do topo (`hero-carro.jpg`, `hero-residencial.jpg`, `hero-kit.jpg`). |
| `fotos/antes-carro*.jpg` / `depois-carro*.jpg` | Fotos do comparador interativo Antes x Depois (estilo Luminar Neo). |
| `fotos/carro-*.jpg`, `res-*.jpg`, `kit-*.jpg` | Fotos de cada subcategoria (Carbono, Nano, Cerâmica / Preta, Espelhada, Jateado, Leitoso / Soleira, Multimídia, Canto de porta). |

## Regras do Projeto (Não quebrar)

1. **Identidade da Fachada:** Título `ADELSON` em amarelo (`#FFCD00`) + `FILM` em azul ciano (`#4DCCF9`) + subtítulo `Películas de Controle Solar`.
2. **3 Destaques Juntos no Topo:**
   - *Corte sob medida computadorizado*
   - *Garantia até 10 anos*
   - *Avaliação 5 estrelas* (ao clicar abre o modal com a avaliação do Google da empresa e o link `https://maps.app.goo.gl/znpGzoLZWHgpixFG6?g_st=ic`).
3. **Navegação de Página Única:** Os 3 blocos principais do topo (**Carro**, **Residencial**, **Kit**) podem ser arrastados para o lado e, ao clicar em qualquer um deles, a página **rola sozinha suavemente** até a seção daquela categoria (sem abrir outra página).
4. **Janela "Para seu carro":** Faixa animada passando da **esquerda para a direita** com desenhos exclusivos para: *Sem metal na composição*, *Escuro por fora, claro por dentro*, *Conforto Térmico*, *Proteção UV* e *Economia de ar-condicionado*.
5. **Comparador Antes e Depois:** Foto do carro com linha divisória vertical arrastável (estilo Luminar Neo) mostrando sem película e com película.
6. **Dados Oficiais:**
   - WhatsApp: `+55 87 9643-4591` (com botão flutuante sempre visível ao rolar a página)
   - Instagram: `@adelson_films`
   - E-mail: `sinezio329@gmail.com`
   - Endereço: `Rua Melo Peixoto, 55293-190 Garanhuns, PE`
