---
type: "Components"
category: "Core"
parent: "List"
title: "Option Css"
date: "2019-12-01"
---

## Variant

Classes for assigning variant (e.g.: space). Add or remove selectors at your discretion.

`{variant}` can be `default`, `drop`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.list-{variant}`                        | `.list-default` |
| Mixin                   | `.list-{variant}()`                      | `.list-default()`  |

</div>

## Space

Lists **automatically** add horizontal and vertical spacing to the contents. You can **specify a different one** with this classes/mixins.

`{size}` can be `none`, `micro`, `tiny`, `small`, `medium`, `big`, `giant`, `huge`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.list-space-{size}`                     | `.list-space-small`          |
| Class responsive        | `.list-space-{size}-{breakpoint}`        | `.list-space-small-sm`       |
| Mixin                   | `.list-space({size})`                     | `.list-space(small)`          |
| Mixin responsive min    | `.list-space({size}, {breakpoint})`       | `.list-space(small, sm)`      |

</div>

`{direction}` can be `x`, `y`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.list-space-{direction}-{size}`                      | `.list-space-x-small`           |
| Class responsive        | `.list-space-{direction}-{size}-{breakpoint}`         | `.list-space-x-small-sm`        |
| Mixin                   | `.list-space-{direction}({size})`                      | `.list-space-x(small)`           |
| Mixin responsive min    | `.list-space-{direction}({size}, {breakpoint})`        | `.list-space-x(small, sm)`       |

</div>

[[notePrimary]]
| When using **list space classes** with **breakpoints** you need to set the class breakpoint generation with `@generate-list`.

<demo>
  <demovanilla src="vanilla/components/core/list/space-none">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-mini">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-tiny">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-small">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-medium">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-large">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-big">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/space-giant">
  </demovanilla>
</demo>

## Flex util

[[notePrimary]]
| When using **flex util classes** with **breakpoints** you need to set the class breakpoint generation with `@generate-flex`.

#### Direction

Set children's direction inside the flexbox.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.flex-direction-{value}`                        | `.flex-direction-column`                   |
| Class responsive        | `.flex-direction-{value}-{breakpoint}`           | `.flex-direction-column-sm`                |
| Mixin                   | `.flex-direction({value})`                        | `.flex-direction(column)`                   |
| Mixin responsive min    | `.flex-direction({value}, {breakpoint})`          | `.flex-direction(column, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/list/direction-row">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/direction-row-reverse">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/direction-column">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/direction-column-reverse">
  </demovanilla>
</demo>

#### Wrap

Set children's wrapping inside the flexbox.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.flex-wrap-{value}`                        | `.flex-wrap-nowrap`                   |
| Class responsive        | `.flex-wrap-{value}-{breakpoint}`           | `.flex-wrap-nowrap-sm`                |
| Mixin                   | `.flex-wrap({value})`                        | `.flex-wrap(nowrap)`                   |
| Mixin responsive min    | `.flex-wrap({value}, {breakpoint})`          | `.flex-wrap(nowrap, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/list/wrap">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/wrap-reverse">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/nowrap">
  </demovanilla>
</demo>

#### Justify content

Set children's horizontal alignment inside the flexbox.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.justify-content-{value}`                        | `.justify-content-center`                   |
| Class responsive        | `.justify-content-{value}-{breakpoint}`           | `.justify-content-center-sm`                |
| Mixin                   | `.justify-content({value})`                        | `.justify-content(center)`                   |
| Mixin responsive min    | `.justify-content({value}, {breakpoint})`          | `.justify-content(center, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/list/justify-start">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/justify-end">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/justify-center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/justify-between">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/justify-around">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/justify-evenly">
  </demovanilla>
</demo>

#### Align items

Set children's vertical alignment inside the flexbox.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.align-items-{value}`                        | `.align-items-center`                   |
| Class responsive        | `.align-items-{value}-{breakpoint}`           | `.align-items-center-sm`                |
| Mixin                   | `.align-items({value})`                        | `.align-items(center)`                   |
| Mixin responsive min    | `.align-items({value}, {breakpoint})`          | `.align-items(center, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/list/items-start">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/items-end">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/items-center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/items-baseline">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/items-stretch">
  </demovanilla>
</demo>

#### Align content

Set children's vertical alignment inside the flexbox.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.align-content-{value}`                        | `.align-content-center`                   |
| Class responsive        | `.align-content-{value}-{breakpoint}`           | `.align-content-center-sm`                |
| Mixin                   | `.align-content({value})`                        | `.align-content(center)`                   |
| Mixin responsive min    | `.align-content({value}, {breakpoint})`          | `.align-content(center, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/list/content-start">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/content-end">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/content-center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/content-between">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/content-around">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/content-stretch">
  </demovanilla>
</demo>

#### Align self

Set item's vertical alignment inside the flexbox.
If set to **auto** computes to the parent's `align-items` value.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.align-self-{value}`                        | `.align-self-center`                   |
| Class responsive        | `.align-self-{value}-{breakpoint}`           | `.align-self-center-sm`                |
| Mixin                   | `.align-self({value})`                        | `.align-self(center)`                   |
| Mixin responsive min    | `.align-self({value}, {breakpoint})`          | `.align-self(center, sm)`               |

</div>

<demo>
  <demovanilla src="vanilla/components/core/list/self-start">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/self-end">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/self-center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/self-baseline">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/self-stretch">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/self-auto">
  </demovanilla>
</demo>

#### Order

Set item's order inside the flexbox.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.order-{value}`                        | `.order-1`                   |
| Class responsive        | `.order-{value}-{breakpoint}`           | `.order-1-sm`                |
| Mixin                   | `.order({value})`                        | `.order(1)`                   |
| Mixin responsive min    | `.order({value}, {breakpoint})`          | `.order(1, sm)`               |

</div>

[[notePrimary]]
| By default orders from `.order-0` to `.order-2` are negative values.

<demo>
  <demovanilla src="vanilla/components/core/list/order">
  </demovanilla>
</demo>

