---
type: "Components"
category: "Core"
parent: "Toggle"
title: "Toggle"
description: "Toggle is the main js component that toggle classes, it's inherited by many other js components."
---

## Setup

#### Javascript

Follow the [js installation](/introduction/getting-started/setup#js-installation) instructions and **import the component javascript** file.

```jsx
import { Xt } from 'xtend-library'
import 'xtend-library/src/core/toggle'
```

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `:scope > a, :scope > button`        | Elements query            |
| Option                  | `targets:Query`                          | `:scope > .toggle, :scope > [class^="toggle-"], :scope > [class*=" toggle-"]`        | Targets query            |
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

<demo>
  <demovanilla src="vanilla/components/core/toggle/usage-unique-same">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/toggle/interaction).

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

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
