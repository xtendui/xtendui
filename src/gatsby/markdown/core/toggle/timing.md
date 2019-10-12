---
type: "Core"
parent: "Toggle"
title: "Timing"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

##Timing

###Automatic

Activation/deactivation automatically waits for the **duration** of animations and transitions on `.active` and `.out`.

<demo>
  <demovanilla src="inline/core/toggle/timing-automatic">
  </demovanilla>
</demo>

###Duration

To set duration (if you are animating by js for example) use `"durationOn": Milliseconds` `"durationOff": Milliseconds`.

<demo>
  <demovanilla src="inline/core/toggle/timing-duration">
  </demovanilla>
</demo>

###Delay

To add a delay before duration use `"delayOn": Milliseconds` `"delayOff": Milliseconds`.

<demo>
  <demovanilla src="inline/core/toggle/timing-delay">
  </demovanilla>
</demo>

You can use a function for `"delayOn"` and `"delayOff"` for example `function(current, total) {return Math.min((total - current) * 150, 300)}`.

<demo>
  <demovanilla src="inline/core/toggle/timing-delay-fnc">
  </demovanilla>
</demo>

###Instant

To disable queue and automatic duration use `"instant": true`.

<demo>
  <demovanilla src="inline/core/toggle/timing-instant">
  </demovanilla>
</demo>
