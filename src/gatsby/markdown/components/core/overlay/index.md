---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Overlay"
description: "Used when you need to display any content over the main page."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/setup#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtend-library/src/core/overlay'
```

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        core: {
          overlay: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          overlay: {
            // modify component
          },
        },
      },
    }),
  })
}
```

To **see the default values** see the source code of `node_modules/xtend-library/src/tailwind-xtend.js`.

[[notePrimary]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `:scope > a, :scope > button`        | Elements query            |
| Option                  | `targets:Query`                          | `:scope > .overlay`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

#### Self

Use this code to create a **overlay** in **self mode**.

<demo>
  <demovanilla src="vanilla/components/core/overlay/usage-self">
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

#### Standalone

Use this code to create a **overlay** in **standalone mode**.

Just use the class `active-overlay` if you want to automatically open, or use the [api](/components/core/overlay/api)

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/overlay/usage-standalone">
  </div>
</demo>

Check subpage to [customize interaction](/components/core/overlay/interaction) and [customize content](/components/core/overlay/content).
