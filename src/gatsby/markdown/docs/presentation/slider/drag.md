---
path: "/docs/presentation/slider/drag"
type: "docs"
date: "2019-04-01"
title: "Drag"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Presentation"]
parent: "Slider"
---

###Wrap

You can wrap the slides with `"drag": {"wrap": true}`.

<div class="alert">
  <div class="alert_content">
    With `"drag": {"wrap": true}` you have to set `"loop": true` and you can't use `"contain": true`
  </div>
</div>

<demo>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/wrap" data-name="wrap">
  </div>
</demo>

You can set `"drag": {"wrap": Number}` where `Number` is how many times to cover the **drag.dragger** with wrap (setting `1` is the same as `true`).

It's useful sometimes if the wrap isn't long enough when dragging.

<demo>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/wrap-number" data-name="number">
  </div>
</demo>

With `"drag": {"wrap": true, "overflow": false}` you don't have the drag overflow on wrap.

<demo>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/wrap-left" data-name="left">
  </div>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/wrap-right" data-name="right">
  </div>
</demo>

###Friction

You can set friction with `"drag": {"friction": Function}`, for example `"drag": {"friction": "return Math.pow(velocity, 0.9)"}`.

You can disable friction with `"drag": {"friction": false}`.

<demo>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/friction-false" data-name="false">
  </div>
</demo>

###Overflow

You can set overflow with `"drag": {"overflow": Function}`, for example `"drag": {"overflow": "return Math.pow(overflow, 0.73)"}`.

###Drag

You can disable the drag transform position while dragging the **drag.dragger** with `"drag": {"drag": false}`.

Useful when you want to manually set the drag transform position.

<demo>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/transform-false" data-name="false">
  </div>
</demo>
