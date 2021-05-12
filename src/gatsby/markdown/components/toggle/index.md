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

## Toggle

Use the class `.xt-toggle` to hide nodes **with `display: none`** when **not activated by Xtend Toggle**.

Use the class `.xt-toggle-visible` to hide nodes **with `visibility: hidden`** when not activated or animating, useful when you need **display for calculations**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-toggle`                     | `xt-toggle`                | `responsive`                | Apply `display: none` when not `.on` or `.in` or `.out`            |
| Utility                  | `.xt-toggle-visible`                     | `xt-toggle-visible`                | `responsive`                | Apply `visibility: hidden` and `pointer-events: none` when not `.on` or `.in` or `.out`            |
| Utility                  | `.xt-toggle-absolute`                     | `xt-toggle-absolute`                | `responsive`                | Apply `position: absolute` when not `.on`             |

</div>

Use the class `.xt-toggle-absolute` to position node in **absolute mode** when not activated, should be used in conjunction with `.xt-toggle` (remember to use `relative` on a chosen parent element), see [animation noqueue](/components/toggle/animation#queue) for demo.

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
