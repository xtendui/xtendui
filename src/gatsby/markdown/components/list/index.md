---
type: "Components"
category: "Design"
parent: "List"
title: "List"
description: "Flex component to space any element with margins, also spaces vertically."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.list` see [css customization](/components/css#customization). Check [xtendui/src/list.css.js](https://github.com/xtendui/xtendui/blob/beta/src/list.css.js) for default styles.

## Usage

Use `.xt-list` to create a **list**.

[[notePrimary]]
| For usability purpose use `<nav></nav>`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-list`                     | `xt-list`                | List styles            |

</div>

#### Horizontal

Use this code to create a **list horizontal**.

<demo>
  <demoinline src="demos/components/list/usage">
  </demoinline>
</demo>

#### Vertical

Use this code to create a **list vertical** with `.flex-col`.

<demo>
  <demoinline src="demos/components/list/usage-vertical">
  </demoinline>
</demo>

[[notePrimary]]
| You can space anything inside `.xt-list`. If you need to use **tailwind width classes** use [row](/components/row).
