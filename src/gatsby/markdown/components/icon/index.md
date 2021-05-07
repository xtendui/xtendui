---
type: "Components"
category: "Layout"
parent: "Icon"
title: "Icon"
description: "Everything you need to stylize svg icons."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.icon`.

Check [xtendui/src/icon.css.js](https://github.com/minimit/xtendui/blob/beta/src/icon.css.js) for default styles.

## Usage

Use `.xt-icon` to create a **icon**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-icon`                     | `xt-icon`                | `responsive`                | Icon styles            |

</div>

Use this code to create **icons with svg**.

<demo>
  <demoinline src="demos/components/icon/usage">
  </demoinline>
</demo>

Use this code to create **icons with img**.

<demo>
  <demoinline src="demos/components/icon/usage-img">
  </demoinline>
</demo>

[[notePrimary]]
| Icons with img don't support [icons variant](/components/icon/content#variant)

[[noteDefault]]
| Icons from [Feather Icons](https://feathericons.com).
