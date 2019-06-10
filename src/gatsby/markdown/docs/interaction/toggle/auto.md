---
path: "/docs/interaction/toggle/auto"
type: "docs"
date: "2019-05-01"
title: "Auto"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
parent: "Toggle"
---

##Auto

###Time

`"auto": {"time": Milliseconds}`.

<demo>
  <demovanilla src="demos/docs/interaction/toggle/auto-time" name="time">
  </demovanilla>
</demo>

###Step

`"auto": {"step": Number}`.

<demo>
  <demovanilla src="demos/docs/interaction/toggle/auto-step" name="step">
  </demovanilla>
</demo>

###Initial

`"auto": {"initial": Boolean}`.

<demo>
  <demovanilla src="demos/docs/interaction/toggle/auto-initial" name="initial">
  </demovanilla>
</demo>

###Loop

`"auto": {"loop": Boolean}`.

<demo>
  <demovanilla src="demos/docs/interaction/toggle/auto-loop" name="loop">
  </demovanilla>
</demo>

###Pause

Pause on mouseenter, resume on mouseleave with `"auto": {"pause": Query}`.

<demo>
  <demovanilla src="demos/docs/interaction/toggle/auto-pause" name="pause">
  </demovanilla>
</demo>

###Inverse

Pause on mouseenter, resume on mouseleave with `"auto": {"inverse": Boolean}`.

<demo>
  <demovanilla src="demos/docs/interaction/toggle/auto-inverse" name="inverse">
  </demovanilla>
</demo>

###Min and Max

<demo>
  <demovanilla src="demos/docs/interaction/toggle/auto-minmax" name="minmax">
  </demovanilla>
</demo>

###Progress

Use javascript events `'start.xt.auto'` `'stop.xt.auto'` `'pause.xt.auto'`.

<demo>
  <div class="demo_item" data-iframe="demos/docs/interaction/toggle/progress" data-name="progress">
  </div>
</demo>
