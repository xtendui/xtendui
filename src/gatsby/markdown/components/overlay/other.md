---
type: "Components"
category: "Toggle"
parent: "Overlay"
title: "Other"
date: "2005-10-10"
---

## Accessibility

This components follows A11y standards so **aria attributes and keyboard interactions are managed automatically**.

> For accessibility purpose use an accessible name assigning `[aria-label]` or `[aria-labelledby]` on `.xt-overlay`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `a11y:Object\|false`                          | `<Object>`        | Aria options            |
| Option                  | `a11y.role:String\|false`                          | `'dialog'`        | Inject `role` and related attributes, can be `'popup'`, `'dialog'`, `'tooltip'`, `'carousel'`, also if has container and targets and no divs between `'tablist'`, `'menu'`, `'listbox'`            |
| Option                  | `a11y.labelElements:Boolean`                          | `false`        | Inject `aria-labelledby` attributes on elements (linking to targets)            |
| Option                  | `a11y.labelTargets:Boolean`                          | `false`        | Inject `aria-labelledby` attributes on targets (linking to elements)            |
| Option                  | `a11y.controls:Boolean`                          | `true`        | Inject `aria-controls` attributes            |
| Option                  | `a11y.selected:Boolean`                          | `false`        | Inject `aria-selected` attributes            |
| Option                  | `a11y.expanded:Boolean`                          | `true`        | Inject `aria-expanded` attributes            |
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

Example of **component disabled on desktop** with [match media](/components/overlay/api#match-media).

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
  <div class="gatsby_demo_item" data-iframe="demos/components/overlay/unclosable">
  </div>
</demo>

## Append To

You can **automatically move targets on activation inside the DOM**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `appendTo:Query`                          | `'body'`        | Automatically append targets to Node on activation            |

</div>

## Focus Limit

For accessibility purpose **on activation you can limit the focus inside the current activated targets**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `focusLimit:Boolean`                          | `true`        | Automatically limit focus on activation inside current targets            |
| Option                  | `focusTrap:Object`                          | `{ initialFocus: false, preventScroll: true, allowOutsideClick: true }`        | Options to pass to [Focus Trap](https://github.com/focus-trap/focus-trap)            |

</div>

## Zindex

On sequential activation you can **automatically set zIndex of activated elements and targets**.

It's better to keep the start value like [the css one](https://github.com/xtendui/xtendui/blob/beta/tailwind.preset.js), but you can change the **factor on activation**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `zIndex:Object\|false`                 | `{ targets: { start: 5000, factor: 0 } }`     | Set `z-index` on activation, can be `elements`, `targets`, `elementsInner`, `targetsInner`          |

</div>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `visibleReinit:Boolean`                          | `false`        | Reinit when `self.container` becomes visible with `display` only one time and only if not already visible            |

</div>
