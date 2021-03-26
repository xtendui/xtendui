---
type: "Components"
category: "Global"
parent: "List"
title: "List"
description: "Flex component to space any element with margins, also spaces vertically."
---

## Installation

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.list`, check [xtendui/src/list.css.js](https://github.com/minimit/xtendui/blob/beta/src/list.css.js) for default styles.

## Usage

Use `.xt-list` to create a **list**.

[[notePrimary]]
| For aria purpose use `<nav></nav>`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

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

Check subpage to [customize content](/components/list/content).

#### Vertical

Use this code to create a **list vertical** with `.flex-col`.

<demo>
  <demoinline src="demos/components/list/usage-vertical">
  </demoinline>
</demo>

[[notePrimary]]
| You can space anything inside `.xt-list`. If you need to use **tailwind width classes** use [row](/components/row).

Check subpage to [customize content](/components/list/content).
