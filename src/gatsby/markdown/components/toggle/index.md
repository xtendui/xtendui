---
type: "Components"
category: "Interaction"
parent: "Toggle"
title: "Toggle"
description: "Create advanced interactions with ease, has a comprehensive javascript api."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.toggle` see [preset customization](/components/tailwind-preset#customization). Check [xtendui/src/toggle.css.js](https://github.com/minimit/xtendui/blob/beta/src/toggle.css.js) for default styles.

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

## Usage Unique

Use this code to create a **toggle** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

[[notePrimary]]
| Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

<demo>
  <demoinline src="demos/components/toggle/usage-unique">
  </demoinline>
</demo>

## Usage Multiple

Use this code to create a **toggle** in **multiple mode**.

<demo>
  <demoinline src="demos/components/toggle/usage-multiple">
  </demoinline>
</demo>
