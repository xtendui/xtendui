---
type: "Components"
category: "Interaction"
parent: "Slider"
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

Example of **component disabled on desktop** with [match media](/components/slider/api#match-media).

Disable and style disabled.

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

Slider with `nooverflow: true` automatically disable when not overflowing.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `nooverflow:Boolean`                          | `true`        | When not overflowing disable slider           |

</div>

Style the class `.xt-slider-nooverflow`, by default it has `justify-content: center`.

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
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit the component on img loaded after [Xt.medialoadedDelay](/components/javascript/api#xt-eventdelay)             |

</div>

[[noteDefault]]
| This demos uses [loader](/components/loader) see documentation to **customize**.

<demo>
  <demoinline src="demos/components/slider/media-loaded">
  </demoinline>
</demo>
