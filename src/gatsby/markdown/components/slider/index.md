---
type: "Components"
category: "Interaction"
parent: "Slider"
title: "Slider"
description: "Create visually stunning sliders, has a comprehensive javascript api."
---

## Styles

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.slider`.

Check [xtendui/src/slider.css.js](https://github.com/minimit/xtendui/blob/beta/src/slider.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/slider'`.

Initialize with **javascript** with `new Xt.Slider(document.querySelector('.my-object'), {/* options */})`.

## Usage

Use this code to create a **slider**.

[[notePrimary]]
| `[data-xt-pag].xt-ignore` is essential to the functioning of the slider, but you can hide it using the class `.hidden`.

<demo>
  <demoinline src="demos/components/slider/usage">
  </demoinline>
</demo>

Check subpage to [customize interaction](/components/slider/interaction) and [customize position](/components/slider/position).
