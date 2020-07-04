---
type: "Components"
category: "Extensions"
parent: "Slider"
title: "Option Activation"
date: "2019-11-05"
---

## Media loaded

When the **slide width** depend on inner images size, you need to reinit the slider when the media is loaded and the **width** of the image is calculated.

If you want to animate with css use the `.xt-medialoaded` class or with js use the event `medialoaded.xt`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `mediaLoaded:Boolean`                          | `false`        | Add the class `.xt-medialoaded` on img loaded             |
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit slider on img loaded after a delay set with `Xt.medialoadedDelay`             |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/media-loaded">
  </demovanilla>
</demo>

## Overflow auto

Slider automatically disable when not overflowing. It also hides automatically **pagination**, **navigation** and **wrap**.

Use `justify-content` to assign horizontal alignment when not overflowing, this way:

```less
.slider--custom {
  &.xt-overflow-auto {
    .slides-inner {
      justify-content: center;
    }
  }
}
```

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `overflowAuto:Boolean`                          | `true`        | When not overflowing disable slider           |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/overflow-auto">
  </demovanilla>
</demo>

Disable this behaviour with `overflowAuto: false`.

<demo>
  <demovanilla src="vanilla/components/extensions/slider/overflow-auto-false">
  </demovanilla>
</demo>

## Expand

To disable and expand a slider use `.slider-expand` also within media queries.

<demo>
  <demovanilla src="vanilla/components/extensions/slider/expand">
  </demovanilla>
</demo>

## Touch Overflow

Use `.slider-touch-overflow` to have browser overflow on touch devices (use touch device to see it in action).

<demo>
  <demovanilla src="vanilla/components/extensions/slider/touch-overflow">
  </demovanilla>
</demo>

## Disable

You can disable slider using `.slider-disable` (resize to mobile to see it in action).

It also hides automatically **pagination** and **navigation** **wrap** and slides not `active`.

<demo>
  <demovanilla src="vanilla/components/extensions/slider/disable">
  </demovanilla>
</demo>
