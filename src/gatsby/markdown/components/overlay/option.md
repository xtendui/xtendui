---
type: "Components"
badge: "Core"
parent: "Overlay"
title: "Option"
date: "2000-02-01"
---

[[noteDefault]]
| Overlay uses card to style it's content, refer to [card's option](/components/card/option) for all **option**.

##Preset

Overlay's card preset is `.card--overlay`. This preset gives overlay's card default variant and size

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card--{preset}`                         | `.card--overlay`              |
| Mixin                   | Not possible                              | Not possible                  |

</div>

<demo>
  <demovanilla src="vanilla/components/overlay/preset">
  </demovanilla>
</demo>

##Variant

You can extend the `.card--overlay` preset with other's card variants. Use this classes for assigning variant (e.g.: border / background / font colors).

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card--{variant}`                     | `.card--default` `.card--primary` `.card--white` |
| Mixin                   | `.card--{variant}()`                   | `.card--default()` `.card--primary()` `.card--white()`        |

</div>

<demo>
  <demovanilla src="vanilla/components/overlay/variant">
  </demovanilla>
</demo>

##Size

You can extend the `.card--overlay` preset with other's card sizes. Use this classes for assigning size (e.g.: padding or font size).

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card--{size}`                           | `.card--small` `.card--medium` `.card--big`|
| Mixin                   | `.card--{size}()`                         | `.card--small()` `.card--medium()` `.card--big()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/overlay/size">
  </demovanilla>
</demo>

##Overlay Size

Classes for assigning overlay **max-width**.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay--{size}`                        | `.overlay--small`             |
| Mixin                   | `.overlay-size({size})`                   | `.overlay-size(small)`         |

</div>

<demo>
  <demovanilla src="vanilla/components/overlay/overlay-size">
  </demovanilla>
</demo>
