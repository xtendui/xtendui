---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Other"
date: "2005-10-10"
---

## Disabled

If you want to **disable the component** use the `options.disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |

</div>

Example of **component disabled on desktop** with [match media](/components/core/overlay/api#match-media).

Disable and reset styles accordingly.

<demo>
  <demovanilla src="vanilla/components/core/overlay/disable">
  </demovanilla>
</demo>

## Other Content

You can put **any content** inside, here are some examples.

<demo>
  <demovanilla src="vanilla/components/core/overlay/other-content">
  </demovanilla>
</demo>

## Close fixed

You can have the `.xt-dismiss` with `.fixed.z-last.mr-2` and moved inside `.xt-overlay-container` to have it **fixed inside the overlay**.

<demo>
  <demovanilla src="vanilla/components/core/overlay/close-fixed">
  </demovanilla>
</demo>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `focusLimit:Boolean`                          | `true`        | Limit focus on activation            |

</div>
