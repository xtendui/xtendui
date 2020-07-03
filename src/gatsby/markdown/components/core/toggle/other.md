---
type: "Components"
category: "Core"
parent: "Toggle"
title: "Other"
date: "2019-03-15"
---

## Toggles

The toggle class utils are this, they toggle on activation the `display` or `visibility` property: `.toggle-block` `.toggle-flex` `.toggle-inline-flex` `.toggle-inline` `.toggle-visible` `.toggle-hidden`.

You can make a target inverse toggle (`display: none` when active), just use `.toggle-inverse`:

<demo>
  <demovanilla src="vanilla/components/core/toggle/inverse">
  </demovanilla>
</demo>

## Group

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated targets **targets**. Group's additional elements aren't counted for min and max.

<demo>
  <demovanilla src="vanilla/components/core/toggle/group">
  </demovanilla>
</demo>

## Link

You can have **element's link** that trigger after toggle.

If the toggle is on `"on": "mouseenter"` or `"on": "mousehover"` the link gets activated on the second touch event on touch devices.

<demo>
  <demovanilla src="vanilla/components/core/toggle/with-link">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/with-link-hover">
  </demovanilla>
</demo>

## Animation

You can animate with javascript instead of css, just use [toggle events](/components/core/toggle/api#events) and remember to set `durationOn: Milliseconds` and `durationOff: Milliseconds`.

<demo>
  <demovanilla src="vanilla/components/core/toggle/animation-js">
  </demovanilla>
</demo>
