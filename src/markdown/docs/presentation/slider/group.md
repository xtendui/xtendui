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

With `"groupMq": {MediaQuery: Number}` you set a decimal number from 0 to 1 to group the slides with a factor of the **drag.dragger** width available.

`MediaQuery` is a media query, you can have multiple, for example `"groupMq": {"all": 1, "(min-width: 768px)": 0.8}`.

By default it's set to `"groupMq": {"all": 1}`.

<demo>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/group-responsive" data-name="responsive">
  </div>
</demo>

Set to `"groupMq": false` to disable automatic grouping of slides.

<demo>
  <div class="demo_item" data-iframe="demos/docs/presentation/slider/group-false" data-name="false">
  </div>
</demo>