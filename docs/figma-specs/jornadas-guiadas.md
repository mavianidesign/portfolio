# Jornadas Guiadas

- Figma: `https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portf%C3%B3lio?node-id=3455-2237`
- Nó: `3455:2237`
- Captura: `references/jornadas-guiadas.png`
- Viewport de referência: `1366 × 18386 px`
- Escopo de código desta etapa: página dedicada, shell, hero, aviso de confidencialidade e section `O DESAFIO`.

## Estrutura e conteúdo

- O frame contém hero, aviso de confidencialidade sobreposto, seções de case e contato.
- O hero contém `JORNADAS GUIADAS`, `CONTEXTO` e dois parágrafos de contexto.
- Metadados: `CLIENTE / Banco Brasileiro`, `DURAÇÃO / 12 meses`, `ATUAÇÃO / UX/UI Designer Sênior` e `ATIVIDADES / Prototipação, Pesquisa e Testes`.
- O aviso contém `Projeto sob contrato de confidencialidade` e o texto de omissão/adaptação de materiais confidenciais.

## Layout e responsividade

- Hero: `1366 × 581 px`; conteúdo interno: `1126 px`; gutter observado: `120 px`.
- Hero: coluna de `550 px` e metadados de `450 px`.
- Aviso: `830 × 76 px`, centralizado, iniciando em `y=514 px`.
- Responsividade não especificada no nó; a implementação empilha colunas, reduz gutters e quebra metadados em telas menores.
- Controle de retorno: `52 × 38 px`, em `x=24 px`, `y=22 px` no nó.

## Estilo e assets

- Fundo `#1d272b`; texto principal `#f2f2f2`; texto suave `#c7c7c7`; texto secundário `#c0ae98`; borda de metadados `#4e575a`.
- Aviso: `#36210a`, borda `#d17a22`, raio `8 px` e sombra `Shadow-200`.
- Título: Cal Sans, `68 px`, line-height `85 px`, tracking `-1.5 px`.
- Contexto: Lora, `13 px`, line-height `1.55`.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/icons/confidentiality.svg` | `Confidentiality Icon` / `3642:1175` | ícone informativo | SVG, `24 × 24 px` | proporção intrínseca; não especificado no nó | `24 × 24 px` | vazio |
| `assets/icons/chevron-left.svg` | `BiChevronLeft` / `I3660:2866;3660:2852` | retorno | SVG, `24 × 24 px` | proporção intrínseca; não especificado no nó | `24 × 24 px` | vazio |

## Interações e estados

- O retorno leva à âncora `#projetos` da página inicial.
- O menu global reutiliza o comportamento progressivo existente.
- Estados hover não são especificados; o foco visível segue as regras globais.

## Section O DESAFIO (`3455:2269`)

- A section mede `1366 × 894 px`, usa padding de `120 px` e conteúdo interno de `1126 px`.
- O título é `O DESAFIO`; a descrição usa Lora `20 px` com line-height `1.45`.
- Três cards têm `359,33 × 365 px`, gap de `24 px`, padding de `40 px`, superfície `#252e32` e raio de `16 px`.
- Os cards apresentam, respectivamente, `1º`, `2º` e `3º`, os títulos e descrições observados no nó.
- O comportamento mobile não é especificado no nó; os cards são empilhados e os paddings/tamanhos tipográficos são reduzidos.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/jornadas-guiadas/challenge-tools.png` | `Challenge Illustration` / `3487:1117` | ilustração do primeiro card | PNG, `105 × 44 px` | object-fit cover conforme o nó | `105 × 44 px` | vazio |
| `assets/images/jornadas-guiadas/challenge-deployment.png` | `Challenge Illustration` / `3487:1118` | ilustração do segundo card | PNG, `83 × 35 px` | rotação de `90°` conforme o nó | `83 × 35 px` | vazio |
| `assets/images/jornadas-guiadas/challenge-retention.png` | `Challenge Illustration` / `3487:1119` | ilustração do terceiro card | PNG, `68 × 35 px` | object-fit cover conforme o nó | `68 × 35 px` | vazio |

## Section MINHA ATUAÇÃO (`3455:2279`)

- A section usa padding de `120 px`, conteúdo interno de `1126 px` e gap vertical de `64 px`.
- O título é `MINHA ATUAÇÃO`, em Cal Sans `68 px`, line-height `85 px` e tracking `-1.5 px`.
- Os quatro cards formam um grid `2 × 2`, com gap de `16 px`, superfície `#252e32`, raio de `8 px` e padding de `24 px`.
- Cada card tem ícone em círculo claro de `32 × 32 px` e texto em Lora `20 px`, line-height `1.45`.
- A seta decorativa aparece abaixo do grid, centralizada, com composição de `72 × 143 px`; seu comportamento responsivo não é especificado no nó.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/icons/jornadas-task-discovery.svg` | `Task Icon` / `3470:1152` | ícone do card de descoberta | SVG, `16 × 16 px` | proporção intrínseca | `16 × 16 px` | vazio |
| `assets/icons/jornadas-task-data.svg` | `Task Icon` / `3470:1156` | ícone do card de dados | SVG, `16 × 16 px` | proporção intrínseca | `16 × 16 px` | vazio |
| `assets/icons/jornadas-task-prototype.svg` | `Task Icon` / `3470:1160` | ícone do card de prototipação | SVG, `16 × 16 px` | proporção intrínseca | `16 × 16 px` | vazio |
| `assets/icons/jornadas-task-results.svg` | `Task Icon` / `3470:1164` | ícone do card de resultados | SVG, `16 × 16 px` | proporção intrínseca | `16 × 16 px` | vazio |
| `assets/images/jornadas-guiadas/transition-arrow.png` | `Arrow` / `3488:1361` | seta decorativa entre sections | PNG, `143 × 72 px` | rotação de `-90°` conforme o nó | composição `72 × 143 px` | vazio |

## Section PROCESSO DE DESCOBERTA (`3455:2295`)

- A section mede `1366 × 6849 px` no frame de referência e usa conteúdo interno de `1126 px` com padding de `120 px`.
- O título é `PROCESSO DE DESCOBERTA`, em Cal Sans `68 px`, line-height `85 px` e tracking `-1.5 px`.
- A section contém quatro grupos: `COLETA DE FEEDBACKS`, `MAPEAMENTO DE PERFIS`, `JORNADAS DE USUÁRIO` e `ENTREVISTAS COM USUÁRIOS`.
- Cada grupo contém uma lista textual, um painel visual de `600 px` de altura e `INSIGHTS-CHAVE` com três itens numerados.
- Os painéis têm superfície `#252e32`, borda `#4e575a`, raio `16 px` e usam `feedback-principal.png` como background compartilhado, com imagens PNG individuais sobrepostas e blur de `1 px` nas camadas especificadas no nó.
- A adaptação responsiva mantém a ordem dos grupos, reduz o painel visual e preserva as imagens em composição recortada; o comportamento mobile não é especificado no nó.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/jornadas-guiadas/descoberta/feedback-principal.png` | `Descoberta Screenshot Principal Feedback` / `3487:1162` | background visual compartilhado dos quatro painéis | PNG, `1147 × 1147 px` | `background-position: center`; `background-size: 102% auto` | background em painel `600 px` | não aplicável; decoração CSS |
| `assets/images/jornadas-guiadas/descoberta/Projetos/Feedback Chart Image.png` | `Feedback Chart Image` / `3487:1163` | gráfico do primeiro painel | PNG, `1218 × 609 px` | blur de `1 px` | overlay proporcional | vazio |
| `assets/images/jornadas-guiadas/descoberta/Projetos/Platform Image.png` | `Platform Image` / `3487:1164` | captura da plataforma | PNG, `1576 × 522 px` | blur de `1 px` | overlay proporcional | vazio |
| `assets/images/jornadas-guiadas/descoberta/Projetos/Feedback Image.png` | `Feedback Image` / `3487:1165` | captura de feedback | PNG, `870 × 347 px` | blur de `1 px` | overlay proporcional | vazio |
| `assets/images/jornadas-guiadas/descoberta/Projetos/Session Screenshot Image.png` | `Session Screenshot Image` / `3487:1216` | captura de sessão | PNG, `1818 × 880 px` | blur de `1 px` | overlay proporcional | vazio |
| `assets/images/jornadas-guiadas/descoberta/Projetos/Client Logo Image.png` | `Client Logo Image` / `3487:1217` | logo da composição | PNG, `248 × 268 px` | blur de `1 px` | overlay proporcional | vazio |
| `assets/images/jornadas-guiadas/descoberta/Projetos/Profile Avatar Image.png` | `Profile Avatar Image` / `3487:1219` | avatar da composição | PNG, `250 × 270 px` | blur de `1 px` | overlay proporcional | vazio |
| `assets/images/jornadas-guiadas/descoberta/Projetos/User Testimonial Image.png` | `User Testimonial Image` / `3487:1218` | depoimento da composição | PNG, `250 × 270 px` | blur de `1 px` | overlay proporcional | vazio |
| `assets/images/jornadas-guiadas/descoberta/Projetos/Descoberta Captura Panoramica 1.png` até `5.png` | `3487:1229–1231` e `3487:1233` | primeira galeria de jornadas | PNGs 2× exportados das camadas exatas | recortes e blur conforme o nó | overlays proporcionais | vazio |
| `assets/images/jornadas-guiadas/descoberta/Projetos/Descoberta Captura Galeria.png` e `Descoberta Captura Panoramica 7.png` até `8.png` | `3487:1276` e `3487:1278–1279` | segunda galeria de entrevistas | PNGs 2× exportados das camadas exatas | recortes e blur conforme o nó | overlays proporcionais | vazio |

## Checklist de comparação

- [x] Estrutura e conteúdo do shell/hero conferem com o nó.
- [x] Assets novos foram exportados das camadas registradas.
- [x] A captura não é usada como asset de produção.
- [ ] Comparar em `1366 px`, `1024 px`, `768 px` e `390 px`.

## Section RESULTADOS OBTIDOS (`3455:2417`)

- A seção tem viewport de referência `1366 × 4728 px`, padding de `120 px`, conteúdo de `1126 px` e gap de `160 px` entre os blocos principais.
- O primeiro bloco usa título `RESULTADOS OBTIDOS` em Cal Sans `68 px`, line-height `85 px` e tracking `-1.5 px`.
- A galeria de resultados tem uma composição superior com coluna esquerda de `550 × 662 px`, coluna direita com dois quadros e gap horizontal de `33 px`; abaixo há dois quadros de largura total separados por `58 px`.
- As imagens da galeria usam blur de `8 px` e raio de `8 px`, mantendo os aspect ratios definidos nas camadas do nó.
- O segundo bloco usa título `MÉTRICAS OBTIDAS` e três grupos: `MONITORAMENTO DE QUALIDADE`, `TRÁFEGO USUÁRIOS` e `PROJETOS`.
- Cada grupo contém três cards em grid, com gap de `24 px`, padding de `64 px`, raio de `16 px` e ícone circular de `112 × 112 px`.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/jornadas-guiadas/Projetos/Project Screenshot Image.png` | `Project Screenshot Image` / `3366:830` | captura principal de resultados | PNG, dimensão exportada registrada no arquivo | altura ampliada para `152.47%`, blur de `8 px` | `550 × 662 px` | vazio |
| `assets/images/jornadas-guiadas/Projetos/Project Screenshot Image 2.png` | `Project Screenshot Image 2` / `3366:831` | segunda captura de resultados | PNG, `2732 × 1836 px` | aspect ratio `2732/1836`, blur de `8 px` | `543 × 364.915 px` | vazio |
| `assets/images/jornadas-guiadas/Projetos/Project Screenshot Image 3.png` | `Project Screenshot Image 3` / `3366:832` | terceira captura de resultados | PNG, `2732 × 1394 px` | aspect ratio `2732/1394`, blur de `8 px` | `543 × 277.065 px` | vazio |
| `assets/images/jornadas-guiadas/Projetos/Project Chart Image.png` | `Project Chart Image` / `3366:833` | gráfico de resultados | PNG, `2732 × 2256 px` | aspect ratio `2732/2256`, blur de `8 px` | `1126 × 929.815 px` | vazio |
| `assets/images/jornadas-guiadas/Projetos/Project Details Image.png` | `Project Details Image` / `3366:834` | detalhes de resultados | PNG, `2732 × 1394 px` | aspect ratio `2732/1394`, blur de `8 px` | `1126 × 574.54 px` | vazio |
| `assets/icons/jornadas-results-nps.svg` | `Icon` / `3455:2425` | métrica de NPS | SVG, `64 × 64 px` | proporção intrínseca | `64 × 64 px` | vazio |
| `assets/icons/jornadas-results-ces.svg` | `Icon` / `3455:2433` | métrica de CES | SVG, `64 × 64 px` | proporção intrínseca | `64 × 64 px` | vazio |
| `assets/icons/jornadas-results-csat.svg` | `Icon` / `3455:2442` | métrica de CSAT | SVG, `64 × 64 px` | proporção intrínseca | `64 × 64 px` | vazio |
| `assets/icons/jornadas-results-new-users.svg` | `Icon` / `3455:2456` | métrica de novos usuários | SVG, `64 × 64 px` | proporção intrínseca | `64 × 64 px` | vazio |
| `assets/icons/jornadas-results-active-users.svg` | `Icon` / `3455:2464` | métrica de usuários ativos | SVG, `64 × 64 px` | proporção intrínseca | `64 × 64 px` | vazio |
| `assets/icons/jornadas-results-churn.svg` | `Icon` / `3455:2472` | métrica de evasão | SVG, `64 × 64 px` | proporção intrínseca | `64 × 64 px` | vazio |
| `assets/icons/jornadas-results-new-projects.svg` | `Icon` / `3455:2484` | métrica de novos projetos | SVG, `64 × 64 px` | proporção intrínseca | `64 × 64 px` | vazio |
| `assets/icons/jornadas-results-deployed-projects.svg` | `Icon` / `3455:2493` | métrica de projetos implantados | SVG, `64 × 64 px` | proporção intrínseca | `64 × 64 px` | vazio |
| `assets/icons/jornadas-results-deployment-time.svg` | `Icon` / `3455:2502` | métrica de tempo de implantação | SVG, `64 × 64 px` | proporção intrínseca | `64 × 64 px` | vazio |

## Checklist de comparação — RESULTADOS OBTIDOS

- [x] Estrutura e conteúdo conferem com o nó.
- [x] Assets foram exportados das camadas registradas.
- [x] A captura comparativa foi salva em `references/jornadas-guiadas-resultados.png` e não é usada em produção.
- [ ] Comparar em `1366 px`, `1024 px`, `768 px` e `390 px`.

## Section HANDOFF DETALHADO E DOCUMENTADO (`3455:2379`)

- A seção usa fundo `#1d272b`, padding de `120 px` e conteúdo de `1126 px`.
- O bloco interno usa gap vertical de `40 px`.
- O título é `HANDOFF DETALHADO E DOCUMENTADO`, em Cal Sans `42 px`, line-height `1.2` e tracking `-0.5 px`.
- O painel visual ocupa a largura do conteúdo, tem raio de `16 px`, borda de `1 px` em `#4e575a` e proporção aproximada de `1126 × 622 px`.
- O painel contém uma imagem principal com recorte ampliado e quatro elementos visuais sobrepostos, incluindo uma linha decorativa.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/jornadas-guiadas/handoff-panel.png` | `Prototipacao Painel Interativo` / `3487:1293` | imagem principal do painel | PNG, dimensão exportada registrada no arquivo | escala de `151.39% × 144.45%`, deslocamento de `-25.69% / -31.85%` | painel responsivo `1126 × 622 px` | vazio |

## Checklist de comparação — HANDOFF DETALHADO E DOCUMENTADO

- [x] Estrutura e conteúdo conferem com o nó.
- [x] Assets foram exportados das camadas registradas.
- [x] A captura comparativa foi salva em `references/jornadas-guiadas-handoff.png` e não é usada em produção.
- [ ] Comparar em `1366 px`, `1024 px`, `768 px` e `390 px`.

## Section PROTOTIPAÇÃO E TESTES (`3455:2376`)

- A seção tem viewport de referência `1366 × 2204 px`, padding vertical de `200 px`, conteúdo de `1126 px` e gaps de `80 px` entre os blocos principais.
- O título é `PROTOTIPAÇÃO E TESTES`, em Cal Sans `68 px`, line-height `85 px` e tracking `-1.5 px`.
- A galeria superior usa duas colunas com gap de `16 px`. A coluna esquerda contém três quadros de `568 px`, `351 px` e `248 px`, com gap de `16 px`; o quadro direito possui `1199 px` de altura.
- As imagens dos quadros usam blur de `4 px`, raio de `8 px` e recortes posicionados conforme as camadas do nó.
- O bloco final contém três cards métricos em uma linha, com gap de `16 px`, altura de `360 px`, raio de `16 px`, padding horizontal de `40 px` e padding vertical de `64 px`.
- Os cards apresentam `70+ / TELAS PROTOTIPADAS`, `20+ / TESTES REALIZADOS` e `30+ / PARTICIPANTES NOS TESTES`.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/jornadas-guiadas/prototipacao-content.png` | `Content Image` / `3487:1262` | primeiro quadro da galeria | PNG, dimensão exportada registrada no arquivo | `object-fit: cover`, blur e recorte conforme o nó | `948 × 646 px` | vazio |
| `assets/images/jornadas-guiadas/prototipacao-wide.png` | `Wide Image` / `3487:1264` | segundo quadro da galeria | PNG, dimensão exportada registrada no arquivo | recorte em `x=-145 px`, `y=-4 px`, blur | `845 × 359 px` | vazio |
| `assets/images/jornadas-guiadas/prototipacao-banner.png` | `Banner Image` / `3487:1266` | terceiro quadro da galeria | PNG, dimensão exportada registrada no arquivo | centralizado com deslocamento horizontal de `-11 px`, blur | `829 × 248 px` | vazio |
| `assets/images/jornadas-guiadas/prototipacao-transition.png` | `Transition 1 Image` / `3487:1268` | quadro vertical da galeria | PNG, dimensão exportada registrada no arquivo | recorte em `x=-122 px`, `y=-5 px`, blur | `855 × 1237 px` | vazio |
| `assets/icons/jornadas-metric-screens.svg` | `Icon` / `3455:2384` | ícone de telas prototipadas | SVG, `48 × 48 px` | proporção intrínseca | `48 × 48 px` | vazio |
| `assets/icons/jornadas-metric-tests.svg` | `Icon` / `3455:2392` | ícone de testes realizados | SVG, `48 × 48 px` | proporção intrínseca | `48 × 48 px` | vazio |
| `assets/icons/jornadas-metric-participants.svg` | `Icon` / `3455:2400` | ícone de participantes | SVG, `48 × 48 px` | proporção intrínseca | `48 × 48 px` | vazio |

## Checklist de comparação — PROTOTIPAÇÃO E TESTES

- [x] Estrutura e conteúdo conferem com o nó.
- [x] Assets foram exportados das camadas registradas.
- [x] A captura comparativa foi salva em `references/jornadas-guiadas-prototipacao.png` e não é usada em produção.
- [ ] Comparar em `1366 px`, `1024 px`, `768 px` e `390 px`.

## Section SOLUÇÕES PROPOSTAS (`3455:2351`)

- A seção usa padding de `120 px`, gap vertical de `80 px` e conteúdo interno de `1126 px`.
- O título é `SOLUÇÕES PROPOSTAS`, em Cal Sans `68 px`, line-height `85 px` e tracking `-1.5 px`.
- Quatro cards formam um grid `2 × 2`, com gap de `16 px`, superfície `#252e32`, raio de `8 px` e padding de `24 px`.
- Cada card contém um ícone em círculo claro de `32 × 32 px` e texto em Lora `20 px`, line-height `1.45`.
- A seta decorativa ocupa composição aproximada de `146 × 257 px`, inicia em `y=601 px` e usa rotação de `-66.47°` com inversão vertical.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/icons/jornadas-solution-guided.svg` | `Task Icon` / `3517:1395` | ícone do primeiro card | SVG, `16 × 16 px` | proporção intrínseca | `16 × 16 px` | vazio |
| `assets/icons/jornadas-solution-description.svg` | `Task Icon` / `3517:1399` | ícone do segundo card | SVG, `16 × 16 px` | proporção intrínseca | `16 × 16 px` | vazio |
| `assets/icons/jornadas-solution-unified.svg` | `Task Icon` / `3517:1403` | ícone do terceiro card | SVG, `16 × 16 px` | proporção intrínseca | `16 × 16 px` | vazio |
| `assets/icons/jornadas-solution-documentation.svg` | `Task Icon` / `3517:1407` | ícone do quarto card | SVG, `16 × 16 px` | proporção intrínseca | `16 × 16 px` | vazio |
| `assets/images/jornadas-guiadas/solutions-arrow.png` | `Arrow` / `3487:1272` | seta decorativa entre sections | PNG, export individual | rotação/inversão conforme o nó | composição aproximada `146 × 257 px` | vazio |
