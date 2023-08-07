---
type: "Components"
category: "Toggle"
parent: "Drop"
title: "Interaction"
date: "2010-10-10"
---

## Elements

You can specify `elements` that listens to event for activation, and `targets` that gets activated.

The query is inside `container`, only when specifying **elements and targets with `id`** the query is on all the `document`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `'[data-xt-drop-element]'`        | Elements query            |
| Option                  | `targets:Query`                          | `'[data-xt-drop-target]'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query, they **reflect elements activation**            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query, they **reflect targets activation**           |
| Option                  | `exclude:Query`                          | `false`        | **Exclude elements and targets** if they matches the query           |

</div>

See [slider elements exclude](/components/slider/interaction#elements) for demo.

## Group

If you need to toggle **multiple elements or targets** with the **same element or target** assign `data-xt-group` to **elements** and the associated **targets**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Example                   | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- | ----------------------------- |
| Attribute                  | `data-xt-group`       | `data-xt-group="my-group,another-group"`   |  Group or multiple groups on elements and targets            |

</div>

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `groupSeparator:String`                          | `','`        | Separator for multiple groups |

</div>

<demo>
  <demoinline src="demos/components/drop/multiple-group">
  </demoinline>
</demo>

You can **disable same group elements activation** with the option `groupElements: false`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `groupElements:Boolean`                          | `true`        | Elements activation as group |     

</div>

## Class

See [toggle class](/components/toggle/interaction#class) for more info.

You can [style and animate](/components/drop/animation#animation) **class names** used by the component.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `on`        | Class name for **activation**            |
| Option                  | `classIn:String`                          | `in`        | Class name for **in animation**            |
| Option                  | `classOut:String`                          | `out`        | Class name for **out animation**             |
| Option                  | `classDone:String`                          | `done`        | Class name for **in animation** done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for **initialization**            |
| Option                  | `classBefore:String`                          | `dir-before`        | Class name for **before** direction activation            |
| Option                  | `classAfter:String`                          | `dir-after`        | Class name for **after** direction activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation e.g.: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

You can set initial activation by adding `on` to the **elements** or **targets**.

Additionally on component initialization the attribute `[data-xt-drop-init]` gets added to the **object**.

## Quantity

See [toggle quantity](/components/toggle/interaction#quantity) for more info.

You can specify `min` and `max` concurrent activations. The `min` option is fulfilled on initialization, the `max` options deactivates the first activated when max is reached.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min:Number`                          | `0`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |

</div>

## Event

You can specify **on** and **off** events for the interactions.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String\|false`                              | `'click'`                     | List of space separated events to **listen for activation**           |
| Option                  | `off:String\|false`                             | `'click'`                       | List of space separated events to **listen for deactivation**          |
| Option                  | `mouseParent:String\|Boolean`                             | `false`                       | For mouse events use element `parentNode` or `closest` query           |

</div>

> When using `'mouseenter', 'mouseleave', 'mousehover', 'mouseout'` and you want to interact with the targets you need to use `mouseParent: true` or `mouseParent: '<Query>'` to **attach mouse events on a element's parent node that contains also the target node**. Non mouse events are attached on elements as usual.

> For accessibility purpose instead of `on: 'mouseenter'` use `on: 'mouseenter focus'` to be navigable with keyboard.

<demo>
  <demoinline src="demos/components/drop/event">
  </demoinline>
</demo>

If you have **links on elements** use `preventEvent: true`, and the **link will trigger only on the second interaction** (the first it the `on` event), works with mouse click, touch press and keyboard enter.

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
| Option                  | `openauto:Boolean`                          | `false`        | Trigger the event `openauto.trigger.xt` **inside elements or targets** to automatically activate `openauto: true`            |
| Option                  | `closeauto:Boolean`                          | `true`        | Trigger the event `closeauto.trigger.xt` **on window** to automatically deactivate **current activation** if `closeauto: true`            |
| Option                  | `closeDeep:Query`                          | `'.xt-dismiss'`        | Query Node **inside elements or targets** to deactivate on click (also nested, can be a inner node)            |
| Option                  | `closeInside:Query`                          | `'.xt-backdrop'`        | Query Node **inside elements or targets** to deactivate on click (no click inside)            |
| Option                  | `closeOutside:Query`                          | `'body'`        | Query Node **on document** to deactivate on click (automatically excludes nested inside **elements and targets**)            |

</div>

If you want a **inner node that trigger off on `click`** use `.xt-dismiss`.

<demo>
  <demoinline src="demos/components/drop/dismiss">
  </demoinline>
</demo>

## Hash

See [toggle hash](/components/toggle/interaction#hash) for more info.

You can **link the activation in the url hash** to be linkable and more usable, hash activation has precedence over class activation.

Hash attribute `data-xt-hash` can be on **elements** or **targets**, also hash activates on hash location change.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hash:String\|false`                          | `[data-xt-hash]`        | Link activation in location hash using elements and targets attribute `hash` value            |

</div>

## Navigation and Loop

See [toggle navigation and loop](/components/toggle/interaction#navigation-and-loop) for more info.

## Class Body

See [overlay class body](/components/overlay/interaction#class-body) for more info.

## Scrollto

See [scrollto toggle](/components/scrollto#toggle-integration) for more info.
