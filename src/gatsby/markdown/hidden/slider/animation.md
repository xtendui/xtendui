---
type: "Hidden"
category: "Hidden"
parent: "Slider"
title: "Animation"
date: "2010-10-09"
---

## Drag Position

By default `mode: 'relative'` sliders has automatic transform position of `drag.dragger` and **needs to be animated with css transition**.

Use **tailwind classes** to assign animation (e.g. [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration), [transition-timing-function](https://tailwindcss.com/docs/transition-timing-function)).

You can also use **tailwind variants** `on:` on `drag.dragger` to animate differently on activation (**default styles are for all transitions including drag**).

<demo>
  <demoinline src="demos/components/slider/dragposition-false">
  </demoinline>
</demo>

You can manually assign transform of `drag.dragger` and use any animation you want with javascript, in javascript just remember to set **position animation to keep updated with animation** and **dragger animation**.

Listen to the event `dragposition.xt.slider` and:

- update the value of `self.drag.position` animating it with **that duration and your custom easing**.

- on **relative mode** animates `self.dragger` to the final position value `self.drag.final` with yout custom easing.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `dragposition:Boolean`                          | `false`        | Animate `drag.dragger` manually with `dragposition.xt.slider` event instead of css transition             |

</div>

This is done in order to keep the **internal slider values updated** with your **custom slider animations**, needed especially for **absolute mode**.

<demo>
  <demoinline src="demos/components/slider/dragposition">
  </demoinline>
</demo>

## Absolute

With **absolute mode** all animation of the slides are given by yout **custom gsap animations**.

You only have to listen to slider events [slider's api](/components/slider/api) and animate using the `self.drag.ratio`, `self.drag.ratioInverse`, `self.drag.instant` and `self.direction` values.

> On absolute mode in `on.xt.slider` and `off.xt.slider` you can use `gsap.set` only if `!self.drag.instant` or if using `self.drag.ratio` or `self.drag.ratioInverse`.

#### Cover

Here's an example of absolute animation with **cover and mask**, also on `on.xt.slider` we instantly change slide by setting `self.drag.position` to `self.drag.final`.

<demo>
  <demoinline src="demos/components/slider/animation-absolute-cover">
  </demoinline>
</demo>

#### Mask

Here's an example of absolute animation with **mask and incoming slide**, on `drag.xt.slider` we get and animate **incoming slide** depending on drag direction, also on `off.xt.slider` it animates the **old incoming slide** .

<demo>
  <demoinline src="demos/components/slider/animation-absolute-mask">
  </demoinline>
</demo>
