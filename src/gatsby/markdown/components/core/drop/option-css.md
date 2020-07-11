---
type: "Components"
category: "Core"
parent: "Drop"
title: "Option Css"
date: "2019-12-20"
---

## Preset

`{preset}` can be `static`.

<div class="table-scroll">

|                         | Syntax                                    | Example                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Class                   | `.drop-container-{preset}`                         | `.drop-container-static` |
| Mixin                   | Not possible                              | Not possible                  | Position relative to closest element with `position: relative;`.            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/static">
  </demovanilla>
</demo>

## Position

Set drop position with this classes.

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{position}`                        | `.drop-bottom` `.drop-top` `.drop-left` `.drop-right` `.drop-center` `.drop-before` `.drop-after` |
| Mixin                   | `.drop-{position}()`                      | `.drop-bottom()` `.drop-top()` `.drop-left()` `.drop-right()` `.drop-center()` `.drop-before()` `.drop-after()` |

<demo>
  <demovanilla src="vanilla/components/core/drop/left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/right">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/before">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/after">
  </demovanilla>
</demo>

## Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{variant}`                        | `.drop-default` `.drop-primary` |
| Mixin                   | `.drop-{variant}()`                      | `.drop-default()` `.drop-primary()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/variant">
  </demovanilla>
</demo>

## Size

Set drop size with this classes.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-size-{size}`                        | `.drop-size-small`             |
| Mixin                   | `.drop-size({size})`                   | `.drop-size(small)`         |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/size">
  </demovanilla>
</demo>

## List

[[notePrimary]]
| Drop uses list to style it's content, refer to [list's options](/components/core/list/option-css).

#### Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{size}`                           | `.drop-small` `.drop-medium` `.drop-large`|
| Mixin                   | `.drop-{size}()`                         | `.drop-small()` `.drop-medium()` `.drop-large()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/list-size">
  </demovanilla>
</demo>

## Card

[[notePrimary]]
| Drop uses card to style it's content, refer to [card's option](/components/core/card/option-css).

#### Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{variant}`                     | `.drop-default` `.drop-primary` |
| Mixin                   | `.drop-{variant}()`                   | `.drop-default()` `.drop-primary()`        |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/card-variant">
  </demovanilla>
</demo>

#### Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{size}`                           | `.drop-small` `.drop-medium` `.drop-large`|
| Mixin                   | `.drop-{size}()`                         | `.drop-small()` `.drop-medium()` `.drop-large()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/card-size">
  </demovanilla>
</demo>

#### Block Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.card-block-{size}`                           | `.card-block-small` `.card-block-medium` `.card-block-large`|
| Mixin                   | `.card-block.card-block-{size}()`                         | `.card-block.card-small()` `.card-block.card-block-medium()` `.card-block.card-block-large()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/card-block-size">
  </demovanilla>
</demo>
