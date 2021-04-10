---
type: "Components"
category: "Interaction"
parent: "Overlay"
title: "Overlay"
description: "Use overlay when you need to display any content over the main page, comes in different options and factors."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.overlay`.

Check [xtendui/src/overlay.css.js](https://github.com/minimit/xtendui/blob/beta/src/overlay.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/overlay'`.

Initialize automatically **within markup** with `[data-xt-overlay="{ <options> }"]`.

Initialize with **javascript** with `new Xt.Overlay(document.querySelector('.my-object'), {/* options */})`.

## Usage

[[notePrimary]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .xt-overlay'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `':scope > a, :scope > button'`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

#### Unique

Use this code to create a **overlay** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| When you specify **elements or targets with id** the query is **inside document not only inside object**.

<demo>
  <demoinline src="demos/components/overlay/usage-unique">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/overlay/interaction) and [customize content](/components/overlay/content).

#### Multiple

Use this code to create a **overlay** in **multiple mode**.

<demo>
  <demoinline src="demos/components/overlay/usage-multiple">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/overlay/interaction) and [customize content](/components/overlay/content).

#### Self

Use this code to create a **overlay** in **self mode**.

Just use the class `active` if you want to automatically open, or use the [api](/components/overlay/api)

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/overlay/usage-self">
  </div>
</demo>

Check subpage to [customize interaction](/components/overlay/interaction) and [customize content](/components/overlay/content).
