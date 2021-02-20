---
type: "Components"
category: "Core"
parent: "Slider"
title: "Interaction"
date: "2010-10-10"
---

## Class	

You can customize the **class names** used by the component.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `class:String`                          | `in in-slider`        | Class name for activation            |	
| Option                  | `classActive:String`                          | `active`        | Class name for active            |	
| Option                  | `classOut:String`                          | `out`        | Class name for out            |	
| Option                  | `classDone:String`                          | `done`        | Class name for in animation done            |	
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |	
| Option                  | `classBefore:String`                          | `direction-before`        | Class name for left direction activation            |
| Option                  | `classAfter:String`                          | `direction-after`        | Class name for right direction activation            |
| Option                  | `classSkip:Object`                          | `false`        | Skip class activation and deactivation, can be one or more booleans ex: `{ elements: true, elementsInner: true, targets: true, targetsInner: true }`            |	

</div>	

You can start with toggled elements and targets just by adding **one of the class names for activation** to the **elements** or **targets**.	

Additionally on component initialization the class `.xt-slider-init` gets added to the **object**.	

## Pagination	

You can add pagination with an element `[data-xt-pag].xt-ignore`, it gets cloned inside the closest `.xt-slider-pagination`.	

Inside it you can use this strings that gets populated with variables:	

- `xt-num` replaced with pagination's number slide	
- `xt-tot` replaced with pagination's total slides	
- `xt-content` replaced with slide's `.xt-slide-content` **innerHTML**.	
- Classes added with slide's `[data-slide-pagination-class]` **value**.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `pagination:Query`                          | `'.xt-slider-pagination'`        | Query for pagination element             |	

</div>	

[[notePrimary]]
| `[data-xt-pag].xt-ignore` is essential to the functioning of the slider, but you can hide it using the class `.hidden`.	

<demo>	
  <demovanilla src="vanilla/components/core/slider/pagination">	
  </demovanilla>	
</demo>	

## Navigation	

You can add navigation with `[data-xt-nav="value"]` to set the amount to add (`+1`) or remove (`-1`) to the current activation index.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `navigation:Query`                          | `'[data-xt-nav]'`        | Query for navigation elements             |	

</div>	

<demo>	
  <demovanilla src="vanilla/components/core/slider/navigation">	
  </demovanilla>	
</demo>	

## Drag	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">	

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

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `drag.overflow:Function|Boolean`                          | `<function>`        | Function for drag overflow             |	

</div>	

## Wheel	

Use `wheel: { selector: 'object' }` or `wheel: { selector: Query }` to enable mousewheel navigation.	

<demo>	
  <demovanilla src="vanilla/components/core/slider/wheel">	
  </demovanilla>	
</demo>	

## Auto	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |	
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |	
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |	
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |	
| Option                  | `auto.pause:Query`                          | `'[data-xt-pag], [data-xt-nav], .xt-button'`        | Elements that pause automatic on mouseenter            |	

</div>	

[[notePrimary]]	
| Auto doesn't run if the slider is `display: none`. Start it manually when visible using [slider events](/components/core/slider/api#trigger).	

Use the [api](/components/core/slider/api#listen) and listen to events to make auto progress indicators.	

<demo>	
  <demovanilla src="vanilla/components/core/slider/progress">	
  </demovanilla>	
</demo>	

## Other	

Do not loop slides activation with `loop: false`.	

Disable the jump feature (clicking on not activated slides jumps to the slide) with `jump: false`. Jump only if the slide isn't entirely on screen.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `loop:Boolean`                          | `true`        | Loop activation            |	
| Option                  | `jump:Boolean`                          | `true`        | Clicking on targets triggers activation            |	
| Option                  | `jumpOverflow:Boolean`                          | `false`        | Jump only activates if slide overflows the dragger            |	

</div>	

<demo>	
  <demovanilla src="vanilla/components/core/slider/other">	
  </demovanilla>	
</demo>	

## Disable

If you want to **disable the component** use the `options.disabled`, besides that you can add the class `.xt-slider-disabled` to `object`, `elements` and `targets` to disable them before javascript initialization.

If you want something to automatically hide use the class `.xt-slider-ui`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `disabled:Boolean`                              | `false`                     | Disable the component           |

</div>

Example of **component disabled on desktop** with [match media](/components/core/slider/api#match-media).

<demo>
  <demovanilla src="vanilla/components/core/slider/disable">
  </demovanilla>
</demo>
