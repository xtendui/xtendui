---
type: "Components"
category: "Core"
parent: "Animation"
title: "Css"
date: "2050-10-10"
---

## Utilities

These are general **component utilities**.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.transform-none`                     | `transform-none`                | `responsive`                | Disable transform (!important)            |
| Utility                  | `.transition-none`                     | `transition-none`                | `responsive`                | Disable transform (!important)            |
| Utility                  | `.animate-none`                     | `animate-none`                | `responsive`                | Disable animation (!important)            |
| Utility                  | `.duration-none`                     | `duration-none`                | `responsive`                | Instant transitions and animations (!important)            |

</div>

## Timing Function

We add in theme additional easing on [tailwind timing functions](https://tailwindcss.com/docs/transition-timing-function).

<div class="table-scroll">

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

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.animate-spinner`                     | `animate-spinner`                | Animation spinner            |
| Component                  | `.animate-filler-x`                     | `animate-filler-x`                | Animation filler-x            |
| Component                  | `.animate-filler-y`                     | `animate-filler-y`                | Animation filler-y            |

</div>

You can also use them inside css animation-

```css
animation: 'spinner 1500ms infinite',
animation: 'filler-x 1500ms infinite',
animation: 'filler-y 1500ms infinite',
```
