---
type: "Components"
badge: "Extensions"
parent: "Slider"
title: "Option js"
date: "2000-02-05"
---

[[notePrimary]]
| Slider uses toggle for logic, refer to [toggle's option](/components/toggle/option-js).

## Align

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `align:String`                          | `'center'`        | Alignment 'left' or 'center' or 'right'           |

</div>

<demo>
  <demovanilla src="vanilla/components/slider/align-center">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/align-left">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/align-right">
  </demovanilla>
</demo>

## Contain

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `contain:Boolean`                          | `false`        | If true contain the slides on available width            |

</div>

<demo>
  <demovanilla src="vanilla/components/slider/contain-center">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/contain-left">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/contain-right">
  </demovanilla>
</demo>

## Group

With `groupMq: { MediaQuery: Number }` you set a decimal number from 0 to 1 to group the slides with a factor of the **drag.dragger** width available.

`MediaQuery` is a media query, you can have multiple, for example `groupMq: { 'all': 1, '(min-width: 768px)': 0.8 }`.

By default it's set to `groupMq: { 'all': 0.8 }`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `groupMq:Object`                          | `all: 0.8`        | Set automatic grouping based on available width from 0 to 1            |

</div>

<demo>
  <demovanilla src="vanilla/components/slider/group-responsive">
  </demovanilla>
</demo>

Set to `groupMq: false` to disable automatic grouping of slides.

<demo>
  <demovanilla src="vanilla/components/slider/group-false">
  </demovanilla>
</demo>

## Drag

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.drag:Boolean`                          | `true`        | Enable or disable drag             |
| Option                  | `drag.dragger:Query`                          | `'.slides-inner'`        | Query for dragger element             |
| Option                  | `drag.threshold:Number`                          | `50`        | Minumim drag size for starting drag             |
| Option                  | `drag.linkThreshold:Number`                          | `50`        | Maximum drag size for clicking links             |
| Option                  | `drag.factor:Number`                          | `1`        | Factor multiplier for drag             |

</div>

You can disable the drag transform position while dragging the **drag.dragger** with `drag: { drag: false }`.

Use `drag: false` to disable drag. You need to use the slider in **toggle mode**, so with `.toggle-block` on the slides.

<demo>
  <demovanilla src="vanilla/components/slider/toggle-css">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/toggle-js">
  </demovanilla>
</demo>

## Friction

You can set friction with `drag: { friction: Function }`, for example `(velocity) => {return Math.pow(velocity, 0.9)}`.

You can disable friction with `drag: { friction: false }`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.friction:Function`                          | `<function>`        | Function for drag friction             |
| Option                  | `drag.frictionLimit:Number`                          | `1.5`        | Limit for friction calculation             |
| Option                  | `drag.timeLimit:Milliseconds`                          | `25`        | Milliseconds after we disable drag friction building            |

</div>

<demo>
  <demovanilla src="vanilla/components/slider/friction-false">
  </demovanilla>
</demo>

## Overflow

You can set overflow with `drag: { overflow: Function }`, for example `(overflow) => {return Math.pow(overflow, 0.73)}`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.overflow:Function`                          | `<function>`        | Function for drag overflow             |

</div>

## Wrap

You can wrap the slides with `drag: { wrap: true }`.

[[notePrimary]]
| With `drag: { wrap: true }` you have to set `loop: true` and you can't use `contain: true`

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.wrap:Boolean`                          | `false`        | Wrap slides on start and end             |

</div>

<demo>
  <demovanilla src="vanilla/components/slider/wrap">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/wrap-left">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/wrap-right">
  </demovanilla>
</demo>

Use `drag: { overflow: false }` to not have the drag overflow on wrap.

You can set `drag: { wrap: Number }` where `Number` is how many times to cover the **drag.dragger** with wrap (setting `1` is the same as `true`).

<demo>
  <demovanilla src="vanilla/components/slider/wrap-overflow">
  </demovanilla>
</demo>

## Pagination

You can add pagination with `[data-xt-pag].xt-ignore` it gets cloned inside the closest `.slider-pagination`.

Inside it you can use this strings that gets populated with variables:

- `xt-num` replaced with pagination's number slide
- `xt-tot` replaced with pagination's total slides
- `xt-content` replaced with slide's `.slide-pagination-content` **innerHTML**.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `pagination:Query`                          | `'.slider-pagination'`        | Query for pagination element             |

</div>

<script type="text/plain" class="language-markup">
  <nav class="slider-pagination">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
      xt-num of xt-tot
    </button>
  </nav>
</script>

[[notePrimary]]
| `slider-pagination[data-xt-pag].xt-ignore` is essential to the functioning of the slider, so if you don't want to show it add `.display-none`.

<demo>
  <demovanilla src="vanilla/components/slider/pagination">
  </demovanilla>
</demo>

## Navigation

You can add navigation with `navigation: QuerySelector`, set the amount to add (`+1`) or remove (`-1`) to the current activation index with `[data-xt-nav="value"]`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `navigation:Query`                          | `[data-xt-nav]`        | Query for navigation elements             |

</div>

<script type="text/plain" class="language-markup">
  <button type="button" class="btn btn-default" data-xt-nav="-1" title="Previous slide">
    <span class="icon-xt-chevron-left"></span>
  </button>
  <button type="button" class="btn btn-default" data-xt-nav="1" title="Next slide">
    <span class="icon-xt-chevron-right"></span>
  </button>
</script>

<demo>
  <demovanilla src="vanilla/components/slider/navigation">
  </demovanilla>
</demo>

## Wheel

Use `wheel: { selector: 'object' }` or `wheel: { selector: QuerySelector }` to enable mousewheel navigation.

<demo>
  <demovanilla src="vanilla/components/slider/wheel">
  </demovanilla>
</demo>

## Auto

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |
| Option                  | `auto.pause:Query`                          | `false`        | Elements that pause automatic on mouseenter            |

</div>

[[notePrimary]]
| Auto doesn't run if the slider is `display: none`.

<demo>
  <demovanilla src="vanilla/components/slider/auto">
  </demovanilla>
</demo>

## Other

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `loop:Boolean`                          | `true`        | Loop activation            |
| Option                  | `jump:Boolean`                          | `false`        | Clicking on targets triggers activation            |
| Option                  | `autoHeight:Query`                          | `.slides`        | Elements to automaticaly height            |

</div>

<demo>
  <demovanilla src="vanilla/components/slider/other">
  </demovanilla>
</demo>
