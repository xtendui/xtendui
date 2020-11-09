---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Overlay"
description: "Use overlay when you need to display any content over the main page, comes in different options and factors."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/core/overlay'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/overlay.css.js](https://github.com/minimit/xtendui/blob/master/src/core/overlay.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      boxShadow: {
        // modify box shadow
      },
    },
    xtendui: {
      overlay: {
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

[[notePrimary]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .overlay'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `':scope > .overlay-container > .overlay-inner'`        | Inner targets query (scope inside targets)     

</div>

#### Multiple

Use this code to create a **overlay** in **multiple mode**.

<demo>
  <demovanilla src="vanilla/components/core/overlay/usage-multiple">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/overlay/interaction) and [customize content](/components/core/overlay/content).

#### Unique

Use this code to create a **overlay** in **unique mode**.

The **unique** mode is useful when triggering **targets outside the scope** of the component.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demovanilla src="vanilla/components/core/overlay/usage-unique">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/overlay/interaction) and [customize content](/components/core/overlay/content).

#### Self

Use this code to create a **overlay** in **self mode**.

Just use the class `in-overlay` if you want to automatically open, or use the [api](/components/core/overlay/api)

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/overlay/usage-self">
  </div>
</demo>

Check subpage to [customize interaction](/components/core/overlay/interaction) and [customize content](/components/core/overlay/content).
