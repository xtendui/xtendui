---
type: "Components"
category: "Scroll"
parent: "Scrolltrigger"
title: "Parallax"
date: "2010-10-10"
---

For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

## Usage

A **parallax** can be achieved by assigning **ScrollTrigger** to a **tween or a timeline**.

You can use `scrub: true` to animate only when scrolling, or `scrub: <Number>` for the number of seconds to animate during scrolling.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `scrub:Boolean\|Number`                          | `false`        | Scrub the animation           |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/parallax"></div>
</demo>

You can **toggle classes on activation** using `toggleClass: '<className>'`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `toggleClass:String\|Object`                          | `null`        | Toggle class with ScrollTrigger activation/deactivation             |

</div>

You can also use `once: true` to destroy ScrollTrigger as soon as the end position is reached once.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `once:Boolean`                          | `false`        | Activate only once             |

</div>

## Actions

Use `toggleActions` to control the playhead on ScrollTrigger events (**scroll to the end and up to see it in action**).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `toggleActions:String`                          | `false`        | Control animation onEnter, onLeave, onEnterBack, and onLeaveBack, you can use 'play', 'pause', 'resume', 'reset', 'restart', 'complete', 'reverse', and 'none'.           |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/parallax-actions"></div>
</demo>

## Distance

Use `trigger`, `start`, `endTrigger`, `end` to control **activation depending on position** of trigger relative to viewport.

> Use `endTrigger: 'html'` and `end: 'bottom top'` to make the **end position infinite**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:String\|Element`                          | `undefined`        | Scroll trigger           |
| Option                  | `start:String\|Number\|Function`                          | `'top bottom'`        | Start position: first argument is for trigger second argument is for scroller            |
| Option                  | `endTrigger:String\|Element`                          | `false`        | End trigger           |
| Option                  | `end:String\|Number\|Function`                          | `'bottom top'`        | End position: first argument is for endTrigger second argument is for scroller            |

</div>

Use `pin: true` to **pin the trigger** when scrolling.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `pin:Boolean\|String\|Element`                          | `false`        | **Pin the trigger** when scrolling           |
| Option                  | `pinSpacing:Boolean\|String`                          | `true`        | Add **distance spacing** for the pinned element            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/parallax-pin"></div>
</demo>

If you need **full range of animation** also on top and bottom of the page, calculate it and add to `start` and `end`.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/parallax-range"></div>
</demo>

## Multiple

You can add **multiple ScrollTriggers and animations** on the same elements.

> When multiple scrolltrigger animate the same properties use `immediateRender: false` on sequential modification of the property.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/parallax-multiple"></div>
</demo>

## Content

Here's an example of **parallax on images** with [media](/components/media).

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/parallax-image"></div>
</demo>
