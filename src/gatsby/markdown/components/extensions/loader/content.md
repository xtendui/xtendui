---
type: "Components"
category: "Extensions"
parent: "Loader"
title: "Content"
date: "2030-10-10"
---

## Spinner

Use **tailwind classes** to assign variant (e.g.: stroke, opacity).

Use `.spinner-animated` to assing spinner animation.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.spinner-animated`                     | `spinner-animated`                | Spinner animation            |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/loader/spinner">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/loader/spinner-inverse">
  </demovanilla>
</demo>

## Filler

Use **tailwind classes** to assign variant (e.g.: background, opacity).

Use `.loader-<direction>-animated` to assing filler animation.

For `<direction>` values use `x` or `y`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-<direction>-animated`                     | `loader-<direction>-animated`                | Filler animation            |

</div>

#### Direction

For `<direction>` values use `x` or `y`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-<direction>`                     | `loader-<direction>`                | Loader direction for filler            |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/loader/filler-x">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/loader/filler-y">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/loader/filler-inverse">
  </demovanilla>
</demo>

#### Size

For `<size>` values use `x`, `top` or `bottom`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-x.loader-size-<size>`                     | `loader-x loader-size-<size>`                | Loader size for filler direction `x`             |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/loader/filler-size-x">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/loader/filler-size-top">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/loader/filler-size-bottom">
  </demovanilla>
</demo>

For `<size>` values use `y`, `left` or `right`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-y.loader-size-<size>`                     | `loader-y loader-size-<size>`                | Loader size for filler direction `y`             |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/loader/filler-size-y">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/loader/filler-size-left">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/loader/filler-size-right">
  </demovanilla>
</demo>
