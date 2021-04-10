---
type: "Components"
category: "Interaction"
parent: "Drop"
title: "Animation"
date: "2010-10-09"
---

Checkout out [drop's themes](/themes/by-component/drop) for **advanced animations**.

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

[[notePrimary]]
| Do not transition transform on `xt-drop` because of transform positioning, **transition the content instead**.

[[notePrimary]]
| Use `.xt-drop-item` as **elements** when using **multiple mode**.

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

Use **custom tailwind variants** `in:` `out:` and `group-in:` `group-out:` to assign animations.

<demo>
  <demoinline src="demos/components/drop/animation">
  </demoinline>
  <demoinline src="demos/components/drop/animation-multiple">
  </demoinline>
  <demoinline src="demos/components/drop/animation-multiple-noqueue">
  </demoinline>
</demo>

## Css Animation

You can use also **css animations**, just add them with **class names** `.active`, `.out`, `.dir-before` and `.dir-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.dir-before`       |  Class name for before direction activation            |
| Class                  | `.dir-after`       |  Class name for after direction activation            |
</div>

<demo>
  <demoinline src="demos/components/drop/animation-css">
  </demoinline>
  <demoinline src="demos/components/drop/animation-css-multiple">
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
  <demoinline src="demos/components/drop/animation-js">
  </demoinline>
  <demoinline src="demos/components/drop/animation-js-multiple">
  </demoinline>
</demo>

## Design Animation

Use `.xt-drop-inner` and assign design styles to `.xt-design` when you want to **animate the design independently from the content**, use `relative` on other elements on the same level of `.xt-design` for fixing z-index issues.

<demo>
  <demoinline src="demos/components/drop/animation-design">
  </demoinline>
</demo>
