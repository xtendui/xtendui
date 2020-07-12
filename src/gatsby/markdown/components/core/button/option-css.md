---
type: "Components"
category: "Core"
parent: "Button"
title: "Option Css"
date: "2019-12-01"
---

## Variant

Classes for assigning variant (e.g.: border / background / color).

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.btn-{variant}`                        | `.btn-default` `.btn-primary` `.btn-text` `.btn-link` |
| Mixin                   | `.btn-{variant}()`                      | `.btn-default()` `.btn-primary()`  `.btn-text()` `.btn-link()`   |

</div>

<demo>
  <demovanilla src="vanilla/components/core/button/variant">
  </demovanilla>
</demo>

On containers use `.text-inverse` to have white buttons (needs `color: inherit`).

<demo>
  <demovanilla src="vanilla/components/core/button/inverse">
  </demovanilla>
</demo>

## Size

Classes for assigning size (e.g.: padding or font size).

Sizes uses `em` padding that depends on font size.

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.btn-{size}`                        | `.btn-tiny` `.btn-small` `.btn-medium` `.btn-large` `.btn-big` |
| Mixin                   | `.btn-{size}()`                      | `.btn-tiny()` `.btn-small()`  `.btn-medium()` `.btn-large()` `.btn-big()`   |

<demo>
  <demovanilla src="vanilla/components/core/button/size">
  </demovanilla>
</demo>
