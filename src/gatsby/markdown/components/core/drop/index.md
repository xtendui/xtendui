---
type: "Components"
category: "Core"
parent: "Drop"
title: "Drop"
description: "Nested navigation to show on user interaction, can contain lists and more complex graphics."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/core/drop'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/drop.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/drop.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      boxShadow: {
        // modify box shadow
      },
      xtendui: {
        drop: {
          utility: theme => ({
            // modify utilities
          }),
          component: theme => ({
            // modify components
          }),
        },
      },
    },
  },
}
```

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

#### Self

Use this code to create a **drop** in **self mode**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|               | Syntax                          | Mixin               | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.xt-drop-item`                     | `NOT POSSIBLE`                | Overflow scrollbar style            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-self">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/drop/interaction) and [customize lists](/components/core/drop/content-list) or [customize card](/components/core/drop/content-card).

#### Unique

Use this code to create a **drop** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-unique">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/usage-unique-same">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/drop/interaction) and [customize lists](/components/core/drop/content-list) or [customize card](/components/core/drop/content-card).

#### Multiple

Use this code to create **drop** in **multiple mode**.

The **multiple** mode is useful when using `mouse` events and **you want to interact with the targets**.

[[notePrimary]]
| Use `.xt-drop-item` as **elements** when using **multiple mode**.

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-multiple">
  </demovanilla>
</demo>

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated **targets**.

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-multiple-group">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/drop/interaction) and [customize lists](/components/core/drop/content-list) or [customize card](/components/core/drop/content-card).
