---
type: "Components"
category: "Core"
parent: "Icon"
title: "Icon"
description: "Everything you need to stylize svg icons."
---

## Installation

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.icon`, check [xtendui/src/core/icon.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/icon.css.js) for default values.

## Usage

Use `.xt-icon` to create a **icon**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-icon`                     | `xt-icon`                | `responsive`                | Icon styles            |

</div>

Use this code to create **icons with svg**.

<demo>
  <demovanilla src="vanilla/components/core/icon/usage">
  </demovanilla>
</demo>

Use this code to create **icons with img**.

<demo>
  <demovanilla src="vanilla/components/core/icon/usage-img">
  </demovanilla>
</demo>

[[notePrimary]]
| Icons with img don't support [icons variant](/components/core/icon/content#variant)

[[noteDefault]]
| Icons from [Feather Icons](https://feathericons.com).

Check subpage to [customize content](/components/core/icon/content).
