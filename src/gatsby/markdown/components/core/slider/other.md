---
type: "Components"
category: "Core"
parent: "Slider"
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

Example of **component disabled on desktop** with [match media](/components/core/slider/api#match-media).

Disable and reset styles accordingly.

<demo>
  <demoinline src="demos/components/core/slider/disable">
  </demoinline>
</demo>

## Overflow auto

Slider with `overflowAuto:Boolean` automatically disable when not overflowing.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `overflowAuto:Boolean`                          | `true`        | When not overflowing disable slider           |

</div>

Use the class `.xt-overflow-auto` to styles accordingly.

<demo>
  <demoinline src="demos/components/core/slider/overflow-auto">
  </demoinline>
</demo>

## Expand

Disable and reset styles accordingly. (use narrow screen to see it in action).

<demo>
  <demoinline src="demos/components/core/slider/expand">
  </demoinline>
</demo>

## Touch Overflow

Disable and reset styles accordingly. (use touch device to see it in action).

<demo>
  <demoinline src="demos/components/core/slider/touch-overflow">
  </demoinline>
</demo>

## Media loaded

Use `loading="lazy"` to lazy load images inside slider.

If you want to animate on image loaded, with `mediaLoaded: true` use the class `.xt-medialoaded` or the js event `medialoaded.xt.slider`.

When you need to reinit the component when the media is loaded and the **width** of the image is calculated with `mediaLoadedReinit: true`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `mediaLoaded:Boolean`                          | `false`        | Add the class `.xt-medialoaded` on img loaded             |
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit the component on img loaded after [Xt.medialoadedDelay](/components/globals/javascript#event-delay)             |

</div>

[[noteDefault]]
| This demos uses [loader](/components/core/loader) see documentation to **customize**.

<demo>
  <demoinline src="demos/components/core/slider/media-loaded">
  </demoinline>
</demo>

[[noteDefault]]
| Images from [Unsplash](https://source.unsplash.com/)
