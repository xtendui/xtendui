---
type: "Components"
category: "Core"
parent: "Row"
title: "Other"
date: "2005-10-10"
---

## Stretch

Use `.xt-row-stretch` to stretch content vertically.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-row-stretch`                     | `xt-row-stretch`                | Stretch content vertically            |

</div>

When using cards you can space with `margin auto` on **card content**. When not using cards, be sure that the content have class `flex-auto`.

<demo>
  <demovanilla src="vanilla/components/core/row/stretch">
  </demovanilla>
</demo>

## Overflow

Use `.xt-row-overflow` to have browser overflow scroll on **touch devices** (use touch device to see it in action).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-row-overflow`                     | `xt-row-overflow`                | Overflow on touch devices            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/row/overflow">
  </demovanilla>
</demo>
