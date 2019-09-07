---
path: "/core/toggle/timing"
type: "core"
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
  <demovanilla src="demos/inline/demos/toggle/timing-automatic">
  </demovanilla>
</demo>

###Duration

To set duration (if you are animating by js for example) use `"durationOn": Milliseconds` `"durationOff": Milliseconds`.

<demo>
  <demovanilla src="demos/inline/demos/toggle/timing-duration">
  </demovanilla>
</demo>

###Delay

To add a delay before duration use `"delayOn": Milliseconds` `"delayOff": Milliseconds`.

<demo>
  <demovanilla src="demos/inline/demos/toggle/timing-delay">
  </demovanilla>
</demo>

You can use a function for `"delayOn"` and `"delayOff"` like this: `function(current, total) {return current * 75}`. You can also use a string `"return current * 75"`.

<demo>
  <demovanilla src="demos/inline/demos/toggle/timing-delay-fnc">
  </demovanilla>
</demo>

###Instant

To disable queue and automatic duration use `"instant": true`.

<demo>
  <demovanilla src="demos/inline/demos/toggle/timing-instant">
  </demovanilla>
</demo>
