---
type: "Components"
category: "Toggle"
parent: "Slider"
title: "Other"
date: "2005-10-10"
---

## Accessibility

This components follows A11y standards so **aria attributes and keyboard interactions are managed automatically**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `a11y:Object\|false`                          | `<Object>`        | Aria options            |
| Option                  | `a11y.role:String\|false`                          | `'carousel'`        | Inject `role` and related attributes, can be `'popup'`, `'dialog'`, `'tooltip'`, `'carousel'`, `'tablist'`, `'menu'`, `'listbox'`            |
| Option                  | `a11y.labelElements:Boolean`                          | `false`        | Inject `aria-labelledby` attributes on elements (linking to targets)            |
| Option                  | `a11y.labelTargets:Boolean`                          | `true`        | Inject `aria-labelledby` attributes on targets (linking to elements)            |
| Option                  | `a11y.controls:Boolean`                          | `true`        | Inject `aria-controls` attributes            |
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

On slider disable/enable the component **automatically add/remove the class `hidden`** to all elements selected with `hideDisable:Query`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |
| Option                  | `disableDeactivate:Boolean`                              | `false`                     | Deactivate automatically on disable and destroy           |
| Option                  | `hideDisable:Query`                          | `'[data-xt-slider-pagination], [data-xt-nav], [data-xt-slider-hide-disabled]'`        | Container query for items to hide on disable              |

</div>

With nested selectors change the `elements` and `targets` query.

Example of **component disabled on desktop** with [match media](/components/slider/api#match-media).

<demo>
  <demoinline src="demos/components/slider/disabled">
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
  <demoinline src="demos/components/slider/matches">
  </demoinline>
</demo>

## Nooverflow

The component automatically disable and apply classes to `dragger` when the slides do not overflow the dragger. Use `nooverflow: false` to disable this behaviour.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `nooverflow:String\|false`                          | `'transform-none justify-center'`        | Classes applied to `dragger` when the slides do not overflow the dragger           |

</div>

<demo>
  <demoinline src="demos/components/slider/nooverflow">
  </demoinline>
  <demoinline src="demos/components/slider/nooverflow-false">
  </demoinline>
</demo>

## Expand

Disable and style expand. (**use narrow screen to see it in action**).

<demo>
  <demoinline src="demos/components/slider/expand">
  </demoinline>
</demo>

## Touch Overflow

Disable and style touch overflow. (**use touch device to see it in action**).

<demo>
  <demoinline src="demos/components/slider/touch-overflow">
  </demoinline>
</demo>

## Media loaded

If you want to animate on image loaded, with `mediaLoaded: true` use the class `.xt-medialoaded` or the js event `medialoaded.xt.slider`.

When you need to reinit the component when the media is loaded and the **width** of the image is calculated with `mediaLoadedReinit: true`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `mediaLoaded:Boolean`                          | `false`        | Add the class `.xt-medialoaded` on img loaded             |
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit the component on img loaded after [Xt.medialoadedDelay](/components/global/javascript#xt-eventdelay)             |

</div>

> This demos use [loader](/components/loader) see documentation for more info.

<demo>
  <demoinline src="demos/components/slider/media-loaded">
  </demoinline>
</demo>

## Zindex

On sequential activation you can **automatically set zIndex of activated elements and targets**.

It's better to keep the start value like [the css one](https://github.com/xtendui/xtendui/blob/beta/tailwind.preset.js), but you can change the **factor on activation**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `zIndex:Object\|false`                 | `{ targets: { start: 200, factor: -1 } }`     | Set `z-index` on activation, can be `elements`, `targets`, `elementsInner`, `targetsInner`          |

</div>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `visibleReinit:Boolean`                          | `true`        | Reinit when `self.container` becomes visible with `display` only one time and only if not already visible            |

</div>
