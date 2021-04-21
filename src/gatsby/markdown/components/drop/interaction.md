---
type: "Components"
category: "Interaction"
parent: "Drop"
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

You can set initial activation by adding `on` to the **elements** or **targets**.

Additionally on component initialization the class `.xt-drop-init` gets added to the **object**.

## Hash

See [toggle hash](/components/toggle/interaction#hash) for more informations.

You can link the activation in the url hash, hash activation has precedence over class activation.

Hash attribute `data-xt-hash` can be on **elements** or **targets**, also hash activates on hash location change.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hash:String|false`                          | `[data-xt-hash]`        | Link activation in location hash using elements and targets attribute `hash` value            |

</div>

## Event

See [toggle event](/components/toggle/interaction#event) for more informations.

You can specify **on** and **off** events for the interactions.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                              | `'click'`                     | Event to **listen for activation**           |
| Option                  | `off:String`                             | `'click'`                       | Event to **listen for deactivation**          |

</div>

[[notePrimary]]
| When using `mouse` events use only [multiple mode](/components/drop#usage-multiple) **when you want to interact with the targets**.

<demo>
  <demoinline src="demos/components/drop/event">
  </demoinline>
</demo>

You can have **links on elements on activation** with `preventEvent: true`, `on` event will be prevented if not already activated.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `preventEvent:Boolean`                          | `false`        | **Prevent links on elements or other interactions** until activated.            |

</div>

<demo>
  <demoinline src="demos/components/drop/prevent-event">
  </demoinline>
  <demoinline src="demos/components/drop/prevent-event-hover">
  </demoinline>
</demo>

There some other event options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `eventLimit:Query`                          | `'.xt-event-limit, .xt-drop'`        | **Block on and off events** inside selector            |
| Option                  | `openAuto:Boolean`                          | `false`        | Trigger the event `openauto.trigger.xt` **inside elements or targets** to automatically activate `openAuto: true`            |
| Option                  | `closeAuto:Boolean`                          | `true`        | Trigger the event `closeauto.trigger.xt` **on window** to automatically deactivate **current activation** if `closeAuto: true`            |
| Option                  | `closeDeep:Query`                          | `'.xt-dismiss'`        | Query Node **inside elements or targets** to close on click also if nested Nodes            |
| Option                  | `closeInside:Query`                          | `'.xt-backdrop'`        | Query Node **inside elements or targets** and listen on click events to automatically deactivate (no click inside)            |
| Option                  | `closeOutside:Query`                          | `'body'`        | Query Node **on document** and listen on click events to automatically deactivate (automatically excludes click inside **elements and targets**)            |

</div>

## Backdrop

Use `<div class="xt-backdrop bg-black opacity-25"></div>` inside `.xt-drop` to add a customizzable backdrop.

Use  `on:z-drop` to have the button above the backdrop.

<demo>
  <demoinline src="demos/components/drop/backdrop">
  </demoinline>
</demo>
