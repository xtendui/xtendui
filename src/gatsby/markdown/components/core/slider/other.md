---
type: "Components"
category: "Core"
parent: "Slider"
title: "Other"
date: "2005-10-10"
---

## Media loaded

If you want to animate on image loaded, with `mediaLoaded: true` use the class `.xt-medialoaded` or the js event `medialoaded.xt.slider`.

When you need to reinit the component when the media is loaded and the **width** of the image is calculated with `mediaLoadedReinit: true`.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `mediaLoaded:Boolean`                          | `false`        | Add the class `.xt-medialoaded` on img loaded             |
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit the component on img loaded after a delay set with `Xt.medialoadedDelay`             |

</div>

<demo>
  <demovanilla src="vanilla/components/core/slider/media-loaded">
  </demovanilla>
</demo>

## Overflow auto

Slider with `overflowAuto:Boolean` automatically disable when not overflowing. It also hides automatically **pagination**, **navigation** and **wrap**.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `overflowAuto:Boolean`                          | `true`        | When not overflowing disable slider           |

</div>

Use the class `.xt-overflow-auto` to **style horizontal alignment** when not overflowing.

<demo>
  <demovanilla src="vanilla/components/core/slider/overflow-auto">
  </demovanilla>
</demo>

You can disable the **automatic overflow auto** behaviour with `overflowAuto: false`.

<demo>
  <demovanilla src="vanilla/components/core/slider/overflow-auto-false">
  </demovanilla>
</demo>

## Expand

To **disable and expand** a slider use `.slider-expand` and [match media](/components/core/slider/api#match-media) (use narrow screen to see it in action).

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Component                  | `.slider-expand`       | `slider-expand`                | Expand the slider            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/slider/expand">
  </demovanilla>
</demo>

## Touch Overflow

To have **browser overflow scroll** on **touch devices** use this **css media query** and [match media](/components/core/slider/api#match-media) (use touch device to see it in action).

<demo>
  <demovanilla src="vanilla/components/core/slider/touch-overflow">
  </demovanilla>
</demo>