---
path: "/docs/presentation/slider/group"
type: "docs"
date: "2019-01-01"
title: "Group"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["400-Presentation"]
parent: "Slider"
---

###Group

With `"groupMq": {MediaQuery: Number}` you can set a decimal number from 0 to 1 for the available width factor for groupMq. Set to `false` to disable automatic grouping of slides.
  
If a slide is bigger, it takes up a single slide anyway.

it's based on the current slides visible inside the slider, it get recalculated also on responsive.

<demo>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/group-available" data-name="available">
  </div>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/group-disable" data-name="disable">
  </div>
</demo>