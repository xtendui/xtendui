---
type: "Hidden"
category: "Future"
parent: "Slider"
title: "API"
date: "1980-05-05"
---

## Listen

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `dragstart.xt.slider`           | `dragger` | Drag start event             |
| Event                   | `dragend.xt.slider`           | `dragger` | Drag end event             |
| Event                   | `drag.xt.slider`           | `dragger` | Drag event             |
| Event                   | `dragposition.xt.slider`           | `dragger` | Drag position event             |
| Event                   | `dragreset.xt.slider`           | `dragger` | Drag reset event             |

</div>

## Properties

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `drag._left:Number`       | Dragger left position on viewport             |
| Property                   | `drag._position:Number`       | Current drag position, just set this value in `dragposition.xt.slider`             |
| Property                   | `drag._final:Number`       | Final drag position, just use this value in `dragposition.xt.slider`             |
| Property                   | `drag._ratio:Number`       | Current drag ratio from 0 to 1             |
| Property                   | `drag._ratioInverse:Number`       | Current drag inverse from 1 to 0             |
| Property                   | `drag._instant:Boolean`       | Is `true` if is dragging position or setup position 
| Property                   | `drag._dragging:Boolean`       | Is `true` if is dragging position
| Property                   | `wheel._wheeling:Boolean`       | Is `true` if is wheeling position

</div>

## Methods

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.dragstart({ clientX:Number })`                          | Manually activate **drag start**             |
| Method                  | `self.dragmove({ clientX:Number }, { keepActivated:Boolean = true, setup:Boolean = false })`                          | Manually activate **drag move**             |
| Method                  | `self.dragend({ clientX:Number })`                          | Manually activate **drag end**             |
| Method                  | `self.wheelEvent({ factor:Number = -1, timeout:Number = 250, threshold:Number = 10 }, e:Event)`                          | Attach wheel event to drag, returns `Boolean` if not overflowing             |

</div>
