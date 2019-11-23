---
type: "Components"
badge: "Extensions"
parent: "Slider"
title: "Drag"
---

###Wrap

You can wrap the slides with `drag: { wrap: true }`.

[[noteDefault]]
| With `drag: { wrap: true }` you have to set `loop: true` and you can't use `contain: true`

<demo>
  <demovanilla src="vanilla/components/slider/wrap">
  </demovanilla>
</demo>

You can set `drag: { wrap: Number }` where `Number` is how many times to cover the **drag.dragger** with wrap (setting `1` is the same as `true`).

It's useful sometimes if the wrap isn't long enough when dragging.

<demo>
  <demovanilla src="vanilla/components/slider/wrap-number">
  </demovanilla>
</demo>

With `drag: { wrap: true, overflow: false }` you don't have the drag overflow on wrap.

<demo>
  <demovanilla src="vanilla/components/slider/wrap-left">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/slider/wrap-right">
  </demovanilla>
</demo>

###Friction

You can set friction with `drag: { friction: Function }`, for example `function(velocity) {return Math.pow(velocity, 0.9)}`.

You can disable friction with `drag: { friction: false }`.

<demo>
  <demovanilla src="vanilla/components/slider/friction-false">
  </demovanilla>
</demo>

###Overflow

You can set overflow with `drag: { overflow: Function }`, for example `function(overflow) {return Math.pow(overflow, 0.73)}`.

###Drag

@TODO drag drag vedere se disattivare anche altri o fare demo

You can disable the drag transform position while dragging the **drag.dragger** with `drag: { drag: false }`.

<demo>
  <demovanilla src="vanilla/components/slider/transform-false">
  </demovanilla>
</demo>

###False

Use `drag: false` to disable drag. You need to use the slider in **toggle mode**, so with `.toggle-block` on the slides.

<demo>
  <demovanilla src="vanilla/components/slider/toggle-css">
  </demovanilla>
</demo>

Custom drag animation with `drag: false` and javascript events.

<demo>
  <demovanilla src="vanilla/components/slider/toggle-js">
  </demovanilla>
</demo>
