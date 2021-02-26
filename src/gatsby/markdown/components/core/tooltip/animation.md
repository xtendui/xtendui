---
type: "Components"
category: "Core"
parent: "Tooltip"
title: "Animation"
date: "2010-10-09"
---

## Animation

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

[[noteDefault]]
| Do not animate `xt-tooltip` because of transform positioning, **animate the content instead**.

[[noteDefault]]
| Use `.xt-tooltip-item` as **elements** when using **multiple mode**.

[[noteDefault]]
| Use `delay: Milliseconds` for direction when using `mouseenter` and `mouseleave` events.

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demovanilla src="vanilla/components/core/tooltip/animation">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/animation-multiple">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/animation-multiple-noqueue">
  </demovanilla>
</demo>

You can use also **css animations**, just add them with **class names** `.active`, `.out`, `.direction-before` and `.direction-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.direction-before`       |  Class name for left direction activation            |
| Class                  | `.direction-after`       |  Class name for left direction activation            |
</div>

<demo>
  <demovanilla src="vanilla/components/core/tooltip/animation-css">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/animation-css-multiple">
  </demovanilla>
</demo>

You can use also **javascript animations**, just use [tooltip api](/components/core/tooltip/api).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `self.direction:Number`              | Direction of activation `0`, `-1` or `1`              |

</div>

<demo>
  <demovanilla src="vanilla/components/core/tooltip/animation-js">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/animation-js-multiple">
  </demovanilla>
</demo>

Checkout out [tooltip's themes](/themes/by-component/tooltip) for **advanced animations**.
