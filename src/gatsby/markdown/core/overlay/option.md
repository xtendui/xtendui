---
type: "Core"
parent: "Overlay"
title: "Option"
date: "2000-02-01"
---

[[noteDefault]]
| Overlay uses card to style it's content, refer to [card's options](/core/card/option) for a complete **API**.

##Variant

Classes for assigning variant (e.g.: border / background / font colors).

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay--{variant}`                     | `.overlay--default` `.overlay--primary` |
| Mixin                   | `.overlay--{variant}()`                   | `.overlay--default()` `.overlay--primary()`         |

</div>

<demo>
  <demovanilla src="vanilla/core/overlay/variant">
  </demovanilla>
</demo>

##Size

Classes for assigning width.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay--{size}`                        | `.overlay--small`             |
| Mixin                   | `.overlay-size({size})`                   | `.overlay-size(small)`         |

</div>

<demo>
  <demovanilla src="vanilla/core/overlay/size">
  </demovanilla>
</demo>
