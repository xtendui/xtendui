---
type: "Components"
category: "Core"
parent: "Toggle"
title: "Interaction"
date: "2010-10-10"
---

## Class

You can customize the **class names** used by the component.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `in in-toggle`        | Class name for activation            |
| Option                  | `classActive:String`                          | `active`        | Class name for active            |
| Option                  | `classOut:String`                          | `out`        | Class name for out            |
| Option                  | `classDone:String`                          | `done`        | Class name for in animation done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/class">
  </demovanilla>
</demo>

You can start with toggled elements and targets just by adding **one of the class names for activation** to the **elements** or **targets**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/start">
  </demovanilla>
</demo>

Additionally on component initialization the class `.xt-toggle-init` gets added to the **object**.

## Animation

The util class `.xt-toggle` sets `display: none` when **not activated**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-toggle`                     | `xt-toggle`                | `responsive`                | Toggle `display: none` on `.active` and `.out`            |
| Utility                  | `.xt-toggle.xt-toggle-absolute`                     | `xt-toggle xt-toggle-absolute`                | `responsive`                | Deactivating animation with `position: absolute` **relative to a parent Node with relative**, to be used with `options.instant: true`            |

</div>

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

<demo>
  <demovanilla src="vanilla/components/core/toggle/animation">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/animation-absolute">
  </demovanilla>
</demo>

You can use also **css animations**, just add them with **class names** `.in`, `.out` and `.inverse`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.inverse`       |  If inverse direction activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/animation-css-multiple">
  </demovanilla>
</demo>

You can use also **javascript animations**, just use [drop api](/components/core/drop/api).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Variable                  | `self.direction:Number`              | Direction of activation `0`, `-1` or `1`              |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/animation-js-multiple">
  </demovanilla>
</demo>

[[noteDefault]]
| Use `delay: Milliseconds` for direction when using `mouseenter` and `mouseleave` events.

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

<demo>
  <demovanilla src="vanilla/components/core/toggle/timing">
  </demovanilla>
</demo>

## Quantity

You can specify `min` and `max` concurrent activations. The `min` option is fulfilled on initialization, the `max` options deactivates the first activated when max is reached.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min:Number`                          | `0`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |
| Option                  | `autoDisable:Boolean`                          | `true`        | Disable automatically when cannot be activated due to `min` and `max` values             |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/quantity">
  </demovanilla>
</demo>

## Event

You can specify **on** and **off** events for the toggle.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                          | `'click'`        | Activation event to attach to elements            |
| Option                  | `off:String`                          | `'click'`        | Dectivation event to attach to elements            |
| Option                  | `eventLimit:Query`                          | `'.event-limit'`        | Limit events inside self.object            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/event-mouse">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/event-focus">
  </demovanilla>
</demo>

You can have **element's link** and **other events** that trigger after toggle with `preventEvent: true`.

If the toggle is on `"on": "mouseenter"` or `"on": "mousehover"` the link gets activated on the second touch event on touch devices.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `preventEvent:Boolean`                          | `false`        | Prevent interaction until activated depending on `on` and `off` events (second click or mouseenter)            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/prevent-event">
  </demovanilla>
</demo>

## Auto

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |
| Option                  | `auto.pause:Query`                          | `false`        | Elements that pause automatic on mouseenter            |

</div>

[[notePrimary]]
| Auto doesn't run if the toggle is `display: none`. Start it manually when visible using [toggle events](/components/core/toggle/api#trigger).

<demo>
  <demovanilla src="vanilla/components/core/toggle/auto">
  </demovanilla>
</demo>

Use the [api](/components/core/slider/api#listen) and listen to events to make auto progress indicators.

<demo>
  <demovanilla src="vanilla/components/core/toggle/progress">
  </demovanilla>
</demo>

## Loop

Use `loop: false` to disable looping on activation.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `loop:Boolean`                          | `true`        | Loop activation            |

</div>

## Jump

Use `jump: true` to enable clicking on a **target** to jump to them.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `jump:Boolean`                          | `false`        | Clicking on targets triggers activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/jump">
  </demovanilla>
</demo>

## Navigation

You can add navigation with `navigation: '[data-xt-nav]'` option, then with `[data-xt-nav="value"]` to set the amount to add (`+1`) or remove (`-1`) to the current activation index.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `navigation:Query`                          | `false`        | Query for navigation elements             |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/navigation">
  </demovanilla>
</demo>

## Keyboard

Use `keyboard: { selector: 'object' }` or `keyboard: { selector: Query }` to enable keyboard navigation on focus.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `keyboard.selector:Boolean`                          | `false`        | Elements that triggers the events            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/usability-keyboard">
  </demovanilla>
</demo>

## Block

You can block the activations with the class `.xt-block` on elements.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-block`                     | `NOT POSSIBLE`                | Block scroll on element            |

</div>

## Disable

If you want to **disable the component** use the `options.disabled`, besides that you can add the class `.xt-toggle-disabled` to `object`, `elements` and `targets` to disable them before javascript initialization.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |

</div>

Example of **component disabled on desktop** with [match media](/components/core/toggle/api#match-media).

<demo>
  <demovanilla src="vanilla/components/core/toggle/disable">
  </demovanilla>
</demo>

