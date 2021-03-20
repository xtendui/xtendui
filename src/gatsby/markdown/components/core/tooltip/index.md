---
type: "Components"
category: "Core"
parent: "Tooltip"
title: "Tooltip"
description: "Informations or elements to show on user interaction, can contain simple text and more complex graphics."
---

## Installation

Import the **component javascript** file with `import 'xtendui/src/core/tooltip'`.

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.tooltip`, check [xtendui/src/core/tooltip.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/tooltip.css.js) for default styles.

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button, .xt-tooltip-item'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .xt-tooltip, .xt-tooltip-item > .xt-toolti'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)           |

</div>

#### Unique

Use this code to create a **tooltip** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demoinline src="demos/components/core/tooltip/usage-unique">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/core/tooltip/interaction) and [customize content](/components/core/tooltip/content).

#### Multiple

Use this code to create **tooltip** in **multiple mode**.

The **multiple** mode is useful when using `mouse` events and **you want to interact with the targets**.

[[notePrimary]]
| Use `.xt-tooltip-item` as **elements** when using **multiple mode**.

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated **targets**.

<demo>
  <demoinline src="demos/components/core/tooltip/usage-multiple">
  </demoinline>
  <demoinline src="demos/components/core/tooltip/usage-multiple-group">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/core/tooltip/interaction) and [customize content](/components/core/tooltip/content).

#### Self

Use this code to create a **tooltip** in **self mode**.

Just use the class `in-tooltip` if you want to automatically open, or use the [api](/components/core/tooltip/api)

<demo>
  <demoinline src="demos/components/core/tooltip/usage-self">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/core/tooltip/interaction) and [customize content](/components/core/tooltip/content).
