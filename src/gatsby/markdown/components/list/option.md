---
type: "Components"
badge: "Core"
parent: "List"
title: "Option"
date: "2000-02-01"
---

##Space

Lists **automatically** add horizontal and vertical spacing to the contents. You can **specify a different one** with this classes/mixins.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.list-space--{size}`                     | `.list-space--small`          |
| Class responsive        | `.list-space--{size}--{breakpoint}`        | `.list-space--small--sm`       |
| Mixin                   | `.list-space({size})`                     | `.list-space(small)`          |
| Mixin responsive min    | `.list-space({size}, {breakpoint})`       | `.list-space(small, sm)`      |

</div>

<demo>
  <demovanilla src="vanilla/components/list/space-none">
  </demovanilla>
  <demovanilla src="vanilla/components/list/space-tiny">
  </demovanilla>
  <demovanilla src="vanilla/components/list/space-small">
  </demovanilla>
  <demovanilla src="vanilla/components/list/space-medium">
  </demovanilla>
  <demovanilla src="vanilla/components/list/space-big">
  </demovanilla>
  <demovanilla src="vanilla/components/list/space-giant">
  </demovanilla>
  <demovanilla src="vanilla/components/list/space-huge">
  </demovanilla>
</demo>

##Direction

Set children's direction inside the flexbox.

<demo>
  <demovanilla src="vanilla/components/list/direction-row">
  </demovanilla>
  <demovanilla src="vanilla/components/list/direction-row-reverse">
  </demovanilla>
  <demovanilla src="vanilla/components/list/direction-column">
  </demovanilla>
  <demovanilla src="vanilla/components/list/direction-column-reverse">
  </demovanilla>
</demo>

##Wrap

Set children's wrapping inside the flexbox.

<demo>
  <demovanilla src="vanilla/components/list/wrap">
  </demovanilla>
  <demovanilla src="vanilla/components/list/wrap-reverse">
  </demovanilla>
  <demovanilla src="vanilla/components/list/nowrap">
  </demovanilla>
</demo>

##Justify content

Set children's horizontal alignment inside the flexbox.

<demo>
  <demovanilla src="vanilla/components/list/justify-start">
  </demovanilla>
  <demovanilla src="vanilla/components/list/justify-end">
  </demovanilla>
  <demovanilla src="vanilla/components/list/justify-center">
  </demovanilla>
  <demovanilla src="vanilla/components/list/justify-between">
  </demovanilla>
  <demovanilla src="vanilla/components/list/justify-around">
  </demovanilla>
  <demovanilla src="vanilla/components/list/justify-evenly">
  </demovanilla>
</demo>

##Align items

Set children's vertical alignment inside the flexbox.

<demo>
  <demovanilla src="vanilla/components/list/items-start">
  </demovanilla>
  <demovanilla src="vanilla/components/list/items-end">
  </demovanilla>
  <demovanilla src="vanilla/components/list/items-center">
  </demovanilla>
  <demovanilla src="vanilla/components/list/items-baseline">
  </demovanilla>
  <demovanilla src="vanilla/components/list/items-stretch">
  </demovanilla>
</demo>

##Align content

Set children's vertical alignment inside the flexbox.

<demo>
  <demovanilla src="vanilla/components/list/content-start">
  </demovanilla>
  <demovanilla src="vanilla/components/list/content-end">
  </demovanilla>
  <demovanilla src="vanilla/components/list/content-center">
  </demovanilla>
  <demovanilla src="vanilla/components/list/content-between">
  </demovanilla>
  <demovanilla src="vanilla/components/list/content-around">
  </demovanilla>
  <demovanilla src="vanilla/components/list/content-stretch">
  </demovanilla>
</demo>

##Align self

Set item's vertical alignment inside the flexbox.
If set to **auto** computes to the parent's `align-items` value.

<demo>
  <demovanilla src="vanilla/components/list/self-start">
  </demovanilla>
  <demovanilla src="vanilla/components/list/self-end">
  </demovanilla>
  <demovanilla src="vanilla/components/list/self-center">
  </demovanilla>
  <demovanilla src="vanilla/components/list/self-baseline">
  </demovanilla>
  <demovanilla src="vanilla/components/list/self-stretch">
  </demovanilla>
  <demovanilla src="vanilla/components/list/self-auto">
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
  <demovanilla src="vanilla/components/list/order">
  </demovanilla>
</demo>
  
