---
type: "Components"
category: "Core"
parent: "Drop"
title: "Option Js"
date: "2019-05-05"
---

## Class

You can customize the class names used with the component.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-drop`        | Class name for activation            |
| Option                  | `classIn:String`                          | `in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `out`        | Class name for out animation            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |

</div>

You can start with toggled elements and targets just by adding **one of the initialization classes** to the **elements** or **targets**.

Additionally on component initialization the class `xt-drop` gets added to the **object** (the DOM element you assigned the component).

## Block

You can block the activations with the class `.xt-block` on elements. See the [api demo](/components/core/drop/api#demo)

## Event

You can specify **on** and **off** events for the drop. Fore example `on: 'mouseenter'` `off: 'mouseleave'`. Default is `on: 'click'`.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                              | `'click'`                     | Set event to listen for activation           |
| Option                  | `off:String`                             | `false`                       | Set event to listen for deactivation if not present `options.on` deactivate when already activated          |
| Option                  | `eventLimit:Query`                          | `'.event-limit, .drop-inner'`        | Limit events inside self.object            |
| Option                  | `preventEvent:Boolean`                          | `false`        | Prevent interaction until activated depending on `on` and `off` events (second click or mouseenter)            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/event">
  </demovanilla>
</demo>

## Backdrop

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `backdrop:Boolean`                              | `false`                     | Generate backdrop on targets or on object if no targets           |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/backdrop">
  </demovanilla>
</demo>

## Other

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `closeAuto:Boolean`                          | `true`        | Close automatically on `closeauto.trigger.xt` event            |
| Option                  | `closeOutside:Query`                          | `'body'`        | Query Node outside to close on click            |
| Option                  | `closeInside:Query`                          | `'.drop-dismiss, .backdrop, .btn-close'`        | Query Node inside to close on click            |

</div>
