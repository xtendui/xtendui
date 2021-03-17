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
| Option                  | `classBefore:String`                          | `direction-before`        | Class name for left direction activation            |
| Option                  | `classAfter:String`                          | `direction-after`        | Class name for right direction activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

You can set initial activation by adding `in-toggle` to the **elements** or **targets**.

<demo>
  <demovanilla src="vanilla/components/core/toggle/class">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/class-custom">
  </demovanilla>
</demo>

Additionally on component initialization the class `.xt-toggle-init` gets added to the **object**.

## Quantity

You can specify `min` and `max` concurrent activations. The `min` option is fulfilled on initialization, the `max` options deactivates the first activated when max is reached.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min:Number`                          | `0`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |
| Option                  | `autoDisable:Boolean`                          | `true`        | Disable automatically when cannot be activated due to `min` and `max` values             |

</div>

[[notePrimary]]
| `data-xt-group` additional elements aren't counted for min and max.

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
| Option                  | `eventLimit:Query`                          | `'.event-limit'`        | Limit on and off events within selector            |
| Option                  | `closeAuto:Boolean`                          | `false`        | Close automatically on window `closeauto.trigger.xt` event            |
| Option                  | `closeDeep:Query`                          | `false`        | Query Node inside to close on click            |
| Option                  | `closeInside:Query`                          | `false`        | Query Node inside to close on click, no nested Nodes            |
| Option                  | `closeOutside:Query`                          | `false`        | Query Node outside to close on click            |
| Option                  | `preventEvent:Boolean`                          | `false`        | Prevent interaction until activated depending on `on` and `off` events (second click or mouseenter)            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/event">
  </demovanilla>
</demo>

You can have **element's link** and **other events** that trigger after toggle with `preventEvent: true`.

If the toggle is on `"on": "mouseenter"` or `"on": "mousehover"` the link gets activated on the second touch event on touch devices.

<demo>
  <demovanilla src="vanilla/components/core/toggle/prevent-event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/prevent-event-hover">
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

## Disabled

If you want to **disable the component** use the `options.disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |

</div>

Example of **component disabled on desktop** with [match media](/components/core/toggle/api#match-media).

Disable and reset styles accordingly.

<demo>
  <demovanilla src="vanilla/components/core/toggle/disable">
  </demovanilla>
</demo>


## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `appendTo:Query`                          | `false`        | Append targets to Node on activation            |
| Option                  | `classHtml:String`                          | `false`        | Class to add to html element on activation            |
| Option                  | `zIndex:Object|Boolean`                 | `false`     | Set `z-index` on activation, can be one or more objects ex: `zIndex: { targets: { start: 600, factor: -1 } },` can be `elements`, `targets`, `elementsInner`, `targetsInner`          |

</div>
