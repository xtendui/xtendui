---
type: "Components"
badge: "Extensions"
parent: "Slider"
title: "Option"
date: "2000-02-01"
---

##Align

<demo>
  <demovanilla src="vanilla/components/slider/align-center">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/align-left">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/align-right">
  </demovanilla>
</demo>

###Contain

Use `contain: true` to contain the slides.

<demo>
  <demovanilla src="vanilla/components/slider/contain-center">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/contain-left">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/contain-right">
  </demovanilla>
</demo>

##Group

With `groupMq: { MediaQuery: Number }` you set a decimal number from 0 to 1 to group the slides with a factor of the **drag.dragger** width available.

`MediaQuery` is a media query, you can have multiple, for example `groupMq: { 'all': 1, '(min-width: 768px)': 0.8 }`.

By default it's set to `groupMq: { 'all': 0.8 }`.

<demo>
  <demovanilla src="vanilla/components/slider/group-responsive">
  </demovanilla>
</demo>

Set to `groupMq: false` to disable automatic grouping of slides.

<demo>
  <demovanilla src="vanilla/components/slider/group-false">
  </demovanilla>
</demo>

##Auto

<demo>
  <demovanilla src="vanilla/components/slider/auto">
  </demovanilla>
</demo>

##Navigation

You can add navigation with `[data-xt-nav="+-Number"].xt-ignore` where `+-Number` is the amount to change the slider when clicked.

<script type="text/plain" class="language-markup">
  <button type="button" class="btn btn--default xt-ignore" data-xt-nav="-1" title="Previous slide">
    <span class="icon-xt-chevron-left"></span>
  </button>
  <button type="button" class="btn btn--default xt-ignore" data-xt-nav="1" title="Next slide">
    <span class="icon-xt-chevron-right"></span>
  </button>
</script>

<demo>
  <demovanilla src="vanilla/components/slider/navigation">
  </demovanilla>
</demo>

##Pagination

You can add pagination with `[data-xt-pag].xt-ignore` it gets cloned inside the closest `.slider-pagination`.

Inside it you can use this strings that gets populated with variables:

- `xt-num` replaced with pagination's number slide
- `xt-tot` replaced with pagination's total slides
- `xt-content` replaced with slide's `.slide-pagination-content` **innerHTML**.

<script type="text/plain" class="language-markup">
  <nav class="slider-pagination">
    <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
      xt-num of xt-tot
    </button>
  </nav>
</script>

[[noteDefault]]
| `slider-pagination[data-xt-pag].xt-ignore` is essential to the functioning of the slider, so if you don't want to show it add `.display-none`.

<demo>
  <demovanilla src="vanilla/components/slider/pagination">
  </demovanilla>
</demo>

##Wheel

Use `wheel: { selector: 'object' }` or `wheel: { selector: QuerySelector }` to enable mousewheel navigation.

<demo>
  <demovanilla src="vanilla/components/slider/wheel">
  </demovanilla>
</demo>

##Wrap

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

##Friction

You can set friction with `drag: { friction: Function }`, for example `function(velocity) {return Math.pow(velocity, 0.9)}`.

You can disable friction with `drag: { friction: false }`.

<demo>
  <demovanilla src="vanilla/components/slider/friction-false">
  </demovanilla>
</demo>

##Overflow

You can set overflow with `drag: { overflow: Function }`, for example `function(overflow) {return Math.pow(overflow, 0.73)}`.

##Drag

@TODO drag drag vedere se disattivare anche altri o fare demo

You can disable the drag transform position while dragging the **drag.dragger** with `drag: { drag: false }`.

<demo>
  <demovanilla src="vanilla/components/slider/transform-false">
  </demovanilla>
</demo>

##False

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
