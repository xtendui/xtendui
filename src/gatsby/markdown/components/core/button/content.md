---
type: "Components"
category: "Core"
parent: "Button"
title: "Content"
date: "2020-10-10"
---

## Variant

Classes for assigning variant (e.g.: border / background / color).

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.btn-{variant}`                        | `.btn-default` `.btn-primary` `.btn-link` |
| Mixin                   | `.btn-{variant}()`                      | `.btn-default()` `.btn-primary()` `.btn-link()`   |

</div>

<demo>
  <demovanilla src="vanilla/components/core/button/variant">
  </demovanilla>
</demo>

On containers use `.text-inverse` to have white buttons (needs `color: inherit`).

<demo>
  <demovanilla src="vanilla/components/core/button/inverse">
  </demovanilla>
</demo>

## Size

Classes for assigning size (e.g.: padding or font size).

Sizes uses `em` padding that depends on font size.

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.btn-{size}`                        | `.btn-tiny` `.btn-small` `.btn-medium` `.btn-large` `.btn-big` |
| Mixin                   | `.btn-{size}()`                      | `.btn-tiny()` `.btn-small()`  `.btn-medium()` `.btn-large()` `.btn-big()`   |

<demo>
  <demovanilla src="vanilla/components/core/button/size">
  </demovanilla>
</demo>

## Special

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.btn-nodesign`                | `.btn-nodesign()`        | No design on button            |
| Option                  | `.btn-squared`                | `.btn-squared()`        | No border-radius on button            |
| Option                  | `.btn-noborder`                | `.btn-noborder()`        | No border on button            |
| Option                  | `.btn-tall`                | `.btn-tall()`        | Tall button            |
| Option                  | `.btn-short`                | `.btn-short()`        | Short button            |
| Option                  | `.btn-wide`                | `.btn-wide()`        | Wide button            |
| Option                  | `.btn-narrow`                | `.btn-narrow()`        | Narrow button            |
| Option                  | `.btn-none`                | `.btn-none()`        | No spacing on button (disables design and border also)           |
| Option                  | `.btn-none-x`                | `.btn-none-x()`        | No horizontal spacing on button (disables design and border also)           |
| Option                  | `.btn-none-y`                | `.btn-none-y()`        | No vertical spacing on button (disables design and border also)           |
| Option                  | `.btn-icon`                | `.btn-icon()`        | Special squared spacing on button with icon content           |

</div>

## Group

Refer to [Group page](/components/core/group#usage-button).
