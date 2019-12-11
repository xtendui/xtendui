---
type: "Components"
badge: "Core"
parent: "Toggle"
title: "Other"
date: "2000-10-01"
---

## Group

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated targets **targets**. Group's additional elements aren't counted for min and max.

<demo>
  <demovanilla src="vanilla/components/toggle/group">
  </demovanilla>
</demo>

## Link

You can have links that triggers after toggle. Remember to use `autoDisable: false`.

If the toggle is on <code>"on": "mouseenter"</code> or <code>"on": "mousehover"</code> the link gets activated on the second touch event on touch devices.

<demo>
  <demovanilla src="vanilla/components/toggle/with-link">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/with-link-hover">
  </demovanilla>
</demo>

## Animation

You can animate with javascript instead of css, just use [toggle events](/components/toggle/api#events) and remember to set `durationOn: Milliseconds` and `durationOff: Milliseconds`.

<demo>
  <demovanilla src="vanilla/components/toggle/animation-js">
  </demovanilla>
</demo>

## Keyboard

Use `keyboard: { selector: 'object' }` or `keyboard: { selector : QuerySelector }` to enable keyboard navigation on focus.

<demo>
  <demovanilla src="vanilla/components/toggle/usability-keyboard">
  </demovanilla>
</demo>

## Aria

Use `aria: false` to disable aria generation, or granularly see @TODO.

<demo>
  <demovanilla src="vanilla/components/toggle/usability-aria">
  </demovanilla>
</demo>
