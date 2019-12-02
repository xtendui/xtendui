---
type: "Components"
badge: "Core"
parent: "Drop"
title: "Other"
date: "2000-10-01"
---

##Static

Use `.drop-container--static` to position relative to closest element with `position: relative;`.

<demo>
  <demovanilla src="vanilla/components/drop/static">
  </demovanilla>
</demo>

##Link

You can have links that triggers after toggle. Remember to use `autoDisable: false`.

If the toggle is on <code>"on": "mouseenter"</code> or <code>"on": "mousehover"</code> the link gets activated on the second touch event on touch devices.

<demo>
  <demovanilla src="vanilla/components/drop/with-link">
  </demovanilla>
  <demovanilla src="vanilla/components/drop/with-link-hover">
  </demovanilla>
</demo>

##Backdrop

Use `data-xt-drop='{ backdrop: true }'` to have a backdrop when drop opens.

<demo>
  <demovanilla src="vanilla/components/drop/backdrop">
  </demovanilla>
</demo>

##Nested

<demo>
  <demovanilla src="vanilla/components/drop/nested">
  </demovanilla>
</demo>

##Disable

To disable drop use `.drop--disable` useful within media queries.

<demo>
  <demovanilla src="vanilla/components/drop/disable">
  </demovanilla>
</demo>
