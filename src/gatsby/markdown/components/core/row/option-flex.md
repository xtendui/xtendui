---
type: "Components"
category: "Core"
parent: "Row"
title: "Option Flex"
date: "2019-11-10"
---

[[notePrimary]]
| When using **flex util classes** with **breakpoints** you need to set the class breakpoint generation with `@generate-flex`.

## Direction

Set children's direction inside the flexbox.

`{value}` can be `row`, `row-reverse`, `column`, `column-reverse`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Css                   | `flex-direction: {value}`                        | `flex-direction: column`                   |
| Class                   | `.flex-direction-{value}`                        | `.flex-direction-column`                   |
| Class responsive        | `.flex-direction-{value}-{breakpoint}`           | `.flex-direction-column-sm`                |
| Mixin                   | `.flex-direction({value})`                        | `.flex-direction(column)`                   |
| Mixin responsive min    | `.flex-direction({value}, {breakpoint})`          | `.flex-direction(column, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/row/direction-row" mode="grid" name="row">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/direction-row-reverse" mode="grid" name="row-reverse">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/direction-column" mode="grid" name="column">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/direction-column-reverse" mode="grid" name="column-reverse">
  </demovanilla>
</demo>

## Wrap

Set children's wrapping inside the flexbox.

`{value}` can be `wrap`, `wrap-reverse`, `nowrap`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Css                   | `flex-wrap: {value}`                        | `flex-wrap: nowrap`                   |
| Class                   | `.flex-wrap-{value}`                        | `.flex-wrap-nowrap`                   |
| Class responsive        | `.flex-wrap-{value}-{breakpoint}`           | `.flex-wrap-nowrap-sm`                |
| Mixin                   | `.flex-wrap({value})`                        | `.flex-wrap(nowrap)`                   |
| Mixin responsive min    | `.flex-wrap({value}, {breakpoint})`          | `.flex-wrap(nowrap, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/row/wrap" mode="grid" name="wrap">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/wrap-reverse" mode="grid" name="wrap-reverse">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/nowrap" mode="grid" name="nowrap">
  </demovanilla>
</demo>

## Justify content

Set children's horizontal alignment inside the flexbox.

`{value}` can be `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Css                   | `justify-content: {value}`                        | `justify-content: center`                   |
| Class                   | `.justify-content-{value}`                        | `.justify-content-center`                   |
| Class responsive        | `.justify-content-{value}-{breakpoint}`           | `.justify-content-center-sm`                |
| Mixin                   | `.justify-content({value})`                        | `.justify-content(center)`                   |
| Mixin responsive min    | `.justify-content({value}, {breakpoint})`          | `.justify-content(center, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/row/justify-start" mode="grid" name="flex-start">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/justify-end" mode="grid" name="flex-end">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/justify-center" mode="grid" name="center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/justify-between" mode="grid" name="space-between">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/justify-around" mode="grid" name="space-around">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/justify-evenly" mode="grid" name="space-evenly">
  </demovanilla>
</demo>

## Align items

Set children's vertical alignment inside the flexbox.

`{value}` can be `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Css                   | `align-items: {value}`                        | `align-items: center`                   |
| Class                   | `.align-items-{value}`                        | `.align-items-center`                   |
| Class responsive        | `.align-items-{value}-{breakpoint}`           | `.align-items-center-sm`                |
| Mixin                   | `.align-items({value})`                        | `.align-items(center)`                   |
| Mixin responsive min    | `.align-items({value}, {breakpoint})`          | `.align-items(center, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/row/items-start" mode="grid" name="flex-start">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/items-end" mode="grid" name="flex-end">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/items-center" mode="grid" name="center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/items-baseline" mode="grid" name="baseline">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/items-stretch" mode="grid" name="stretch">
  </demovanilla>
</demo>

## Align content

Set children's vertical alignment inside the flexbox.

`{value}` can be `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Css                   | `align-content: {value}`                        | `align-content: center`                   |
| Class                   | `.align-content-{value}`                        | `.align-content-center`                   |
| Class responsive        | `.align-content-{value}-{breakpoint}`           | `.align-content-center-sm`                |
| Mixin                   | `.align-content({value})`                        | `.align-content(center)`                   |
| Mixin responsive min    | `.align-content({value}, {breakpoint})`          | `.align-content(center, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/row/content-start" mode="grid" name="flex-start">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/content-end" mode="grid" name="flex-end">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/content-center" mode="grid" name="center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/content-between" mode="grid" name="space-between">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/content-around" mode="grid" name="space-around">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/content-stretch" mode="grid" name="stretch">
  </demovanilla>
</demo>

## Align self

Set item's vertical alignment inside the flexbox.
If set to **auto** computes to the parent's `align-items` value.

`{value}` can be `flex-start`, `flex-end`, `center`, `baseline`, `stretch`, `auto`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Css                   | `align-self: {value}`                        | `align-self: center`                   |
| Class                   | `.align-self-{value}`                        | `.align-self-center`                   |
| Class responsive        | `.align-self-{value}-{breakpoint}`           | `.align-self-center-sm`                |
| Mixin                   | `.align-self({value})`                        | `.align-self(center)`                   |
| Mixin responsive min    | `.align-self({value}, {breakpoint})`          | `.align-self(center, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/row/self-start" mode="grid" name="flex-start">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/self-end" mode="grid" name="flex-end">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/self-center" mode="grid" name="center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/self-baseline" mode="grid" name="baseline">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/self-stretch" mode="grid" name="stretch">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/self-auto" mode="grid" name="auto">
  </demovanilla>
</demo>

## Order

Set item's order inside the flexbox.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Css                   | `order: {value}`                        | `order: -3`                   |
| Class                   | `.order-{number}`                        | `.order-1`                   |
| Class responsive        | `.order-{number}-{breakpoint}`           | `.order-1-sm`                |
| Mixin                   | `.order({number})`                        | `.order(1)`                   |
| Mixin responsive min    | `.order({number}, {breakpoint})`          | `.order(1, sm)`               |

</div>

[[notePrimary]]
| By default orders from `.order-0` to `.order-2` are negative values.

<demo>
  <demovanilla src="vanilla/components/core/row/order" mode="grid">
  </demovanilla>
</demo>
