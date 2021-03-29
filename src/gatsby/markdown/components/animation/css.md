---
type: "Components"
category: "Global"
parent: "Animation"
title: "Css"
date: "2050-10-10"
---

## Utilities

These are general **component utilities**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-transform-none`                     | `xt-transform-none`                | `responsive`                | Disable transform (!important)            |
| Utility                  | `.xt-transition-none`                     | `xt-transition-none`                | `responsive`                | Disable transition (!important)            |
| Utility                  | `.xt-animate-none`                     | `xt-animate-none`                | `responsive`                | Disable animation (!important)            |
| Utility                  | `.xt-duration-none`                     | `xt-duration-none`                | `responsive`                | Instant transitions and animations (!important)            |

</div>

## Timing Function

We add in theme additional easing on [tailwind timing functions](https://tailwindcss.com/docs/transition-timing-function).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.ease-in-sine`                     | `ease-in-sine`                | Ease in            |
| Component                  | `.ease-out-sine`                     | `ease-out-sine`                | Ease out            |
| Component                  | `.ease-in-out-sine`                     | `ease-in-out-sine`                | Ease in out            |
| Component                  | `.ease-in-quad`                     | `ease-in-quad`                | Ease in            |
| Component                  | `.ease-out-quad`                     | `ease-out-quad`                | Ease out            |
| Component                  | `.ease-in-out-quad`                     | `ease-in-out-quad`                | Ease in out            |
| Component                  | `.ease-in-cubic`                     | `ease-in-cubic`                | Ease in            |
| Component                  | `.ease-out-cubic`                     | `ease-out-cubic`                | Ease out            |
| Component                  | `.ease-in-out-cubic`                     | `ease-in-out-cubic`                | Ease in out            |
| Component                  | `.ease-in-quart`                     | `ease-in-quart`                | Ease in            |
| Component                  | `.ease-out-quart`                     | `ease-out-quart`                | Ease out            |
| Component                  | `.ease-in-out-quart`                     | `ease-in-out-quart`                | Ease in out            |
| Component                  | `.ease-in-quint`                     | `ease-in-quint`                | Ease in            |
| Component                  | `.ease-out-quint`                     | `ease-out-quint`                | Ease out            |
| Component                  | `.ease-in-out-quint`                     | `ease-in-out-quint`                | Ease in out            |
| Component                  | `.ease-in-expo`                     | `ease-in-expo`                | Ease in            |
| Component                  | `.ease-out-expo`                     | `ease-out-expo`                | Ease out            |
| Component                  | `.ease-in-out-expo`                     | `ease-in-out-expo`                | Ease in out            |
| Component                  | `.ease-in-circ`                     | `ease-in-circ`                | Ease in            |
| Component                  | `.ease-out-circ`                     | `ease-out-circ`                | Ease out            |
| Component                  | `.ease-in-out-circ`                     | `ease-in-out-circ`                | Ease in out            |
| Component                  | `.ease-in-back`                     | `ease-in-back`                | Ease in            |
| Component                  | `.ease-out-back`                     | `ease-out-back`                | Ease out            |
| Component                  | `.ease-in-out-back`                     | `ease-in-out-back`                | Ease in out            |

</div>

##  Animation and Keyframes

We add in theme also additional keyframes on [tailwind animation](https://tailwindcss.com/docs/animation).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.animate-xt-spinner`                     | `animate-xt-spinner`                | Animation spinner            |
| Component                  | `.animate-xt-filler-x`                     | `animate-xt-filler-x`                | Animation xt-filler-x            |
| Component                  | `.animate-xt-filler-y`                     | `animate-xt-filler-y`                | Animation xt-filler-y            |

</div>

You can also use them inside css animation-

```css
animation: 'xt-spinner 1500ms infinite',
animation: 'xt-filler-x 1500ms infinite',
animation: 'xt-filler-y 1500ms infinite',
```