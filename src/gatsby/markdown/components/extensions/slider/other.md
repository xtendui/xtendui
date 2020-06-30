---
type: "Components"
category: "Extensions"
parent: "Slider"
title: "Other"
date: "2019-03-15"
---

## No drag

Disable slider drag and cursor grab with `.slider-nodrag`.

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

## Disable

You can disable slider using `.slider-disable` (resize to mobile to see it in action).

It also hides automatically **pagination** and **navigation** **wrap** and slides not `active`.

<demo>
  <demovanilla src="vanilla/components/extensions/slider/disable">
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
