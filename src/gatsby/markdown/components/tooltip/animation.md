---
type: "Components"
category: "Interaction"
parent: "Tooltip"
title: "Animation"
date: "2010-10-09"
---

Checkout out [tooltip's themes](/themes/by-component/tooltip) for **advanced animations**.

## Queue and Duration

When you use animations you need to **specity the duration of the animation** for proper interactions.

You can set it in the options or to **assign them also on single nodes** with `data-xt-duration="Milliseconds"`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `queue:Object|Boolean`                 | `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`     | Set instant activation and deactivation          |
| Option                  | `delay:Milliseconds|Function`                          | `false`        | Activation and Deactivation delay            |
| Option                  | `delayInitial:Boolean`                          | `true`        | Initial activation delay            |
| Option                  | `duration:Milliseconds`                          | `false`        | Activation and Deactivation duration            |

</div>

[[notePrimary]]
| Do not animate `xt-tooltip` because of transform positioning, **animate the content instead**.

[[notePrimary]]
| Use `.xt-tooltip-item` as **elements** when using **multiple mode**.

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demoinline src="demos/components/tooltip/animation">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-multiple">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-multiple-noqueue">
  </demoinline>
</demo>

## Css Animation

You can use also **css animations**, just add them with **class names** `.active`, `.out`, `.direction-before` and `.direction-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.direction-before`       |  Class name for left direction activation            |
| Class                  | `.direction-after`       |  Class name for left direction activation            |
</div>

<demo>
  <demoinline src="demos/components/tooltip/animation-css">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-css-multiple">
  </demoinline>
</demo>

## Js Animation

You can use also **javascript animations**, just use [tooltip api](/components/tooltip/api).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `self.direction:Number`              | Direction of activation `0`, `-1` or `1`              |

</div>

<demo>
  <demoinline src="demos/components/tooltip/animation-js">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-js-multiple">
  </demoinline>
</demo>

## Design Animation

Use `.xt-tooltip-inner` and assign design styles to `.xt-design` when you want to **animate the design independently from the content**, use `relative` on other elements on the same level of `.xt-design` for fixing z-index issues.

<demo>
  <demoinline src="demos/components/tooltip/animation-design">
  </demoinline>
</demo>
