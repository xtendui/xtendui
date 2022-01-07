---
type: "Components"
category: "Core"
parent: "List"
title: "List"
description: "List is a component to space any element with margins, also spaces vertically."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.list` see [css customization](/components/global/preset#customization). Check [xtendui/src/list.css.js](https://github.com/xtendui/xtendui/blob/beta/src/list.css.js) for default styles.

## Usage

Use `.flex-auto` to expand items to **fill width**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-list`                     | `xt-list`                | List styles            |

</div>

> For accessibility purpose use `<nav></nav>` with an accessible name assigning `[aria-label]` or `[aria-labelledby]`.

> You should never use **tailwind width classes** inside `.xt-list`. Otherwise you can space contents with [row](/components/row).

<demo>
  <demoinline src="demos/components/list/usage">
  </demoinline>
</demo>

#### Stack

Use `.inline-flex` and [flex-direction](https://tailwindcss.com/docs/flex-direction) to **stack**.

<demo>
  <demoinline src="demos/components/list/usage-stack">
  </demoinline>
</demo>
