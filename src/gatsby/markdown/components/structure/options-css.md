---
type: "Components"
badge: "Core"
parent: "Structure"
title: "Option Css"
date: "2019-12-01"
---

The structure styles that don't belongs to a component are all inside `/src/core/structure/structure.less`.

## Scrollbar

<div class="table-scroll">

|                         | Syntax                                    | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Util                  | `.overflow-style`                               | `.overflow-style()`                | Overflow scrollbar style            |
| Util                  | `.overflow-style-inner`                               | `.overflow-style(@mode: inner)`                | Overflow scrollbar style with mode inner            |

</div>

Within `.overflow-style` mixin you have the scrollbar styles, you can setup different modes for example `@mode: inner`.

## Focus

Apply focus styles to `html.xt-focus-visible` to style focus only when user interaction with keyboard occurred (similar to [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)).

To disable focus feeback globally add `html.xt-focus-disable` class.
