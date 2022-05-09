---
type: "Components"
category: "Core"
parent: "Row"
title: "Row"
description: "Row is a component to space any element with paddings, also spaces vertically."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.row` see [css customization](/components/global/preset#customization). Check [xtendui/src/row.css.js](https://github.com/xtendui/xtendui/blob/master/src/row.css.js) for default styles.

## Usage

Use `.w-auto.flex-1` to expand items to **fill width**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-row`                     | `xt-row`                | Row styles            |

</div>

> You should always use **Tailwind CSS width classes** inside `.xt-row`. Otherwise you can space contents with [list](/components/list).

<demo>
  <demoinline src="demos/components/row/usage">
  </demoinline>
</demo>
