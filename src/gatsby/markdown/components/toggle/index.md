---
type: "Components"
category: "Interaction"
parent: "Toggle"
title: "Toggle"
description: "Create advanced interactions with ease, has a comprehensive javascript api."
---

## Styles

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.toggle`.

Check [xtendui/src/toggle.css.js](https://github.com/minimit/xtendui/blob/beta/src/toggle.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/toggle'`.

Initialize automatically **within markup** with `[data-xt-toggle="{ <options> }"]`.

Initialize with **javascript** with `new Xt.Toggle(document.querySelector('#my-object'), {/* options */})`.

## Usage

Pass **elements** and **targets** options if different from defaults. **Elements** listens to events, **targets and inners** activate on events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button, .xt-toggle-item'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .xt-toggle, .xt-toggle-item > .xt-toggle'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `':scope > a, :scope > button`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

#### Unique

Use this code to create a **toggle** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

You can group elements activation with the option `groupElements: true`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `groupElements:Boolean`                          | `false`        | Elements activation as group |     

</div>

<demo>
  <demoinline src="demos/components/toggle/usage-unique">
  </demoinline>
  <demoinline src="demos/components/toggle/usage-unique-groupelements">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/toggle/interaction).

#### Multiple

Use this code to create a **toggle** in **multiple mode**.

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated **targets**.

You can group elements activation with the option `groupElements: true`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `groupElements:Boolean`                          | `false`        | Elements activation as group |     

</div>

<demo>
  <demoinline src="demos/components/toggle/usage-multiple">
  </demoinline>
  <demoinline src="demos/components/toggle/usage-multiple-group">
  </demoinline>
  <demoinline src="demos/components/toggle/usage-multiple-groupelements">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/toggle/interaction).

#### Self

Use this code to create a **toggle** in **self mode**.

<demo>
  <demoinline src="demos/components/toggle/usage-self">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/toggle/interaction).
