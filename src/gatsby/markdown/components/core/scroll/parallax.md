---
type: "Components"
category: "Core"
parent: "Scroll"
title: "Parallax"
date: "2010-10-10"
---

## Parallax

For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

A parallax effect can be achieved by assigning **ScrollTrigger** to a **tween or a timeline** and by setting `scrub: true` to animate only when scrolling, or `scrub: <Number>` for the number of seconds to animate during scrolling.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `scrub:Boolean|Number`                          | `false`        | Scrub the animation           |

</div>

Use `trigger`, `start`, `endTrigger`, `end` to control **viewport start and end**.

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:String|Element`                          | `undefined`        | Scroll trigger           |
| Option                  | `start:String|Number|Function`                          | `'top bottom'`        | Start position: first argument is for trigger second argument is for scroller            |
| Option                  | `endTrigger:String|Element`                          | `false`        | End trigger           |
| Option                  | `end:String|Number|Function`                          | `'bottom top'`        | End position: first argument is for endTrigger second argument is for scroller            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/scroll/parallax"></div>
</demo>
