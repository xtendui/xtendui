---
type: "Components"
badge: "Core"
parent: "Overlay"
title: "Option Css"
date: "2019-12-01"
---

## Size

Set overlay size with this classes. They are generated with `@generate-overlay-size`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.overlay-{size}`                        | `.overlay-small`             |
| Mixin                   | `.overlay-size({size})`                   | `.overlay-size(small)`         |

</div>

<demo>
  <demovanilla src="vanilla/components/overlay/size">
  </demovanilla>
</demo>

## Card

[[notePrimary]]
| Overlay uses card to style it's content, refer to [card's option](/components/card/option) for all **option**.

### Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-{variant}`                     | `.card-default` `.card-primary` `.card-white` |
| Mixin                   | `.card-{variant}()`                   | `.card-default()` `.card-primary()` `.card-white()`        |

</div>

<demo>
  <demovanilla src="vanilla/components/overlay/card-variant">
  </demovanilla>
</demo>

### Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-{size}`                           | `.card-small` `.card-medium` `.card-large`|
| Mixin                   | `.card-{size}()`                         | `.card-small()` `.card-medium()` `.card-large()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/overlay/card-size">
  </demovanilla>
</demo>
