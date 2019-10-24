---
type: "Core"
parent: "Overlay"
title: "Content"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

Overlay uses [card](/core/card/options#preset) with a preset just for overlay to assign card's default options like variant or size.

You can customize the preset inside **card.less**.

##Block

You can add custom `.card-block` modifiers and style them as you like (e.g.: `.card-block--custom`).

<demo>
  <demovanilla src="inline/core/overlay/block">
  </demovanilla>
</demo>

##Multiple

Sequential `.card-item` stack vertically.

They have a separator automatically styled with [variants](/core/card/options#variant). Just be sure to style `.card-item--{variant}` as in the **card.less** to not break css specificity.

<demo>
  <demovanilla src="inline/core/overlay/multiple">
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
  <demovanilla src="inline/core/overlay/group">
  </demovanilla>
</demo>

##Asset

If you want full width assets use `.card-asset`.

<demo>
  <demovanilla src="inline/core/overlay/asset">
  </demovanilla>
</demo>

##Overflow

You can set vertical overflow using `.card--overflow-y` in `card-inner` or `card-block`.

<demo>
  <demovanilla src="inline/core/overlay/overflow-y">
  </demovanilla>
</demo>
