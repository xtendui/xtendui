---
type: "Components"
category: "Toggle"
parent: "Slider"
title: "Animation"
date: "2010-10-09"
---

Check out [slider's themes](/themes/slider) for **advanced animations**.

## Activation

This component has **automatic activation** you don't need to assign custom variants for activations.

> If you **only need to show/hide and animate a node** consider using [Xt.on and Xt.off](/components/global/javascript#xt-on-and-xt-off) instead of using a complex interaction component.

## Animation

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration), [transition-timing-function](https://tailwindcss.com/docs/transition-timing-function)).

Use **tailwind variants** `off:`, `group-off:`, `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:` to assign animations.

> Do not transition or transform on `xt-slide` because of transform positioning, **transform and transition the content instead**.

<demo>
  <demoinline src="demos/components/slider/animation">
  </demoinline>
</demo>

> When you use animations you need to **specity the duration of the animation** for proper interactions.

You can also set **component's default duration** instead of specify it on each component with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-slider'] = {
  duration: 500,
}
```

## Duration and Delay

See [toggle duration and delay](/components/toggle/animation#duration-and-delay) for more info.

#### Duration

You can set activation duration with **a number of milliseconds** or a **function executed each time** with arguments `{ current, total, el, self }`.

You can also set duration to two `requestAnimationFrame` with the string `raf`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `duration:Function\|Number\|String`                          | `false`        | Activation and Deactivation duration            |
| Option                  | `durationIn:Function\|Number\|String`                          | `false`        | Activation duration            |
| Option                  | `durationOut:Function\|Number\|String`                          | `false`        | Deactivation duration            |

</div>

You can also **assign duration on single nodes** with `data-xt-duration="Milliseconds"` or `data-xt-duration-in="Milliseconds"` and `data-xt-duration-out="Milliseconds"`

#### Delay

You can set activation delay with **a number of milliseconds** or a **function executed each time** with arguments `{ current, total, el, self }`.

You can also set duration to two `requestAnimationFrame` with the string `raf`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `delay:Function\|Number\|String`                          | `false`        | Activation and Deactivation delay            |
| Option                  | `delayIn:Function\|Number\|String`                          | `false`        | Activation delay            |
| Option                  | `delayOut:Function\|Number\|String`                          | `false`        | Deactivation delay            |

</div>

You can also **assign delay on single nodes** with `data-xt-delay="Milliseconds"` or `data-xt-delay-in="Milliseconds"` and `data-xt-delay-out="Milliseconds"`

> Different delay for **in** and **out** desynchronized the animation use it with caution, prefer a normal `delay`.
on single nodes** with `data-xt-delay="Milliseconds"` or `data-xt-delay-in="Milliseconds"` and `data-xt-delay-out="Milliseconds"`

## Queue

The queue option **controls sequential activations putting them in a queue**, or with `false` it executes activations instantly.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `queue:Object\|false`                 | `false`     | Queue activations e.g.: `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`          |

</div>

<demo>
  <demoinline src="demos/components/slider/animation-queue">
  </demoinline>
</demo>


## Css Animation

You can use also **css animations**, just add them with **class names** `.on`, `.in`, `.out`, `.done`, `.dir-before` and `.dir-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.dir-before`       |  Class name for **before** direction activation            |
| Class                  | `.dir-after`       |  Class name for **after** direction activation            |

</div>

<demo>
  <demoinline src="demos/components/slider/animation-css">
  </demoinline>
</demo>

## Js Animation

You can use also **javascript animations**, just use [drop api](/components/slider/api).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Property                   | `direction:Number`       | Direction `1` or `-1`              |

</div>

<demo>
  <demoinline src="demos/components/slider/animation-js">
  </demoinline>
</demo>

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
