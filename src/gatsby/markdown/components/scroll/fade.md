---
type: "Components"
category: "Interaction"
parent: "Scroll"
title: "Fade"
date: "2010-10-12"
---

For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

## Usage

Use [Gsap batch](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()) to control **multiple ScrollTriggers**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/fade"></div>
</demo>

You can **toggle classes** with ScrollTrigger using `toggleClass: '<className>'`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `toggleClass:String|Object`                          | `null`        | Toggle class with ScrollTrigger activation/deactivation             |

</div>

You can also use `once: true` to destroy ScrollTrigger as soon as the end position is reached once.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `once:Boolean`                          | `false`        | Activate only once             |

</div>

## Event

You can use `onEnter`, `onLeave`, `onEnterBack`, `onLeaveBack`, `onToggle`, `onUpdate`, `onScrubComplete`, and `onRefresh` to **animate on certain events**.

[[notePrimary]]
| Always hide the elements only if `body:not(.xt-noscroll)` to make them **visible if browser doesn't support scroll** (e.g.: crawlers).

Use [Gsap stagger](https://greensock.com/docs/v3/Staggers) to control **animation stagger**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/fade-infinite"></div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/fade-inside"></div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/fade-outside"></div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/fade-outside-infinite"></div>
</demo>

## Distance

Use `trigger`, `start`, `endTrigger`, `end` to control **viewport start and end**.

Use `endTrigger: 'html'` and `end: 'bottom top'` to make the **end position infinite**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:String|Element`                          | `undefined`        | Scroll trigger           |
| Option                  | `start:String|Number|Function`                          | `'top bottom'`        | Start position: first argument is for trigger second argument is for scroller            |
| Option                  | `endTrigger:String|Element`                          | `false`        | End trigger           |
| Option                  | `end:String|Number|Function`                          | `'bottom top'`        | End position: first argument is for endTrigger second argument is for scroller            |

</div>

Here's an example of **distance fade** with **animation depending on direction**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/fade-distance"></div>
</demo>

## Dynamic Content

If you need to add **[Gsap batch](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()) or other code on live content**, just **check if already done for content added dinamically**.
