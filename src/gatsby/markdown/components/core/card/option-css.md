---
type: "Components"
category: "Core"
parent: "Card"
title: "Option Css"
date: "2019-12-01"
---

## Preset

Cards are used in various components by using a **preset** to assign card's default options like variant or size.

You can use card's presets outside the normal scope, for example to style a card like an overlay card.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-{preset}`                         | `.card-overlay` `.card-slide` `.card-drop` |
| Mixin                   | Not possible                              | Not possible                  |

</div>

<demo>
  <demovanilla src="vanilla/components/card/preset">
  </demovanilla>
</demo>

## Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-{variant}`                        | `.card-default` `.card-primary` |
| Mixin                   | `.card-{variant}()`                      | `.card-default()` `.card-primary()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/card/variant">
  </demovanilla>
</demo>

## Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-{size}`                           | `.card-small` `.card-medium` `.card-large`|
| Mixin                   | `.card-{size}()`                         | `.card-small()` `.card-medium()` `.card-large()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/card/size">
  </demovanilla>
</demo>

## Block Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-block-{size}`                           | `.card-block-small` `.card-block-medium` `.card-block-large`|
| Mixin                   | `.card-block.card-block-{size}()`                         | `.card-block.card-small()` `.card-block.card-block-medium()` `.card-block.card-block-large()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/card/block-size">
  </demovanilla>
</demo>
