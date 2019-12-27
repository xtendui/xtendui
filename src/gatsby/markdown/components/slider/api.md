---
type: "Components"
badge: "Extensions"
parent: "Slider"
title: "API"
date: "2000-01-01"
---

## Events and Methods

[[noteDefault]]
| Slider uses toggle for logic, refer to [toggle's Events and Methods](/components/toggle/api#events-and-methods).

Trigger events this way:

```jsx
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.xt'))
```

Listen to events this way:

```jsx
document.querySelector('#my-element-or-target').addEventListener('on.xt', function(e) {
  // add this check on events with bubbles: true
  if (this === e.target) {
    // logic
  }
})
```

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt`       | `elements` `targets` | Activation event (`bubbles: true`)             |
| Event                   | `off.xt`      | `elements` `targets` | Deactivation event (`bubbles: true`)            |
| Event                   | `ondone.xt`           | `elements` `targets` | Activation event after delay and duration (`bubbles: true`)             |
| Event                   | `offdone.xt`           | `elements` `targets` | Deactivation event after delay and duration (`bubbles: true`)             |
| Event                   | `imageLoaded.xt`           | `elements` `targets` | Images loaded event (`bubbles: true`)            |
| Event                   | `init.xt`           | `object` | Init event             |
| Event                   | `start.xt.auto`           | `object` | Auto start event             |
| Event                   | `stop.xt.auto`           | `object` | Auto stop event             |
| Event                   | `pause.xt.auto`           | `object` | Auto pause event             |
| Event                   | `wheelstart.xt`           | `wheel` | Wheel start event             |
| Event                   | `wheel.xt`           | `wheel` | Wheel event             |
| Event                   | `wheelend.xt`           | `wheel` | Wheel end event             |

</div>

Trigger methods this way:

```jsx
const self = Xt.get('xt-slider', document.querySelector('#my-slider'))
self.destroy()
```

<div class="table-scroll">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit(saveCurrents:Boolean)`       | Reinitialize component and save currents as initial (default: `true`)             |
| Method                  | `self.restart()`                          | Restart component to initial             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>

<demo>
  <demovanilla src="vanilla/components/slider/events-methods">
  </demovanilla>
</demo>

## Initialization

Initialize automatically within markup with `[data-xt-slider="{ <options> }"]`.

Or initialize with javascript:

```jsx
new Xt.Slider(document.querySelector('#my-slider'), {
  // options
});
```

## Usage

Use this markup to create a **slider**.

<script type="text/plain" class="language-markup">
  <div class="slider" data-xt-slider>

    <div class="slides">
      <ul class="slides-inner">

        <li class="slide">
          <div class="slide-inner">
            <!-- content -->
          </div>
        </li>

        <li class="slide">
          <div class="slide-inner">
            <!-- content -->
          </div>
        </li>

      </ul>
    </div>

    <nav class="slider-pagination">
      <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
      </button>
    </nav>

  </div>
</script>

[[notePrimary]]
| `slider-pagination[data-xt-pag].xt-ignore` is essential to the functioning of the slider, so if you don't want to show it add `.display-none`.

## Options

[[noteDefault]]
| Slider uses toggle for logic, refer to [toggle's options](/components/toggle/api#options).

### Align

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

### Contain

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

### Group

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

### Drag

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

### Friction

You can set friction with `drag: { friction: Function }`, for example `function(velocity) {return Math.pow(velocity, 0.9)}`.

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

### Overflow

You can set overflow with `drag: { overflow: Function }`, for example `function(overflow) {return Math.pow(overflow, 0.73)}`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.overflow:Function`                          | `<function>`        | Function for drag overflow             |

</div>

### Wrap

You can wrap the slides with `drag: { wrap: true }`.

[[notePrimary]]
| With `drag: { wrap: true }` you have to set `loop: true` and you can't use `contain: true`

<demo>
  <demovanilla src="vanilla/components/slider/wrap">
  </demovanilla>
</demo>

You can set `drag: { wrap: Number }` where `Number` is how many times to cover the **drag.dragger** with wrap (setting `1` is the same as `true`).

It's useful sometimes if the wrap isn't long enough when dragging.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `drag.wrap:Boolean`                          | `false`        | Wrap slides on start and end             |

</div>

<demo>
  <demovanilla src="vanilla/components/slider/wrap-number">
  </demovanilla>
</demo>

With `drag: { wrap: true, overflow: false }` you don't have the drag overflow on wrap.

<demo>
  <demovanilla src="vanilla/components/slider/wrap-left">
  </demovanilla>
  <demovanilla src="vanilla/components/slider/wrap-right">
  </demovanilla>
</demo>

### Pagination

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

### Navigation

You can add navigation with `[data-xt-nav="+-Number"].xt-ignore` where `+-Number` is the amount to change the slider when clicked.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `navigation:Query`                          | `[data-xt-nav]`        | Query for navigation elements             |

</div>

<script type="text/plain" class="language-markup">
  <button type="button" class="btn btn-default xt-ignore" data-xt-nav="-1" title="Previous slide">
    <span class="icon-xt-chevron-left"></span>
  </button>
  <button type="button" class="btn btn-default xt-ignore" data-xt-nav="1" title="Next slide">
    <span class="icon-xt-chevron-right"></span>
  </button>
</script>

<demo>
  <demovanilla src="vanilla/components/slider/navigation">
  </demovanilla>
</demo>

### Wheel

Use `wheel: { selector: 'object' }` or `wheel: { selector: QuerySelector }` to enable mousewheel navigation.

<demo>
  <demovanilla src="vanilla/components/slider/wheel">
  </demovanilla>
</demo>

### Auto

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |
| Option                  | `auto.pause:Query`                          | `false`        | Elements that pause automatic on mouseenter            |

</div>

<demo>
  <demovanilla src="vanilla/components/slider/auto">
  </demovanilla>
</demo>

### Other

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `autoHeight:Query`                          | `.slides`        | Elements to automaticaly height            |

</div>

<demo>
  <demovanilla src="vanilla/components/slider/other">
  </demovanilla>
</demo>
