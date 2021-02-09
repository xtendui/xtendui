---
type: "Components"
category: "Core"
parent: "Loader"
title: "Content"
date: "2030-10-10"
---

## Spinner

Use **tailwind classes** to assign variant (e.g. [stroke](https://tailwindcss.com/docs/stroke), [opacity](https://tailwindcss.com/docs/opacity)).

Use `.spinner-animated` to assing spinner animation.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.spinner-animated`                     | `spinner-animated`                | Spinner animation            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/loader/spinner">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/spinner-inverse">
  </demovanilla>
</demo>

## Filler

#### Direction

Use **tailwind classes** to assign size (e.g. [width](https://tailwindcss.com/docs/width), [height](https://tailwindcss.com/docs/height)).

Use `.loader-<direction>-animated` to assing filler animation. For `<direction>` values use `x` or `y`.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-<direction>-animated`                     | `loader-<direction>-animated`                | Filler animation            |

</div>

Use **tailwind classes** to assign variant (e.g. [background-color](https://tailwindcss.com/docs/background-color), [opacity](https://tailwindcss.com/docs/opacity)).

<demo>
  <demovanilla src="vanilla/components/core/loader/filler-x">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-y">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-inverse">
  </demovanilla>
</demo>

#### Size

Use **tailwind classes** to assign position (e.g. [top-right-bottom-left](https://tailwindcss.com/docs/top-right-bottom-left)).

<demo>
  <demovanilla src="vanilla/components/core/loader/filler-size-x">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-size-top">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-size-bottom">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/core/loader/filler-size-y">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-size-left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-size-right">
  </demovanilla>
</demo>
