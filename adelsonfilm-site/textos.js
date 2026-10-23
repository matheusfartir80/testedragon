/* =====================================================================

      ✂️   BLOCO DE NOTAS DO SITE — ADELSON FILM   ✂️

      COMO EDITAR (é super fácil!):
        1. Troque SÓ o que está entre as aspas  "  "
        2. Salve o arquivo        →  Ctrl + S
        3. Atualize o site        →  F5 no navegador

      REGRAS DE OURO:
        ✔ Nunca apague as aspas  "  "  do começo e do fim
        ✔ Nunca apague o ponto e vírgula  ;  do final da linha
        ✔ Se quiser usar aspas DENTRO do texto, use estas: ' '
        ✔ Se der erro de digitação, o site avisa no topo!

   ===================================================================== */

var SITE = {};


/* ---------------------------------------------------------------------
   📞  CONTATO E REDES SOCIAIS
   --------------------------------------------------------------------- */

// Seu WhatsApp com DDI 55 + DDD 87 (só números, sem espaço e sem traço)
SITE.WHATSAPP = "558796434591";

// Número bonito como aparece escrito na tela
SITE.TELEFONE_EXIBICAO = "(87) 9643-4591";

// Mensagem padrão ao clicar no botão geral do WhatsApp
SITE.WHATSAPP_MENSAGEM = "Olá! Vi o site da AdelsonFilm e gostaria de fazer um orçamento.";

// Instagram (escreva sem o @)
SITE.INSTAGRAM = "adelson_film";
SITE.INSTAGRAM_LINK = "https://www.instagram.com/adelson_film?vrfl=MWpsYzBuNjIwY3k5eA%3D%3D";

// E-mail de contato
SITE.EMAIL = "sinezio329@gmail.com";

// Endereço completo
SITE.ENDERECO = "Rua Melo Peixoto, 55293-190 Garanhuns, PE";
SITE.ENDERECO_COMPLEMENTO = "Av. Mello Peixoto, N° 319 · Boa Vista (Próximo ao Bonanza) · Garanhuns - PE";

// Link do Google Maps / Avaliações 5 Estrelas
SITE.GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/znpGzoLZWHgpixFG6?g_st=ic";


/* ---------------------------------------------------------------------
   🏠  IDENTIDADE E TOPO DO SITE (ESTILO FACHADA)
   --------------------------------------------------------------------- */

SITE.NOME_PARTE_1 = "ADELSON";                 // aparece em AMARELO igual à fachada
SITE.NOME_PARTE_2 = "FILM";                    // aparece em AZUL CIANO igual à fachada
SITE.SUBTITULO = "Películas de Controle Solar"; // aparece embaixo do nome

// Os 3 destaques juntos no topo do site
SITE.DESTAQUE_1 = "Corte sob medida computadorizado";
SITE.DESTAQUE_2 = "Garantia até 10 anos";
SITE.DESTAQUE_3 = "Avaliação 5 estrelas";


/* ---------------------------------------------------------------------
   🎯  OS 3 BLOCOS PRINCIPAIS DO TOPO (CARROSSEL)
   Ao clicar em qualquer um, o site rola sozinho até a seção dele!
   --------------------------------------------------------------------- */

SITE.CARD_1_TITULO = "Carro";
SITE.CARD_1_SUB = "Carbono · Nano · Cerâmica";
SITE.CARD_1_BOTAO = "Ver películas automotivas";
SITE.CARD_1_FOTO = "hero-carro.jpg";

SITE.CARD_2_TITULO = "Residencial";
SITE.CARD_2_SUB = "Preta · Espelhada · Jateado · Leitoso";
SITE.CARD_2_BOTAO = "Ver linha residencial";
SITE.CARD_2_FOTO = "hero-residencial.jpg";

SITE.CARD_3_TITULO = "Kit";
SITE.CARD_3_SUB = "Soleira · Multimídia · Canto de porta";
SITE.CARD_3_BOTAO = "Ver kits de proteção";
SITE.CARD_3_FOTO = "hero-kit.jpg";


/* ---------------------------------------------------------------------
   🚘  JANELA "PARA SEU CARRO" (FAIXA PASSANDO DA ESQUERDA P/ DIREITA)
   --------------------------------------------------------------------- */

SITE.JANELA_CARRO_TITULO = "Para seu carro";

SITE.BENEFICIO_1 = "Sem metal na composição";
SITE.BENEFICIO_2 = "Escuro por fora, claro por dentro";
SITE.BENEFICIO_3 = "Conforto Térmico";
SITE.BENEFICIO_4 = "Proteção UV";
SITE.BENEFICIO_5 = "Economia de ar-condicionado";


/* ---------------------------------------------------------------------
   🌗  COMPARADOR ANTES E DEPOIS (ARRASTAR NO MEIO DO CARRO)
   --------------------------------------------------------------------- */

SITE.COMPARADOR_TITULO = "Veja a diferença na prática";
SITE.COMPARADOR_SUBTITULO = "Arraste a barra central para comparar o carro sem película e com a proteção AdelsonFilm.";
SITE.COMPARADOR_LADO_SEM = "Sem Película";
SITE.COMPARADOR_LADO_COM = "Com AdelsonFilm";

SITE.FOTO_ANTES_PC = "antes-carro.jpg";
SITE.FOTO_DEPOIS_PC = "depois-carro.jpg";
SITE.FOTO_ANTES_CELULAR = "antes-carro-mob.jpg";
SITE.FOTO_DEPOIS_CELULAR = "depois-carro-mob.jpg";


/* ---------------------------------------------------------------------
   🚗  CATEGORIA 1: CARRO (Subcategorias: Carbono, Nano, Cerâmica)
   --------------------------------------------------------------------- */

SITE.CAT_CARRO_TITULO = "Películas para Carro";
SITE.CAT_CARRO_DESC = "Corte computadorizado sob medida para o modelo exato do seu veículo, sem desmontar forros e com acabamento de fábrica. Cada linha possui seu tempo de garantia específico, chegando a até 10 anos na linha Cerâmica.";

// 1. Carbono
SITE.CARRO_1_NOME = "Carbono";
SITE.CARRO_1_GARANTIA = "Garantia de 3 anos";
SITE.CARRO_1_DESTAQUE = "Estética & Sinal Livre";
SITE.CARRO_1_DESC = "Tonalidade preta profunda que não desbota nem fica roxa. Sem metal na composição (não interfere em GPS ou celular) e excelente privacidade.";
SITE.CARRO_1_FOTO = "carro-carbono.jpg";

// 2. Nano
SITE.CARRO_2_NOME = "Nano";
SITE.CARRO_2_GARANTIA = "Garantia de 5 anos";
SITE.CARRO_2_DESTAQUE = "Alta Nitidez Interna";
SITE.CARRO_2_DESC = "Tecnologia de nanopartículas que garante o efeito escuro por fora e claro por dentro, com forte redução de calor e conforto visual.";
SITE.CARRO_2_FOTO = "carro-nano.jpg";

// 3. Cerâmica
SITE.CARRO_3_NOME = "Cerâmica";
SITE.CARRO_3_GARANTIA = "Garantia de até 10 anos";
SITE.CARRO_3_DESTAQUE = "Máximo Bloqueio Solar";
SITE.CARRO_3_DESC = "A linha mais avançada do mercado. Bloqueia até 99% dos raios UV e altíssimo índice de calor infravermelho, aliviando o ar-condicionado com visibilidade cristalina.";
SITE.CARRO_3_FOTO = "carro-ceramica.jpg";


/* ---------------------------------------------------------------------
   🏠  CATEGORIA 2: RESIDENCIAL (Preta, Espelhada, Jateado, Leitoso)
   --------------------------------------------------------------------- */

SITE.CAT_RES_TITULO = "Linha Residencial e Comercial";
SITE.CAT_RES_DESC = "Mais conforto térmico, privacidade e sofisticação para casas, apartamentos, lojas e escritórios em Garanhuns e região.";

// 1. Preta
SITE.RES_1_NOME = "Preta";
SITE.RES_1_DESTAQUE = "Redução de Brilho & Calor";
SITE.RES_1_DESC = "Controla a entrada de sol forte, protege móveis e estofados contra o desbotamento e traz privacidade com visual moderno.";
SITE.RES_1_FOTO = "res-preta.jpg";

// 2. Espelhada
SITE.RES_2_NOME = "Espelhada";
SITE.RES_2_DESTAQUE = "Máxima Rejeição Térmica";
SITE.RES_2_DESC = "Reflete o calor solar para fora e garante privacidade total durante o dia para janelas, sacadas e fachadas comerciais.";
SITE.RES_2_FOTO = "res-espelhada.jpg";

// 3. Jateado
SITE.RES_3_NOME = "Jateado";
SITE.RES_3_DESTAQUE = "Privacidade Suave & Luz Natural";
SITE.RES_3_DESC = "Efeito fosco elegante que impede a visão nítida sem bloquear a claridade. Perfeito para divisórias, portas de vidro e escritórios.";
SITE.RES_3_FOTO = "res-jateado.jpg";

// 4. Leitoso
SITE.RES_4_NOME = "Leitoso";
SITE.RES_4_DESTAQUE = "Vedação Visual Total";
SITE.RES_4_DESC = "Acabamento branco opaco que bloqueia 100% da visão através do vidro com estética limpa para consultórios, banheiros e portas.";
SITE.RES_4_FOTO = "res-leitoso.jpg";


/* ---------------------------------------------------------------------
   🛡️  CATEGORIA 3: KIT (Soleira, Multimídia, Canto de porta)
   --------------------------------------------------------------------- */

SITE.CAT_KIT_TITULO = "Kit de Proteção Automotiva";
SITE.CAT_KIT_DESC = "Proteja as áreas mais sensíveis do seu carro contra arranhões de unhas, sapatos, chaves e pequenas batidas do dia a dia.";

// 1. Soleira
SITE.KIT_1_NOME = "Soleira";
SITE.KIT_1_DESTAQUE = "Proteção ao Entrar e Sair";
SITE.KIT_1_DESC = "Película de alta resistência aplicada na base das portas para evitar riscos causados por calçados e atrito constante.";
SITE.KIT_1_FOTO = "kit-soleira.jpg";

// 2. Multimídia
SITE.KIT_2_NOME = "Multimídia";
SITE.KIT_2_DESTAQUE = "Toque Macio & Zero Riscos";
SITE.KIT_2_DESC = "Proteção transparente sob medida para a central multimídia e painel black piano, mantendo a sensibilidade do toque e evitando marcas.";
SITE.KIT_2_FOTO = "kit-multimidia.jpg";

// 3. Canto de porta
SITE.KIT_3_NOME = "Canto de porta";
SITE.KIT_3_DESTAQUE = "Defesa invisível nas bordas";
SITE.KIT_3_DESC = "Aplicação precisa nas quinas das portas e conchas de maçaneta para proteger a pintura original contra batidas em paredes e garagens.";
SITE.KIT_3_FOTO = "kit-porta.jpg";
