---
type: "Components"
category: "Interaction"
parent: "Tooltip"
title: "Interaction"
date: "2010-10-10"
---

## Quantity

See [toggle quantity](/components/toggle/interaction#quantity) for more informations.

You can specify `min` and `max` concurrent activations. The `min` option is fulfilled on initialization, the `max` options deactivates the first activated when max is reached.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min:Number`                          | `0`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |

</div>

## Class

See [toggle class](/components/toggle/interaction#class) for more informations.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `classSkip:Object`                          | `{ elements: true, elementsInner: true }`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

You can set initial activation by adding `on` to the **elements** or **targets**.

Additionally on component initialization the class `.xt-tooltip-init` gets added to the **object**.

## Hash

See [toggle hash](/components/toggle/interaction#hash) for more informations.


You can link the activation in the url hash, hash activation has precedence over class activation.

Hash attribute `data-xt-hash` can be on **elements** or **targets**, also hash activates on hash location change.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hash:Boolean`                          | `false`        | Link activation in location hash using `data-xt-hash` value            |

</div>

## Event

See [toggle event](/components/toggle/interaction#event) for more informations.

You can specify **on** and **off** events for the interactions.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                              | `'mouseenter'`                     | Set event to listen for activation           |
| Option                  | `off:String`                             | `'mouseleave'`                       | Set event to listen for deactivation if not present `options.on` deactivate when already activated          |
| Option                  | `eventLimit:Query`                          | `'.xt-event-limit, .xt-tooltip'`        | Limit on and off events within selector            |
| Option                  | `closeAuto:Boolean`                          | `true`        | Close automatically on window `closeauto.trigger.xt` event            |
| Option                  | `closeDeep:Query`                          | `'.xt-dismiss'`        | Query Node inside to close on click also if nested Nodes            |
| Option                  | `closeInside:Query`                          | `'.xt-backdrop'`        | Query Node inside to close on click, no nested Nodes            |
| Option                  | `closeOutside:Query`                          | `'body'`        | Query Node outside to close on click            |
| Option                  | `preventEvent:Boolean`                          | `false`        | Prevent interaction until activated depending on `on` and `off` events            |

</div>

[[notePrimary]]
| When using `mouse` events use only [multiple mode](/components/drop#usage-multiple) **when you want to interact with the targets**.

<demo>
  <demoinline src="demos/components/tooltip/event">
  </demoinline>
</demo>

You can have **links on elements on activation** with `preventEvent: true`, `on` event will be prevented if not already activated.

<demo>
  <demoinline src="demos/components/tooltip/prevent-event">
  </demoinline>
  <demoinline src="demos/components/tooltip/prevent-event-click">
  </demoinline>
</demo>

## Backdrop

Use `<div class="xt-backdrop bg-black opacity-25"></div>` inside `.xt-tooltip` to add a customizzable backdrop.

Use `on:z-tooltip` to have the button above the backdrop.

<demo>
  <demoinline src="demos/components/tooltip/backdrop">
  </demoinline>
</demo>

## Swap

Use this code to create a **tooltip swap**.

<demo>
  <demoinline src="demos/components/tooltip/swap-click">
  </demoinline>
</demo>

Use this code to create a **tooltip swap toggle**.

<demo>
  <demoinline src="demos/components/tooltip/swap-toggle">
  </demoinline>
</demo>
