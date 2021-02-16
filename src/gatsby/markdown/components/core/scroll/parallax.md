---
type: "Components"
category: "Core"
parent: "Scroll"
title: "Parallax"
date: "2010-10-10"
---

## Usage

For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

A parallax effect can be achieved by assigning **ScrollTrigger** to a **tween or a timeline** and by setting `scrub: true` to animate only when scrolling, or `scrub: <Number>` for the number of seconds to animate during scrolling.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `scrub:Boolean|Number`                          | `false`        | Scrub the animation           |

</div>

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/core/scroll/parallax"></div>
</demo>

## Toggle Actions

Use `toggleActions` to control the playhead on ScrollTrigger events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `toggleActions:String`                          | `false`        | Control animation onEnter, onLeave, onEnterBack, and onLeaveBack, you can use 'play', 'pause', 'resume', 'reset', 'restart', 'complete', 'reverse', and 'none'.           |

</div>

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/core/scroll/parallax-actions"></div>
</demo>

## Multiple

You can add **multiple ScrollTriggers and animations** on the same elements.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/core/scroll/parallax-multiple"></div>
</demo>

## Distance

Use `trigger`, `start`, `endTrigger`, `end` to control **viewport start and end**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:String|Element`                          | `undefined`        | Scroll trigger           |
| Option                  | `start:String|Number|Function`                          | `'top bottom'`        | Start position: first argument is for trigger second argument is for scroller            |
| Option                  | `endTrigger:String|Element`                          | `false`        | End trigger           |
| Option                  | `end:String|Number|Function`                          | `'bottom top'`        | End position: first argument is for endTrigger second argument is for scroller            |

</div>

If you need **full range of animation** also on top and bottom of the page, calculate it and add to `start` and `end`.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/core/scroll/parallax-range"></div>
</demo>

## Other

You can **toggle classes** with ScrollTrigger using `toggleClass: '<className>'`.

You can also use `once: true` to destroy ScrollTrigger as soon as the end position is reached once.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `once:Boolean`                          | `false`        | Activate only once             |
| Option                  | `toggleClass:String|Object`                          | ``        | Toggle class with ScrollTrigger activation/deactivation             |

</div>
