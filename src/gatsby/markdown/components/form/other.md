---
type: "Components"
category: "Form"
parent: "Form"
title: "Other"
date: "2005-10-10"
---

## Disabled

Use **component classes** to style **disabled**. Check [xtendui/src/layout.css.js](https://github.com/xtendui/xtendui/blob/beta/src/layout.css.js) for default styles.

> For usability purpose use `aria-disabled="true"` when using the **class** `.xt-disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `[readonly], [disabled], .xt-disabled`                     | `xt-disabled`                | Disabled styles            |

</div>

<demo>
  <demoinline src="demos/components/form/disabled">
  </demoinline>
</demo>

## Other

Use **tailwind classes** to style **fieldset**, **legend** and **note**.

<demo>
  <demoinline src="demos/components/form/other">
  </demoinline>
</demo>
