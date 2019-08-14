---
path: "/docs/interaction/toggle/class"
type: "docs"
date: "2019-02-01"
title: "Class"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
parent: "Toggle"
---

##Class

Toggled class is by default `.active`.

You can specify classes to toggle with `"class": "my-class"`.

<demo>
  <div class="demo_item" data-iframe="demos/docs/interaction/toggle/class" data-name="class">
  </div>
</demo>

You can start with toggled elements and targets just by adding all of the classes to the **elements** or **targets** you want activated. Following this activation the **min** option will take
  effect.

If you want to restart the component with the initial starting element use `self.initStart();`.

<demo>
  <div class="demo_item" data-iframe="demos/docs/interaction/toggle/start" data-name="start">
  </div>
</demo>
