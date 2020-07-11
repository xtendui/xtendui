---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Option Css"
date: "2019-12-01"
---

## Preset

`{preset}` can be `screen`, `position-left`, `position-right`. `{position}` can be `left`, `right`. Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay-{preset}`                         | `.overlay-screen` `.overlay-position-{position}` |
| Mixin                   | Not possible                              | Not possible                  |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/screen">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/core/overlay/position">
  </demovanilla>
</demo>

## Size

Set overlay size with this classes.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay-size-{size}`                        | `.overlay-size-small`             |
| Mixin                   | `.overlay-size-{size}()`                   | `.overlay-size-small()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/size">
  </demovanilla>
</demo>

## Card

[[notePrimary]]
| Overlay uses card to style it's content, refer to [card's option](/components/core/card/option-css).

#### Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay-{variant}`                     | `.overlay-default` `.overlay-primary` |
| Mixin                   | `.overlay-{variant}()`                   | `.overlay-default()` `.overlay-primary()`        |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/card-variant">
  </demovanilla>
</demo>

#### Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay-{size}`                           | `.overlay-small` `.overlay-medium` `.overlay-large`|
| Mixin                   | `.overlay-{size}()`                         | `.overlay-small()` `.overlay-medium()` `.overlay-large()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/card-size">
  </demovanilla>
</demo>

### Block Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-block-{size}`                           | `.card-block-small` `.card-block-medium` `.card-block-large`|
| Mixin                   | `.card-block.card-block-{size}()`                         | `.card-block.card-small()` `.card-block.card-block-medium()` `.card-block.card-block-large()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/card-block-size">
  </demovanilla>
</demo>
