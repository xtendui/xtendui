---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Overlay"
description: "Use overlay when you need to display any content over the main page, comes in different options and factors."
---

## Installation

Import the **component javascript** file with `import 'xtendui/src/core/overlay'`.

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.overlay`, check [xtendui/src/core/overlay.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/overlay.css.js) for default styles.

[[notePrimary]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button, .xt-overlay-item'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .xt-overlay, .xt-overlay-item > .xt-overlay'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

#### Unique

Use this code to create a **overlay** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demoinline src="vanilla/components/core/overlay/usage-unique">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/core/overlay/interaction) and [customize content](/components/core/overlay/content).

#### Multiple

Use this code to create a **overlay** in **multiple mode**.

<demo>
  <demoinline src="vanilla/components/core/overlay/usage-multiple">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/core/overlay/interaction) and [customize content](/components/core/overlay/content).

#### Self

Use this code to create a **overlay** in **self mode**.

Just use the class `in-overlay` if you want to automatically open, or use the [api](/components/core/overlay/api)

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/core/overlay/usage-self">
  </div>
</demo>

Check subpage to [customize interaction](/components/core/overlay/interaction) and [customize content](/components/core/overlay/content).
