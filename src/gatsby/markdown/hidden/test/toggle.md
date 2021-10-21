---
type: "Hidden"
category: "Test"
parent: "Test"
title: "Toggle"
---

## Usage

Test activation.

Test overlay close on backdrop click.

Test overlay no close clicking inside with eventLimit.

Test overlay should close with event 'off.xt.trigger.overlay'.

<demo>
  <demoinline src="demos/components/toggle/usage-self">
  </demoinline>
  <div class="gatsby_demo_item" data-iframe="demos/components/overlay/usage-self">
  </div>
  <demoinline src="demos/components/drop/usage-self">
  </demoinline>
  <demoinline src="demos/components/tooltip/usage-self">
  </demoinline>
</demo>

Test activation and group activation.

<demo>
  <demoinline src="demos/components/toggle/usage-unique">
  </demoinline>
  <demoinline src="demos/components/toggle/unique-nogroupelements">
  </demoinline>
  <demoinline src="demos/components/toggle/multiple-group">
  </demoinline>
  <demoinline src="demos/components/toggle/multiple-nogroupelements">
  </demoinline>
</demo>

## Interaction

Test initial group activation.

Test initial custom activation.

Test multiple raf should always have `on` class until event `init.xt` and then should have `in` class.

<demo>
  <demoinline src="demos/components/toggle/class">
  </demoinline>
  <demoinline src="demos/components/toggle/class-custom">
  </demoinline>
</demo>

## Event

Test toggle mouse should not close when clicking opened elements.

Test drop open and close nested.

Test tooltip open and close nested.

<demo>
  <demoinline src="demos/components/toggle/event">
  </demoinline>
  <demoinline src="demos/components/drop/event">
  </demoinline>
  <demoinline src="demos/components/tooltip/event">
  </demoinline>
</demo>

Test prevent event.

<demo>
  <demoinline src="demos/components/toggle/prevent-event">
  </demoinline>
  <demoinline src="demos/components/toggle/prevent-event-hover">
  </demoinline>
</demo>

## Hash

Test no hash must not add hash initial activation.

Test initial activation on page load (browser location prev next), must remove initial `on` in targets.

Test hash activation.

Test change page (browser location prev next).

Try the demo [on a new page](/demos/components/toggle/hash#demo--toggle-hash-group-1).

Test page should not scroll on change hash.

Test overlay should reopen on change page (browser location prev next).

Test overlay opened with hash on page load, closing it should not block page interaction (bug with multiple elemens same target).

Try the demo [on a new page](/demos/components/overlay/hash#demo--overlay-hash).

Try the demo [on a new page](/demos/components/slider/hash#demo--slider-hash-4).

## Backdrop

Test backdrop and no backdrop click.

<demo>
  <demoinline src="demos/components/overlay/variant">
  </demoinline>
  <demoinline src="demos/components/drop/backdrop">
  </demoinline>
  <demoinline src="demos/components/tooltip/backdrop">
  </demoinline>
</demo>

## Static

Test position and visibility.

<demo>
  <demoinline src="demos/components/drop/static">
  </demoinline>
  <demoinline src="demos/components/tooltip/static">
  </demoinline>
</demo>

## Class Body

Test classes nested should not remove additional class.

Test close all should remove all class.

<demo>
  <demoinline src="demos/components/overlay/class-body">
  </demoinline>
</demo>

## Other

Test no empty frame when switching from off to reset.

<demo>
  <demoinline src="demos/components/drop/reset-to-current">
  </demoinline>
</demo>

Test activation.

Test animation fast duration with and without `data-xt-duration`.

<demo>
  <demoinline src="demos/components/tooltip/swap-click">
  </demoinline>
  <demoinline src="demos/components/tooltip/swap-toggle">
  </demoinline>
  <demoinline src="demos/components/tooltip/animation-fast">
  </demoinline>
</demo>

Test (not in fullscreen or it doesn't test boundary) arrow position and position inside boundary on first element for proper merge of popperjs options.

<demo>
  <demoinline src="demos/components/tooltip/prevent-overflow">
  </demoinline>
</demo>
