---
type: "Components"
category: "Extensions"
parent: "Slider"
title: "Option js"
date: "2019-11-01"
---

[[notePrimary]]
| Slider uses toggle for logic, refer to [toggle's option](/core/toggle/option-js).

## Align

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `align:String`                          | `'center'`        | Alignment 'left' or 'center' or 'right'           |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/align-center">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/align-left">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/align-right">
  </demovanilla>
</demo>

## Contain

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `contain:Boolean`                          | `false`        | If true contain the slides on available width            |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/contain-center">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/contain-left">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/contain-right">
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
  <demovanilla src="vanilla/components/extensions/slider/group-responsive">
  </demovanilla>
</demo>

Set to `groupMq: false` to disable automatic grouping of slides.

<demo>
  <demovanilla src="vanilla/components/extensions/slider/group-false">
  </demovanilla>
</demo>

## Drag

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.dragger:Query`                          | `'.slides-inner'`        | Query for dragger element             |
| Option                  | `drag.manual:Boolean`                          | `false`        | Manual dragger position            |
| Option                  | `drag.threshold:Number`                          | `50`        | Minumim drag size for starting drag             |
| Option                  | `drag.linkThreshold:Number`                          | `50`        | Maximum drag size for clicking links             |
| Option                  | `drag.factor:Number`                          | `1`        | Factor multiplier for drag             |


</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/toggle-css">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/toggle-js">
  </demovanilla>
</demo>

#### Friction

You can set friction with `drag: { friction: Function }`, for example `(velocity) => {return Math.pow(velocity, 0.9)}`.

You can disable friction with `drag: { friction: false }`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.friction:Function`                          | `<function>`        | Function for drag friction             |
| Option                  | `drag.frictionLimit:Number`                          | `1.5`        | Limit for friction calculation             |
| Option                  | `drag.frictionTime:Milliseconds`                          | `25`        | Milliseconds after we disable drag friction building            |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/friction-false">
  </demovanilla>
</demo>

#### Overflow

You can set overflow with `drag: { overflow: Function }`, for example `(overflow) => {return Math.pow(overflow, 0.73)}`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.overflow:Function`                          | `<function>`        | Function for drag overflow             |

</div>

#### Wrap

You can wrap the slides with `drag: { wrap: true }`.

[[notePrimary]]
| With `drag.wrap` you have to set `loop: true` and you can't use `contain: true`

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.wrap:Boolean|Number`                          | `false`        | Wrap slides on start and end             |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/wrap">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/wrap-left">
  </demovanilla>
  <demovanilla src="vanilla/components/extensions/slider/wrap-right">
  </demovanilla>
</demo>

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

<demo>
  <demovanilla src="vanilla/components/extensions/slider/auto">
  </demovanilla>
</demo>

Use the [api](/extensions/slider/api#listen) and listen to events to make auto progress indicators.

<demo>
  <demovanilla src="vanilla/components/extensions/slider/progress">
  </demovanilla>
</demo>

## Other

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `loop:Boolean`                          | `true`        | Loop activation            |
| Option                  | `jump:Boolean`                          | `false`        | Clicking on targets triggers activation            |
| Option                  | `autoHeight:Query`                          | `.slides`        | Elements to automaticaly height            |
| Option                  | `keepHeight:Query`                          | `false`        | Elements to keep height            |

</div>

<demo>
  <demovanilla src="vanilla/components/extensions/slider/other">
  </demovanilla>
</demo>
