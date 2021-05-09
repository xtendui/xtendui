---
type: "Components"
category: "Interaction"
parent: "Scroll"
title: "Sticky"
date: "2010-10-11"
---

For **full API** see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger).

## Usage

Use the **component classes** to create a **sticky**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.xt-sticky`                     | `xt-sticky`                | Styles for sticky            |

</div>

A **sticky pinned to a scroller** has also to `pin: true` and `pinSpacing: false` to control **pinner position**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `pin:Boolean|String|Element`                          | `false`        | Pin the scroll element           |
| Option                  | `pinSpacing:Boolean|String`                          | `true`        | Add spacing for the pinned element            |

</div>

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/sticky"></div>
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
| Do not transition or transform on `.xt-sticky` when `pin: true` because of transform positioning, **transition the content instead**.

Here's an example of **complex sticky hide** when scrolling down but only after the first card.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/sticky-hide"></div>
</demo>

## Distance

Use `trigger`, `start`, `endTrigger`, `end` to control **viewport start and end**.

[[noteDefault]]
| Use `endTrigger: 'html'` and `end: 'bottom top'` to make the **end position infinite**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:String|Element`                          | `undefined`        | Scroll trigger           |
| Option                  | `start:String|Number|Function`                          | `'top bottom'`        | Start position: first argument is for trigger second argument is for scroller            |
| Option                  | `endTrigger:String|Element`                          | `false`        | End trigger           |
| Option                  | `end:String|Number|Function`                          | `'bottom top'`        | End position: first argument is for endTrigger second argument is for scroller            |

</div>

Here's an example of **complex sticky stacking**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/scroll/sticky-stack"></div>
</demo>

## Actions

@TODO SCROLLTRIGGER

## Multiple

@TODO SCROLLTRIGGER
