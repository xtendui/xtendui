---
type: "Components"
category: "Globals"
parent: "Layout"
title: "Layout"
description: "Structural and layout components."
date: "2020-09-05"
---

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/layout.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/layout.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      xtendui: {
        layout: {
          utility: theme => ({
            // modify utilities
          }),
          component: theme => ({
            // modify components
          }),
        },
      },
    },
  },
}
```

## Utilities

These are layout **utilities**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-container-reset`       | `xt-container-reset`                | `responsive`                | Reset container styles            |
| Utility                  | `.xt-container-y`       | `xt-container-y`                | `NOT POSSIBLE`                | Vertical spacing same as `container` horizontal spacing as set in `theme.container.padding`             |
| Utility                  | `.xt-container-remove`       | `xt-container-remove`                | `NOT POSSIBLE`                | Remove `container` horizontal spacing as set in `theme.container.padding`             |
| Utility                  | `.xt-container-y-remove`       | `xt-container-y-remove`                | `NOT POSSIBLE`                | Remove `xt-container-y` vertical spacing as set in `theme.container.padding`             |
| Utility                  | `.xt-h-screen`       | `xt-h-screen`                | `responsive`                | Height `100vh` and retain height on vertical scroll/resize on mobile           |
| Utility                  | `.xt-min-h-screen`       | `xt-min-h-screen`                | `responsive`                | Min height `100vh` and retain height on vertical scroll/resize on mobile           |
| Utility                  | `.xt-max-h-screen`       | `xt-max-h-screen`                | `responsive`                | Max height `100vh` and retain height on vertical scroll/resize on mobile           |

</div>

## Components

These are layout **component classes**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.container`                     | `container`                | Container fluid `max-width` to disable it use in tailwind preset `theme.extend.container.fluid: false`            |
| Component                  | `.xt-overflow-main`                     | `xt-overflow-main`                | Overflow scrollbar style            |
| Component                  | `.xt-overflow-sub`                     | `xt-overflow-sub`                | Overflow scrollbar style small version            |
| Component                  | `[readonly], [disabled], .xt-disabled`                     | `xt-disabled`                | Disabled styles            |
| Component                  | `.xt-backdrop`                     | `xt-backdrop`                | Backdrop styles            |

</div>

Xtend has custom `:focus` styles, sort of `:focus-visbile` polyfill. You can customize the global `.xt-focus-visible` style or **disable focus management and styles** with the class `body.xt-focus-disable`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `body.xt-focus-disable`                     | `NOT POSSIBLE`                | Disable focus management and styles            |

</div>

There are many more **component classes for javascript** inside `layoutjs.css.js` but they shouldn't be changed.
