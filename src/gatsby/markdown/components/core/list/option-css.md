---
type: "Components"
category: "Core"
parent: "List"
title: "Option Css"
date: "2019-12-01"
---

## Preset

`{preset}` can be `default`, `drop`. Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.list-{preset}`                        | `.list-default` `.list-drop` |
| Mixin                   | `.list-{preset}()`                      | `.list-default()` `.list-drop()`  |

</div>

<demo>
  <demovanilla src="vanilla/components/core/list/preset-default">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/core/list/preset-drop">
  </demovanilla>
</demo>

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
| Mixin                   | `.list-space({value})`                     | `.list-space(2.5rem)`          |
| Mixin responsive min    | `.list-space({value}, {breakpoint})`       | `.list-space(2.5rem, sm)`      |

</div>

`{direction}` can be `x`, `y`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.list-space-{direction}-{size}`                      | `.list-space-x-small`           |
| Class responsive        | `.list-space-{direction}-{size}-{breakpoint}`         | `.list-space-x-small-sm`        |
| Mixin                   | `.list-space-{direction}({size})`                      | `.list-space-x(small)`           |
| Mixin responsive min    | `.list-space-{direction}({size}, {breakpoint})`        | `.list-space-x(small, sm)`       |
| Mixin                   | `.list-space-{direction}({value})`                     | `.list-space-x(2.5rem)`          |
| Mixin responsive min    | `.list-space-{direction}({value}, {breakpoint})`       | `.list-space-x(2.5rem, sm)`      |

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
