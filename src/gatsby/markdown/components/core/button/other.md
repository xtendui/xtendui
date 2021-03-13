---
type: "Components"
category: "Core"
parent: "Button"
title: "Other"
date: "2005-10-10"
---

## Activation

Use **component classes** to style **active**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.active`                     | `active`                | Active styles            |

</div>

<demo>
  <demoinline src="vanilla/components/core/button/active">
  </demoinline>
</demo>

## Disabled

Use **component classes** to style **disabled**. Check [xtendui/src/core/layout.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/layout.css.js) for default styles.

[[notePrimary]]
| For aria purpose use `aria-disabled="true"` when using the **class** `.xt-disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `[readonly], [disabled], .xt-disabled`                     | `xt-disabled`                | Disabled styles            |

</div>

<demo>
  <demoinline src="vanilla/components/core/button/disabled">
  </demoinline>
</demo>

## Group

Refer to [group](/components/core/group).

## Toolbar

Refer to [toolbar](/components/addons/toolbar).

## Nav

Refer to [nav](/components/addons/nav).

## Checks

Refer to [form checks button](/components/core/form/other#checks-button).
