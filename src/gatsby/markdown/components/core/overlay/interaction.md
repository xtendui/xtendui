---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Interaction"
date: "2010-10-10"
---

## Class

You can customize the **class names** used by the component.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `in in-overlay`        | Class name for activation            |
| Option                  | `classActive:String`                          | `active`        | Class name for active            |
| Option                  | `classOut:String`                          | `out`        | Class name for out            |
| Option                  | `classDone:String`                          | `done`        | Class name for in animation done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

You can start with toggled elements and targets just by adding **one of the class names for activation** to the **elements** or **targets**.

Additionally on component initialization the class `.xt-overlay-init` gets added to the **object**.

## Animation

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demovanilla src="vanilla/components/core/overlay/animation">
  </demovanilla>
</demo>

You can use also **css animations**, just add them with **class names** `.in`, `.out` and `.inverse`.

<demo>
  <demovanilla src="vanilla/components/core/overlay/animation-css">
  </demovanilla>
</demo>

You can use also **javascript animations**, just use [drop api](/components/core/drop/api), and remember to set `durationOn: Milliseconds` and `durationOff: Milliseconds`.

<demo>
  <demovanilla src="vanilla/components/core/overlay/animation-js">
  </demovanilla>
</demo>

Checkout out [overlay's themes](/themes/by-component/overlay) for **advanced animations**.

## Timing

Xtend **automatically detects animation time** on activation and deactivation **before setting display property** with `in` and `out` classes.

If you want to manually set it use `options.duration` or `options.durationOn` and `options.durationOff`.

It's possible to **assign them also on single nodes** with `data-xt-duration="Milliseconds"` or  `data-xt-durationOn="Milliseconds"` and  `data-xt-durationOff="Milliseconds"`.

You can also use a function for <code>delay</code>, <code>delayOn</code> and <code>delayOff</code> see javascript in the demo below.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `instant:Object|Boolean`                 | `{ elements: true, targets: false, elementsInner: true, targetsInner: false }`     | Set instant activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`          |
| Option                  | `delay:Milliseconds|Function`                          | `false`        | Activation and Deactivation delay            |
| Option                  | `delayOn:Milliseconds|Function`                          | `false`        | Activation delay            |
| Option                  | `delayOff:Milliseconds|Function`                          | `false`        | Deactivation delay            |
| Option                  | `delayInitial:Boolean`                          | `true`        | Initial activation delay            |
| Option                  | `duration:Milliseconds`                          | `false`        | Activation and Deactivation duration            |
| Option                  | `durationOn:Milliseconds`                          | `false`        | Activation duration            |
| Option                  | `durationOff:Milliseconds`                          | `false`        | Deactivation duration            |

</div>

## Class html

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `classHtml:String`                          | `false`        | Add class to `html` on activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/class-html">
  </demovanilla>
</demo>

## Disable

If you want to **disable the component** use the `options.disabled`, besides that you can add the class `.xt-overlay-disabled` to `object`, `elements` and `targets` to disable them before javascript initialization.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |

</div>

Example of **component disabled on desktop** with [match media](/components/core/overlay/api#match-media).

<demo>
  <demovanilla src="vanilla/components/core/overlay/disable">
  </demovanilla>
</demo>


