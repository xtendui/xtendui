---
type: "Components"
category: "Interaction"
parent: "Drop"
title: "Drop"
description: "Nested navigation to show on user interaction, can contain lists and more complex graphics."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.drop`.

Check [xtendui/src/drop.css.js](https://github.com/minimit/xtendui/blob/beta/src/drop.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/drop'`.

Initialize automatically **within markup** with `[data-xt-drop="{ <options> }"]`.

Initialize with **javascript** with `new Xt.Drop(document.querySelector('.my-object'), {/* options */})`.

## Usage Self

Use this code to create a **drop** in **self mode**.

Just use the class `on` if you want to automatically open, or use the [api](/components/drop/api)

<demo>
  <demoinline src="demos/components/drop/usage-self">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/drop/interaction) and [customize lists](/components/drop/content-list) or [customize card](/components/drop/content-card).

## Usage Unique

Use this code to create a **drop** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

<demo>
  <demoinline src="demos/components/drop/usage-unique">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/drop/interaction) and [customize lists](/components/drop/content-list) or [customize card](/components/drop/content-card).

## Usage Multiple

Use this code to create **drop** in **multiple mode**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button, :scope > .xt-drop-item'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .xt-drop, :scope > .xt-drop-item > .xt-drop'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `':scope > a, :scope > button'`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)           |

</div>

<demo>
  <demoinline src="demos/components/drop/usage-multiple">
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
  <demoinline src="demos/components/drop/usage-multiple-group">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/drop/interaction) and [customize lists](/components/drop/content-list) or [customize card](/components/drop/content-card).
