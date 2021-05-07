---
type: "Components"
category: "Design"
parent: "Loader"
title: "Content"
date: "2030-10-10"
---

## Spinner

Use **tailwind classes** to assign variant (e.g. [stroke](https://tailwindcss.com/docs/stroke), [opacity](https://tailwindcss.com/docs/opacity)).

Use `.animate-xt-spinner` to assing spinner animation.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.animate-xt-spinner`                     | `animate-xt-spinner`                | Spinner animation            |

</div>

<demo>
  <demoinline src="demos/components/loader/spinner">
  </demoinline>
  <demoinline src="demos/components/loader/spinner-inverse">
  </demoinline>
</demo>

## Filler

#### Direction

Use **tailwind classes** to assign size (e.g. [width](https://tailwindcss.com/docs/width), [height](https://tailwindcss.com/docs/height)).

Use `.animate-xt-filler-<direction>` to assing filler animation. For `<direction>` values use `x` or `y`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.animate-xt-filler-<direction>`                     | `animate-xt-filler-<direction>`                | Filler animation            |

</div>

Use **tailwind classes** to assign variant (e.g. [background-color](https://tailwindcss.com/docs/background-color), [opacity](https://tailwindcss.com/docs/opacity)).

<demo>
  <demoinline src="demos/components/loader/filler-x">
  </demoinline>
  <demoinline src="demos/components/loader/filler-y">
  </demoinline>
  <demoinline src="demos/components/loader/filler-inverse">
  </demoinline>
</demo>

#### Size

Use **tailwind classes** to assign position (e.g. [top-right-bottom-left](https://tailwindcss.com/docs/top-right-bottom-left)).

<demo>
  <demoinline src="demos/components/loader/filler-size-x">
  </demoinline>
  <demoinline src="demos/components/loader/filler-size-top">
  </demoinline>
  <demoinline src="demos/components/loader/filler-size-bottom">
  </demoinline>
</demo>

<demo>
  <demoinline src="demos/components/loader/filler-size-y">
  </demoinline>
  <demoinline src="demos/components/loader/filler-size-left">
  </demoinline>
  <demoinline src="demos/components/loader/filler-size-right">
  </demoinline>
</demo>
