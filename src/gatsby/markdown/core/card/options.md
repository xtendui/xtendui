---
type: "Core"
parent: "Card"
title: "Options"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
date: "2000-02-01"
---

##Preset

Cards are used in various components by using a **preset** to assign card's default options like variant or size.

You can use card's presets outside the normal scope, for example to style a card like an overlay card.

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card--{preset}`                         | `.card--overlay` `.card--slide` `.card--drop` |

</div>

<demo>
  <demovanilla src="inline/core/card/preset">
  </demovanilla>
</demo>

##Variant

Classes for assigning variant (e.g.: border / background / font colors).

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card--{variant}`                        | `.card--default` `.card--primary` |

</div>

<demo>
  <demovanilla src="inline/core/card/variant">
  </demovanilla>
</demo>

##Size

Optional classes for assigning size (e.g.: padding or font size).

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card--{size}`                           | `.card--small` `.card--medium` `.card--big`|

</div>

<demo>
  <demovanilla src="inline/core/card/size">
  </demovanilla>
</demo>
