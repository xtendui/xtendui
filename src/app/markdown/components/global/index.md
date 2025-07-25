---
type: "Components"
category: "Global"
parent: "Global"
title: "Global"
description: "Global is a component with global styles and javascript."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.layout` see [css customization](/xtendui/components/global/preset#customization). Check [xtendui/src/global.css.js](https://github.com/xtendui/xtendui/blob/master/src/global.css.js) for default styles.

## Global Styles

Add to the `html` the class `xt-html` to have this features, and add to the `body` the class `xt-body` to have this features:

* **Custom body scrollbar and overflow** [components styles](/xtendui/components/global#components-styles). You can disable this feature with `xt-optout-scroll` and keep others `xt-body` features.

## Utilities Styles

These are layout **utilities**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-container-reset`       | `xt-container-reset`                | `responsive`                | On a `container` reset container styles            |
| Utility                  | `.xt-container-remove`       | `xt-container-remove`                | `NOT POSSIBLE`                | Inside a `container` child remove horizontal spacing as set in `theme.container.padding`             |
| Utility                  | `.xt-container-y`       | `xt-container-y`                | `NOT POSSIBLE`                | As `container` but with vertical spacing spacing as set in `theme.container.padding`             |
| Utility                  | `.xt-container-y-remove`       | `xt-container-y-remove`                | `NOT POSSIBLE`                | Inside a `xt-container-y` child remove vertical spacing as set in `theme.container.padding`             |

</div>

To have `.container` fluid so with only one `max-width` in Tailwind CSS preset set `theme.extend.container.fluid: '1536px'` with the desired `max-width` (can also be `'none'` to have container with no `max-width`), see [Tailwind CSS container](https://tailwindcss.com/docs/container).

## Components Styles

These are layout **component classes**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.xt-overflow-main`                     | `xt-overflow-main`                | Overflow scrollbar style            |
| Component                  | `.xt-overflow-sub`                     | `xt-overflow-sub`                | Overflow scrollbar style small version            |
| Component                  | `[readonly], [disabled], .xt-disabled`                     | `xt-disabled`                | Disabled styles            |
| Component                  | `.xt-backdrop`                     | `xt-backdrop`                | Backdrop styles            |
| Component                  | `.xt-design`                     | `xt-design`                | Setup design styles in position absolute            |

For example to modify the `.xt-overflow-main` and `.xt-overflow-sub` scrollbar colors/size, and the `::selection` color, use this code in `tailwind.config.js`.

```js
module.exports = {
  theme: {
    extend: {
      xtendui: {
        global: {
          component: theme => ({
            '::selection': {
              backgroundColor: theme('colors.primary.500'),
              color: theme('colors.white'),
            },
            '.xt-overflow-main': {
              scrollbarColor: `${theme('colors.primary.500')} ${theme('colors.white')}`,
            },
            '.xt-overflow-sub': {
              scrollbarColor: `${theme('colors.gray.500')} transparent`,
            },
          }),
        },
      },
    },
  },
}
```

</div>
