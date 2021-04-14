---
type: "Components"
category: "Interaction"
parent: "Slider"
title: "Interaction"
date: "2010-10-10"
---

## Quantity

See [toggle quantity](/components/toggle/interaction#quantity) for more informations.

You can specify `min` and `max` concurrent activations. The `min` option is fulfilled on initialization, the `max` options deactivates the first activated when max is reached.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min:Number`                          | `1`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |

</div>

## Class	

See [toggle class](/components/toggle/interaction#class) for more informations.

You can set initial activation by adding `on` to the **elements** or **targets**.

Additionally on component initialization the class `.xt-slider-init` gets added to the **object**.	

## Hash

See [toggle hash](/components/toggle/interaction#hash) for more informations.

You can link the activation in the url hash, hash activation has precedence over class activation.

Try the demo [on a new page](/demos/components/slider/hash#demo--slider-hash-2).

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/slider/hash">
  </div>
</demo>

## Event

See [toggle event](/components/toggle/interaction#event) for more informations.

You can specify **on** and **off** events for the interactions.

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

<demo>	
  <demoinline src="demos/components/slider/pagination">	
  </demoinline>	
</demo>	

## Navigation	

You can add navigation with `[data-xt-nav="value"]` to set the amount to add (`+1`) or remove (`-1`) to the current activation index.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `navigation:Query`                          | `'[data-xt-nav]'`        | Query for navigation elements             |	

</div>	

<demo>	
  <demoinline src="demos/components/slider/navigation">	
  </demoinline>	
</demo>	

## Drag	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `drag.dragger:Query`                          | `'.xt-slides'`        | Query for dragger element             |	
| Option                  | `drag.manual:Boolean`                          | `false`        | Manual dragger position            |	
| Option                  | `drag.threshold:Number`                          | `50`        | Minumim drag size for changing drag and disable links             |	
| Option                  | `drag.factor:Number`                          | `1`        | Factor multiplier for drag             |	

</div>	

## Auto	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |	
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |	
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |	
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |	
| Option                  | `auto.pause:Query`                          | `'[data-xt-pag], [data-xt-nav], .xt-button'`        | Elements that pause automatic on mouseenter            |	

</div>	

[[notePrimary]]	
| Auto doesn't run if the slider is `display: none`. Start it manually when visible using [slider events](/components/slider/api#trigger).	

Use the [api](/components/slider/api#listen) and listen to events to make auto progress indicators.	

<demo>	
  <demoinline src="demos/components/slider/progress">	
  </demoinline>	
</demo>	
