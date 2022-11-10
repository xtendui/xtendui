---
type: "Components"
category: "Toggle"
parent: "Slider"
title: "Advanced"
date: "2010-08-09"
---

## Drag Position

By default `mode: 'relative'` sliders has automatic transform position of `dragger` and **needs to be animated with css transition**.

Use **Tailwind CSS** to assign animation (e.g. [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration), [transition-timing-function](https://tailwindcss.com/docs/transition-timing-function)).

You can also use **Tailwind CSS variants** `on:` on `dragger` to animate differently on activation (**default styles are for all transitions including drag**).

<demo>
  <demoinline src="demos/components/slider/dragposition-css">
  </demoinline>
</demo>

You can manually assign transform of `dragger` and use any animation you want with javascript, in javascript just remember to set **position animation to keep updated with animation** and **dragger animation**.

Listen to the event `dragposition.xt.slider` and:

- update the value of `self.drag.position` animating it with **that duration and your custom easing**.

- on **relative mode** animates `self.dragger` to the final position value `self.drag.final` with your custom duration and easing.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `dragposition:Boolean`                          | `false`        | Animate `dragger` manually with `dragposition.xt.slider` event instead of css transition             |

</div>

This is done in order to keep the **internal slider values updated** with your **custom slider animations**, needed especially for **absolute mode**.

<demo>
  <demoinline src="demos/components/slider/dragposition-js">
  </demoinline>
</demo>

#### Automatic Scrolling

Example of **infinite automatic scrolling slider**, with also drag and pauses on interaction and automatically disables if not enough space.

<demo>
  <demoinline src="demos/components/slider/automatic-scrolling">
  </demoinline>
</demo>

## Absolute

With **absolute mode** all animation of the slides are given by yout **custom gsap animations**.

You only have to listen to slider events [slider's api](/components/slider/api) and animate using the `self.drag.ratio`, `self.drag.ratioInverse`, `self.drag.instant` and `self.direction` values.

> On absolute mode in `on.xt.slider` and `off.xt.slider` you can use `gsap.set` only if `!self.drag.instant` or if using `self.drag.ratio` or `self.drag.ratioInverse`.

#### Cover

Here's an example of absolute animation with **cover and mask**, also on `on.xt.slider` we instantly change slide by setting `self.drag.position` to `self.drag.final`.

<demo>
  <demoinline src="demos/components/slider/absolute-cover">
  </demoinline>
</demo>

#### Mask

Here's an example of absolute animation with **mask and incoming slide**, on `drag.xt.slider` we get and animate **incoming slide** depending on drag direction, also on `off.xt.slider` it animates the **old incoming slide** .

<demo>
  <demoinline src="demos/components/slider/absolute-mask">
  </demoinline>
</demo>

#### Position

Activate **free drag** while retaining targets activations and elements interactions.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `free:Boolean`                          | `false`        | Free drag            |

</div>

<demo>
  <demoinline src="demos/components/slider/absolute-free">
  </demoinline>
</demo>

## Wheel

Use `self.wheelEvent` for **interaction on mousewheel** to attach wheel event to drag.


<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.wheelEvent({ factor:Number = -1, timeout:Number = 250, threshold:Number = 10 }, e:Event)`                          | Attach wheel event to drag, returns `Boolean` if not overflowing             |

</div>

<demo>
  <demoinline src="demos/components/slider/wheel">
  </demoinline>
</demo>

You can choose when to `e.preventDefault()`, for this you can check for returned value of `self.wheelEvent` if not overflowing.

<demo>
  <demoinline src="demos/components/slider/wheel-free">
  </demoinline>
</demo>

For **absolute mode** additionally on `dragposition.xt.slider` set the `dragDuration` with the desired animation duration only if `self.drag.dragging && self.wheel.wheeling`.

<demo>
  <demoinline src="demos/components/slider/absolute-wheel">
  </demoinline>
</demo>

<demo>
  <demoinline src="demos/components/slider/absolute-wheel-free">
  </demoinline>
</demo>

You can attach wheel event to `window` or other DOM elements.

<demo>
  <demoinline src="demos/components/slider/automatic-scrolling-wheel">
  </demoinline>
</demo>

## ScrollTrigger

<demo>
  <demoinline src="demos/components/slider/scrolltrigger">
  </demoinline>
</demo>

<demo>
  <demoinline src="demos/components/slider/absolute-scrolltrigger">
  </demoinline>
</demo>
