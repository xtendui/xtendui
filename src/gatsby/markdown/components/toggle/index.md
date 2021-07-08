---
type: "Components"
category: "Interaction"
parent: "Toggle"
title: "Toggle"
description: "Create advanced interactions with ease, has a comprehensive javascript api."
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/toggle'`.

Initialize automatically **within markup** with `[data-xt-toggle="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Toggle(document.querySelector('.my-container'), {/* options */})`.

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
