# Produto final

- Figma: `3821:778`.
- Captura: `references/inovacoes-disruptivas-financas-final-product.png`.
- Viewport de referência: 1126 x 364 px.
- Escopo de código: seção após “Versão aprovada”, em Minhas Finanças XR.

## Estrutura e conteúdo

- Coluna esquerda de 490 px com o título `PRODUTO FINAL` e um divisor gráfico.
- Coluna direita de 562 x 364 px que contém duas mídias em sequência vertical, com 37 px entre elas.
- O nó nomeia as mídias como `VID-20250609-WA0012 1` e `VID-20250611-WA0001 1`, mas não disponibiliza arquivos de vídeo pela API do Figma.

## Layout e responsividade

- O título usa Cal Sans 68 px, line-height 85 px e tracking -1.5 px.
- A primeira mídia fica visível no viewport de referência. A segunda está abaixo do recorte, a 401 px do início da faixa.
- A troca por rolagem é uma interação solicitada para implementação e não está especificada como motion no nó: `get_motion_context` retornou inventário vazio.
- Em desktop, o título permanece sticky enquanto a faixa de mídia move verticalmente conforme a rolagem, revelando a segunda mídia. Em telas até 640 px, as mídias ficam empilhadas sem movimento. `prefers-reduced-motion` também desativa o efeito de scroll.

## Estilo e assets

| Arquivo local | Camada/ID Figma | Função | Formato e dimensões | Proporção, recorte e foco | Exibição | Alt text |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/images/inovacoes-disruptivas/financas-final-product-divider.png` | Line Divider / `3346:4953` | Divisor do título | PNG, 490 x 44 px | sem recorte | 490 x 44 px | vazio |
| `assets/images/inovacoes-disruptivas/financas-final-product-installation.jpg` | Exportação bruta do nó; a API não expôs a associação da imagem à camada de vídeo nomeada | Imagem estática temporária da instalação | JPEG otimizado, 647 x 366 px | `object-fit: cover` | 562 x 364 px no desktop | Instalação de Minhas Finanças XR em um evento de tecnologia |
| `assets/images/inovacoes-disruptivas/financas-final-product-headset.png` | Exportação bruta do nó; a API não expôs a associação da imagem à camada de vídeo nomeada | Imagem estática temporária de uso da experiência | PNG, 678 x 384 px | `object-fit: cover` | 562 x 364 px no desktop | Pessoa usando headset na experiência Minhas Finanças XR |

## Interações e estados

- A transição por rolagem foi solicitada pelo usuário: o título fica fixo na coluna esquerda enquanto a primeira mídia sai por cima e a segunda ocupa o viewport à direita.
- Não há controle de reprodução porque os arquivos de vídeo não foram disponibilizados. As duas imagens devem ser trocadas por `<video>` quando os arquivos MP4/WebM forem fornecidos.

## Checklist de comparação

- [x] Estrutura e conteúdo conferem com o nó.
- [x] Tipografia, dimensões e recorte do viewport conferem com a captura.
- [x] A interação extra foi documentada como solicitação do usuário, não atribuída ao Figma.
- [x] O divisor foi exportado da camada Figma registrada.
- [x] As mídias temporárias usam exportações brutas do nó e estão marcadas para substituição por vídeos.
- [x] Responsividade e `prefers-reduced-motion` foram implementados.
