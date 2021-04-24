---
type: "Components"
category: "Interaction"
parent: "Toggle"
title: "Toggle"
description: "Create advanced interactions with ease, has a comprehensive javascript api."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.toggle`.

Check [xtendui/src/toggle.css.js](https://github.com/minimit/xtendui/blob/beta/src/toggle.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/toggle'`.

Initialize automatically **within markup** with `[data-xt-toggle="{ <options> }"]`.

Initialize with **javascript** with `new Xt.Toggle(document.querySelector('.my-object'), {/* options */})`.

## Usage Self

Use this code to create a **toggle** in **self mode**.

<demo>
  <demoinline src="demos/components/toggle/usage-self">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/toggle/interaction).

## Usage Unique

Use this code to create a **toggle** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

<demo>
  <demoinline src="demos/components/toggle/usage-unique">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/toggle/interaction).

## Usage Multiple

Use this code to create a **toggle** in **multiple mode**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button, :scope > .xt-toggle-item'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .xt-toggle, :scope > .xt-toggle-item > .xt-toggle'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `':scope > a, :scope > button'`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

<demo>
  <demoinline src="demos/components/toggle/usage-multiple">
  </demoinline>
</demo>

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated **targets**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Example                   | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- | ----------------------------- |
| Attribute                  | `data-xt-group`       | `data-xt-group="mygroup"`   |  Group or multiple groups on elements and targets            |

</div>

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `groupSeparator:String`                          | `','`        | Separator for multiple groups |     

</div>

<demo>
  <demoinline src="demos/components/toggle/usage-multiple-group">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/toggle/interaction).

