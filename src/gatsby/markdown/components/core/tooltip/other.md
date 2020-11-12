---
type: "Components"
category: "Core"
parent: "Tooltip"
title: "Other"
date: "2005-10-10"
---

## Disable

You can disable styles and javascript using `.tooltip-disable`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.tooltip-disable`       | `tooltip-disable !important`                | `responsive`                | Reset tooltip styles and javascript            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/tooltip/disable">
  </demovanilla>
</demo>

## Popperjs

You can **pass an option** to initialize [popperjs](https://popper.js.org/docs/v2/) with different options.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `popperjs:Object`                          | `null`        | Options for popperjs            |

</div>

If you need to get the **popperjs instance** use `Xt.dataStorage.get(target, 'xttooltipPopperInstance')`.

## Other

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `closeAuto:Boolean`                          | `true`        | Close automatically on `closeauto.trigger.xt` event            |
| Option                  | `closeOutside:Query`                          | `'body'`        | Query Node outside to close on click            |
| Option                  | `closeInside:Query`                          | `'.tooltip-dismiss, .backdrop, .btn-close'`        | Query Node inside to close on click            |

</div>
