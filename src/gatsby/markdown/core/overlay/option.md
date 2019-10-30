---
type: "Core"
parent: "Overlay"
title: "Option"
date: "2000-02-01"
---

Overlay uses card to style it's content, refer to [card page](/core/card/option) for complete card's options.

##Variant

Classes for assigning variant (e.g.: border / background / font colors).

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay--{variant}`                        | `.overlay--default` `.overlay--primary` |

</div>
        
<demo>
  <demovanilla src="inline/core/overlay/variant">
  </demovanilla>
</demo>

##Size

Optional classes for assigning width.

You can change the **default size** @TODO less path

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay--{size}`                        | `.overlay--small`             |
| Mixin                   | `.overlay-size({size})`                  | `.overlay-size(small)`       |

</div>

<div class="note note--primary note--background">
  You can set overlay's size in the `_variables.less`.
</div>

`.overlay--tiny` `.overlay--small` `.overlay--medium` `.overlay--big` `.overlay--giant` `.overlay--full`

<demo>
  <demovanilla src="inline/core/overlay/size">
  </demovanilla>
</demo>
