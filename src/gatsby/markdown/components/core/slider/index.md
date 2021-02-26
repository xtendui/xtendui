---
type: "Components"
category: "Core"
parent: "Slider"
title: "Slider"
description: "Create visually stunning sliders, has a comprehensive javascript api."
---

## Installation

Import the **component javascript** file with `import 'xtendui/src/core/slider'`.

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.slider`, check [xtendui/src/core/slider.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/slider.css.js) for default values.

## Usage

Use this code to create a **slider**.

[[notePrimary]]
| `[data-xt-pag].xt-ignore` is essential to the functioning of the slider, but you can hide it using the class `.hidden`.

<demo>
  <demovanilla src="vanilla/components/core/slider/usage">
  </demovanilla>
</demo>

Check subpage to [customize interaction](/components/core/slider/interaction) and [customize position](/components/core/slider/position).
