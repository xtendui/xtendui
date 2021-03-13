---
type: "Components"
category: "Core"
parent: "Form"
title: "Other"
date: "2005-10-10"
---

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
  <demoinline src="vanilla/components/core/form/disabled">
  </demoinline>
</demo>

## Fieldset Legend and Note

Use **tailwind classes** to style **fieldset**, **legend** and **note**.

<demo>
  <demoinline src="vanilla/components/core/form/fieldset-legend">
  </demoinline>
</demo>

## Label addon

Use **tailwind classes** to create a **label addon**.

<demo>
  <demoinline src="vanilla/components/core/form/label-addon">
  </demoinline>
</demo>

## Group

Refer to [list group](/components/core/list-group).

## Toolbar

Refer to [toolbar](/components/core/toolbar).
