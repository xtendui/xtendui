---
type: "Components"
category: "Toggle"
parent: "Toggle"
title: "Animation"
date: "2010-10-09"
---

## Activation

To **show/hide and animate nodes** we use **custom tailwind variants that react to classes**.

Use `off:hidden out:pointer-events-none` to hide with `display: none;` the node when **not activated or animating**.

Alternatively you can use your own custom style, for example `off:visibility-hidden off:pointer-events-none out:pointer-events-none`.

Use `absolute top-0 left-0 right-0 on:relative` to position the node in absolute mode when **not activated**.

> If you **only need to show/hide and animate a node** consider using [Xt.on and Xt.off](/components/global/javascript#xt-on-and-xt-off) instead of using a complex interaction component.

## Animation

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration), [transition-timing-function](https://tailwindcss.com/docs/transition-timing-function)).

Use **tailwind variants** `off:`, `group-off:`, `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:` to assign animations.

<demo>
  <demoinline src="demos/components/toggle/animation">
  </demoinline>
</demo>

For **inverse animation** you can use also **tailwind variants** `done:`, `group-done:`. Remember to use `data-xt-duration-out="raf"` on inverse targets for proper animations.

<demo>
  <demoinline src="demos/components/toggle/animation-inverse">
  </demoinline>
</demo>

> When you use animations you need to **specity the duration of the animation** for proper interactions.

You can also set **component's default duration** instead of specify it on each component with [Xt.options](/components/global/javascript#xt-options).

```js
Xt.options['xt-toggle'] = {
  duration: 500,
}
```

## Duration and Delay

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

<demo>
  <demoinline src="demos/components/toggle/animation-duration-delay">
  </demoinline>
</demo>

## Queue

The queue option **controls sequential activations putting them in a queue**, or with `false` it executes activations instantly.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `queue:Object\|false`                 | `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`     | Queue activations e.g.: `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`          |

</div>

> Queue needs [multiple mode](/components/toggle#usage-multiple) to work.

<demo>
  <demoinline src="demos/components/toggle/animation-queue">
  </demoinline>
  <demoinline src="demos/components/toggle/animation-noqueue">
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

> Direction needs [multiple mode](/components/drop#usage-multiple) to work.

<demo>
  <demoinline src="demos/components/toggle/animation-css">
  </demoinline>
</demo>

## Js Animation

You can use also **javascript animations**, just use [drop api](/components/drop/api).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Property                   | `direction:Number`       | Direction `1` or `-1`              |

</div>

> Direction needs [multiple mode](/components/drop#usage-multiple) to work.

<demo>
  <demoinline src="demos/components/toggle/animation-js">
  </demoinline>
</demo>

## Design Animation

Use `.xt-design` when you want to **animate the design independently from the content**, use `relative` on parent element and on other elements on the same level of `.xt-design` for fixing z-index issues.

<demo>
  <demoinline src="demos/components/toggle/animation-design">
  </demoinline>
</demo>

## Collapse

Refer to [animation collapse](/components/collapse).
