---
type: "Components"
category: "Interaction"
parent: "Toggle"
title: "Animation"
date: "2010-10-09"
---

Check out [toggle's themes](/themes/by-component/toggl) for **advanced animations**.

## Animation

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

Use **tailwind variants** `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:` to assign animations.

<demo>
  <demoinline src="demos/components/toggle/animation">
  </demoinline>
</demo>

## Duration and Delay

[[notePrimary]]
| When you use animations you need to **specity the duration of the animation** for proper interactions.

#### Duration

You can set activation duration with **a number of milliseconds** or a **function executed each time** with arguments `{ current, total, el }`.

You can also **assign duration on single nodes** with `data-xt-duration="Milliseconds"` or `data-xt-duration-in="Milliseconds"` and `data-xt-duration-out="Milliseconds"`

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `duration:Function|Number`                          | `false`        | Activation and Deactivation duration            |
| Option                  | `durationIn:Function|Number`                          | `false`        | Activation duration            |
| Option                  | `durationOut:Function|Number`                          | `false`        | Deactivation duration            |

</div>

#### Delay

You can set activation delay with **a number of milliseconds** or a **function executed each time** with arguments `{ current, total, el }`.

You can also **assign delay on single nodes** with `data-xt-delay="Milliseconds"` or `data-xt-delay-in="Milliseconds"` and `data-xt-delay-out="Milliseconds"`

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `delay:Function|Number`                          | `false`        | Activation and Deactivation delay            |
| Option                  | `delayIn:Function|Number`                          | `false`        | Activation delay            |
| Option                  | `delayOut:Function|Number`                          | `false`        | Deactivation delay            |
| Option                  | `delayInitial:Boolean`                          | `true`        | Initial activation delay            |

</div>

<demo>
  <demoinline src="demos/components/toggle/animation-duration-delay">
  </demoinline>
</demo>

## Queue

By default **multiple mode** queues the activations by waiting the end of duration. Use `queue: false` to disable queue activation.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `queue:Object|false`                 | `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`     | Set instant activation and deactivation          |

</div>

<demo>
  <demoinline src="demos/components/toggle/animation-queue">
  </demoinline>
  <demoinline src="demos/components/toggle/animation-noqueue">
  </demoinline>
</demo>

## Css Animation

You can use also **css animations**, just add them with **class names** `.on`, `.in`, `.out`, `.dir-before` and `.dir-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.dir-before`       |  Class name for **before** direction activation            |
| Class                  | `.dir-after`       |  Class name for **after** direction activation            |
</div>

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

<demo>
  <demoinline src="demos/components/toggle/animation-js">
  </demoinline>
</demo>

## Design Animation

Use `.xt-toggle-inner` and assign design styles to `.xt-design` when you want to **animate the design independently from the content**, use `relative` on other elements on the same level of `.xt-design` for fixing z-index issues.

<demo>
  <demoinline src="demos/components/toggle/animation-design">
  </demoinline>
</demo>

## Collapse

Refer to [animation collapse](/components/animation/collapse).
