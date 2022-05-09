---
type: "Components"
category: "Scroll"
parent: "Scrolltrigger"
title: "Fade"
date: "2010-10-12"
---

For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

## Usage

A **fade** can be achieved by assigning **ScrollTrigger** by setting [ScrollTrigger events](/components/scrolltrigger/fade#event) to **animate depending on scroll position relative to the trigger element**. And using [Gsap batch](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()) to control **multiple ScrollTriggers**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/fade"></div>
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

Here's an example of **distance fade** with **animation depending on direction**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/fade-distance"></div>
</demo>

## Event

You can use `onEnter`, `onLeave`, `onEnterBack`, `onLeaveBack`, `onToggle`, `onUpdate`, `onScrubComplete`, and `onRefresh` to **animate depending on scroll position relative to the trigger element**.

Use [Gsap stagger](https://greensock.com/docs/v3/Staggers) to control **animation stagger**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/fade-infinite"></div>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/fade-inside"></div>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/fade-outside"></div>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/fade-outside-infinite"></div>
</demo>
