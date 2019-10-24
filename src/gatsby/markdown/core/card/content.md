---
type: "Core"
parent: "Card"
title: "Content"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
date: "2000-04-01"
---

##Custom

As it's done with `.card-title`, you can add as many classes for content as you like inside `.card-block` and style them inside [variant](/core/card/options#variant) or [size](/core/card/options#size).

##Block

You can add custom `.card-block` modifiers and style them as you like (e.g.: `.card-block--custom`).

<demo>
  <demovanilla src="inline/core/card/block">
  </demovanilla>
</demo>

##Multiple

Sequential `.card-item` stack vertically.

They have a separator automatically styled with [variants](/core/card/options#variant). Just be sure to style `.card-item--{variant}` as in the **card.less** to not break css specificity.

<demo>
  <demovanilla src="inline/core/card/multiple">
  </demovanilla>
</demo>

##Group

To stack `.card-item` horizontally use `.card-item-nested` and `.card-group` with responsive classes if you need them. 

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-group`                           | `.card-group`                      |
| Class responsive        | `.card-group--{breakpoint}`              | `.card-group--sm`                   |

</div>

<demo>
  <demovanilla src="inline/core/card/group">
  </demovanilla>
</demo>

##Asset

If you want full width assets use `.card-asset`.

<demo>
  <demovanilla src="inline/core/card/asset">
  </demovanilla>
</demo>

##Overflow

You can set vertical overflow using `.card--overflow-y` in `card-inner` or `card-block`.

<demo>
  <demovanilla src="inline/core/card/overflow-y">
  </demovanilla>
</demo>
