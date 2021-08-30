---
type: "Components"
category: "Toggle"
parent: "Slider"
title: "Slider"
description: "Slider is a toggle plugin for drag interactions and for interfaces that slide on one axis."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.slider` see [css customization](/components/global/preset#customization). Check [xtendui/src/slider.css.js](https://github.com/xtendui/xtendui/blob/beta/src/slider.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/slider'`.

Initialize manually **within javascript** with `new Xt.Slider(document.querySelector('.my-container'), {/* options */})`.

## Usage

Use this code to create a **slider** in **relative mode**.

<demo>
  <demoinline src="demos/components/slider/usage-relative">
  </demoinline>
</demo>
