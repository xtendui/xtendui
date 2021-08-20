---
type: "Components"
category: "Toggle"
parent: "Drop"
title: "Drop"
description: "Drop is a toggle plugin to show complex content relative to an element node and positioned relative to it."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.drop` see [css customization](/components/global/preset#customization). Check [xtendui/src/drop.css.js](https://github.com/xtendui/xtendui/blob/beta/src/drop.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/drop'`.

Initialize automatically **within markup** with `[data-xt-drop="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Drop(document.querySelector('.my-container'), {/* options */})`.

## Usage Self

Use this code to create a **drop** in **self mode**.

Just use the class `on` if you want to automatically open, or use the [api](/components/drop/api).

<demo>
  <demoinline src="demos/components/drop/usage-self">
  </demoinline>
</demo>

## Usage Unique

Use this code to create a **drop** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

> Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

<demo>
  <demoinline src="demos/components/drop/usage-unique">
  </demoinline>
</demo>

## Usage Multiple

Use this code to create **drop** in **multiple mode**.

<demo>
  <demoinline src="demos/components/drop/usage-multiple">
  </demoinline>
</demo>

## Implementation

Check out [drop themes](/themes/drop) for **advanced implementations**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/themes/animation/collapse-animation-v1">
  </div>
</demo>
