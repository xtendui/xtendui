---
path: "/docs/presentation/slider/wrap"
type: "docs"
date: "2019-04-01"
title: "Wrap"
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

You can set `"drag": {"wrap": Number}` where `Number` is how many times to cover the dragger with wrap (setting `1` is the same as `true`).

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