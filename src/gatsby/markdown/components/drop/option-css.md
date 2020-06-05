---
type: "Components"
badge: "Core"
parent: "Drop"
title: "Option Css"
date: "2019-12-01"
---

## Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

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

## Size

Set drop size with this classes.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-size-{size}`                        | `.drop-size-small`             |
| Mixin                   | `.drop-size({size})`                   | `.drop-size(small)`         |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/size">
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

## List

### Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{size}`                           | `.drop-small` `.drop-medium` `.drop-large`|
| Mixin                   | `.drop-{size}()`                         | `.drop-small()` `.drop-medium()` `.drop-large()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/list-size">
  </demovanilla>
</demo>

## Card

[[notePrimary]]
| Drop uses card to style it's content, refer to [card's option](/components/card/option) for all **option**.

### Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{variant}`                     | `.drop-default` `.drop-primary` |
| Mixin                   | `.drop-{variant}()`                   | `.drop-default()` `.drop-primary()`        |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/card-variant">
  </demovanilla>
</demo>

### Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop-{size}`                           | `.drop-small` `.drop-medium` `.drop-large`|
| Mixin                   | `.drop-{size}()`                         | `.drop-small()` `.drop-medium()` `.drop-large()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/card-size">
  </demovanilla>
</demo>
