---
type: "Core"
parent: "Row"
title: "Option"
date: "2000-02-01"
---

##Space

Row **automatically** add horizontal and vertical spacing to the contents. You can **specify a different one** with this classes/mixins.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.row-space--{size}`                      | `.row-space--small`           |
| Class responsive        | `.row-space--{size}--{breakpoint}`         | `.row-space--small--sm`        |
| Mixin                   | `.row-space({size})`                      | `.row-space(small)`           |
| Mixin responsive min    | `.row-space({size}, {breakpoint})`        | `.row-space(small, sm)`       |

</div>

<demo>
  <demovanilla src="vanilla/core/row/space-none" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/space-tiny" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/space-small" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/space-medium" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/space-big" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/space-giant" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/space-huge" mode="grid">
  </demovanilla>
</demo>

##Direction

Set children's direction inside the flexbox.

<demo>
  <demovanilla src="vanilla/core/row/direction-row" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/direction-row-reverse" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/direction-column" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/direction-column-reverse" mode="grid">
  </demovanilla>
</demo>

##Wrap

Set children's wrapping inside the flexbox.

<demo>
  <demovanilla src="vanilla/core/row/wrap" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/wrap-reverse" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/nowrap" mode="grid">
  </demovanilla>
</demo>

##Justify content

Set children's horizontal alignment inside the flexbox.

<demo>
  <demovanilla src="vanilla/core/row/justify-start" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/justify-end" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/justify-center" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/justify-between" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/justify-around" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/justify-evenly" mode="grid">
  </demovanilla>
</demo>

##Align items

Set children's vertical alignment inside the flexbox.

<demo>
  <demovanilla src="vanilla/core/row/items-start" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/items-end" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/items-center" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/items-baseline" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/items-stretch" mode="grid">
  </demovanilla>
</demo>

##Align content

Set children's vertical alignment inside the flexbox.

<demo>
  <demovanilla src="vanilla/core/row/content-start" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/content-end" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/content-center" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/content-between" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/content-around" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/content-stretch" mode="grid">
  </demovanilla>
</demo>

##Align self

Set item's vertical alignment inside the flexbox.
If set to **auto** computes to the parent's `align-items` value.

<demo>
  <demovanilla src="vanilla/core/row/self-start" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/self-end" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/self-center" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/self-baseline" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/self-stretch" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/core/row/self-auto" mode="grid">
  </demovanilla>
</demo>

##Order

Set item's order inside the flexbox.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.order-{number}`                        | `.order-1`                   |
| Class responsive        | `.order-{number}--{breakpoint}`           | `.order-1--sm`                |
| Mixin                   | `.order({number})`                        | `.order(1)`                   |
| Mixin responsive min    | `.order({number}, {breakpoint})`          | `.order(1, sm)`               |

</div>

[[noteDefault]]
| By default orders from `.order-0` to `.order-2` are negative values.

<demo>
  <demovanilla src="vanilla/core/row/order" mode="grid">
  </demovanilla>
</demo>
  
