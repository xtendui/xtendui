---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Other"
date: "2005-10-10"
---

## Disable

You can disable styles and javascript using `.overlay-disable`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.overlay-disable`       | `overlay-disable !important`                | `responsive`                | Reset overlay styles and javascript            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/overlay/disable">
  </demovanilla>
</demo>

## Close fixed

You can have the `.btn-close` with `.fixed.z-last.mr-2` and moved inside `.overlay` to have it **fixed inside the overlay**.

<demo>
  <demovanilla src="vanilla/components/core/overlay/close-fixed">
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
