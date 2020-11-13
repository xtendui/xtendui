---
type: "Components"
category: "Core"
parent: "Drop"
title: "Other"
date: "2005-10-10"
---

## Disable

You can disable styles and javascript using `.drop-disable`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.drop-disable`       | `drop-disable !important`                | `responsive`                | Reset drop styles and javascript            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/drop/disable">
  </demovanilla>
</demo>

## Popperjs

You can **pass an option** to initialize [popperjs](https://popper.js.org/docs/v2/) with different options.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `popperjs:Object|Boolean`                          | `true`        | Options for popperjs or `false` to disable            |

</div>

If you need to get the **popperjs instance** use `Xt.dataStorage.get(target, 'xtdropPopperInstance')`.

## Other

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `closeAuto:Boolean`                          | `true`        | Close automatically on `closeauto.trigger.xt` event            |
| Option                  | `closeOutside:Query`                          | `'body'`        | Query Node outside to close on click            |
| Option                  | `closeInside:Query`                          | `'.drop-dismiss, .backdrop, .btn-close'`        | Query Node inside to close on click            |

</div>
