---
type: "Components"
category: "Core"
parent: "Button"
title: "Other"
date: "2005-10-10"
---

## Activation

Use **component classes** to style **active**.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.active`                     | `active`                | Active styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/button/active">
  </demovanilla>
</demo>

## Disabled

Use **component classes** to style **disabled**. Check [xtendui/src/core/layout.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/layout.css.js) for default values.

[[notePrimary]]
| For aria purpose use `aria-disabled="true"` when using the **class** `.disabled`.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `[readonly], [disabled], .disabled`                     | `disabled`                | Disabled styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/button/disabled">
  </demovanilla>
</demo>

## Group

Refer to [group](/components/core/group).

## Toolbar

Refer to [toolbar](/components/addons/toolbar).

## Nav

Refer to [nav](/components/addons/nav).

## Checks

Refer to [form checks button](/components/core/form/other#checks-button).
