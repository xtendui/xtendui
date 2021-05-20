---
type: "Components"
category: "Interaction"
parent: "Tooltip"
title: "Tooltip"
description: "Informations or elements to show on user interaction, can contain simple text and more complex graphics."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.tooltip` see [preset customization](/components/preset#customization). Check [xtendui/src/tooltip.css.js](https://github.com/minimit/xtendui/blob/beta/src/tooltip.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/tooltip'`.

Initialize automatically **within markup** with `[data-xt-tooltip="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Tooltip(document.querySelector('.my-object'), {/* options */})`.

## Usage Self

Use this code to create a **tooltip** in **self mode**.

Just use the class `on` if you want to automatically open, or use the [api](/components/tooltip/api)

<demo>
  <demoinline src="demos/components/tooltip/usage-self">
  </demoinline>
</demo>

## Usage Unique

Use this code to create a **tooltip** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

<demo>
  <demoinline src="demos/components/tooltip/usage-unique">
  </demoinline>
</demo>

## Usage Multiple

Use this code to create **tooltip** in **multiple mode**.

<demo>
  <demoinline src="demos/components/tooltip/usage-multiple">
  </demoinline>
</demo>
