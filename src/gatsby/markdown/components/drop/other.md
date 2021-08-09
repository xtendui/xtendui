---
type: "Components"
category: "Toggle"
parent: "Drop"
title: "Other"
date: "2005-10-10"
---

## Disabled and Nested

If you want to **disable the component** use the `options.disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |
| Option                  | `disableDeactivate:Boolean`                              | `true`                     | Deactivate automatically on disable           |

</div>

With nested selectors change the `elements` and `targets` query.

Example of **component disabled on desktop** with [match media](/components/drop/api#match-media).

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

Use `<div class="xt-backdrop z-below bg-black opacity-25"></div>` inside `.xt-drop` to add a customizzable backdrop.

Use `on:z-drop` to have the button above the backdrop.

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

## Zindex

On sequential activation you can **automatically set zIndex of activated elements and targets**.

It's better to keep the start value like [the css one](https://github.com/xtendui/xtendui/blob/beta/tailwind.preset.js), but you can change the **factor on activation**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `zIndex:Object|false`                 | `{ targets: { start: 400, factor: -1 } }`     | Set `z-index` on activation, can be `elements`, `targets`, `elementsInner`, `targetsInner`          |

</div>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `visibleReinit:Boolean`                          | `false`        | Reinit when `self.container` becomes visible with `display` only one time and only if not already visible            |

</div>
