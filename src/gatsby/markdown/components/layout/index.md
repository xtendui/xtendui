---
type: "Components"
category: "Global"
parent: "Layout"
title: "Layout"
description: "Structural and layout components."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.layout` see [preset customization](/components/tailwind-preset#customization). Check [xtendui/src/layout.css.js](https://github.com/minimit/xtendui/blob/beta/src/layout.css.js) for default styles.

## Global Styles

Add to the `body` the class `xt-body` to have this features:

* **Custom `:focus` styles only on keyboard activation** sort of `:focus-visible`. You can disable this feature with `xt-optout-focus` and keep others `xt-body` features.

* **Custom body scrollbar** [components styles](/components/layout#components-styles). You can disable this feature with `xt-optout-scroll` and keep others `xt-body` features.

## Utilities Styles

These are layout **utilities**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

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

To have `.container` fluid so with only one `max-width` in tailwind preset set `theme.extend.container.fluid: '1536px'` with the desired `max-width`, see [tailwind container](https://tailwindcss.com/docs/container).

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

</div>
