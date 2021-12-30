---
type: "Hidden"
category: "Test"
parent: "Test"
title: "Api"
---

## Disabled

`demos/components/toggle/disabled`
- TEST nested check elements, targets length of nested parent components.
- TEST nested should disable only parent, no interactions on disabled.

<demo>
  <demoinline src="demos/components/toggle/disabled">
  </demoinline>
  <demoinline src="demos/components/drop/disabled">
  </demoinline>
  <demoinline src="demos/components/tooltip/disabled">
  </demoinline>
  <demoinline src="demos/components/card/disabled">
  </demoinline>
</demo>

`demos/components/overlay/disabled`
- TEST overlay nested classBody, desktop is disabled > resize mobile is enabled > open > resize desktop is disabled and closed.

<demo>
  <demoinline src="demos/components/overlay/disabled">
  </demoinline>
</demo>

`demos/components/slider/disabled`
- TEST slider instant position, wrap on resize and activation on resize.

<demo>
  <demoinline src="demos/components/slider/disabled">
  </demoinline>
</demo>

## Matches

`demos/components/toggle/matches`
- TEST matches.

<demo>
  <demoinline src="demos/components/toggle/matches">
  </demoinline>
  <demoinline src="demos/components/overlay/matches">
  </demoinline>
  <demoinline src="demos/components/drop/matches">
  </demoinline>
  <demoinline src="demos/components/tooltip/matches">
  </demoinline>
  <demoinline src="demos/components/slider/matches">
  </demoinline>
</demo>

## Api

`demos/components/toggle/api`
- TEST on init event, add and remove, activated on change > reinit > change > restart, activated on change > destroy > reinit, destroy remove all interactions.

[/demos/components/toggle/api](/demos/components/toggle/api).

`demos/components/overlay/api`
- TEST one destroy and reinit and trigger 1st, reinit multiple times and interaction should trigger once.

[/demos/components/overlay/api](/demos/components/overlay/api).

[/demos/components/drop/api](/demos/components/drop/api).

[/demos/components/tooltip/api](/demos/components/tooltip/api).

`demos/components/slider/api`
- TEST initial dragger position instant with no transition, initial wrap position, remove until 0 targets should not give errors.

[/demos/components/slider/api](/demos/components/slider/api).
