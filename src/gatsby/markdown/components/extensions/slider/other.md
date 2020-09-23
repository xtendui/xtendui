---
type: "Components"
category: "Extensions"
parent: "Slider"
title: "Other"
date: "2005-10-10"
---

## Media loaded

If you want to animate on image loaded, with `mediaLoaded: true` use the class `.xt-medialoaded` or the js event `medialoaded.xt`.

When the **slide width** depends on inner images size, you need to reinit the slider when the media is loaded and the **width** of the image is calculated with `mediaLoadedReinit: true`.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `mediaLoaded:Boolean`                          | `false`        | Add the class `.xt-medialoaded` on img loaded             |
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit slider on img loaded after a delay set with `Xt.medialoadedDelay`             |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/media-loaded">
  </demovanilla>
</demo>

## Overflow auto

Slider with `overflowAuto:Boolean` automatically disable when not overflowing. It also hides automatically **pagination**, **navigation** and **wrap**.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `overflowAuto:Boolean`                          | `true`        | When not overflowing disable slider           |

</div>

Use the class `.xt-overflow-auto` to assign horizontal alignment when not overflowing.

<demo>
  <demovanilla src="vanilla/components/extensions/slider/overflow-auto">
  </demovanilla>
</demo>

You can disable **overflow auto** behaviour with `overflowAuto: false`.

<demo>
  <demovanilla src="vanilla/components/extensions/slider/overflow-auto-false">
  </demovanilla>
</demo>

## Disable

To disable a slider use `.slider-disable` util.

It also hides automatically **pagination** and **navigation** **wrap** and slides not `active`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.slider-disable`       | `slider-disable`                | `responsive`                | Disable the slider            |

</div>

## Expand

To disable and expand a slider use `.slider-expand` util.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.slider-expand`       | `slider-expand`                | `responsive`                | Disable the slider and expand the slides            |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/expand">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/disable">
  </demovanilla>
</demo>

## Touch Overflow

To have browser overflow scroll on touch devices use this css (use touch device to see it in action).

<demo>
  <demovanilla src="vanilla/components/extensions/slider/touch-overflow">
  </demovanilla>
</demo>
