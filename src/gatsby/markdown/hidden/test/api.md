---
type: "Hidden"
category: "Test"
parent: "Test"
title: "Api"
---

## Api

Test on event on init must log to test activation

Test add and remove.

Test activated on change > reinit > change > restart.

Test activated on change > destroy > reinit.

Test destroy remove all interaction and events.

Test one destroy and reinit and trigger 1st should execute event only one time or it open and closes on one frame after (eventOnHandler called only one time).

Test reinit multiple times, interaction should trigger events still one time per interaction (especially overlay in self mode).

Test slider api initial activation dragger position instant with no transition.

Test slider api initial activation wrap position.

Test slider api remove until 0 targets should not give errors.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/toggle/api">
  </div>
  <div class="gatsby_demo_item" data-iframe="demos/components/overlay/api">
  </div>
  <div class="gatsby_demo_item" data-iframe="demos/components/drop/api">
  </div>
  <div class="gatsby_demo_item" data-iframe="demos/components/tooltip/api">
  </div>
  <div class="gatsby_demo_item" data-iframe="demos/components/slider/api">
  </div>
</demo>
