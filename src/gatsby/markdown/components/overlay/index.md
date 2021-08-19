---
type: "Components"
category: "Toggle"
parent: "Overlay"
title: "Overlay"
description: "Overlay is a toggle plugin to show interactive content over the main page with custom content and positions."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.overlay` see [css customization](/components/global/preset#customization). Check [xtendui/src/overlay.css.js](https://github.com/xtendui/xtendui/blob/beta/src/overlay.css.js) for default styles.

> Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

## Javascript

Import the **javascript** file with `import 'xtendui/src/overlay'`.

Initialize automatically **within markup** with `[data-xt-overlay="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Overlay(document.querySelector('.my-container'), {/* options */})`.

## Usage Self

Use this code to create a **overlay** in **self mode**.

Just use the class `on` if you want to automatically open, or use the [api](/components/overlay/api).

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/overlay/usage-self">
  </div>
</demo>

## Usage Unique

Use this code to create a **overlay** in **unique mode**.

The **unique mode** is useful when you want to **trigger targets outside the scope**.

> Only when you specify **elements or targets with id** the query is **inside document not only inside object**.

<demo>
  <demoinline src="demos/components/overlay/usage-unique">
  </demoinline>
</demo>

## Usage Multiple

Use this code to create a **overlay** in **multiple mode**.

<demo>
  <demoinline src="demos/components/overlay/usage-multiple">
  </demoinline>
</demo>

## Themes

Check out [overlay themes](/themes/overlay) for **advanced implementations**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/themes/design/overlay-design-v1">
  </div>
</demo>
