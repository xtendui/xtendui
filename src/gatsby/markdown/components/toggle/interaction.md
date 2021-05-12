---
type: "Components"
category: "Interaction"
parent: "Toggle"
title: "Interaction"
date: "2010-10-10"
---

## Elements

You can specify `elements` that listens to event for activation, and `targets` that gets activated.

The query is inside `object`, only when specifying **elements and targets with `id`** the query is on all the `document`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `':scope > a, :scope > button, :scope > .xt-toggle-item'`        | Elements query            |
| Option                  | `targets:Query`                          | `':scope > .xt-toggle, :scope > .xt-toggle-item > .xt-toggle'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `':scope > a, :scope > button'`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     |
| Option                  | `exclude:Query`                          | `false`        | **Exclude elements and targets** if they matches the query           |

</div>

## Group

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated **targets**.

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
  <demoinline src="demos/components/toggle/usage-multiple-group">
  </demoinline>
</demo>

You can **disable same group elements activation** with the option `groupElements: false`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `groupElements:Boolean`                          | `true`        | Elements activation as group |     

</div>

<demo>
  <demoinline src="demos/components/toggle/usage-multiple-nogroupelements">
  </demoinline>
  <demoinline src="demos/components/toggle/usage-unique-nogroupelements">
  </demoinline>
</demo>

## Class

You can [style and animate](/components/toggle/animation#animation) **class names** used by the component.

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
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

You can set initial activation by adding `on` to the **elements** or **targets**, class activation has precedence over automatic activation of `min` and `max`.

[[notePrimary]]
| If initial activation is on a **target with multiple groups** it activates elements with **at least one of the groups** and in DOM order.

<demo>
  <demoinline src="demos/components/toggle/class">
  </demoinline>
  <demoinline src="demos/components/toggle/class-custom">
  </demoinline>
</demo>

Additionally on component initialization the class `.xt-toggle-init` gets added to the **object**.

## Quantity

You can specify `min` and `max` concurrent activations. The `min` option is fulfilled on initialization, the `max` options deactivates the first activated when max is reached.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min:Number`                          | `0`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |

</div>

[[notePrimary]]
| `data-xt-group` additional elements aren't counted for min and max.

<demo>
  <demoinline src="demos/components/toggle/quantity">
  </demoinline>
</demo>

## Event

You can specify **on** and **off** events for the toggle.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                          | `'click'`        | Event to **listen for activation**            |
| Option                  | `off:String`                          | `'click'`        | Event to **listen for deactivation**            |

</div>

<demo>
  <demoinline src="demos/components/toggle/event">
  </demoinline>
</demo>

You can have **links on elements on activation** with `preventEvent: true`, `on` event will be prevented if not already activated.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `preventEvent:Boolean`                          | `false`        | **Prevent links on elements or other interactions** until activated.            |

</div>

<demo>
  <demoinline src="demos/components/toggle/prevent-event">
  </demoinline>
  <demoinline src="demos/components/toggle/prevent-event-hover">
  </demoinline>
</demo>

There some other event options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `eventLimit:Query`                          | `'.xt-event-limit'`        | **Block on and off events** inside selector            |
| Option                  | `openauto:Boolean`                          | `false`        | Trigger the event `openauto.trigger.xt` **inside elements or targets** to automatically activate `openauto: true`            |
| Option                  | `closeauto:Boolean`                          | `false`        | Trigger the event `closeauto.trigger.xt` **on window** to automatically deactivate **current activation** if `closeauto: true`            |
| Option                  | `closeDeep:Query`                          | `false`        | Query Node **inside elements or targets** to close on click also if nested Nodes            |
| Option                  | `closeInside:Query`                          | `false`        | Query Node **inside elements or targets** and listen on click events to automatically deactivate (no nested events)            |
| Option                  | `closeOutside:Query`                          | `false`        | Query Node **on document** and listen on click events to automatically deactivate (automatically excludes click inside **elements and targets**)            |

</div>

## Hash

You can link the activation in the url hash, hash activation has precedence over class activation.

Hash attribute `data-xt-hash` can be on **elements** or **targets**, also hash activates on hash location change.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hash:String|false`                          | `[data-xt-hash]`        | Link activation in location hash using elements and targets attribute `hash` value            |

</div>

Try the demo [on a new page](/demos/components/toggle/hash#demo--toggle-hash-group-1).

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/toggle/hash">
  </div>
</demo>

## Navigation and Loop

You can add navigation with `navigation: '[data-xt-nav]'` option, then with `[data-xt-nav="value"]` to set the amount to add (`+1`) or remove (`-1`) to the current activation index.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `navigation:Query`                          | `false`        | Query for navigation elements             |

</div>

You can make the **activation loop** with `loop: true`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `loop:Boolean`                          | `false`        | Loop activation            |	

</div>

<demo>
  <demoinline src="demos/components/toggle/navigation">
  </demoinline>
</demo>

## Jump

Use `jump: true` to enable clicking on a **target** to jump to them.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `jump:Boolean`                          | `false`        | Clicking on targets triggers activation            |

</div>

<demo>
  <demoinline src="demos/components/toggle/jump">
  </demoinline>
</demo>

## Auto

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |
| Option                  | `auto.pause:Query`                          | `'a, button'`        | Query inside `object` that pause automatic on mouseenter            |
| Option                  | `auto.loop:Boolean`                          | `true`        | Loop activation beyond start and end            |

</div>

[[notePrimary]]
| Auto doesn't run if the toggle is `display: none`. Start it manually when visible using [toggle events](/components/toggle/api#trigger).

<demo>
  <demoinline src="demos/components/toggle/auto">
  </demoinline>
</demo>

Use the [api](/components/slider/api#listen) and listen to events to make auto progress indicators.

<demo>
  <demoinline src="demos/components/toggle/progress">
  </demoinline>
</demo>

## Class html

See [overlay class html](/components/toggle/interaction#class-html) for more info.
