---
type: "Hidden"
category: "Hidden"
parent: "Tests"
title: "Toggle"
---

## Usage

Test activation.

Test overlay close on backdrop click.

Test overlay no close clicking inside with eventLimit.

<demo>
  <demoinline src="demos/components/toggle/usage-self">
  </demoinline>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/overlay/usage-self">
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

Test initial activation on browser location, must remove initial `on` in targets.

Test hash activation.

Test browser location prev e next.

Try the demo [on a new page](/demos/components/toggle/hash#demo--toggle-hash-group-1).

Test page should not scroll on change hash.

Test overlay should reopen on browser location.

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

## Auto

Test auto.

Test window blur and focus shouldn't start if no started and should pause and resume if started.

<demo>
  <demoinline src="demos/components/toggle/progress">
  </demoinline>
  <demoinline src="demos/components/slider/progress">
  </demoinline>
</demo>

## Class Html

Test classes nested should not remove additional class.

Test close all should remove all class.

<demo>
  <demoinline src="demos/components/overlay/class-html">
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

## Api

Test [e.detail.skip = true](/components/toggle/api#trigger).
