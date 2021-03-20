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
  <demoinline src="demos/components/core/overlay/disable">
  </demoinline>
</demo>

## Other Content

You can put **any content** inside, here are some examples.

<demo>
  <demoinline src="demos/components/core/overlay/other-content">
  </demoinline>
</demo>

## Close fixed

You can have the the close button with `.fixed` to have it **fixed inside the overlay**.

[[noteDefault]]
| Do not transition margin on`.fixed` because `.xt-scrollbar-overlay.xt-overlay .fixed` gets automatic `margin-right` to prevent moving with scrollbars.

<demo>
  <demoinline src="demos/components/core/overlay/close-fixed">
  </demoinline>
</demo>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `focusLimit:Boolean`                          | `true`        | Limit focus on activation            |

</div>
