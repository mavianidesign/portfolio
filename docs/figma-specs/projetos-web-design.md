# Projetos/Web Design

- Figma: `https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portf%C3%B3lio?node-id=2867-1613`
- Captura: `references/projetos-web-design.png`
- Viewport de referencia: 1366 x 11050 px
- Escopo de codigo: nova pagina estatica `projetos/web-design.html`

## Estrutura e conteudo

- Frame raiz `Projetos/Web Design` (2867:1613), com 1366 x 11050 px e fundo `#1d272b`.
- Capa: `Grouped Image Container` (2867:1643), 1366 x 680 px. O container de conteudo fica em x=120, y=200, com 1126 px de largura: coluna de titulo/contexto com 551 px e metadados com 455 px.
  - Titulo: `WEB DESIGN`.
  - Rotulo: `CONTEXTO`.
  - Texto: `Seleção de interfaces desenvolvidas a partir de objetivos de negócio, posicionamento de marca e entendimento do usuário.`
  - Texto: `Trabalhei em mais de 50 projetos em diferentes segmentos. Nesta página foram selecionados os melhores projetos em que realizei uma atuação end-to-end: de UX e análise de mercado até UI, prototipação e desenvolvimento front-end.`
  - Metadados: `CLIENTE — Diversos`; `DURAÇÃO — 8 meses`; `ATUAÇÃO — Web Designer e UI/UX Designer`; `ATIVIDADES — Prototipação, Front-end`.
- Seis `Project Container`s de 1126 px de largura, em x=120, na seguinte ordem:

| Projeto | Posicao e altura do container | Conteudo e metadados observados |
| --- | --- | --- |
| SPACES \| TALENT HACK | y=800, h=1003 px | `CLIENTE — Spaces \| Talent Hack`; `SEGMENTO — Plataforma SaaS · Fitness & Wellness`; `FERRAMENTAS — Figma`; `ESCOPO — Apresentação de plataforma · Fluxo de onboarding`; `CONTEXTO — Protótipo de alta fidelidade desenvolvido em processo seletivo. O desafio foi criar uma interface energética que comunica performance e escalabilidade para personal trainers e academias.` |
| MEIRA MORAES ADVOGADOS | y=2139, h=1096 px | O campo `CLIENTE` esta oculto no no. `SEGMENTO — Advocacia Empresarial e Cível`; `FERRAMENTAS — Figma`; `ESCOPO — Redesign de site institucional`; `CONTEXTO — Proposta de redesign do site institucional. A paleta escura e a tipografia elegante foram escolhidas para transmitir autoridade jurídica, enquanto a estrutura clean facilita a navegação e atrai clientes corporativos.` |
| WEBSELLERS | y=3478, h=1114 px | O campo `CLIENTE` esta oculto no no. `SEGMENTO — Consultoria de E-commerce · Parceiro Amazon SPN`; `FERRAMENTAS — Figma · WordPress`; `ESCOPO — Landing page de apresentação de serviços`; `CONTEXTO — Landing page para consultoria parceira oficial da Amazon (SPN). O layout hierarquiza os diferenciais competitivos e guia vendedores a converter pelo serviço especializado.` |
| TI:ME | y=4832, h=1119 px | O campo `CLIENTE` esta oculto no no. `SEGMENTO — Tecnologia da Informação · B2B`; `FERRAMENTAS — Figma`; `ESCOPO — Site institucional · Marketing de serviços`; `CONTEXTO — Landing page para empresa de TI. Ilustrações foram usadas para humanizar serviços técnicos e tornar soluções complexas mais acessíveis para o público B2B.` |
| BORN | y=6191, h=1114 px | `CLIENTE — Born`; `SEGMENTO — Moda Premium · Lifestyle`; `FERRAMENTAS — Figma · WordPress`; `ESCOPO — Landing page para lançamento de produto`; `CONTEXTO — Site de lançamento para nova linha de produtos Experience. O projeto explorou contraste dramático, tipografia bold e fotografias imersivas para construir uma experiência de marca memorável.` |
| CENTER AIR | y=7545, h=1114 px | `CLIENTE — Center Air`; `SEGMENTO — Refrigeração e Climatização · Distribuição Industrial`; `FERRAMENTAS — Figma · WordPress`; `ESCOPO — Site institucional · Catálogo digital`; `CONTEXTO — Site institucional para distribuidora autorizada de produtos industriais e comerciais de sistemas de refrigeração. O design equilibra autoridade técnica e acessibilidade comercial para atender tanto instaladores quanto o público final.` |

- `Clients Section` (2925:593) fica em x=125, y=8839, com 1121 x 1162 px. Titulo `CLIENTES ATENDIDOS`; a lista usa flex-wrap com lacuna horizontal de 32 px e vertical de 64 px.
- Ha uma instancia de `Contact Form Section` em y=10200, com 1366 x 680 px, e um controle de retorno em x=24, y=22, com 52 x 38 px. O destino do controle nao esta especificado no no.

## Layout e responsividade

- A capa usa duas composicoes transformadas sob sobreposicao escura. A primeira e rotacionada em -30 graus, com `skew-x(30deg)` e escala vertical de 87%; a segunda e rotacionada em -18,59 graus, com os mesmos skew e escala vertical.
- Cada card usa preview vertical rolavel: SPACES e MEIRA MORAES com viewport de 647 x 800 px; WEBSELLERS, BORN e CENTER AIR com 647 x 950 px; TI:ME com 647 x 955 px. Os previews possuem borda de 1 px, raio de 4 px e overflow vertical automatico no no.
- Os previews e a coluna de informacoes aparecem lado a lado no viewport de referencia. As colunas laterais possuem 455 ou 458 px, conforme cada card.
- O no nao apresenta breakpoint, viewport mobile ou estado responsivo. A adaptacao responsiva nao esta especificada no no.

## Estilo e assets

- Capa: fundo base `#fff8f0`, borda inferior de 2 px `#a99985`, sobreposicao `rgba(29, 39, 43, 0.9)` e borda interna `rgba(242, 242, 242, 0.33)`.
- Titulos de capa e projetos: Cal Sans Regular, 68 px, entrelinha 85 px e tracking -1,5 px. Titulo de clientes: Plus Jakarta Sans Bold, 64 px. Rotulos da capa: Plus Jakarta Sans SemiBold, 12 px, tracking 1,2 px. Corpo da capa: Lora Regular, 13 px, entrelinha 1,55.
- Paletas dos cards, na ordem: SPACES `#010101`, `#afe910`, `#efefef`; MEIRA MORAES `#232323`, `#de9c66`, `#c0c3ca`; WEBSELLERS `#97c93d`, `#f3a712`, `#f7f7f7`; TI:ME `#2f5fda`, `#f81`, `#f5f5f5`; BORN `#111`, `#0c141f`, `#d7d8d5`; CENTER AIR `#ea4740`, `#063d66`, `#fefefe`.
- As URLs temporarias do Figma para tres previews usam sufixo `.png`, mas os bytes originais extraidos sao JPEG. Os arquivos locais usam `.jpg` para preservar os bytes e declarar o formato real. A captura em `references/` e apenas comparativa, nunca asset de producao.
- O no nao contem metadados de alt text; a coluna abaixo registra `nao especificado no no`. As fitas e a composicao de fundo sao decorativas.

### Coordenadas das fitas no desktop

As coordenadas abaixo sao caixas transformadas em relacao ao frame do preview (647 px de largura), observadas no node `2867:1613`. Elas devem permanecer sobre a moldura visual do preview, e nao sobre a coluna de informacoes.

| Projeto | Fita | x, y | L x A |
| --- | --- | --- | --- |
| SPACES | superior | 42,914, -23 | 93,252 x 75,013 px |
| SPACES | inferior | 669,919, 769,604 | 75,919 x 75,919 px |
| Meira Moraes | superior | -35, 24,314 | 91,721 x 90,160 px |
| Meira Moraes | inferior | 602,604, 824,437 | 97,942 x 75,437 px |
| Websellers | superior | 576, -40 | 118,727 x 91,641 px |
| Websellers | inferior | -0,423, 884 | 94,045 x 94,045 px |
| TI:ME | primaria | -41, 21,5 | 119,093 x 91,275 px |
| TI:ME | secundaria | 597,805, 940,612 | 78,390 x 67,775 px |
| BORN | primaria | 670,909, 46,459 | 90,909 x 119,459 px |
| BORN | secundaria | -12,716, 873 | 118,087 x 118,087 px |
| Center Air | superior | -30, 24,898 | 82,662 x 67,579 px |
| Center Air | inferior | 591,658, 979,870 | 96,728 x 80,554 px |

### Capa e projetos

| Arquivo local | Camada/ID Figma | Funcao | Formato e dimensoes | Proporcao, recorte e foco | Exibicao | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/web-design/hero-collage.jpg` | `Grouped Image` (2867:1647) | Colagem decorativa da capa | JPEG otimizado 1610 x 930 | `object-cover`; sem coordenada focal exposta | 1610,064 x 1362,03 px, transformado | nao especificado no no |
| `assets/images/web-design/spaces-site-480.jpg` e `spaces-site-768.jpg` | `spaces 1` (2933:574) | Preview vertical de SPACES | JPEG responsivo, 480 x 1701 e 768 x 2721 | H=102,6%, W=100,05%, x=-0,03%, y=0 no frame | Viewport de ate 647 x 800 px | nao especificado no no |
| `assets/images/web-design/spaces-device.png` | `Text Info Image` (2867:1688) | Mockup complementar de SPACES | PNG otimizado 750 x 686, com transparencia | H=137,27%, W=113,86%, x=-13,86%, y=-13,42% | 314 x 268 px | nao especificado no no |
| `assets/images/web-design/meira-moraes-site-480.jpg` e `meira-moraes-site-768.jpg` | `Project Image` (2933:571) | Preview vertical de Meira Moraes | JPEG responsivo, 480 x 2207 e 768 x 3531; redimensionado pelo retângulo integral em pixels | H=118,99%, W=100%, x=0, y=0 | Viewport de ate 647 x 800 px | nao especificado no no |
| `assets/images/web-design/meira-moraes-device.png` | `Project Info Image` (2867:1690) | Mockup complementar de Meira Moraes | PNG otimizado 460 x 785, com transparencia | `object-cover`; coordenada focal nao exposta | 331 x 460 px | nao especificado no no |
| `assets/images/web-design/websellers-site-480.jpg` e `websellers-site-768.jpg` | `Project Image` (2933:577) | Preview vertical de Websellers | JPEG responsivo, 480 x 2448 e 768 x 3917 | `object-cover`; coordenada focal nao exposta | Viewport de ate 647 x 950 px | nao especificado no no |
| `assets/images/web-design/websellers-device.png` | `Text Info Image 2` (2933:4602) | Mockup complementar de Websellers | PNG 2000 x 1500 | H=131,58%, W=149,88%, x=-24,42%, y=-7,61% | 337 x 322 px | nao especificado no no |
| `assets/images/web-design/time-site-480.jpg` e `time-site-768.jpg` | `Project Image` (2933:4616) | Preview vertical de TI:ME | JPEG responsivo, 480 x 2180 e 768 x 3488 | `object-cover`; coordenada focal nao exposta | Viewport de ate 647 x 955 px | nao especificado no no |
| `assets/images/web-design/time-device.png` | `Project Info Image 2` (2938:4635) | Mockup complementar de TI:ME | PNG 2240 x 2000 | H=109,66%, W=110,95%, x=-0,02%, y=-9,66% | 337 x 322 px | nao especificado no no |
| `assets/images/web-design/born-site-480.jpg` e `born-site-768.jpg` | `born landpage` (2938:4646) | Preview vertical de BORN | JPEG responsivo, 480 x 1836 e 768 x 2937 | `object-cover`; coordenada focal nao exposta | Viewport de ate 647 x 950 px | nao especificado no no |
| `assets/images/web-design/born-device.png` | `Project Info Image 3` (2938:4669) | Mockup complementar de BORN | PNG 2240 x 2000 | H=124,76%, W=125,42%, x=-20,99%, y=-11,65% | 363 x 325 px | nao especificado no no |
| `assets/images/web-design/center-air-site-480.jpg` e `center-air-site-768.jpg` | `center air` (2938:4688) | Preview vertical de Center Air | JPEG responsivo, 480 x 2023 e 768 x 3236 | `object-cover`; coordenada focal nao exposta | Viewport de ate 647 x 950 px | nao especificado no no |
| `assets/images/web-design/center-air-device.png` | `i Mac 24 inch` (2938:4707) | Mockup complementar de Center Air | PNG 1500 x 1125 | H=119,55%, W=135,38%, x=-17,72%, y=-0,01% | 359 x 305 px | nao especificado no no |

### Logos de clientes

| Arquivo local | Camada/ID Figma | Funcao | Formato e dimensoes | Proporcao, recorte e foco | Exibicao | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/web-design/client-born.png` | `Client Logo` (2925:596) | Logo de cliente | PNG 225 x 225 | H=540,54%, W=143,05%, x=-21,53%, y=-220,27% | 160 x 42 px | nao especificado no no |
| `assets/images/web-design/client-marvin-burger.png` | `marvin logos` (2925:597) | Logo de cliente | PNG 384 x 133 | `object-cover`; foco nao exposto | 164 x 56,802 px | nao especificado no no |
| `assets/images/web-design/client-marietta.png` | `logo marietta` (2925:598) | Logo de cliente | PNG 361 x 116 | `object-cover`; foco nao exposto | 176 x 56 px | nao especificado no no |
| `assets/images/web-design/client-elia-spa.png` | `Elia BR` (2925:599) | Logo de cliente | PNG 240 x 240 | `object-cover`; foco nao exposto | 85 x 85 px | nao especificado no no |
| `assets/images/web-design/client-jade-2.png` | `LOGO FINAL 2` (2925:600) | Logo de cliente | PNG 640 x 161 | `object-cover`; foco nao exposto | 170 x 42 px | nao especificado no no |
| `assets/images/web-design/client-miranda-castro.png` | `logo 2` (2925:601) | Logo de cliente | PNG 214 x 62 | `object-cover`; foco nao exposto | 194 x 56 px | nao especificado no no |
| `assets/images/web-design/client-attack.png` | `ATTACK MARCA 2019` (2925:602) | Logo de cliente | PNG 500 x 458 | `object-cover`; foco nao exposto | 93 x 85 px | nao especificado no no |
| `assets/images/web-design/client-lago.png` | `logo branca sem fundo 200x` (2925:603) | Logo de cliente | PNG 200 x 121 | H=235,59%, W=126,34%, x=-12,54%, y=-53,31% | 174 x 56 px | nao especificado no no |
| `assets/images/web-design/client-299.png` | `logo 3` (2925:604) | Logo de cliente | PNG 176 x 140 | `object-cover`; foco nao exposto | 151 x 120 px | nao especificado no no |
| `assets/images/web-design/client-bike-mania.png` | `Client Logo 2` (3660:2746) | Logo de cliente | PNG 2160 x 2160 | H=204,07%, W=170,27%, x=-33,6%, y=-52,04% | 130,968 x 109,275 px | nao especificado no no |
| `assets/images/web-design/client-maria-batom.png` | `logo 4` (2925:606) | Logo de cliente | PNG 640 x 362 | `object-cover`; foco nao exposto | 101 x 57 px | nao especificado no no |
| `assets/images/web-design/client-dwax.png` | `DWAX logo 01` (2925:607) | Logo de cliente | PNG 640 x 639 | `object-cover`; foco nao exposto | 85 x 85 px | nao especificado no no |
| `assets/images/web-design/client-mercadao.png` | `Mercadao Logo Oficial` (2925:608) | Logo de cliente | PNG 576 x 320 | `object-cover`; foco nao exposto | 167 x 92 px | nao especificado no no |
| `assets/images/web-design/client-bonapan.png` | `Bonapan branco` (2925:609) | Logo de cliente | PNG 826 x 214 | `object-cover`; foco nao exposto | 218 x 57 px | nao especificado no no |
| `assets/images/web-design/client-ingredientes.png` | `Branco simplificada1` (2925:610) | Logo de cliente | PNG 272 x 210 | `object-cover`; foco nao exposto | 109 x 85 px | nao especificado no no |
| `assets/images/web-design/client-lindinha.png` | `logo 5` (2925:611) | Logo de cliente | PNG 640 x 224 | `object-cover`; foco nao exposto | 202 x 71 px | nao especificado no no |
| `assets/images/web-design/client-art-doces-festas.png` | `Art Doces Festas logo branca` (2925:612) | Logo de cliente | PNG 595 x 595 | `object-cover`; foco nao exposto | 84 x 85 px | nao especificado no no |
| `assets/images/web-design/client-bebe-top.png` | `Logo Beb Top aprovado fnd transp 3` (2925:627) | Logo de cliente | PNG 807 x 138 | `object-cover`; foco nao exposto | 315 x 54 px | nao especificado no no |
| `assets/images/web-design/client-hardwood.png` | `LOGO PB` (2925:613) | Logo de cliente | PNG 640 x 480 | `object-cover`; foco nao exposto | 138 x 104 px | nao especificado no no |
| `assets/images/web-design/client-beth-luxury-brand.png` | `logo 6` (2925:614) | Logo de cliente | PNG 225 x 225 | `object-cover`; foco nao exposto | 120 x 120 px | nao especificado no no |
| `assets/images/web-design/client-germanys.png` | `logo 7` (2925:615) | Logo de cliente | PNG 976 x 195 | `object-cover`; foco nao exposto | 212 x 42 px | nao especificado no no |
| `assets/images/web-design/client-biounat.png` | `biounat logo` (2925:616) | Logo de cliente | PNG 313 x 265 | `object-cover`; foco nao exposto | 100 x 85 px | nao especificado no no |
| `assets/images/web-design/client-kariocas.png` | `Client Logo 3` (2925:617) | Logo de cliente | PNG 217 x 60 | `object-cover`; foco nao exposto | 205 x 56 px | nao especificado no no |
| `assets/images/web-design/client-chaveco-maria.png` | `Logo white` (2925:618) | Logo de cliente | PNG 650 x 313 | `object-cover`; foco nao exposto | 117 x 56 px | nao especificado no no |
| `assets/images/web-design/client-constru-commerce.png` | `logo 8` (2925:619) | Logo de cliente | PNG 640 x 161 | `object-cover`; foco nao exposto | 168 x 42 px | nao especificado no no |
| `assets/images/web-design/client-disk-baterias.png` | `disk baterias` (2925:620) | Logo de cliente | PNG 1280 x 495 | `object-cover`; foco nao exposto | 148 x 57 px | nao especificado no no |
| `assets/images/web-design/client-duo-b.png` | `logo borboleta esquerda white` (2925:621) | Logo de cliente | PNG 640 x 177 | `object-cover`; foco nao exposto | 154 x 42 px | nao especificado no no |
| `assets/images/web-design/client-mayara-milfont.png` | `logo 9` (2925:622) | Logo de cliente | PNG 1024 x 154 | `object-cover`; foco nao exposto | 376 x 56 px | nao especificado no no |
| `assets/images/web-design/client-farmacerta.png` | `logo farmacerta` (2925:624) | Logo de cliente | PNG 179 x 156 | `object-cover`; foco nao exposto | 111 x 97 px | nao especificado no no |
| `assets/images/web-design/client-empresario-de-ferias.png` | `logo branca2` (2925:623) | Logo de cliente | PNG 376 x 114 | `object-cover`; foco nao exposto | 202 x 73 px | nao especificado no no |
| `assets/images/web-design/client-kamon-sushi.png` | `logo Pequena Site` (2925:625) | Logo de cliente | PNG 200 x 160 | `object-cover`; foco nao exposto | 133 x 106 px | nao especificado no no |
| `assets/images/web-design/client-maternizando.png` | `logo png maternizando` (2925:626) | Logo de cliente | PNG 640 x 640 | `object-cover`; foco nao exposto | 156 x 105 px | nao especificado no no |
| `assets/images/web-design/client-maria-preta.png` | `Client Logo 4` (2925:628) | Logo de cliente | PNG 336 x 336 | `object-cover`; foco nao exposto | 133 x 134 px | nao especificado no no |

## Interacoes e estados

- Os seis previews de projeto tem rolagem vertical observavel no no.
- Nenhum estado de hover, foco, menu aberto, animacao, URL de retorno ou comportamento responsivo foi especificado no no.

## Checklist de comparacao

- [ ] Estrutura e conteudo conferem com o no.
- [ ] Tipografia, cores, espacamento e composicao conferem com a captura.
- [ ] Nenhum elemento ou conteudo foi inventado.
- [ ] Cada imagem registrada foi extraida da camada Figma, e nao da captura.
- [ ] Arquivo, proporcao, recorte, escala, alinhamento e contraste conferem com a captura.
- [ ] Imagens informativas usam `img` ou `picture` com dimensoes explicitas; `background-image` e somente decorativo.
- [ ] Responsividade foi implementada sem contradizer o no.
