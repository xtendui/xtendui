---
type: "Components"
category: "Interaction"
parent: "Slider"
title: "Slider"
description: "Create visually stunning sliders, has a comprehensive javascript api."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.slider` see [preset customization](/components/tailwind-preset#customization). Check [xtendui/src/slider.css.js](https://github.com/minimit/xtendui/blob/beta/src/slider.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/slider'`.

Initialize with **javascript** with `new Xt.Slider(document.querySelector('.my-object'), {/* options */})`.

## Usage

Use this code to create a **slider**.

[[notePrimary]]
| `[data-xt-pag].hidden` is essential to the functioning of the slider, it gets cloned inside the closest `.xt-slider-pagination` but you can hide it using the class `.xt-slider-pagination.hidden`.

<demo>
  <demoinline src="demos/components/slider/usage">
  </demoinline>
</demo>
