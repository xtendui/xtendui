---
type: "Components"
badge: "Core"
parent: "Animation"
title: "Css"
date: "2000-02-01"
---

## Vars

In the file there are css time and bezier vars.

## Styles

You have some basic css animation classes/mixins:

<div class="table-scroll">

|                         | Syntax                                    | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Util                  | `.anim-opacity`   | `.anim-opacity()` `.anim-opacity.active()` `.anim-opacity.out()`                | Animate opacity            |
| Util                  | `.anim-zoom`   | `.anim-zoom()` `.anim-zoom.active()` `.anim-zoom.out()`                | Animate zoom and opacity            |
| Util                  | `.anim-y`   | `.anim-y()` `.anim-y.active()` `.anim-y.out()`                | Animate along y axis            |
| Util                  | `.anim-y-inverse`   | `.anim-y-inverse()` `.anim-y-inverse.active()` `.anim-y-inverse.out()`                | Animate along y axis inverse           |
| Util                  | `.anim-x`   | `.anim-x()` `.anim-x.active()` `.anim-x.out()`                | Animate along x axis            |
| Util                  | `.anim-x-inverse`   | `.anim-x-inverse()` `.anim-x-inverse.active()` `.anim-x-inverse.out()`                | Animate along x axis inverse           |

</div>

You can also set collapse transition, and `prefers-reduced-motion: reduce` makes instant animation and transitions for users who have set **prefer reduced motion** in the OS.

### Example Transition

We recomend to use transitions this way:

```less
.my-element {
  opacity: 0;
  transform: translateX(-1.5rem);
  transition-property: all;
  transition-duration: @time-medium;
  transition-delay: initial;
  transition-timing-function: @bez-out;
  &:hover, &.hover, &:active, &.active {
    opacity: 1;
    transform: translateX(0);
    transition-property: all;
    transition-duration: @time-medium;
    transition-delay: initial;
    transition-timing-function: @bez-in;
  }
}
```

### Example Animation

We recomend to use animations this way:

```less
.my-element {
  .anim-opacity.active();
  &:hover, &.hover, &:active, &.active {
    .anim-opacity.out();
  }
}
```

## Utils

### Delay

There is a mixin for generating transition and animation delays on multiple items on the same selector with `nth-child`.

For example, if you want to delay all `.animated-items`, use this format to add delay **from 0ms to 150ms** with **25ms step**.

```less
.animated-items {
  animation-delay: 150ms; // @start + @child * @increment
  transition-delay: 150ms; // @start + @child * @increment
  .nth-child(@child: 6, @start: 0ms, @increment: 25ms, @decrement: 0ms, {
    @animation-delay(); // or @transition-delay();
  });
}
```

Use this format to add delay **from 150ms to 0ms** with **25ms negative step**.

```less
.animated-items {
  animation-delay: 0ms; // @start - @child * @decrement
  transition-delay: 0ms; // @start - @child * @decrement
  .nth-child(@child: 6, @start: 150ms, @increment: 0ms, @decrement: 25ms, {
    @animation-delay(); // or @transition-delay();
  });
}
```

You can add any selector you want inside the `.nth-child`, for example if you want to animate a `.animated-items-nested`:

```less
.animated-items {
  animation-delay: 150ms; // @start + @child * @increment
  transition-delay: 150ms; // @start + @child * @increment
  .nth-child(@child: 6, @start: 0ms, @increment: 25ms, @decrement: 0ms, {
    .animated-items-nested {
      @animation-delay(); // or @transition-delay();
    }
  });
}
```
