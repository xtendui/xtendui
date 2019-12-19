---
type: "Components"
badge: "Core"
parent: "Card"
title: "Horizontal"
date: "2000-05-01"
---

## Block

You can add custom `.card-block` modifiers and style them as you like (e.g.: `.card-block-head`).

<demo>
  <demovanilla src="vanilla/components/card/horizontal-block">
  </demovanilla>
</demo>

## Multiple

Sequential `.card-item` stack vertically.

They have a separator automatically styled with [variants](/components/card/option#variant). Just be sure to style `.card-item-{variant}` as in the **card.less** to not break css specificity.

<demo>
  <demovanilla src="vanilla/components/card/horizontal-multiple">
  </demovanilla>
</demo>

## Asset

If you want full width assets use `.card-asset`.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.card-asset`                | Not Possible        | Full width block with responsive full assets            |

</div>

<demo>
  <demovanilla src="vanilla/components/card/horizontal-asset">
  </demovanilla>
</demo>

## Overflow

You can set vertical overflow using `.card-overflow-y` in `.card-inner` or `.card-block`.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.card-overflow-y`                | `.card-overflow-y()`        | Vertical overflow with max-height and scrollbar            |

</div>

<demo>
  <demovanilla src="vanilla/components/card/horizontal-overflow-y">
  </demovanilla>
</demo>
