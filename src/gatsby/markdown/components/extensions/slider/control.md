---
type: "Components"
category: "Extensions"
parent: "Slider"
title: "Control"
date: "2019-11-10"
---

[[notePrimary]]
| Slider uses toggle for logic, refer to [toggle's option](/core/toggle/option-js).

## Pagination

You can add pagination with `[data-xt-pag].xt-ignore` it gets cloned inside the closest `.slider-pagination`.

Inside it you can use this strings that gets populated with variables:

- `xt-num` replaced with pagination's number slide
- `xt-tot` replaced with pagination's total slides
- `xt-content` replaced with slide's `.slide-pagination-content` **innerHTML**.
- Classes added with slide's `[data-slide-pagination-class]` **value**.

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
  <demovanilla src="vanilla/components/extensions/slider/pagination">
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
  <demovanilla src="vanilla/components/extensions/slider/navigation">
  </demovanilla>
</demo>

## Drag

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.dragger:Query`                          | `'.slides-inner'`        | Query for dragger element             |
| Option                  | `drag.manual:Boolean`                          | `false`        | Manual dragger position            |
| Option                  | `drag.thresholdChange:Number`                          | `50`        | Minumim drag size for changing drag             |
| Option                  | `drag.thresholdOther:Number`                          | `50`        | Maximum drag size (y value) for blocking drag             |
| Option                  | `drag.thresholdLink:Number`                          | `50`        | Maximum drag size for clicking links             |
| Option                  | `drag.factor:Number`                          | `1`        | Factor multiplier for drag             |

</div>

#### Friction

@TODO

You can set friction with `drag: { friction: Function }`, for example `(velocity) => {return Math.pow(velocity, 0.9)}`.

You can disable friction with `drag: { friction: false }`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.friction:Function`                          | `<function>`        | Function for drag friction             |
| Option                  | `drag.frictionLimit:Number`                          | `1.5`        | Limit for friction calculation             |
| Option                  | `drag.frictionTime:Milliseconds`                          | `25`        | Milliseconds after we disable drag friction building            |

</div>

#### Overflow

@TODO

You can set overflow with `drag: { overflow: Function }`, for example `(overflow) => {return Math.pow(overflow, 0.73)}`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.overflow:Function`                          | `<function>`        | Function for drag overflow             |

</div>

## Wheel

Use `wheel: { selector: 'object' }` or `wheel: { selector: QuerySelector }` to enable mousewheel navigation.

<demo>
  <demovanilla src="vanilla/components/extensions/slider/wheel">
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
| Option                  | `auto.pause:Query`                          | `[data-xt-pag], [data-xt-nav], .btn`        | Elements that pause automatic on mouseenter            |

</div>

[[notePrimary]]
| Auto doesn't run if the slider is `display: none`. Start it manually when visible when using [slider events](/extensions/slider/api#trigger).

Use the [api](/extensions/slider/api#listen) and listen to events to make auto progress indicators.

<demo>
  <demovanilla src="vanilla/components/extensions/slider/progress">
  </demovanilla>
</demo>

## Other

Do not loop slides activation with `loop: false`.

Disable the jump feature (clicking on not activated slides jumps to the slide) with `jump: false`. Jump only if the slide isn't entirely on screen.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `loop:Boolean`                          | `true`        | Loop activation            |
| Option                  | `jump:Boolean`                          | `true`        | Clicking on targets triggers activation            |
| Option                  | `jumpOverflow:Boolean`                          | `false`        | Jump only activates if slide overflow dragger            |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/other">
  </demovanilla>
</demo>
