---
type: "Components"
category: "Core"
parent: "Toggle"
title: "Toggle"
description: "Create advanced interactions with ease, has a comprehensive javascript api."
---

## Installation

Import the **component javascript** file with `import 'xtendui/src/core/toggle'`.

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.toggle`, check [xtendui/src/core/toggle.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/toggle.css.js) for default styles.

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button, .xt-toggle-item'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .xt-toggle, .xt-toggle-item > .xt-toggle'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `':scope > a, :scope > button`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

#### Unique

Use this code to create a **toggle** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-unique">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/toggle/interaction).

#### Multiple

Use this code to create a **toggle** in **multiple mode**.

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated **targets**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-multiple">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/usage-multiple-group">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/toggle/interaction).

#### Self

Use this code to create a **toggle** in **self mode**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-self">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/toggle/interaction).
