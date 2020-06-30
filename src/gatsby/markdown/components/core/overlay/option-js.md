---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Option Js"
date: "2019-11-01"
---

[[notePrimary]]
| Overlay uses toggle for logic, refer to [toggle's option](/core/toggle/option-js).

## Class

You can start with toggled elements and targets just by adding **one of the classes** to the **elements** or **targets**.

It's recommended to use `active-overlay` on overlay otherwise the overlay flashes visible on page load.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-overlay`        | Class name for activation            |

</div>

## Class html

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `classHtml:String`                          | `'xt-overlay'`        | Add class to `html` on activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/class-html">
  </demovanilla>
</demo>

## Other

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `autoClose:Boolean`                          | `true`        | Close automatically on `autoclose.trigger.xt` event            |
| Option                  | `closeInside:Query`                          | `'.overlay-dismiss, .btn-close, .backdrop'`        | Query Node inside to close on click            |
| Option                  | `appendTo:Query`                          | `'body'`        | Append targets to Node on activation            |
| Option                  | `scrollbar:Boolean`                          | `true`        | Hide body scrollbars on activation            |
| Option                  | `focusLimit:Boolean`                          | `true`        | Limit focus on activation            |

</div>
