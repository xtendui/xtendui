---
type: "Hidden"
category: "Test"
parent: "Test"
title: "Toggle Test"
---

## Usage

`demos/components/overlay/usage-self`
- TEST initial activation, overlay no close clicking inside with eventLimit, close on backdrop click, should close with event `off.xt.trigger.overlay`.

[/demos/components/overlay/usage-self](/demos/components/overlay/usage-self).

## Interaction

`demos/components/toggle/class`
- TEST initial group activation, min max activation.

<demo>
  <demoinline src="demos/components/toggle/class">
  </demoinline>
</demo>

`demos/components/toggle/multiple-group`
- TEST group activation.

<demo>
  <demoinline src="demos/components/toggle/multiple-group">
  </demoinline>
</demo>

`demos/components/toggle/multiple-nogroupelements`
- TEST group activation.

<demo>
  <demoinline src="demos/components/toggle/multiple-nogroupelements">
  </demoinline>
</demo>

## Event

`demos/components/toggle/event`
- TEST should not close when click or mouseleave > mouseenter active elements.

<demo>
  <demoinline src="demos/components/toggle/event">
  </demoinline>
</demo>

`demos/components/drop/event`
- TEST open and close nested.

<demo>
  <demoinline src="demos/components/drop/event">
  </demoinline>
</demo>

`demos/components/toggle/prevent-event`
- TEST prevent event.

<demo>
  <demoinline src="demos/components/toggle/prevent-event">
  </demoinline>
  <demoinline src="demos/components/toggle/prevent-event-hover">
  </demoinline>
</demo>

## Hash

`demos/components/toggle/hash`
- TEST no hash must not add hash initial activation.
- TEST initial activation, hash activation, browser navigation.

[/demos/components/toggle/hash#demo--toggle-hash-group-1](/demos/components/toggle/hash#demo--toggle-hash-group-1).

`demos/components/overlay/hash`
- TEST opened with hash on page load, closing it should not block page interaction (bug with multiple elements same target), should reopen on change page browser navigation.

[/demos/components/overlay/hash#demo--overlay-hash](/demos/components/overlay/hash#demo--overlay-hash).

`demos/components/slider/hash`
- TEST initial activation, hash activation, browser navigation.

[/demos/components/slider/hash#demo--slider-hash-4](/demos/components/slider/hash#demo--slider-hash-4).

## Backdrop

`demos/components/drop/backdrop`
- TEST backdrop.
- TEST backdrop hover.

<demo>
  <demoinline src="demos/components/drop/backdrop">
  </demoinline>
  <demoinline src="demos/components/tooltip/backdrop">
  </demoinline>
</demo>

## Other

`demos/components/drop/reset-to-current`
- TEST no empty frame when switching from off to reset.

<demo>
  <demoinline src="demos/components/drop/reset-to-current">
  </demoinline>
</demo>

`demos/components/tooltip/swap-click`
- TEST activation.

<demo>
  <demoinline src="demos/components/tooltip/swap-click">
  </demoinline>
</demo>

`demos/components/tooltip/swap-toggle`
- TEST activation.

<demo>
  <demoinline src="demos/components/tooltip/swap-toggle">
  </demoinline>
</demo>

`demos/components/tooltip/prevent-overflow`
- TEST position inside boundary on first element for proper merge of popperjs options, arrow position.

<demo>
  <demoinline src="demos/components/tooltip/prevent-overflow">
  </demoinline>
</demo>

`demos/components/overlay/animation-noqueue`
- TEST focustrap should work, no console error, navigation tabs.

<demo>
  <demoinline src="demos/components/overlay/animation-noqueue">
  </demoinline>
</demo>
