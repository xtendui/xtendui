---
type: "Components"
category: "Interaction"
parent: "Tooltip"
title: "Tooltip"
description: "Informations or elements to show on user interaction, can contain simple text and more complex graphics."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.tooltip`.

Check [xtendui/src/tooltip.css.js](https://github.com/minimit/xtendui/blob/beta/src/tooltip.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/tooltip'`.

Initialize automatically **within markup** with `[data-xt-tooltip="{ <options> }"]`.

Initialize with **javascript** with `new Xt.Tooltip(document.querySelector('.my-object'), {/* options */})`.

## Usage Self

Use this code to create a **tooltip** in **self mode**.

Just use the class `on` if you want to automatically open, or use the [api](/components/tooltip/api)

<demo>
  <demoinline src="demos/components/tooltip/usage-self">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/tooltip/interaction) and [customize content](/components/tooltip/content).

## Usage Unique

Use this code to create a **tooltip** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

<demo>
  <demoinline src="demos/components/tooltip/usage-unique">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/tooltip/interaction) and [customize content](/components/tooltip/content).

## Usage Multiple

Use this code to create **tooltip** in **multiple mode**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button, :scope > .xt-tooltip-item'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .xt-tooltip, :scope > .xt-tooltip-item > .xt-tooltip'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `':scope > a, :scope > button'`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)           |

</div>

<demo>
  <demoinline src="demos/components/tooltip/usage-multiple">
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
  <demoinline src="demos/components/tooltip/usage-multiple-group">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/tooltip/interaction) and [customize content](/components/tooltip/content).
