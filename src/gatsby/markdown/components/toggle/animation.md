---
type: "Components"
category: "Interaction"
parent: "Toggle"
title: "Animation"
date: "2010-10-09"
---

## Toggle

The util class `.xt-toggle` sets `display: none` when **not activated**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-toggle`                     | `xt-toggle`                | `responsive`                | Toggle `display: none` on `.active` and `.out`            |
| Utility                  | `.xt-toggle.xt-toggle-absolute`                     | `xt-toggle xt-toggle-absolute`                | `responsive`                | Deactivating animation with `position: absolute` **relative to a parent Node with relative**, to be used with `options.queue: false`            |

</div>

## Queue and Duration

When you use animations you need to **specity the duration of the animation** for proper interactions.

You can set it in the options or to **assign them also on single nodes** with `data-xt-duration="Milliseconds"`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `queue:Object|Boolean`                 | `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`     | Set instant activation and deactivation          |
| Option                  | `delay:Milliseconds|Function`                          | `false`        | Activation and Deactivation delay            |
| Option                  | `delayInitial:Boolean`                          | `true`        | Initial activation delay            |
| Option                  | `duration:Milliseconds`                          | `false`        | Activation and Deactivation duration            |

</div>

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demoinline src="demos/components/toggle/animation-multiple">
  </demoinline>
  <demoinline src="demos/components/toggle/animation-multiple-noqueue">
  </demoinline>
</demo>

## Css Animation

You can use also **css animations**, just add them with **class names** `.active`, `.out`, `.direction-before` and `.direction-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.direction-before`       |  Class name for left direction activation            |
| Class                  | `.direction-after`       |  Class name for left direction activation            |
</div>

<demo>
  <demoinline src="demos/components/toggle/animation-css-multiple">
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
  <demoinline src="demos/components/toggle/animation-js-multiple">
  </demoinline>
</demo>

## Design Animation

Use `.xt-toggle-inner` and assign design styles to `.xt-design` when you want to **animate the design independently from the content**, use `relative` on other elements on the same level of `.xt-design` for fixing z-index issues.

<demo>
  <demoinline src="demos/components/toggle/animation-design">
  </demoinline>
</demo>
