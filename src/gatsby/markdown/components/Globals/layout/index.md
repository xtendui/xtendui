---
type: "Components"
category: "Globals"
parent: "Layout"
title: "Layout"
description: "Structural and layout components."
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

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.flex-full`       | `flex-full`                | `responsive`                | `flex: 1 1 100%`            |
| Utility                  | `.container-reset`       | `container-reset`                | `responsive`                | Reset container styles            |
| Utility                  | `.container-y`       | `container-y`                | `NOT POSSIBLE`                | Vertical spacing same as `container` horizontal spacing as set in `theme.container.padding`             |
| Utility                  | `.-container`       | `-container`                | `NOT POSSIBLE`                | Remove `container` horizontal spacing as set in `theme.container.padding`             |
| Utility                  | `.-container-y`       | `-container-y`                | `NOT POSSIBLE`                | Remove `container-y` vertical spacing as set in `theme.container.padding`             |
| Utility                  | `.h-screen`       | `h-screen`                | `responsive`                | Height `100vh` and retain height on vertical scroll/resize on mobile           |
| Utility                  | `.min-h-screen`       | `min-h-screen`                | `responsive`                | Min height `100vh` and retain height on vertical scroll/resize on mobile           |
| Utility                  | `.max-h-screen`       | `max-h-screen`                | `responsive`                | Max height `100vh` and retain height on vertical scroll/resize on mobile           |

</div>

## Components

These are layout **component classes**.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.container`                     | `container`                | Container fluid `max-width`            |
| Component                  | `.overflow-main`                     | `overflow-main`                | Overflow scrollbar style            |
| Component                  | `.overflow-sub`                     | `overflow-sub`                | Overflow scrollbar style small version            |
| Component                  | `[readonly], [disabled], .disabled`                     | `disabled`                | Disabled styles            |
| Component                  | `.backdrop`                     | `backdrop`                | Backdrop styles            |

</div>

Xtend has custom `:focus` styles, sort of `:focus-visbile` polyfill. You can customize the global `.xt-focus-visible` style or **disable focus management and styles** with the class `body.xt-focus-disable`.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `body.xt-focus-disable`                     | `NOT POSSIBLE`                | Disable focus management and styles            |

</div>

There are many more **component classes for javascript** inside `layoutjs.css.js` but they shouldn't be changed.
