---
path: "/docs/interaction/toggle/timing"
type: "docs"
date: "2019-08-01"
title: "Timing"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
parent: "Toggle"
---

##Timing

###Automatic

Activation/deactivation automatically waits for the **duration** of animations and transitions on `.active` and `.out`.

<demo>
  <div class="demo_item" data-iframe="demos/docs/interaction/toggle/timing-automatic" data-name="automatic">
  </div>
</demo>

###Duration

To set duration (if you are animating by js for example) use `"durationOn": Milliseconds` `"durationOff": Milliseconds`.

<demo>
  <div class="demo_item" data-iframe="demos/docs/interaction/toggle/timing-duration" data-name="duration">
  </div>
</demo>

###Delay

To add a delay before duration use `"delayOn": Milliseconds` `"delayOff": Milliseconds`.

<demo>
  <div class="demo_item" data-iframe="demos/docs/interaction/toggle/timing-delay" data-name="delay">
  </div>
</demo>

You can use a function for `"delayOn"` and `"delayOff"` like this: `function(current, total) {return current * 75}`. You can also use a string `"return current * 75"`.

<demo>
  <div class="demo_item" data-iframe="demos/docs/interaction/toggle/timing-delayfnc" data-name="delay function">
  </div>
</demo>

###Instant

To disable queue and automatic duration use `"instant": true`.

<demo>
  <div class="demo_item" data-iframe="demos/docs/interaction/toggle/timing-instant" data-name="instant">
  </div>
</demo>
