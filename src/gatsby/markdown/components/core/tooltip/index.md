---
type: "Components"
category: "Core"
parent: "Tooltip"
title: "Tooltip"
description: "Nested navigation to show on user interaction, can contain lists and more complex graphics."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/core/tooltip'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/tooltip.css.js](https://github.com/minimit/xtendui/blob/master/src/core/tooltip.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      boxShadow: {
        // modify box shadow
      },
    },
    xtendui: {
      tooltip: {
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
| Option                  | `targets:Query`                          | `':scope > .tooltip'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)           |

</div>

#### Multiple

Use this code to create **tooltip** in **multiple mode**.

<demo>
  <demovanilla src="vanilla/components/core/tooltip/usage-multiple">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/tooltip/interaction) and [customize content](/components/core/tooltip/content).

#### Unique

Use this code to create a **tooltip** in **unique mode**.

The **unique** mode is useful when triggering **targets outside the scope** of the component.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demovanilla src="vanilla/components/core/tooltip/usage-unique">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/tooltip/interaction) and [customize content](/components/core/tooltip/content).

#### Self

Use this code to create a **tooltip** in **self mode**.

[[notePrimary]]
| When using `mouse` events (default) use only [tooltip with self mode](/components/core/tooltip#usage-self) for proper interaction **if you need to interact with the tooltip**.

<demo>
  <demovanilla src="vanilla/components/core/tooltip/usage-self">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/tooltip/interaction) and [customize content](/components/core/tooltip/content).
