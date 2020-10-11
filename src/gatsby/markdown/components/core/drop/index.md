---
type: "Components"
category: "Core"
parent: "Drop"
title: "Drop"
description: "Highly customizable dropdowns that can contain anything you want."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/setup#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtend-ui/src/core/drop'
```

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtend-ui/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-ui/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          drop: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          drop: {
            // modify core component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtend-ui/src/tailwind-xtend.js`.

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `false`        | Elements query            |
| Option                  | `targets:Query`                          | `:scope > .drop`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `:scope > a, :scope > button`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `:scope > .drop-inner`        | Inner targets query (scope inside targets)           |

</div>

#### Self

Use this code to create a **self drop**.

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-self">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/drop/interaction) and [customize lists](/components/core/drop/content-list) or [customize card](/components/core/drop/content-card).

#### Unique

Use this code to create a **unique drop**.

The **unique** mode is useful when triggering **targets outside the scope** of the component.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-unique">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/drop/interaction) and [customize lists](/components/core/drop/content-list) or [customize card](/components/core/drop/content-card).

#### Multiple

Use this code to create **multiple drop**.

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-multiple">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/drop/interaction) and [customize lists](/components/core/drop/content-list) or [customize card](/components/core/drop/content-card).
