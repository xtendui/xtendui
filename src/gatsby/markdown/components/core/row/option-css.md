---
type: "Components"
category: "Core"
parent: "Row"
title: "Option Css"
date: "2019-12-01"
---

## Variant

Classes for assigning variant (e.g.: space). Add or remove selectors at your discretion.

`{variant}` can be `default`, `form`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.row-{variant}`                        | `.row-default` `.row-form` |
| Mixin                   | `.row-{variant}()`                      | `.row-default()` `.row-form()`  |

</div>

## Space

Row **automatically** add horizontal and vertical spacing to the contents. You can **specify a different one** with this classes/mixins.

`{size}` can be `none`, `mini`, `tiny`, `small`, `medium`, `large`, `big`, `giant`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.row-space-{size}`                      | `.row-space-small`           |
| Class responsive        | `.row-space-{size}-{breakpoint}`         | `.row-space-small-sm`        |
| Mixin                   | `.row-space({size})`                      | `.row-space(small)`           |
| Mixin responsive min    | `.row-space({size}, {breakpoint})`        | `.row-space(small, sm)`       |

</div>

`{direction}` can be `x`, `y`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.row-space-{direction}-{size}`                      | `.row-space-x-small`           |
| Class responsive        | `.row-space-{direction}-{size}-{breakpoint}`         | `.row-space-x-small-sm`        |
| Mixin                   | `.row-space-{direction}({size})`                      | `.row-space-x(small)`           |
| Mixin responsive min    | `.row-space-{direction}({size}, {breakpoint})`        | `.row-space-x(small, sm)`       |

</div>

[[notePrimary]]
| When using **row space classes** with **breakpoints** you need to set the class breakpoint generation with `@generate-row`.

<demo>
  <demovanilla src="vanilla/components/core/row/space-none" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-mini" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-tiny" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-small" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-medium" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-large" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-big" mode="grid">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-giant" mode="grid">
  </demovanilla>
</demo>
