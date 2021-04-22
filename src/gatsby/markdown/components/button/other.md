---
type: "Components"
category: "Layout"
parent: "Button"
title: "Other"
date: "2005-10-10"
---

## Activation

You can set activation styles by adding the class `.on`.

Use **tailwind variants** `active:`, `group-active:`, `on:`, `group-on:` to assign animations.

<demo>
  <demoinline src="demos/components/button/activation">
  </demoinline>
</demo>

## Disabled

Use **component classes** to style **disabled**. Check [xtendui/src/layout.css.js](https://github.com/minimit/xtendui/blob/beta/src/layout.css.js) for default styles.

[[notePrimary]]
| For aria purpose use `aria-disabled="true"` when using the **class** `.xt-disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `[readonly], [disabled], .xt-disabled`                     | `xt-disabled`                | Disabled styles            |

</div>

<demo>
  <demoinline src="demos/components/button/disabled">
  </demoinline>
</demo>

## Group

Refer to [group](/components/group).

## Toolbar

Refer to [toolbar](/components/toolbar).

## Nav

Refer to [nav](/components/nav).

## Checks

Refer to [form checks button](/components/form/other#checks-button).