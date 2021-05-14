---
type: "Components"
category: "Interaction"
parent: "Overlay"
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

Example of **component disabled on desktop** with [match media](/components/overlay/api#match-media).

Disable and style disabled.

<demo>
  <demoinline src="demos/components/overlay/disabled">
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
  <demoinline src="demos/components/overlay/matches">
  </demoinline>
</demo>

## Unclosable

You can have an **unclosable overlay** with `closeDeep: false` and `closeInside: false`.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/overlay/unclosable">
  </div>
</demo>

## Other Content

You can put **any content** inside, here are some examples.

<demo>
  <demoinline src="demos/components/overlay/other-content">
  </demoinline>
</demo>

## Close fixed

You can have the the close button with `.fixed` to have it **fixed inside the overlay**.

[[notePrimary]]
| Do not transition margin on `.fixed` because of margin positioning, **transition the content instead**.

<demo>
  <demoinline src="demos/components/overlay/close-fixed">
  </demoinline>
</demo>

## Close outside

Use this code to create a **close outside**.

<demo>
  <demoinline src="demos/components/overlay/closeoutside">
  </demoinline>
</demo>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `appendTo:Query`                          | `'body'`        | Append targets to Node on activation            |
| Option                  | `zIndex:Object|false`                 | `{ targets: { start: 500, factor: 0 } }`     | Set `z-index` on activation, can be `elements`, `targets`, `elementsInner`, `targetsInner`          |
| Option                  | `focusLimit:Boolean`                          | `true`        | Limit focus on activation            |

</div>
