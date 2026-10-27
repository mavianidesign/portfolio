# Padrão de implementação

Este documento traduz as diretrizes do repositório em decisões práticas para páginas e seções novas. Ele complementa, mas não substitui, `agents.md`; quando houver um nó Figma, a especificação desse nó continua sendo a fonte de verdade visual.

## Camadas de CSS

Carregue os estilos na ordem abaixo. Cada camada tem uma responsabilidade para que uma página não dependa acidentalmente de outra.

1. `css/tokens.css`: valores semânticos compartilhados.
2. `css/base.css`: reset, tipografia-base e fundamentos do documento.
3. `css/layout.css`: primitivas de largura e espaçamento estrutural.
4. `css/components.css`: componentes visuais recorrentes.
5. `css/project-*.css`: composição exclusiva de cada case ou página.

Uma página não importa o CSS de outra. O CSS local não redefine a API global: ele a compõe e acrescenta somente as regras que pertencem àquela página.

A home carrega `css/index.css` depois de `css/components.css`. As imagens e overlays de hover dos cards de projeto pertencem a esse stylesheet local, pois reproduzem as composições visuais de cada case.

## API compartilhada atual

O `.project-button` usa o SVG decorativo inline `.project-button__icon`, com `currentColor`, permitindo que sua cor acompanhe tokens e transicione no hover.

Os links de `.site-nav` usam `--color-text-soft` no hover e quando recebem `aria-current="page"`. Na home, `js/main.js` atualiza esse atributo conforme a se��ǜo cruza o cabe��alho fixo.

O footer `.contact` mantém o e-mail em uma única linha com escala relativa à largura disponível. Em telas de até 640 px, `.time-info` vem antes do copyright e o copyright fica centralizado.

| Necessidade | API preferencial |
| --- | --- |
| Largura e ritmo vertical | `.container`, `.section`, `.case-study` |
| Capa de case | `.case-cover` e seus elementos `__layout`, `__intro`, `__context`, `__copy`, `__meta` |
| Hierarquia de case | `.case-title` e modificadores, `.eyebrow` |
| Aviso confidencial | `.notice.notice--nda` e seus elementos `__header`, `__icon`, `__title`, `__copy` |
| Retorno de navegação | `.back-link` |
| Superfícies e cards | `.surface-card`, `.surface-card--lg` |
| Ícone em suporte visual | `.icon-badge` e variantes de tamanho |
| Moldura de mídia | `.media-frame` |
| Elementos já consolidados | `.tag`, `.project-button`, header e footer |

Os modificadores definem variações previsíveis; o conteúdo e a geometria de uma seção continuam responsabilidade do seletor local.

### Geometria desktop da capa de case

As classes case-cover e case-cover__layout usam altura mínima de 680 px e
posicionam o conteúdo a 200 px do topo no desktop. A regra é compartilhada
por Inovações Disruptivas e Web Design, cujos frames Figma usam capa de
1366 x 680 px. A composição editorial, a imagem e o overlay continuam locais.

## Decisão: global ou local

Crie ou estenda um componente global somente se houver uma semântica estável e reutilização real ou claramente prevista em dois ou mais contextos. Crie um token apenas se o valor representar uma decisão visual repetida, como uma cor de superfície ou um raio de card.

Ao remover uma regra ou token sem consumidor, confirme a ausência de referências em HTML, CSS e JavaScript e valide os viewports suportados antes de excluir os assets associados. Não preserve tokens globais sem uso para um futuro hipotético.

Mantenha no CSS da página: crops e `object-position`, proporções excepcionais, imagens e ilustrações, gradientes e overlays editoriais, posições decorativas, altura de uma composição e correções de breakpoint exclusivas. Esses valores descrevem o case, não uma biblioteca.

Evite classes utilitárias vagas, seletores globais que afetem todos os elementos de uma tag e aliases para APIs removidas. Ao migrar uma classe, atualize HTML e CSS no mesmo trabalho e remova a versão legada.

### Home: seções iniciais

A composição do destaque profissional e da seção `Designólogo` pertence a
`css/index.css`: medidas, rotações, recortes e o posicionamento da seta e dos
rascunhos são exclusivos da home. A implementação reutiliza `.container` e
`.section`, além dos tokens existentes de cor, tipografia, espaçamento e
sombra. Nenhum token ou componente global foi criado, pois essa geometria não
tem uso estável em um segundo contexto.

## Fluxo para uma nova página ou seção

1. Inspecione o HTML alvo, os estilos carregados e a API compartilhada antes de criar classes.
2. Se houver nó Figma, execute o fluxo obrigatório de `agents.md`: contexto do design, spec em `docs/figma-specs/` e captura de referência antes de codificar. Sem nó Figma, não atribua medidas inferidas ao Figma.
3. Estruture o HTML com semântica e componha `.container`, `.section` e os componentes existentes quando fizer sentido.
4. Decida explicitamente se uma nova regra é global ou local usando o critério acima. Documente alterações de API ou tokens neste arquivo.
5. Mantenha assets, recortes e composição artística no CSS da página; não crie dependência entre stylesheets de cases.
6. Faça a validação responsiva e estática antes de concluir.

## Responsividade, acessibilidade e desempenho

- Preserve o desktop aprovado. Empilhe ou reorganize quando o conteúdo exigir; não introduza alterações estéticas gratuitas em telas menores.
- Use `minmax(0, 1fr)` em grids flexíveis e `min-width: 0` em filhos que podem encolher para evitar estouro por texto ou mídia.
- Confinar uma decoração extrapolada ao seu frame é preferível a esconder overflow do documento inteiro. Scroll horizontal é excepcional e deve ser intencional, acessível e local.
- Dimensione títulos longos com uma escala fluida (`clamp()`) ou uma redução local no breakpoint em que a maior palavra deixa de caber. Valide o menor viewport suportado e permita quebra de linha segura quando o conteúdo exigir.
- Em layouts empilhados, remova dimensões e deslocamentos absolutos que não se adaptem à largura disponível; para imagens de conteúdo, prefira `width: 100%`, `max-width: 100%` e `height: auto` dentro de uma moldura de largura limitada.
- Para faixas horizontais arrastáveis, mantenha o scroll no próprio componente (`overflow-x: auto`), preserve o contêiner externo dentro da viewport e use `overscroll-behavior-inline: contain` e `touch-action: pan-x`. Nunca esconda esse conteúdo em um ancestral.
- Imagens de conteúdo têm `alt` adequado, `width` e `height` conhecidos e `loading="lazy"` fora do hero. Preserve `prefers-reduced-motion`.
- Não incluir dependências, JavaScript, assets ou animações sem necessidade comprovada.

## Unidades CSS

- Use `rem` para `font-size` e tokens de tamanho tipografico.
- Use `line-height` sem unidade quando a entrelinha for proporcional e `em` para `letter-spacing`.
- Use `px` para espacamentos, dimensoes, bordas, raios, sombras, offsets, icones e decoracao.
- Preserve unidades semanticas existentes, como `%`, `vw`, `vh`, `fr`, `deg`, `s` e `ms`; breakpoints nao fazem parte desta convencao.

## Checklist de entrega

- [ ] CSS carregado na ordem canônica e sem import de stylesheet de outra página.
- [ ] Componentes existentes reutilizados antes de criar classes novas.
- [ ] Tokens novos são semânticos e reutilizáveis; valores exclusivos ficaram locais.
- [ ] Sem classes legadas, regras comentadas obsoletas ou dependências não usadas.
- [ ] Conferência no viewport de referência e em 1366, 1024, 900, 768, 640, 390 e 320 px quando aplicável.
- [ ] Sem overflow horizontal visível fora de regiões cuja rolagem é intencional.
- [ ] Títulos, metadados, grids, mídia, navegação, `alt`, ARIA e movimento reduzido preservados ou melhorados sem regressão.
