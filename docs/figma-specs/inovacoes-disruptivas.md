# Projetos/Inovações disruptivas

- Figma: `https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portf%C3%B3lio?node-id=2867-1700`
- Captura: `references/inovacoes-disruptivas.png`
- Referência LTI: `references/inovacoes-disruptivas-lti.png` (nó `2867:1733`)
- Referência de eventos: `references/inovacoes-disruptivas-events.png` (nó `3804:775`)
- Referência de resultados: `references/inovacoes-disruptivas-results-2025.png` (nó `3806:776`)
- Referência da abertura Minhas Finanças XR: `references/inovacoes-disruptivas-minhas-financas-xr-opening.png` (nó `3807:777`)
- Referência da composição de processo Minhas Finanças XR: `references/inovacoes-disruptivas-financas-process.png` (nó `3809:779`)
- Referência de Minha atuação Minhas Finanças XR: `references/inovacoes-disruptivas-financas-acting.png` (nó `2867:1755`)
- Viewport de referência: 1366 × 21122
- Escopo de código: página estática de case em `projetos/inovacoes-disruptivas.html`

## Estrutura e conteúdo

- Frame raiz: `2867:1700`, nomeado `Projetos/Inovações disruptivas`.
- A captura mostra uma capa de case, o contexto do Laboratório de Tecnologias Imersivas e uma seção de resultados de 2025 antes dos três subprojetos.
- Os subprojetos visíveis são `Minhas Finanças XR`, `Rolê que Rende BB` e `Dungeons & Data`.
- Os títulos de seção visíveis incluem `Minha atuação`, `Versão aprovada`, `Produto final`, `O desafio`, `Missões e tarefas`, `Ranking, recompensas e prêmios`, `Resultados obtidos` e `Feedback de usuários`.
- Os textos e IDs das camadas abaixo foram obtidos por leitura programática do frame, sem alterar o arquivo Figma.
- Capa: cliente Banco do Brasil; duração 8 meses; atuação UI/UX Designer; atividades Prototipação, Gameficação, Game Design, GUI, Pesquisas e Testes.
- Minhas Finanças XR, Rolê que Rende BB e Dungeons & Data usam os textos e títulos transcritos no documento HTML; animações e vídeos não fazem parte da versão estática.

## Layout e responsividade

- O nó fornece apenas o viewport desktop de 1366 × 21122.
- A composição é vertical, com áreas editoriais próprias para cada subprojeto; medidas, grids e breakpoints internos não foram especificados no nó raiz.
- A adaptação responsiva será definida por colapso de conteúdo, sem contradizer a captura desktop.
- A implementação foi revisada localmente em 1366, 1024, 900, 768, 640, 390 e 320 px.

## Estilo e assets

- A captura apresenta fundo escuro e composições de mídia estática em cada subprojeto.
- Animações e vídeos foram explicitamente excluídos do escopo desta implementação.
- Não usar a captura de referência como asset de produção.
- Os assets de produção devem ser exportados da camada Figma exata, salvos em `assets/images/inovacoes-disruptivas/` ou `assets/icons/` e acrescentados à tabela abaixo quando os nós menores forem disponibilizados.

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/inovacoes-disruptivas/hero-event-background.png` | `2867:1729` Grouped Image Container | Fundo decorativo da capa | PNG, 1366×680 | `cover`, central | Background da capa | vazio |
| `assets/images/inovacoes-disruptivas/lti-xr-mark.png` | `2867:1735` SalaXR | Marca do Laboratório de Tecnologias Imersivas | PNG, 167×170 | `contain`, central | Cabeçalho do LTI | vazio |
| `assets/images/inovacoes-disruptivas/lti-partner-logos.png` | `3373:641` Tech Lab Icons Container | Logos de parceiros e eventos | PNG, 1126×116 | `contain` | Largura do container | Logotipos de eventos e parceiros do Laboratório de Tecnologias Imersivas |
| `assets/images/inovacoes-disruptivas/events-photo-left-top.png` | `3373:3945` Grouped Image | Foto de evento superior esquerda | PNG, 325×174 | `cover`, foco a 64% | Moldura inclinada decorativa | vazio |
| `assets/images/inovacoes-disruptivas/events-photo-left-bottom.png` | `3373:3949` images 1 | Foto de evento inferior esquerda | PNG, 297×198 | `cover` | Moldura inclinada decorativa | vazio |
| `assets/images/inovacoes-disruptivas/events-photo-right.png` | `3373:3947` Whats App Image 2025 06 12 at 16 2 | Foto de evento direita | PNG, 317×197 | Recorte, borda e inclinação no export da moldura | Moldura inclinada decorativa | vazio |
| `assets/images/inovacoes-disruptivas/events-photo-right-bottom.png` | `3373:652` Experience Company Logo 3 | Foto de evento direita inferior | PNG, 363×204 | `cover` | Moldura inclinada decorativa | vazio |
| `assets/images/inovacoes-disruptivas/events-arrow.png` | `3385:1905` Crepe/04 | Seta decorativa | PNG, 374×528 | Sem recorte | Centro inferior da seção | vazio |
| `assets/images/inovacoes-disruptivas/results-star.png` | Star Icon, sem ID exposto no retorno | Estrela decorativa do título de resultados | PNG; dimensões intrínsecas não especificadas | `contain` | Título Resultados de 2025 | vazio |
| `assets/icons/inovacoes-results-task.svg` | `3385:653` Task Icon | Ícone de soluções criadas | SVG, 32×32 | Sem recorte | Círculo 64×64 px | vazio |
| `assets/icons/inovacoes-results-events.svg` | `3385:1847` Documentation Icon | Ícone de presenças em eventos | SVG, 32×32 | Sem recorte | Círculo 64×64 px | vazio |
| `assets/icons/inovacoes-results-users.svg` | `3385:658` Documentation Icon | Ícone de usuários impactados | SVG, 32×32 | Sem recorte | Círculo 64×64 px | vazio |
| `assets/images/inovacoes-disruptivas/financas-xr-opening-visual.png` | Inovacoes Disruptivas Image, ID não exposto no retorno | Composição de headset e controles da abertura Minhas Finanças XR | PNG, 1080×1080 | `contain`, espelhada horizontalmente | 455.721×455.721 px | vazio |
| `assets/images/inovacoes-disruptivas/financas-process-left-group.png` | `3809:778` | Colagem agrupada de registros da experiência Minhas Finanças XR | PNG, 609.020×837.208 | `contain` | Composição de processo | vazio |
| `assets/images/inovacoes-disruptivas/financas-process-arrow.png` | `3329:635` Arrow Illustration | Seta decorativa da composição de processo | PNG, 138.695×467.313 | `contain` | Acima da colagem | vazio |
| `assets/images/inovacoes-disruptivas/financas-xr-collage.png` | `3329:623` Projetos Inovacoes Disruptivas Image | Papel decorativo | PNG, 602×832 | Sem distorção | Colagem de abertura | vazio |
| `assets/images/inovacoes-disruptivas/financas-xr-user.png` | `3206:688` Profile Picture | Ilustração de usuário com headset | PNG, 452×491 | Sem distorção | Abertura e atuação | Ilustração de pessoa usando headset de realidade virtual |
| `assets/images/inovacoes-disruptivas/financas-xr-lab.png` | `3396:675` Tech Lab Image | Foto de ativação | PNG, 563×323 | Sem distorção | Colagem de abertura | Ativação de Minhas Finanças em evento do Banco do Brasil |
| `assets/images/inovacoes-disruptivas/financas-xr-role-illustration.png` | `3344:4918` Role Completion Illustration | Textura decorativa do processo | PNG, 440×632 | `cover` | Painel de atuação | vazio |
| `assets/images/inovacoes-disruptivas/financas-xr-approved-screens.png` | `2867:1788` Full Width Container | Telas aprovadas | PNG, 1366×320 | Sem distorção | Largura total | Telas da versão aprovada da experiência Minhas Finanças XR |
| `assets/images/inovacoes-disruptivas/financas-xr-final.png` | `3401:720` Cover Image | Produto final | PNG, 773×432 | Sem distorção | Destaque final | Experiência final de Minhas Finanças XR |
| `assets/images/inovacoes-disruptivas/role-game-cover.png` | `2867:1770` Game Image | Capa do jogo | PNG, 631×361 | Sem distorção | Abertura | Arte do jogo Rolê que Rende BB no Roblox |
| `assets/images/inovacoes-disruptivas/role-game-board.png` | `2867:1812` Discovery Stages Image | Tabuleiro digital | PNG, 742×525 | Sem distorção | Showcase | Tabuleiro digital de Rolê que Rende BB em um celular |
| `assets/images/inovacoes-disruptivas/role-request-image.png` | `3582:675` | Referência do jogo físico | PNG, 241×241 | `contain` | Demanda | Peças do jogo de tabuleiro original |
| `assets/images/inovacoes-disruptivas/role-solution-image.png` | `3582:678` | Referência da solução digital | PNG, 330×233 | `contain` | Solução | Versão digital do jogo Rolê que Rende BB |
| `assets/images/inovacoes-disruptivas/role-activity-overview.png` | `3422:1959` | Estudo de GUI | PNG, 1127×425 | Sem distorção | Atuação | Estudos e propostas para a interface do jogo |
| `assets/images/inovacoes-disruptivas/role-activity-flow.png` | `3422:1960` | Fluxo de jogadores | PNG, 1128×580 | Sem distorção | Atuação | Criação e padronização de componentes da interface do jogo |
| `assets/images/inovacoes-disruptivas/role-activity-mocks.png` | `3422:1961` | Fluxos e mockups | PNG, 1128×422 | Sem distorção | Atuação | Mapeamento do fluxo de jogadores por turnos e etapas |
| `assets/images/inovacoes-disruptivas/dungeons-hero.png` | `2867:1862` Icon Illustrations Image | Ilustração do projeto | PNG, 521×397 | Sem distorção | Abertura | Ilustração de personagens de Dungeons & Data |
| `assets/images/inovacoes-disruptivas/dungeons-missions-illustration.png` | `3569:2108` Missions Illustration | Tela de missões | PNG, 1777×1025 | Sem distorção | Missões e tarefas | Painel de missões e tarefas da plataforma Dungeons & Data |
| `assets/images/inovacoes-disruptivas/dungeons-missions-detail.png` | `3571:2140` Missions Image | Tela de recompensa | PNG, 928×1147 | Sem distorção | Missões e tarefas | Tela de recompensa por missão concluída |
| `assets/images/inovacoes-disruptivas/dungeons-ranking-illustration.png` | `3570:2137` Details Illustration | Tela de ranking | PNG, 2620×2058 | Sem distorção | Ranking | Tela de ranking de Dungeons & Data |
| `assets/images/inovacoes-disruptivas/dungeons-event.png` | `3574:2334` Illustration | Foto do evento BBDW | PNG, 424×600 | Sem distorção | Resultados | Apresentação de Dungeons & Data no evento BBDW |

## Interações e estados

- Nenhuma interação ou estado estático adicional foi exposto pelo nó raiz.
- A linha animada identificada pelo Figma não será implementada, conforme escopo acordado.

## Checklist de comparação

- [x] Captura do frame raiz salva para comparação.
- [x] Estrutura e conteúdo conferem com a leitura dos subframes Figma.
- [x] Tipografia, cores, espaçamento e composição revisados contra a captura nos viewports aplicáveis.
- [x] Cada imagem usada foi exportada da camada Figma registrada.
- [x] Arquivo, proporção, recorte, escala, alinhamento e contraste revisados visualmente.
- [x] Responsividade implementada sem contradizer o nó raiz.
