---
type: "Components"
category: "Core"
parent: "Drop"
title: "Animation"
date: "2010-10-09"
---

Checkout out [drop's themes](/themes/by-component/drop) for **advanced animations**.

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
| Do not animate `xt-drop` because of transform positioning, **animate the content instead**.

[[notePrimary]]
| Use `.xt-drop-item` as **elements** when using **multiple mode**.

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demovanilla src="vanilla/components/core/drop/animation">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/animation-multiple">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/animation-multiple-noqueue">
  </demovanilla>
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
  <demovanilla src="vanilla/components/core/drop/animation-css">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/animation-css-multiple">
  </demovanilla>
</demo>

## Js Animation

You can use also **javascript animations**, just use [drop api](/components/core/drop/api).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `self.direction:Number`              | Direction of activation `0`, `-1` or `1`              |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/animation-js">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/animation-js-multiple">
  </demovanilla>
</demo>

## Design Animation

Use `.xt-drop-inner` and assign design styles to `.xt-design` (see [layout components](/components/globals/layout#components)) when you want to **animate the design independently from the content**.

<demo>
  <demovanilla src="vanilla/components/core/drop/animation-design">
  </demovanilla>
</demo>
