---
type: "Components"
category: "Core"
parent: "Drop"
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

Example of **component disabled on desktop** with [match media](/components/core/drop/api#match-media).

Disable and reset styles accordingly.

<demo>
  <demovanilla src="vanilla/components/core/drop/disable">
  </demovanilla>
</demo>

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
