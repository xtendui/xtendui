---
type: "Components"
category: "Core"
parent: "Icon"
title: "Icon"
description: "Icon is a component to style svg icons."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.icon` see [css customization](/components/global/preset#customization). Check [xtendui/src/icon.css.js](https://github.com/xtendui/xtendui/blob/master/src/icon.css.js) for default styles.

## Usage

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-icon`                     | `xt-icon`                | `responsive`                | Icon styles            |

</div>

**Icons with inline svg**.

<demo>
  <demoinline src="demos/components/icon/usage">
  </demoinline>
</demo>

**Icons with img tag**.

<demo>
  <demoinline src="demos/components/icon/usage-img">
  </demoinline>
</demo>

> Icons with img don't support [icons variant](/components/icon/content#variant)

> Icons from [Feather Icons](https://feathericons.com).
