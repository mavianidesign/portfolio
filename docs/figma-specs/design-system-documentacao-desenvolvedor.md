# Design System — Documentação Desenvolvedor

- Figma: `https://www.figma.com/design/hGGG437D2cA4j8qBUV4ufk/Portfólio?node-id=2906-2379`
- Nó: `2906:2379` (`Developer Documentation Section`)
- Captura: `references/design-system-documentacao-desenvolvedor.png`
- Viewport de referência: 1126 × 1195 px
- Escopo de código: section Documentação Desenvolvedor de `projetos/design-system.html`

## Estrutura e conteúdo

- Título `DOCUMENTAÇÃO DESENVOLVEDOR` e texto de descrição.
- Composição de duas imagens: imagem anotada à esquerda e imagem integral recortada à direita, com seta entre elas.
- Três cards de resultado: padronização no processo de desenvolvimento; atualização e manutenção de documentação; uso de diretrizes de acessibilidade WCAG.

## Layout e responsividade

- Section em coluna com gap de 120 px.
- Título e descrição separados por 8 px; descrição em Lora bold 16 px e line-height 1,55.
- Composição visual: 1126 × 629 px, imagem anotada de 551 × 512 px deslocada 32 px do topo; imagem integral de 552 × 629 px recortada; seta de 199 × 42 px na posição 351,9 × 404,96 px dentro da composição.
- Cards em três colunas iguais, com gap de 24 px, padding de 24 px, gap interno de 32 px, raio de 8 px e fundo `#252e32`.
- Ícones em círculos de 88 × 88 px, com padding de 24 px e ícone interno de 40 × 40 px.
- Comportamento mobile não especificado no nó; preservar a ordem de leitura, empilhar cards e evitar recortes essenciais.

## Estilo e assets

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/design-system/documentation-full-image.png` | `Full Image` / `2867:1515` | documentação integral | PNG otimizado com transparência; 553 × 1302 px no layout da camada | `cover`, recortada no contêiner | 552 × 629 px | vazio |
| `assets/images/design-system/documentation-annotated-image.png` | `Annotated Image` / `2867:1556` | documentação anotada | PNG; recorte 135,9% × 109,83% no nó | deslocamento -13,5% × -7,67% | 551 × 512 px | vazio |
| `assets/images/design-system/documentation-arrow.png` | `Left Arrow` / `3339:3811` | decorativa | PNG; 199 × 42 px | invertida verticalmente e rotacionada 180° | 199 × 42 px | vazio |
| `assets/icons/design-system-development.svg` | `Task Icon` / `2867:1582` | resultado 1 | SVG; 40 × 40 px | sem recorte | 40 × 40 px | vazio |
| `assets/icons/design-system-documentation-result.svg` | `Documentation Icon` / `2867:1587` | resultado 2 | SVG; 40 × 40 px | sem recorte | 40 × 40 px | vazio |
| `assets/icons/design-system-accessibility-ring.svg` + `assets/icons/design-system-accessibility-result.svg` | `Ellipse 2` / `2867:1593`, `Accessibility Icon` / `2867:1594` | resultado 3 | SVG; 40 × 40 px e 36,562 × 36,562 px | sobrepostos | 40 × 40 px | vazio |
| `docs/figma-specs/references/design-system-documentacao-desenvolvedor.png` | `Developer Documentation Section` / `2906:2379` | referência comparativa | PNG; 1126 × 1195 px | captura integral; não usar em produção | somente comparação | vazio |

## Interações e estados

- Não especificados no nó.

## Checklist de comparação

- [ ] Estrutura e conteúdo conferem com o nó.
- [ ] Tipografia, cores, espaçamento e composição conferem com a captura.
- [ ] Nenhum elemento ou conteúdo foi inventado.
- [ ] Arquivo, proporção, escala, alinhamento e contraste conferem com a captura.
- [ ] Responsividade foi implementada sem contradizer o nó.
