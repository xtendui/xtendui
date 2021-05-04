---
type: "Components"
category: "Interaction"
parent: "Tooltip"
title: "Animation"
date: "2010-10-09"
---

Check out [tooltip's themes](/themes/by-component/tooltip) for **advanced animations**.

## Animation

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

Use **tailwind variants** `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:` to assign animations.

[[notePrimary]]
| Do not transition or transform on `xt-tooltip` because of transform positioning, **transition the content instead**.

<demo>
  <demoinline src="demos/components/tooltip/animation">
  </demoinline>
</demo>

## Duration

See [toggle duration](/components/toggle/animation#duration) for demos.

When you use animations you need to **specity the duration of the animation** for proper interactions.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `duration:Milliseconds`                          | `false`        | Activation and Deactivation duration            |
| Option                  | `durationIn:Milliseconds`                          | `false`        | Activation duration            |
| Option                  | `durationOut:Milliseconds`                          | `false`        | Deactivation duration            |

</div>

You can also **assign them also on single nodes** with `data-xt-duration="Milliseconds"` or `data-xt-duration-in="Milliseconds"` and `data-xt-duration-out="Milliseconds"`

## Delay

See [toggle delay](/components/toggle/animation#delay) for demos.

You can set activation delay with a value or a function with arguments `{ current, total, el }` and that returns a value.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `delay:Milliseconds|Function`                          | `false`        | Activation and Deactivation delay            |
| Option                  | `delayIn:Milliseconds|Function`                          | `false`        | Activation delay            |
| Option                  | `delayOut:Milliseconds|Function`                          | `false`        | Deactivation delay            |
| Option                  | `delayInitial:Boolean`                          | `true`        | Initial activation delay            |

</div>

You can also **assign them also on single nodes** with `data-xt-delay="Milliseconds"` or `data-xt-delay-in="Milliseconds"` and `data-xt-delay-out="Milliseconds"`

## Queue

By default **multiple mode** queues the activations by waiting the end of duration. Use `queue: false` to disable queue activation.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `queue:Object|false`                 | `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`     | Set instant activation and deactivation          |

</div>

<demo>
  <demoinline src="demos/components/tooltip/animation-queue">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-noqueue">
  </demoinline>
</demo>

## Css Animation

You can use also **css animations**, just add them with **class names** `.on`, `.out`, `.dir-before` and `.dir-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.dir-before`       |  Class name for **before** direction activation            |
| Class                  | `.dir-after`       |  Class name for **after** direction activation            |
</div>

[[notePrimary]]
| Use a **slight delay on multiple mode with mouse events** when you want to use **sequential activation direction**.

<demo>
  <demoinline src="demos/components/tooltip/animation-css">
  </demoinline>
</demo>

## Js Animation

You can use also **javascript animations**, just use [tooltip api](/components/tooltip/api).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Property                   | `direction:Number`       | Direction `1` or `-1`              |

</div>

[[notePrimary]]
| Use a **slight delay on multiple mode with mouse events** when you want to use **sequential activation direction**.

<demo>
  <demoinline src="demos/components/tooltip/animation-js">
  </demoinline>
</demo>

## Design Animation

Use `.xt-tooltip-inner` and assign design styles to `.xt-design` when you want to **animate the design independently from the content**, use `relative` on other elements on the same level of `.xt-design` for fixing z-index issues.

<demo>
  <demoinline src="demos/components/tooltip/animation-design">
  </demoinline>
</demo>

## Animation Fast

Use this code to create **tooltips with fast animation on sequential interactions**.

<demo>
  <demoinline src="demos/components/tooltip/animation-fast">
  </demoinline>
</demo>

## Collapse

Refer to [animation collapse](/components/animation/collapse).
