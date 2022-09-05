---
type: "Components"
category: "Toggle"
parent: "Toast"
title: "Toast"
description: "@TODO"
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.toast` see [css customization](/components/global/preset#customization). Check [xtendui/src/toast.css.js](https://github.com/xtendui/xtendui/blob/master/src/toast.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/toast'`.

Initialize automatically **within markup** with `[data-xt-toast="{ <options> }"]`.

Initialize manually **within javascript** with `new Xt.Toast(document.querySelector('.my-container'), {/* options */})`.

## Usage

<demo>
  <demoinline src="demos/components/toast/usage">
  </demoinline>
</demo>

