---
type: "Components"
badge: "Extensions"
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
  <demovanilla src="vanilla/components/slider/overflow-auto">
  </demovanilla>
</demo>

Disable this behaviour with `overflowAuto: false`.

<demo>
  <demovanilla src="vanilla/components/slider/overflow-auto-false">
  </demovanilla>
</demo>

## Disable

To disable slider use `.slider-disable` also within media queries. It also hides automatically **pagination** and **navigation** **wrap** and slides not `active`.

<demo>
  <demovanilla src="vanilla/components/slider/disable">
  </demovanilla>
</demo>

## Expand

To disable and expand a slider use `.slider-expand` also within media queries.

<demo>
  <demovanilla src="vanilla/components/slider/expand">
  </demovanilla>
</demo>

## Touch Overflow

Use `.slider-touch-overflow` to have browser overflow on touch devices.

<demo>
  <demovanilla src="vanilla/components/slider/touch-overflow">
  </demovanilla>
</demo>
