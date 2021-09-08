---
type: "Components"
category: "Toggle"
parent: "Toggle"
title: "Toggle"
description: "Toggle is a plugin for all interactions that toggle a class and respond to it."
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

> Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

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

## Implementation

Check out [toggle themes](/themes/toggle) for **advanced implementations**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/themes/implementation/toggle-implementation-v1">
  </div>
  <div class="gatsby_demo_item" data-iframe="demos/themes/gallery/products-gallery-v1">
  </div>
</demo>
