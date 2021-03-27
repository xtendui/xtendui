---
type: "Components"
category: "Interaction"
parent: "Slider"
title: "Interaction"
date: "2010-10-10"
---

## Class	

You can customize the **class names** used by the component. Refer to [toggle class](/components/toggle/interaction#class).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `class:String`                          | `in in-slider`        | Class name for activation            |	
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |	

</div>	

You can set initial activation by adding `in-slider` to the **elements** or **targets**.

Additionally on component initialization the class `.xt-slider-init` gets added to the **object**.	

## Pagination	

You can add pagination with an element `[data-xt-pag].xt-ignore`, it gets cloned inside the closest `.xt-slider-pagination`.	

Inside it you can use this strings that gets populated with variables:	

- `xt-num` replaced with pagination's number slide	
- `xt-tot` replaced with pagination's total slides	
- `xt-content` replaced with slide's `.xt-slide-content` **innerHTML**.	
- Classes added with slide's `[data-slide-pagination-class]` **value**.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `pagination:Query`                          | `'.xt-slider-pagination'`        | Query for pagination element             |	

</div>	

[[notePrimary]]
| `[data-xt-pag].xt-ignore` is essential to the functioning of the slider, but you can hide it using the class `.hidden`.	

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
| Option                  | `drag.dragger:Query`                          | `'.xt-slides-inner'`        | Query for dragger element             |	
| Option                  | `drag.manual:Boolean`                          | `false`        | Manual dragger position            |	
| Option                  | `drag.threshold:Number`                          | `50`        | Minumim drag size for changing drag and disable links             |	
| Option                  | `drag.factor:Number`                          | `1`        | Factor multiplier for drag             |	

</div>	

#### Overflow	

@TODO	

You can set overflow with `drag: { overflow: Function }`, for example `(overflow) => {return Math.pow(overflow, 0.73)}`.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `drag.overflow:Function|Boolean`                          | `<function>`        | Function for drag overflow             |	

</div>	

## Wheel	

Use `wheel: { selector: 'object' }` or `wheel: { selector: Query }` to enable mousewheel navigation.	

<demo>	
  <demoinline src="demos/components/slider/wheel">	
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
| Option                  | `auto.pause:Query`                          | `'[data-xt-pag], [data-xt-nav], .xt-button'`        | Elements that pause automatic on mouseenter            |	

</div>	

[[notePrimary]]	
| Auto doesn't run if the slider is `display: none`. Start it manually when visible using [slider events](/components/slider/api#trigger).	

Use the [api](/components/slider/api#listen) and listen to events to make auto progress indicators.	

<demo>	
  <demoinline src="demos/components/slider/progress">	
  </demoinline>	
</demo>	
