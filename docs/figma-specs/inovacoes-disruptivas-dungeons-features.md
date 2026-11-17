# Missões, ranking e recompensas

- Figma: `3832:780` — https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portf%C3%B3lio?node-id=3832-780
- Captura: `references/inovacoes-disruptivas-dungeons-features.png`
- Viewport de referencia: 1126 x 2467 px
- Escopo de codigo: blocos `Missões e tarefas` e `Ranking, recompensas e prêmios` em `projetos/inovacoes-disruptivas.html`

## Estrutura e conteudo

- Dois blocos verticais: titulo, lista de tres pontos e imagem informativa.
- O primeiro bloco usa `MISSÕES E TAREFAS`, painel de missoes e uma tela de recompensa sobreposta.
- O segundo usa `RANKING, RECOMPENSAS E PRÊMIOS` e uma imagem de ranking.

## Layout e responsividade

- Cada bloco tem 80 px entre texto e imagem. Entre os dois blocos ha 347 px.
- Titulos: Cal Sans Regular, 42 px, entrelinha 1.2 e tracking -0.5 px.
- Listas: Lora Regular, 16 px, entrelinha 1.55, com 16 px entre os itens e marcador a 24 px.
- Painel de missoes: 1126 x 648 px, raio de 8 px. A tela de recompensa mede 464 x 573.5 px, inicia a 705 px do topo do primeiro bloco e 613 px da esquerda, sobrepondo o painel.
- Ranking: proporcao 2620:2058, equivalente a aproximadamente 1126 x 884.5 px no viewport de referencia.
- Comportamento responsivo nao especificado no no; em telas estreitas, a tela sobreposta volta ao fluxo normal depois do painel para eliminar sobreposicao e overflow.

## Estilo e assets

| Arquivo local | Camada/ID Figma | Funcao | Formato e dimensoes | Proporcao, recorte e foco | Exibicao | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/inovacoes-disruptivas/dungeons-missions-illustration.png` | `Missions Illustration`, `3569:2108` | Painel de missoes | PNG, 1126 x 648 px | Sem recorte | 1126 x 648 px | `Painel de missões e tarefas da plataforma Dungeons & Data` |
| `assets/images/inovacoes-disruptivas/dungeons-missions-detail.jpg` | `Missions Image`, `3571:2140` | Tela de recompensa | JPEG otimizado, 464 x 573.5 px | Sem recorte | 464 x 573.5 px | `Tela de recompensa por missão concluída` |
| `assets/images/inovacoes-disruptivas/dungeons-ranking-illustration.png` | `Details Illustration`, `3570:2137` | Painel de ranking | PNG, 2620 x 2058 px | Sem recorte | 1126 x 884.5 px | `Tela de ranking de Dungeons & Data` |

## Interacoes e estados

- Nao especificados no no.

## Checklist de comparacao

- [x] Estrutura e conteudo conferem com o no.
- [x] Tipografia, cores, espacamento e composicao foram registrados a partir da captura.
- [x] Nenhum elemento ou conteudo foi inventado.
- [x] Cada imagem foi exportada da camada Figma registrada, e nao da captura.
- [ ] Arquivo, proporcao, escala, alinhamento e contraste conferem com a renderizacao local.
- [x] A responsividade remove a sobreposicao quando ela deixa de caber.
