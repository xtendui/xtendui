---
type: "Components"
category: "Core"
parent: "General"
title: "Css"
date: "2050-10-10"
---

## Variants

Xtend adds a custom variant `active` to Tailwind, it styles when user presses the element with `:active` but also when the element is activated by javascript plugins with `.active`.

When you use Tailwind classes you can style it with the variant `active:`, it's activated on the same tailwind utilities that have `hover:`, see `xtend-ui/src/tailwind-variants`.

When you style pseudo selector remember to style `&:active, &.active`.

## Utils

These are **automatic spacing classes** to reset margin top when `:first-child` with `mt-fc` and margin bottom when `:last-child` with `mb-lc`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Util                  | `.mt-fc`                     | `mt-fc`                | `responsive`                | Reset margin top on `:first-child`            |
| Util                  | `.mb-lc`                     | `mb-lc`                | `responsive`                | Reset margin bottom on `:last-child`            |

</div>

These are general's **component utilities**.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Util                  | `.container-reset`       | `container-reset`                | `responsive`                | Reset container styles            |
| Util                  | `.mt-fc`                     | `mt-fc`                | `responsive`                | Reset margin top on `:first-child`            |
| Util                  | `.mb-lc`                     | `mb-lc`                | `responsive`                | Reset margin bottom on `:last-child`            |
| Util                  | `.toggle`                     | `toggle`                | `responsive`                | Toggle `display: none` on `.active` and `.out`            |
| Util                  | `.toggle-inverse`                     | `toggle-inverse`                | `responsive`                | Toggle `display: none` on `.done`         |
| Util                  | `.duration-none`                     | `duration-none`                | `responsive`                | Instant transitions and animations            |

</div>

## Components

These are general's **component utilities**.

<div class="table-scroll">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.overflow-main`                     | `overflow-main`                | Overflow scrollbar style            |
| Component                  | `.overflow-sub`                     | `overflow-sub`                | Overflow scrollbar style small version            |
| Component                  | `[readonly], [disabled], .disabled`                     | `disabled`                | Disabled styles            |
| Component                  | `.design-setup`                     | `design-setup`                | Apply design setup styles            |

</div>

Xtend has custom `:focus` styles, sort of `:focus-visbile` polyfill. You can customize the global `.xt-focus-visible` style or **disable focus management and styles** with the class `html.xt-focus-disable`.

<div class="table-scroll">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `html.xt-focus-disable`                     | `NOT POSSIBLE`                | Disable focus management and styles            |

</div>
