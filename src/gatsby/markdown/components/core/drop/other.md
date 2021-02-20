---
type: "Components"
category: "Core"
parent: "Drop"
title: "Other"
date: "2005-10-10"
---

## Other Content

You can put **any content** inside, here are some examples.

<demo>
  <demovanilla src="vanilla/components/core/drop/other-content">
  </demovanilla>
</demo>

## Popperjs

You can **pass an option** to [popperjs](https://popper.js.org/docs/v2/) for initialization.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `popperjs:Object|Boolean`                          | `true`        | Options for popperjs or `false` to disable            |

</div>

If you need to get the **popperjs instance** use `Xt.dataStorage.get(target, 'PopperInstance')`, for example when you want to `.update()` it.

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `closeAuto:Boolean`                          | `true`        | Close automatically on `closeauto.trigger.xt` event            |
| Option                  | `closeDeep:Query`                          | `'.xt-dismiss'`        | Query Node inside to close on click also if nested Nodes            |
| Option                  | `closeInside:Query`                          | `false`        | Query Node inside to close on click no nested Nodes            |
| Option                  | `closeOutside:Query`                          | `'body'`        | Query Node outside to close on click            |

</div>
