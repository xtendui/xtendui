---
type: "Components"
category: "Layout"
parent: "Form"
title: "Other"
date: "2005-10-10"
---

## Disabled

Use **component classes** to style **disabled**. Check [xtendui/src/layout.css.js](https://github.com/minimit/xtendui/blob/beta/src/layout.css.js) for default styles.

[[notePrimary]]
| For usability purpose use `aria-disabled="true"` when using the **class** `.xt-disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `[readonly], [disabled], .xt-disabled`                     | `xt-disabled`                | Disabled styles            |

</div>

<demo>
  <demoinline src="demos/components/form/disabled">
  </demoinline>
</demo>

## Fieldset Legend and Note

Use **tailwind classes** to style **fieldset**, **legend** and **note**.

<demo>
  <demoinline src="demos/components/form/fieldset-legend">
  </demoinline>
</demo>

## Label addon

Use **tailwind classes** to create a **label addon**.

<demo>
  <demoinline src="demos/components/form/label-addon">
  </demoinline>
</demo>

## Group

Refer to [list group](/components/list-group).

## Toolbar

Refer to [toolbar](/components/toolbar).
