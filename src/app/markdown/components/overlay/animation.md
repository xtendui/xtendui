---
type: "Components"
category: "Toggle"
parent: "Overlay"
title: "Animation"
date: "2010-10-09"
---

## Activation

This component has **automatic activation** you don't need to assign custom variants for activations.

> If you **only need to show/hide and animate a node** consider using [Xt.on and Xt.off](/components/global/javascript#xt-on-and-xt-off) instead of using a complex interaction component.

## Animation

Use **Tailwind CSS** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration), [transition-timing-function](https://tailwindcss.com/docs/transition-timing-function)).

Use **Tailwind CSS variants** `off:`, `group-off:`, `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:` to assign animations.

You can also customize `xt-backdrop` animations.

> If you want to **animate from starting values different from `out:` values** assign `transition` to in: and out: variants.

<demo>
  <demoinline src="demos/components/overlay/animation">
  </demoinline>
</demo>

Use **Tailwind CSS variants** `dir-before:`, `group-dir-before:`, `group-off-before:`, `group-on-before:`, `group-in-before:`, `group-out-before:`, `dir-after:`, `group-dir-after:`, `group-off-after:`, `group-on-after:`, `group-in-after:`, `group-out-after:` to assign animations.

> Direction needs [multiple mode](/components/overlay#usage-multiple) to work.

<demo>
  <demoinline src="demos/components/overlay/animation-direction">
  </demoinline>
</demo>

> When you use animations you need to **specity the duration of the animation** for proper interactions.

You can also set **component's default duration** instead of specify it on each component with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-overlay'] = {
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
| Option                  | `queue:Object\|false`                 | `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`     | Queue activations e.g.: `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`          |

</div>

> Queue needs [multiple mode](/components/overlay#usage-multiple) to work.

<demo>
  <demoinline src="demos/components/overlay/animation-queue">
  </demoinline>
  <demoinline src="demos/components/overlay/animation-noqueue">
  </demoinline>
</demo>

## Css Animation

You can use also **css animations**, just add them with **class names** `.on`, `.in`, `.out`, `.done`, `.dir-before` and `.dir-after`.

> Direction needs [multiple mode](/components/overlay#usage-multiple) to work.

<demo>
  <demoinline src="demos/components/overlay/animation-css">
  </demoinline>
</demo>

## Js Animation

You can use also **javascript animations**, just use [drop api](/components/drop/api).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Property                   | `direction:Number`       | Direction `1` or `-1`              |

</div>

> Direction needs [multiple mode](/components/overlay#usage-multiple) to work.

<demo>
  <demoinline src="demos/components/overlay/animation-js">
  </demoinline>
</demo>

## Design Animation

Use `.xt-design` when you want to **animate the design independently from the content**, use `relative` on parent element and on other elements on the same level of `.xt-design` for fixing z-index issues.

<demo>
  <demoinline src="demos/components/overlay/animation-design">
  </demoinline>
</demo>

## Collapse

Assign `options.collapseHeight` or `options.collapseWidth` and `overflow-hidden`, `transition-all` on collapse nodes.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `collapseHeight:String`                          | `false`        | Type of elements that collapse vertically, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |
| Option                    | `collapseWidth:String`                          | `false`        | Type of elements that collapse horizzontally, can be `elements`, `targets`, `elementsInner`, `targetsInner`           |

</div>

> On **collapse nodes do not to use margin or padding**.

<demo>
  <demoinline src="demos/components/overlay/animation-collapse">
  </demoinline>
</demo>
