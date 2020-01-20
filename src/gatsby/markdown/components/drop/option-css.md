---
type: "Components"
badge: "Core"
parent: "Drop"
title: "Option Css"
date: "2000-02-01"
---

## Variant

Classes for assigning variant (e.g.: border / background / font colors). Add or remove selectors at your discretion

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{variant}`                        | `.drop-default` `.drop-primary` |
| Mixin                   | `.drop-{variant}()`                      | `.drop-default()` `.drop-primary()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/variant">
  </demovanilla>
</demo>

## Position

Set drop position with this classes.

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{position}`                        | `.drop-bottom` `.drop-top` `.drop-left` `.drop-right` `.drop-center` `.drop-before` `.drop-after` |
| Mixin                   | `.drop-{position}()`                      | `.drop-bottom()` `.drop-top()` `.drop-left()` `.drop-right()` `.drop-center()` `.drop-before()` `.drop-after()` |

<demo>
  <demovanilla src="vanilla/components/drop/left">
  </demovanilla>
  <demovanilla src="vanilla/components/drop/right">
  </demovanilla>
  <demovanilla src="vanilla/components/drop/center">
  </demovanilla>
  <demovanilla src="vanilla/components/drop/before">
  </demovanilla>
  <demovanilla src="vanilla/components/drop/after">
  </demovanilla>
</demo>
