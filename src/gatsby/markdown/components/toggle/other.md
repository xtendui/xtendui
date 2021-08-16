---
type: "Components"
category: "Toggle"
parent: "Toggle"
title: "Other"
date: "2005-10-10"
---

## Disabled and Nested

If you want to **disable the component** use the `options.disabled`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |
| Option                  | `disableDeactivate:Boolean`                              | `false`                     | Deactivate automatically on disable           |

</div>

With nested selectors change the `elements` and `targets` query.

Example of **component disabled on desktop** with [match media](/components/toggle/api#match-media).

<demo>
  <demoinline src="demos/components/toggle/disabled">
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
  <demoinline src="demos/components/toggle/matches">
  </demoinline>
</demo>

## Media loaded

If you want to animate on image loaded, with `mediaLoaded: true` use the class `.xt-medialoaded` or the js event `medialoaded.xt.toggle`.

When you need to reinit the component when the media is loaded and the **width** of the image is calculated with `mediaLoadedReinit: true`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `mediaLoaded:Boolean`                          | `false`        | Add the class `.xt-medialoaded` on img loaded             |
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit the component on img loaded after [Xt.medialoadedDelay](/components/global/javascript#xt-eventdelay)             |

</div>

See [slider media loaded](/components/slider/other#media-loaded) for demo.

## Reset to Current

Use this code to create a **toggle that resets to current** automatically on deactivation.

<demo>
  <demoinline src="demos/components/toggle/reset-to-current">
  </demoinline>
</demo>

## Append To

You can **automatically move targets on activation inside the DOM**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `appendTo:Query`                          | `false`        | Automatically append targets to Node on activation            |

</div>

## Focus Limit

For usability purpose **on activation you can limit the focus inside the current activated targets**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `focusLimit:Boolean`                          | `false`        | Automatically limit focus on activation inside current targets            |
| Option                  | `focusTrap:Object`                          | `{ initialFocus: false, preventScroll: true, allowOutsideClick: true }`        | Options to pass to [Focus Trap](https://github.com/focus-trap/focus-trap)            |

</div>

## Zindex

On sequential activation you can **automatically set zIndex of activated elements and targets**.

It's better to keep the start value like [the css one](https://github.com/xtendui/xtendui/blob/beta/tailwind.preset.js), but you can change the **factor on activation**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `zIndex:Object\|false`                 | `false`     | Set `z-index` on activation, e.g.: `{ targets: { start: 600, factor: -1 } },` can be `elements`, `targets`, `elementsInner`, `targetsInner`          |

</div>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `debug:Boolean`                          | `false`        | Debug on console            |
| Option                    | `visibleReinit:Boolean`                          | `false`        | Reinit when `self.container` becomes visible with `display` only one time and only if not already visible            |

</div>
