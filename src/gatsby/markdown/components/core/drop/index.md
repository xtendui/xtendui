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

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/drop.css.js](https://github.com/minimit/xtendui/blob/master/src/core/drop.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      boxShadow: {
        // modify box shadow
      },
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
}
```

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .drop'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)           |

</div>

#### Multiple

Use this code to create **drop** in **multiple mode**.

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-multiple">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/drop/interaction) and [customize lists](/components/core/drop/content-list) or [customize card](/components/core/drop/content-card).

#### Unique

Use this code to create a **drop** in **unique mode**.

The **unique** mode is useful when triggering **targets outside the scope** of the component.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-unique">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/drop/interaction) and [customize lists](/components/core/drop/content-list) or [customize card](/components/core/drop/content-card).

#### Self

Use this code to create a **drop** in **self mode**.

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-self">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/drop/interaction) and [customize lists](/components/core/drop/content-list) or [customize card](/components/core/drop/content-card).
