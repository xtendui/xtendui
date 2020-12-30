---
type: "Components"
category: "Core"
parent: "Scroll"
title: "Fade"
date: "2010-10-10"
---

## Fade

For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

Use [Gsap batch](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()) to control **multiple ScrollTriggers**.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `triggers:String|Nodes`                          | `undefined`        | Scroll triggers           |
| Option                  | `vars:Object`                          | `undefined`        | ScrollTrigger options            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/fade"></div>
</demo>

Always hide the elements only if `body:not(.xt-noscroll)` to make them **visible if browser doesn't support scroll** (crawlers, etc..).

You can use `onEnter`, `onLeave`, `onEnterBack`, `onLeaveBack`, `onToggle`, `onUpdate`, `onScrubComplete`, and `onRefresh` to **animate on certain events**.

Use [Gsap stagger](https://greensock.com/docs/v3/Staggers) to control **animation stagger**.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/fade-infinite"></div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/fade-inside"></div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/fade-outside"></div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/fade-outside-infinite"></div>
</demo>

Use `trigger`, `start`, `endTrigger`, `end` to control **viewport start and end**.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:String|Element`                          | `undefined`        | Scroll trigger           |
| Option                  | `start:String|Number|Function`                          | `'top bottom'`        | Start position: first argument is for trigger second argument is for scroller            |
| Option                  | `endTrigger:String|Element`                          | `false`        | End trigger           |
| Option                  | `end:String|Number|Function`                          | `'bottom top'`        | End position: first argument is for endTrigger second argument is for scroller            |

</div>

Here's an example of **distance fade** with **animation depending on direction**.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/fade-distance"></div>
</demo>
