---
type: "Components"
category: "Core"
parent: "Toggle"
title: "Other"
date: "2019-03-15"
---

## Prevent event

You can have **element's link** and **other events** that trigger after toggle with `preventEvent: true`.

If the toggle is on `"on": "mouseenter"` or `"on": "mousehover"` the link gets activated on the second touch event on touch devices.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `preventEvent:Boolean`                          | `false`        | Prevent interaction until activated depending on `on` and `off` events (second click or mouseenter)            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/toggle/prevent-event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/prevent-event-hover">
  </demovanilla>
</demo>

## Group

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated targets **targets**. Group's additional elements aren't counted for min and max.

<demo>
  <demovanilla src="vanilla/components/core/toggle/group">
  </demovanilla>
</demo>

## Toggles

The toggle class utils are this, they toggle on activation the `display` or `visibility` property: `.toggle` `.toggle` `.toggle-inline-flex` `.toggle-inline` `.toggle-visible` `.toggle-hidden`.

You can make a target inverse toggle (`display: none` when active), just use `.toggle-none`:

<demo>
  <demovanilla src="vanilla/components/core/toggle/inverse">
  </demovanilla>
</demo>

## Animation

You can animate with javascript instead of css, just use [toggle events](/components/core/toggle/api#events) and remember to set `durationOn: Milliseconds` and `durationOff: Milliseconds`.

<demo>
  <demovanilla src="vanilla/components/core/toggle/animation-js">
  </demovanilla>
</demo>
