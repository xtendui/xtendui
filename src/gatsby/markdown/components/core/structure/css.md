---
type: "Components"
category: "Core"
parent: "Structure"
title: "Css"
date: "2050-10-10"
---

## Variants

Xtend adds a **custom variant** `active` to Tailwind, it styles when **user presses the element** with `:active` but also when the element is **activated by javascript** with `.active`.

When you use Tailwind classes you can style it with the variant `active:`, it's activated on the same tailwind utilities that have `hover:`, see [xtendui/src/tailwind-config.js](https://github.com/minimit/xtendui/blob/master/src/tailwind-config.js) for default values.

When you **style pseudo selector** remember to style `&:active, &.active`.

## Components

These are structure **component classes**.

<div class="table-scroll">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.overflow-main`                     | `overflow-main`                | Overflow scrollbar style            |
| Component                  | `.overflow-sub`                     | `overflow-sub`                | Overflow scrollbar style small version            |
| Component                  | `[readonly], [disabled], .disabled`                     | `disabled`                | Disabled styles            |
| Component                  | `.backdrop`                     | `backdrop`                | Backdrop styles            |
| Component                  | `.design-setup`                     | `design-setup`                | Apply design setup styles            |

</div>

Xtend has custom `:focus` styles, sort of `:focus-visbile` polyfill. You can customize the global `.xt-focus-visible` style or **disable focus management and styles** with the class `html.xt-focus-disable`.

<div class="table-scroll">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `html.xt-focus-disable`                     | `NOT POSSIBLE`                | Disable focus management and styles            |

</div>

There are many more **component classes for javascript** inside `structurejs.css.js` but they shouldn't be changed.

## Utils

These are structure **component classes**.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Util                  | `.container-reset`       | `container-reset`                | `responsive`                | Reset container styles            |
| Util                  | `.duration-none`                     | `duration-none`                | `responsive`                | Instant transitions and animations            |

</div>

We have also **automatic spacing classes** to reset margin top when `:first-child` with `mt-fc` and margin bottom when `:last-child` with `mb-lc`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Util                  | `.mt-fc`                     | `mt-fc`                | `responsive`                | Reset margin top on `:first-child`            |
| Util                  | `.mb-lc`                     | `mb-lc`                | `responsive`                | Reset margin bottom on `:last-child`            |

</div>
