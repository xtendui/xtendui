---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Option Js"
date: "2019-05-05"
---

## Class

You can customize the classnames used with the component.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-overlay`        | Class name for activation            |
| Option                  | `classIn:String`                          | `in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `out`        | Class name for out animation            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |

</div>

You can start with toggled elements and targets just by adding **one of the activation classes** to the **elements** or **targets**.

Additionally on component initialization the class `xt-overlay` gets added to the object (the DOM element you assigned the component) useful if you want to animate with css on component intialization. `classInitial` and `classInverse` are useful if you want to animate with css depending on initial activation or direction of the activation. For javascript animation you can use the [api properties](/components/core/overlay/api#properties).

## Block

You can block the activations with the class `.xt-block` on elements. See the [api demo](/components/core/overlay/api#demo)

## Class html

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `classHtml:String`                          | `false`        | Add class to `html` on activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/class-html">
  </demovanilla>
</demo>

## Other

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `closeAuto:Boolean`                          | `true`        | Close automatically on `closeauto.trigger.xt` event            |
| Option                  | `closeInside:Query`                          | `'.overlay-dismiss, .btn-close, .backdrop'`        | Query Node inside to close on click            |
| Option                  | `appendTo:Query`                          | `'body'`        | Append targets to Node on activation            |
| Option                  | `scrollbar:Boolean`                          | `true`        | Hide body scrollbars on activation            |
| Option                  | `focusLimit:Boolean`                          | `true`        | Limit focus on activation            |

</div>
