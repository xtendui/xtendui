---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Interaction"
date: "2010-10-10"
---

## Group Elements

You can group elements activation with the option `groupElements: true`. Refer to [toggle group elements](/components/core/toggle/interaction#group-elements).


## Class

You can customize the **class names** used by the component. Refer to [toggle class](/components/core/toggle/interaction#class).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `in in-overlay`        | Class name for activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

You can set initial activation by adding `in-overlay` to the **elements** or **targets**.

Additionally on component initialization the class `.xt-overlay-init` gets added to the **object**.

## Event

You can specify **on** and **off** events for the overlay.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                          | `'click'`        | Activation event to attach to elements            |
| Option                  | `off:String`                          | `'click'`        | Dectivation event to attach to elements            |
| Option                  | `eventLimit:Query`                          | `'.event-limit, .xt-overlay'`        | Limit on and off events within selector            |
| Option                  | `closeAuto:Boolean`                          | `true`        | Close automatically on window `closeauto.trigger.xt` event            |
| Option                  | `closeDeep:Query`                          | `'.xt-dismiss'`        | Query Node inside to close on click also if nested Nodes            |
| Option                  | `closeInside:Query`                          | `'.xt-backdrop, .xt-overlay, .xt-overlay-container`        | Query Node inside to close on click, no nested Nodes            |
| Option                  | `closeOutside:Query`                          | `false`        | Query Node outside to close on click            |

</div>

You can have an **unclosable overlay** with `closeDeep: false` and `closeInside: false`.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/core/overlay/event">
  </div>
</demo>

## Class html

You can set **html classes on activation**, remember to keep default `classHtml` classes.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `classHtml:String`                          | `'xt-scrollbar-overlay`        | Add class to `html` on activation            |

</div>

<demo>
  <demoinline src="demos/components/core/overlay/class-html">
  </demoinline>
</demo>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `appendTo:Query`                          | `'body'`        | Append targets to Node on activation            |

</div>
