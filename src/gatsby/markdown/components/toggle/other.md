---
type: "Components"
badge: "Core"
parent: "Toggle"
title: "Other"
date: "2000-10-01"
---

##Event

You can specify **on** and **off** events for the toggle. Fore example `on: 'mouseenter'` `off: 'mouseleave'`. Default is `on: 'click'`.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on: String`                              | `'click'`                     | Set event to listen for activation           |
| Option                  | `off: String`                             | `false`                       | Set event to listen for deactivation if not present `options.on` deactivate when already activated          |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/event">
  </demovanilla>
</demo>

##Link

You can have links that triggers after toggle. Remember to use `autoDisable: false`.

If the toggle is on <code>"on": "mouseenter"</code> or <code>"on": "mousehover"</code> the link gets activated on the second touch event on touch devices.

<demo>
  <demovanilla src="vanilla/components/toggle/with-link">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/with-link-hover">
  </demovanilla>
</demo>

##Animation

You can animate with javascript instead of css, just use [toggle events](/components/toggle/api#events) and remember to set `durationOn: Milliseconds` and `durationOff: Milliseconds`.

<demo>
  <demovanilla src="vanilla/components/toggle/animation-js">
  </demovanilla>
</demo>

##Keyboard

Use `keyboard: { selector: 'object' }` or `keyboard: { selector : QuerySelector }` to enable keyboard navigation on focus.

<demo>
  <demovanilla src="vanilla/components/toggle/usability-keyboard">
  </demovanilla>
</demo>

##Aria

Use `aria: false` to disable aria generation, or granularly see @TODO.

<demo>
  <demovanilla src="vanilla/components/toggle/usability-aria">
  </demovanilla>
</demo>
