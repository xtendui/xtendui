---
type: "Components"
category: "Core"
parent: "Typography"
title: "Typography"
description: "Typography is a component for automatic and customizzable styling of blank html content tags."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.typography` see [css customization](/components/global/preset#customization). Check [xtendui/src/typography.css.js](https://github.com/xtendui/xtendui/blob/beta/src/typography.css.js) for default styles.

## Global Styles

Add to the `body` the class `xt-body` to have this features:

* **Default font smooth** with `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale`. You can disable this feature with `xt-optout-typography` and keep others `xt-body` features.
