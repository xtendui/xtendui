---
type: "Components"
category: "Scroll"
parent: "Scrolltrigger"
title: "Sticky"
date: "2010-10-11"
---

For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

## Usage

A **sticky** can be achieved by assigning **ScrollTrigger** with `pin: true` and `pinSpacing: false`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `pin:Boolean\|String\|Element`                          | `false`        | **Pin the trigger** when scrolling           |
| Option                  | `pinSpacing:Boolean\|String`                          | `true`        | Add **distance spacing** for the pinned element            |

</div>

Use the **component classes** to create a **sticky**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-sticky`                     | `xt-sticky`                | Styles for sticky            |
| Component                  | `.xt-sticky.xt-sticky-nozindex`                     | `xt-sticky xt-sticky-nozindex`                | Do not set `z-index` for this sticky             |
| Component                  | `.xt-sticky.xt-sticky-noheight`                     | `xt-sticky xt-sticky-noheight`                | Do not set `height` and `maxHeight` for this sticky             |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/sticky"></div>
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

Here's an example of **complex sticky stacking**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/sticky-stack"></div>
</demo>

## Event

You can use `onEnter`, `onLeave`, `onEnterBack`, `onLeaveBack`, `onToggle`, `onUpdate`, `onScrubComplete`, and `onRefresh` to **animate on certain events**.

> Do not transition or transform on `.xt-sticky` when `pin: true` because of transform positioning, **transition the content instead**.

Here's an examples of **sticky that hides depending on scroll direction**.

<demo>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/sticky-hide"></div>
  <div class="gatsby_demo_item" data-iframe="demos/components/scrolltrigger/sticky-hide-sub"></div>
</demo>
