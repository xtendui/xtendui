---
type: "Components"
category: "Interaction"
parent: "Drop"
title: "Other"
date: "2005-10-10"
---

## Disabled

If you want to **disable the component** use the `options.disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |

</div>

Example of **component disabled on desktop** with [match media](/components/drop/api#match-media).

Disable and style disabled.

<demo>
  <demoinline src="demos/components/drop/disabled">
  </demoinline>
</demo>

## Match Media

You can add **additional options** that gets added on **match media query**. You can use different queries with different and nested options.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `matches:Object`                              | `false`                     | Add additional options on match media query           |

</div>

<demo>
  <demoinline src="demos/components/drop/matches">
  </demoinline>
</demo>

## Backdrop

Use `<div class="xt-backdrop pointer-events-none bg-black opacity-25"></div>` inside `.xt-drop` to add a customizzable backdrop.

Use  `on:z-drop` to have the button above the backdrop.

<demo>
  <demoinline src="demos/components/drop/backdrop">
  </demoinline>
</demo>

## Other Content

You can put **any content** inside, here are some examples.

<demo>
  <demoinline src="demos/components/drop/other-content">
  </demoinline>
</demo>

## Reset to Current

Use this code to create a **drop that resets to current** automatically on deactivation.

<demo>
  <demoinline src="demos/components/drop/reset-to-current">
  </demoinline>
</demo>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `zIndex:Object|false`                 | `{ targets: { start: 200, factor: -1 } }`     | Set `z-index` on activation, can be `elements`, `targets`, `elementsInner`, `targetsInner`          |

</div>
