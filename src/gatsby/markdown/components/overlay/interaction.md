---
type: "Components"
category: "Interaction"
parent: "Overlay"
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

Additionally on component initialization the class `.xt-overlay-init` gets added to the **object**.

## Hash

You can link the activation in the url hash, hash activation has precedence over class activation.

Hash attribute `data-xt-hash` can be on **elements** or **targets**, also hash activates on hash location change.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hash:String|false`                          | `[data-xt-hash]`        | Link activation in location hash using elements and targets attribute `hash` value            |

</div>

Try the demo [on a new page](/demos/components/overlay/hash#demo--overlay-hash).

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/overlay/hash">
  </div>
</demo>

## Event

See [toggle event](/components/toggle/interaction#event) for more informations.

You can specify **on** and **off** events for the interactions.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                          | `'click'`        | Event to **listen for activation**            |
| Option                  | `off:String`                          | `'click'`        | Event to **listen for deactivation**            |

</div>

You can have an **unclosable overlay** with `closeDeep: false` and `closeInside: false`.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/overlay/event">
  </div>
</demo>

There some other event options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `eventLimit:Query`                          | `'.xt-event-limit, .xt-overlay'`        | **Block on and off events** inside selector            |
| Option                  | `openAuto:Boolean`                          | `true`        | Trigger the event `openauto.trigger.xt` **inside elements or targets** to automatically activate `openAuto: true`            |
| Option                  | `closeAuto:Boolean`                          | `true`        | Trigger the event `closeauto.trigger.xt` **on window** to automatically deactivate **current activation** if `closeAuto: true`            |
| Option                  | `closeDeep:Query`                          | `'.xt-dismiss'`        | Query Node **inside elements or targets** to close on click also if nested Nodes            |
| Option                  | `closeInside:Query`                          | `'.xt-backdrop, .xt-overlay, .xt-overlay-container`        | Query Node **inside elements or targets** and listen on click events to automatically deactivate (no nested events)            |
| Option                  | `closeOutside:Query`                          | `false`        | Query Node **on document** and listen on click events to automatically deactivate (automatically excludes click inside **elements and targets**)            |

</div>

## Class html

You can set **html classes on activation**, remember to keep default `classHtml` classes.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `classHtml:String`                          | `'xt-scrollbar-overlay`        | Add class to `html` on activation            |

</div>

<demo>
  <demoinline src="demos/components/overlay/class-html">
  </demoinline>
</demo>
