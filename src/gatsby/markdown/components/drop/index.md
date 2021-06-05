---
type: "Components"
category: "Interaction"
parent: "Drop"
title: "Drop"
description: "Nested navigation to show on user interaction, can contain lists and more complex graphics."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.drop` see [preset customization](/components/preset#customization). Check [xtendui/src/drop.css.js](https://github.com/minimit/xtendui/blob/beta/src/drop.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/drop'`.

Initialize automatically **within markup** with `[data-xt-drop="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Drop(document.querySelector('.my-object'), {/* options */})`.

## Drop

The class `.xt-drop` hides the element **with `display: none`** when **not activated by the component**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|               | Syntax                          | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.xt-drop`                     | Apply `display: none` when not `.on` or `.in` or `.out` or `.display`            |

</div>

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

[[notePrimary]]
| Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

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
