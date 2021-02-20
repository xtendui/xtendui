---
type: "Components"
category: "Core"
parent: "Tooltip"
title: "Interaction"
date: "2010-10-10"
---

## Class

You can customize the **class names** used by the component.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `in in-tooltip`        | Class name for activation            |
| Option                  | `classActive:String`                          | `active`        | Class name for active            |
| Option                  | `classOut:String`                          | `out`        | Class name for out            |
| Option                  | `classDone:String`                          | `done`        | Class name for in animation done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classBefore:String`                          | `direction-before`        | Class name for left direction activation            |
| Option                  | `classAfter:String`                          | `direction-after`        | Class name for right direction activation            |
| Option                  | `classSkip:Object`                          | `{ elements: true, elementsInner: true }`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

You can start with toggled elements and targets just by adding **one of the class names for activation** to the **elements** or **targets**.

Additionally on component initialization the class `.xt-tooltip-init` gets added to the **object**.

## Animation

[[notePrimary]]
| Do not animate `xt-tooltip` because of transform positioning, **animate the content instead**.

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demovanilla src="vanilla/components/core/tooltip/animation">
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

[[noteDefault]]
| Use `delay: Milliseconds` for direction when using `mouseenter` and `mouseleave` events.

Checkout out [tooltip's themes](/themes/by-component/tooltip) for **advanced animations**.

## Timing

Xtend **automatically detects animation time** on activation and deactivation **before setting display property** with `in` and `out` classes.

If you want to manually set it use `options.duration` or `options.durationOn` and `options.durationOff`.

It's possible to **assign them also on single nodes** with `data-xt-duration="Milliseconds"` or  `data-xt-durationOn="Milliseconds"` and  `data-xt-durationOff="Milliseconds"`.

You can also use a function for <code>delay</code>, <code>delayOn</code> and <code>delayOff</code> see javascript in the demo below.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `queue:Object|Boolean`                 | `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`     | Set instant activation and deactivation          |
| Option                  | `delay:Milliseconds|Function`                          | `false`        | Activation and Deactivation delay            |
| Option                  | `delayOn:Milliseconds|Function`                          | `false`        | Activation delay            |
| Option                  | `delayOff:Milliseconds|Function`                          | `false`        | Deactivation delay            |
| Option                  | `delayInitial:Boolean`                          | `true`        | Initial activation delay            |
| Option                  | `duration:Milliseconds`                          | `false`        | Activation and Deactivation duration            |
| Option                  | `durationOn:Milliseconds`                          | `false`        | Activation duration            |
| Option                  | `durationOff:Milliseconds`                          | `false`        | Deactivation duration            |

</div>

## Event

You can specify **on** and **off** events for the tooltip. Fore example `on: 'click'` `off: 'click`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                              | `'mouseenter'`                     | Set event to listen for activation           |
| Option                  | `off:String`                             | `'mouseleave'`                       | Set event to listen for deactivation if not present `options.on` deactivate when already activated          |
| Option                  | `eventLimit:Query`                          | `'.event-limit, .tooltip > *:first-child'`        | Limit events inside self.object            |

</div>

[[notePrimary]]
| When using `mouse` events use only [multiple mode](/components/core/drop#usage-multiple) **when you want to interact with the targets**.

<demo>
  <demovanilla src="vanilla/components/core/tooltip/event">
  </demovanilla>
</demo>

You can have **element's link** and **click events** prevented when the tooltip opens with `preventEvent: true`, they will trigger only if the tooltip is already opened.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `preventEvent:Boolean`                          | `false`        | Prevent interaction until activated depending on `on` and `off` events (second click or mouseenter, use touch device to see it in action)            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/tooltip/prevent-event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/prevent-event-click">
  </demovanilla>
</demo>

## Backdrop

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `backdrop:Boolean`                              | `false`                     | Generate backdrop on targets or on object if no targets           |

</div>

<demo>
  <demovanilla src="vanilla/components/core/tooltip/backdrop">
  </demovanilla>
</demo>

## Disable

If you want to **disable the component** use the `options.disabled`, besides that you can add the class `.xt-tooltip-disabled` to `object`, `elements` and `targets` to disable them before javascript initialization.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |

</div>

Example of **component disabled on desktop** with [match media](/components/core/tooltip/api#match-media).

<demo>
  <demovanilla src="vanilla/components/core/tooltip/disable">
  </demovanilla>
</demo>

