---
type: "Core"
parent: "Toggle"
title: "Event"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["300-Interaction"]
---

##Event

You can specify **on** and **off** events for the toggle. Default is `"on": "click"`.

`"on": "mouseenter"` `"off": "mouseleave"`

<demo>
  <demovanilla src="demos/inline/demos/toggle/event">
  </demovanilla>
</demo>

If you set `"on": "mouseenter"` or `"on": "mousehover"`, automatically when the **element** have links on the tag or inside, they get triggered only on double click when using touch devices

<demo>
  <demovanilla src="demos/inline/demos/toggle/touch-links">
  </demovanilla>
</demo>
