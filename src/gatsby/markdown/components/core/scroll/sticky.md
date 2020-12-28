---
type: "Components"
category: "Core"
parent: "Scroll"
title: "Sticky"
date: "2010-10-10"
---

## Sticky

Use the **component classes** to create a **sticky**.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.scroll-sticky`                     | `scroll-sticky`                | Styles for sticky            |

</div>

A **sticky pinned to a scroller** has also to `pin: true` and `pinSpacing: false` to control sticky **pinner position**.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `pin:Boolean|String|Element`                          | `false`        | Pin the scroll element           |
| Option                  | `pinSpacing:Boolean|String`                          | `true`        | Add spacing for the pinned element            |

</div>

Use `trigger`, `start`, `endTrigger`, `end` to control sticky **starting and ending position**.

Use `endTrigger: 'html'` and `end: 'bottom top'` to make the **end position infinite**.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:String|Element`                          | `false`        | Trigger           |
| Option                  | `start:String|Number|Function`                          | `'top bottom'`        | Start position: first argument is for trigger second argument is for scroller            |
| Option                  | `endTrigger:String|Element`                          | `false`        | End trigger           |
| Option                  | `end:String|Number|Function`                          | `'bottom top'`        | End position: first argument is for endTrigger second argument is for scroller            |

</div>

[[notePrimary]]
| For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/sticky"></div>
</demo>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/sticky-complex"></div>
</demo>
