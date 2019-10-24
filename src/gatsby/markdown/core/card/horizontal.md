---
type: "Core"
parent: "Card"
title: "Horizontal"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
date: "2000-05-01"
---

##Block

You can add custom `.card-block` modifiers and style them as you like (e.g.: `.card-block--custom`).

<demo>
  <demovanilla src="inline/core/card/horizontal-block">
  </demovanilla>
</demo>

##Multiple

Sequential `.card-item` stack vertically.

They have a separator automatically styled with [variants](/core/card/options#variant). Just be sure to style `.card-item--{variant}` as in the **card.less** to not break css specificity.

<demo>
  <demovanilla src="inline/core/card/horizontal-multiple">
  </demovanilla>
</demo>

##Asset

If you want full width assets use `.card-asset`.

<demo>
  <demovanilla src="inline/core/card/horizontal-asset">
  </demovanilla>
</demo>

##Overflow

You can set vertical overflow using `.card--overflow-y` in `card-inner` or `card-block`.

<demo>
  <demovanilla src="inline/core/card/horizontal-overflow-y">
  </demovanilla>
</demo>
