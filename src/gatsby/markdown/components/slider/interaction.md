---
type: "Components"
category: "Interaction"
parent: "Slider"
title: "Interaction"
date: "2010-10-10"
---

## Elements

See [toggle elements](/components/toggle/interaction#elements) for more info.

You can specify `elements` that listens to event for activation, and `targets` that gets activated.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `'[data-xt-pag]:not(.hidden)'`        | Elements query            |
| Option                  | `targets:Query`                          | `'.xt-slide'`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `':scope > a, :scope > button'`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     |
| Option                  | `exclude:Query`                          | `false`        | **Exclude elements and targets** if they matches the query (e.g.: `.hidden`)           |

</div>

## Class	

See [toggle class](/components/toggle/interaction#class) for more info.

You can set initial activation by adding `on` to the **elements** or **targets**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `on`        | Class name for **activation**            |
| Option                  | `classIn:String`                          | `in`        | Class name for **in animation**            |
| Option                  | `classOut:String`                          | `out`        | Class name for **out animation**             |
| Option                  | `classDone:String`                          | `done`        | Class name for **in animation** done            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for **initialization**            |
| Option                  | `classBefore:String`                          | `dir-before`        | Class name for **before** direction activation            |
| Option                  | `classAfter:String`                          | `dir-after`        | Class name for **after** direction activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |

</div>

Additionally on component initialization the class `.xt-slider-init` gets added to the **object**.

## Quantity

See [toggle quantity](/components/toggle/interaction#quantity) for more info.

You can specify `min` and `max` concurrent activations. The `min` option is fulfilled on initialization, the `max` options deactivates the first activated when max is reached.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min:Number`                          | `1`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |

</div>

## Event

See [toggle event](/components/toggle/interaction#event) for more info.

## Hash

You can link the activation in the url hash, hash activation has precedence over class activation.

Hash attribute `data-xt-hash` can be on **elements** or **targets**, also hash activates on hash location change.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hash:String|false`                          | `[data-xt-hash]`        | Link activation in location hash using elements and targets attribute `hash` value            |

</div>

Try the demo [on a new page](/demos/components/slider/hash#demo--slider-hash-2).

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/slider/hash">
  </div>
</demo>

## Drag	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `drag.dragger:Query`                          | `'.xt-slides'`        | Query for dragger element             |	
| Option                  | `drag.manual:Boolean`                          | `false`        | Manual dragger position            |	
| Option                  | `drag.threshold:Number`                          | `50`        | Minumim drag size for activation and disable interactions on targets             |	
| Option                  | `drag.factor:Number`                          | `1`        | Factor multiplier for drag             |	
| Option                  | `drag.overflow:Function|false`                          | `<Function>`        | Factor when dragging beyond the first and the last slide, return `Number`             |	

</div>	

Default functions as follow:

```js
drag: {
  overflow: ({ overflow }) => {
    return Math.min(Math.log(1 + Math.pow(overflow, 10)), overflow)
    // other examples of overflow
    //return Math.pow(overflow, 0.6)
    //return overflow / 9
  },
},
```

<demo>	
  <demoinline src="demos/components/slider/drag">	
  </demoinline>	
</demo>	

## Pagination	

Inside `[data-xt-pag].hidden` you can use this strings that gets populated with variables:	

- `xt-num` replaced with pagination's number slide	
- `xt-tot` replaced with pagination's total slides	
- `xt-content` replaced with slide's `.xt-slide-content` **innerHTML**.	
- Classes added with slide's `[data-xt-pag-classes]` **value**.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `pagination:Query`                          | `'.xt-slider-pagination'`        | Query for pagination element             |	

</div>	

[[notePrimary]]
| `[data-xt-pag].hidden` is essential to the functioning of the slider, it gets cloned inside the closest `.xt-slider-pagination` but you can hide it using the class `.xt-slider-pagination.hidden`.

You can use pagination also inside targets as you can see in the demo.

<demo>	
  <demoinline src="demos/components/slider/pagination">	
  </demoinline>	
</demo>	

## Navigation and Loop

You can add navigation with `[data-xt-nav="value"]` to set the amount to add (`+1`) or remove (`-1`) to the current activation index.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `navigation:Query`                          | `'[data-xt-nav]'`        | Query for navigation elements             |	

</div>	

You can make the **activation loop** with `loop: true`, also when dragging beyond the first and the last slide.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `loop:Boolean`                          | `false`        | Loop activation            |	

</div>

You can use navigation also inside targets as you can see in the demo.

<demo>
  <demoinline src="demos/components/slider/navigation">	
  </demoinline>	
</demo>	

## Jump

Use `jump: true` to enable clicking on a **target** to jump to them, only when overflowing the `drag.dragger`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `jump:Boolean`                          | `false`        | Clicking on targets triggers activation            |

</div>

<demo>	
  <demoinline src="demos/components/slider/jump">	
  </demoinline>	
</demo>	

## Auto	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |
| Option                  | `auto.pause:Query`                          | `'a, button'`        | Query inside `object` that pause automatic on mouseenter            |
| Option                  | `auto.loop:Boolean`                          | `true`        | Loop activation beyond start and end            |

</div>

[[notePrimary]]
| Auto doesn't run if the slider is `display: none`. Start it manually when visible using [slider events](/components/slider/api#trigger).

Use the [api](/components/slider/api#listen) and listen to events to make auto progress indicators.	

<demo>	
  <demoinline src="demos/components/slider/progress">	
  </demoinline>	
</demo>	

## Class html

See [overlay class html](/components/toggle/interaction#class-html) for more info.
