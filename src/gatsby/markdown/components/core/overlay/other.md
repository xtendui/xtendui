---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Other"
date: "2005-10-10"
---

## Close fixed

You can have the `.btn-close` with `.fixed.z-last.mr-2` and moved inside `.overlay-container` to have it **fixed inside the overlay**.

<demo>
  <demovanilla src="vanilla/components/core/overlay/close-fixed">
  </demovanilla>
</demo>

## Other Content

You can put **any content** inside, here are some examples.

<demo>
  <demovanilla src="vanilla/components/core/overlay/other-content">
  </demovanilla>
</demo>

## Other

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `closeAuto:Boolean`                          | `true`        | Close automatically on `closeauto.trigger.xt` event            |
| Option                  | `closeInside:Query`                          | `'.overlay-dismiss, .btn-close, .backdrop'`        | Query Node inside to close on click            |
| Option                  | `appendTo:Query`                          | `'body'`        | Append targets to Node on activation            |
| Option                  | `scrollbar:Boolean`                          | `true`        | Hide body scrollbars on activation            |
| Option                  | `focusLimit:Boolean`                          | `true`        | Limit focus on activation            |

</div>
