---
type: "Hidden"
category: "Test"
parent: "Test"
title: "Toggle"
---

## Usage

`demos/components/overlay/usage-self`
- TEST initial activation and overlay no close clicking inside with eventLimit, close on backdrop click, should close with event `off.xt.trigger.overlay`.

[/demos/components/overlay/usage-self](/demos/components/overlay/usage-self).

## Interaction

TEST initial and group activation.

TEST multiple raf should always have `on` class until event `init.xt` and then should have `in` class.

TEST initial custom activation.

<demo>
  <demoinline src="demos/components/toggle/unique-nogroupelements">
  </demoinline>
  <demoinline src="demos/components/toggle/multiple-group">
  </demoinline>
  <demoinline src="demos/components/toggle/multiple-nogroupelements">
  </demoinline>
  <demoinline src="demos/components/toggle/class">
  </demoinline>
  <demoinline src="demos/components/toggle/class-custom">
  </demoinline>
</demo>

## Event

TEST toggle mouse should not close when clicking opened elements.

TEST drop open and close nested.

TEST tooltip open and close nested.

<demo>
  <demoinline src="demos/components/toggle/event">
  </demoinline>
  <demoinline src="demos/components/drop/event">
  </demoinline>
  <demoinline src="demos/components/tooltip/event">
  </demoinline>
</demo>

TEST prevent event.

<demo>
  <demoinline src="demos/components/toggle/prevent-event">
  </demoinline>
  <demoinline src="demos/components/toggle/prevent-event-hover">
  </demoinline>
</demo>

## Hash

TEST no hash must not add hash initial activation.

TEST initial activation on page load (browser location prev next), must remove initial `on` in targets.

TEST hash activation.

TEST change page (browser location prev next).

[/demos/components/toggle/hash#demo--toggle-hash-group-1](/demos/components/toggle/hash#demo--toggle-hash-group-1).

TEST page should not scroll on change hash.

TEST overlay should reopen on change page (browser location prev next).

TEST overlay opened with hash on page load, closing it should not block page interaction (bug with multiple elemens same target).

[/demos/components/overlay/hash#demo--overlay-hash](/demos/components/overlay/hash#demo--overlay-hash).

[/demos/components/slider/hash#demo--slider-hash-4](/demos/components/slider/hash#demo--slider-hash-4).

## Backdrop

TEST backdrop and no backdrop click.

<demo>
  <demoinline src="demos/components/overlay/variant">
  </demoinline>
  <demoinline src="demos/components/drop/backdrop">
  </demoinline>
  <demoinline src="demos/components/tooltip/backdrop">
  </demoinline>
</demo>

## Static

TEST position and visibility.

<demo>
  <demoinline src="demos/components/drop/static">
  </demoinline>
  <demoinline src="demos/components/tooltip/static">
  </demoinline>
</demo>

## Class Body

TEST classes nested should not remove additional class.

TEST close all should remove all class.

<demo>
  <demoinline src="demos/components/overlay/class-body">
  </demoinline>
</demo>

## Other

TEST no empty frame when switching from off to reset.

<demo>
  <demoinline src="demos/components/drop/reset-to-current">
  </demoinline>
</demo>

TEST activation.

TEST animation fast duration with and without `data-xt-duration`.

<demo>
  <demoinline src="demos/components/tooltip/swap-click">
  </demoinline>
  <demoinline src="demos/components/tooltip/swap-toggle">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-fast">
  </demoinline>
</demo>

TEST (not in fullscreen or it doesn't test boundary) arrow position and position inside boundary on first element for proper merge of popperjs options.

<demo>
  <demoinline src="demos/components/tooltip/prevent-overflow">
  </demoinline>
</demo>

TEST focustrap should work and not give console error.

<demo>
  <demoinline src="demos/components/overlay/animation-queue">
  </demoinline>
</demo>

TEST data-xt-group-same no flick on change slide (bug with classes activation).

<demo>
  <demoinline src="demos/components/slider/animation">
  </demoinline>
</demo>

<demo>
  <demoinline src="demos/components/slider/animation-queue">
  </demoinline>
</demo>
