---
type: "Components"
category: "Toggle"
parent: "Tooltip"
title: "Tooltip"
description: "Tooltip is a toggle plugin to show simple content relative to an element node and positioned relative to it."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.tooltip` see [css customization](/components/global/preset#customization). Check [xtendui/src/tooltip.css.js](https://github.com/xtendui/xtendui/blob/master/src/tooltip.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/tooltip'`.

Initialize automatically **within markup** with `[data-xt-tooltip="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Tooltip(document.querySelector('.my-container'), {/* options */})`.

## Usage Unique

Use this code to create a **tooltip** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

> Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

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

## Implementation

Check out [tooltip themes](/themes/tooltip) for **advanced implementations**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/themes/implementation/tooltip-implementation-v1">
  </div>
</demo>
