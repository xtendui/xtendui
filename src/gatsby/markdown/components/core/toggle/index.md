---
type: "Components"
category: "Core"
parent: "Toggle"
title: "Toggle"
description: "Create advanced interactions with ease, has a comprehensive javascript api."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/core/toggle'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/toggle.css.js](https://github.com/minimit/xtendui/blob/master/src/core/toggle.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      toggle: {
        utility: theme => ({
          // modify utilities
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
| Option                  | `targets:Query`                          | `':scope > .toggle, :scope > [class^="toggle-"], :scope > [class*=" toggle-"]'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

#### Self

Use this code to create a **self toggle**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-self">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/toggle/interaction).

#### Unique

Use this code to create a **unique toggle**.

The **unique** mode is useful when triggering **targets outside the scope** of the component.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-unique-single">
  </demovanilla>
</demo>

You can also toggle the **same targets on multiple toggles**.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-unique-same">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/toggle/interaction).

#### Multiple

Use this code to create **multiple toggle**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-multiple-default">
  </demovanilla>
</demo>

You can also specify your own `elements` and `targets`.

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-multiple-custom">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/toggle/interaction).
