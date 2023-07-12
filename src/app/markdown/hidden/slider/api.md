---
type: "Hidden"
category: "Future"
parent: "Slider"
title: "API"
date: "1980-05-05"
---

## Listen

Listen to events, for listeners use [this guideline](/components/global/javascript#listeners).

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

Access properties by getting [self object](/components/global/javascript#xt-get).

```js
let self = Xt.get({ name: 'xt-slider', el: document.querySelector('.my-container') })
const container = self.container
```

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `drag.position:Number`       | Current drag position, just set this value in `dragposition.xt.slider`             |
| Property                   | `drag.final:Number`       | Final drag position, just use this value in `dragposition.xt.slider`             |
| Property                   | `drag.ratio:Number`       | Current drag ratio from 0 to 1             |
| Property                   | `drag.ratioInverse:Number`       | Current drag inverse from 1 to 0             |
| Property                   | `drag.instant:Boolean`       | Is `true` if is dragging activation or setup activation             |

</div>
