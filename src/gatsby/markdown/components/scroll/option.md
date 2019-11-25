---
type: "Components"
badge: "Extensions"
parent: "Scroll"
title: "Option"
date: "2000-02-01"
---

##Mode

You can set scroll mode with **less mixins**.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-infinite">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-scroll">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-visible">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-responsive">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/mode-block">
  </div>
</demo>

##Direction

Animate with inverse `.inverse` or `self.detail.inverse`.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/direction">
  </div>
</demo>

##Distance

Use `distance: Number` activation and deactivation distance. For percent use `distance: 'Number%'`.

The default **distance** is `distance: '20%'`.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/distance">
  </div>
</demo>

##Delay

You can use a function for `delayOn` and `delayOff` for example `function(current, total) {return Math.min((total - current) * 150, 300)}`.

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/scroll/delay">
  </div>
</demo>
