---
type: "Components"
category: "Core"
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

Use **component classes** to style **disabled**. Check [xtendui/src/global.css.js](https://github.com/xtendui/xtendui/blob/beta/src/global.css.js) for default styles.

> For accessibility purpose use `[aria-disabled="true"]` when using the **class** `.xt-disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `[readonly], [disabled], .xt-disabled`                     | `xt-disabled`                | Disabled styles            |

</div>

<demo>
  <demoinline src="demos/components/button/disabled">
  </demoinline>
</demo>
