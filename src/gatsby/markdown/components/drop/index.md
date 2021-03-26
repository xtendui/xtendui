---
type: "Components"
category: "Interaction"
parent: "Drop"
title: "Drop"
description: "Nested navigation to show on user interaction, can contain lists and more complex graphics."
---

## Installation

Import the **javascript** file with `import 'xtendui/src/drop'`.

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.drop`, check [xtendui/src/drop.css.js](https://github.com/minimit/xtendui/blob/beta/src/drop.css.js) for default styles.

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button, .xt-drop-item`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .xt-drop, .xt-drop-item > .xt-drop'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)           |

</div>

#### Unique

Use this code to create a **drop** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demoinline src="demos/components/drop/usage-unique">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/drop/interaction) and [customize lists](/components/drop/content-list) or [customize card](/components/drop/content-card).

#### Multiple

Use this code to create **drop** in **multiple mode**.

The **multiple** mode is useful when using `mouse` events and **you want to interact with the targets**.

[[notePrimary]]
| Use `.xt-drop-item` as **elements** when using **multiple mode**.

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated **targets**.

<demo>
  <demoinline src="demos/components/drop/usage-multiple">
  </demoinline>
  <demoinline src="demos/components/drop/usage-multiple-group">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/drop/interaction) and [customize lists](/components/drop/content-list) or [customize card](/components/drop/content-card).

#### Self

Use this code to create a **drop** in **self mode**.

Just use the class `in-drop` if you want to automatically open, or use the [api](/components/drop/api)

<demo>
  <demoinline src="demos/components/drop/usage-self">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/drop/interaction) and [customize lists](/components/drop/content-list) or [customize card](/components/drop/content-card).
