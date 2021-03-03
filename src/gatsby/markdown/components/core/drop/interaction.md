---
type: "Components"
category: "Core"
parent: "Drop"
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
| Option                  | `class:String`                          | `in in-drop`        | Class name for activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

You can set initial activation by adding `in-drop` to the **elements** or **targets**.

Additionally on component initialization the class `.xt-drop-init` gets added to the **object**.

## Event

You can specify **on** and **off** events for the drop. Fore example `on: 'mouseenter'` `off: 'mouseleave'`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                              | `'click'`                     | Set event to listen for activation           |
| Option                  | `off:String`                             | `'click'`                       | Set event to listen for deactivation if not present `options.on` deactivate when already activated          |
| Option                  | `eventLimit:Query`                          | `'.event-limit, .xt-drop'`        | Limit on and off events within selector            |
| Option                  | `closeAuto:Boolean`                          | `true`        | Close automatically on `closeauto.trigger.xt` event            |
| Option                  | `closeDeep:Query`                          | `'.xt-dismiss'`        | Query Node inside to close on click also if nested Nodes            |
| Option                  | `closeInside:Query`                          | `'.xt-backdrop'`        | Query Node inside to close on click, no nested Nodes            |
| Option                  | `closeOutside:Query`                          | `'body'`        | Query Node outside to close on click            |
| Option                  | `preventEvent:Boolean`                          | `false`        | Prevent interaction until activated depending on `on` and `off` events (second click or mouseenter, use touch device to see it in action)            |

</div>

[[notePrimary]]
| When using `mouse` events use only [multiple mode](/components/core/drop#usage-multiple) **when you want to interact with the targets**.

<demo>
  <demovanilla src="vanilla/components/core/drop/event">
  </demovanilla>
</demo>

You can have **element's link** and **click events** prevented when the drop opens with `preventEvent: true`, they will trigger only if the drop is already opened.

<demo>
  <demovanilla src="vanilla/components/core/drop/prevent-event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/prevent-event-hover">
  </demovanilla>
</demo>

## Backdrop

Use `<div class="xt-backdrop bg-black opacity-25"></div>` inside `.xt-drop` to add a customizzable backdrop. Use the class `active:z-drop` to have the button above the backdrop.

<demo>
  <demovanilla src="vanilla/components/core/drop/backdrop">
  </demovanilla>
</demo>
