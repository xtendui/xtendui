---
type: "Components"
category: "Interaction"
parent: "Slider"
title: "Slider"
description: "Create visually stunning sliders, has a comprehensive javascript api."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.slider` see [preset customization](/components/preset#customization). Check [xtendui/src/slider.css.js](https://github.com/minimit/xtendui/blob/beta/src/slider.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/slider'`.

Initialize manually **within javascript** with `new Xt.Slider(document.querySelector('.my-object'), {/* options */})`.

## Usage

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `mode:String`                          | `'relative'`        | Slider mode `'relative'` or `'absolute'`           |

</div>

[[noteDefault]]
| Sliders needs gsap animation on `'dragposition.xt.slider'` to **sync the current value of `self.detail.dragPosition` with the internal value of `self.detail.dragPosition`**.

[[notePrimary]]
| `[data-xt-slider-element].hidden` is essential to the functioning of the slider, it gets cloned inside the closest `[data-xt-slider-pagination]` but you can hide it using the class `[data-xt-slider-pagination].hidden`.

#### Relative

Use this code to create a **slider relative**.

<demo>
  <demoinline src="demos/components/slider/usage-relative">
  </demoinline>
</demo>

#### Absolute

Use `absolute top-0 left-0 on:relative` to position the node in **absolute mode** when not activated.

This makes it possible to have advanced positioning animations on the activation of the slides.

In **absolute mode** all options of [slider position](/components/slider/position) are not taken in consideration because not applicable.

Check out [slider's animation absolute](/components/slider/animation#absolute) for **advanced usage**.

<demo>
  <demoinline src="demos/components/slider/usage-absolute">
  </demoinline>
</demo>
