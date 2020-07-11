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
