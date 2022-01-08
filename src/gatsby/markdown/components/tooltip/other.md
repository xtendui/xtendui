---
type: "Components"
category: "Toggle"
parent: "Tooltip"
title: "Other"
date: "2005-10-10"
---

## Accessibility

This components follows A11y standards so **aria attributes and keyboard interactions are managed automatically**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `a11y:Object\|false`                          | `<Object>`        | Aria options            |
| Option                  | `a11y.role:String\|false`                          | `'tooltip'`        | Inject `role` and related attributes, can be `'popup'`, `'dialog'`, `'tooltip'`, `'carousel'`, also if has container and targets and no divs between `'tablist'`, `'menu'`, `'listbox'`            |
| Option                  | `a11y.labelElements:Boolean`                          | `true`        | Inject `aria-labelledby` attributes on elements (linking to targets)            |
| Option                  | `a11y.labelTargets:Boolean`                          | `false`        | Inject `aria-labelledby` attributes on targets (linking to elements)            |
| Option                  | `a11y.controls:Boolean`                          | `false`        | Inject `aria-controls` attributes            |
| Option                  | `a11y.selected:Boolean`                          | `false`        | Inject `aria-selected` attributes            |
| Option                  | `a11y.expanded:Boolean`                          | `false`        | Inject `aria-expanded` attributes            |
| Option                  | `a11y.live:Boolean`                          | `true`        | Inject `aria-live` attributes on auto            |
| Option                  | `a11y.disabled:Boolean`                          | `true`        | Inject `aria-disabled` attributes on enable/disable           |
| Option                  | `a11y.keyboard:Boolean`                          | `true`        | Automatic keyboard **next**, **previous** and **exit** interactions           |
| Option                  | `a11y.vertical:Boolean`                          | `false`        | **Vertical arrows** instead of **horizontal** for keyboard events           |
| Option                  | `a11y.items:String\|false`                          | `false`        | Navigate activated target with arrows and search when typing           |

</div>

> **Do not rely/use aria attributes**, they are generated and they can change anytime.

## Disabled and Nested

If you want to **disable the component** use the `options.disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |
| Option                  | `disableDeactivate:Boolean`                              | `true`                     | Deactivate automatically on disable and destroy           |

</div>

With nested selectors change the `elements` and `targets` query.

Example of **component disabled on desktop** with [match media](/components/tooltip/api#match-media).

<demo>
  <demoinline src="demos/components/tooltip/disabled">
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
  <demoinline src="demos/components/tooltip/matches">
  </demoinline>
</demo>

## Backdrop

Use `<div class="xt-backdrop z-below bg-gray-800 opacity-25"></div>` inside `.xt-tooltip` to add a customizzable backdrop.

Use `on:z-tooltip` to have the button above the backdrop.

<demo>
  <demoinline src="demos/components/tooltip/backdrop">
  </demoinline>
</demo>

## Zindex

On sequential activation you can **automatically set zIndex of activated elements and targets**.

It's better to keep the start value like [the css one](https://github.com/xtendui/xtendui/blob/beta/tailwind.preset.js), but you can change the **factor on activation**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `zIndex:Object\|false`                 | `{ targets: { start: 500, factor: -1 } }`     | Set `z-index` on activation, can be `elements`, `targets`, `elementsInner`, `targetsInner`          |

</div>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `visibleReinit:Boolean`                          | `false`        | Reinit when `self.container` becomes visible with `display` only one time and only if not already visible            |

</div>
