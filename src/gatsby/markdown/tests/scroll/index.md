---
type: "Tests"
category: "Tests"
parent: "Scroll"
title: "Scroll"
description: "Content animation when you scroll the page, fade in elements, parallax."
---

## Installation

This component uses [Gsap ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger), follow [gsap setup](/introduction/getting-started/setup#javascript-gsap) to **install and use gsap**.

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/scroll.css.js](https://github.com/minimit/xtendui/blob/master/src/core/scroll.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      scroll: {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Start

Use `trigger` and `start` to control sticky starting position (see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger)).

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `trigger:String|Element`                          | `false`        | Trigger           |
| Option                  | `start:String|Number|Function`                          | `'top bottom'`        | Start position: first argument is for trigger second argument is for scroller            |

</div>

Use `endTrigger: 'html'` and `end: 'bottom top'` to make the scroll activation infinite.

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/position"></div>
</demo>

Use `endTrigger` and `end` to control sticky ending position (see [Gsap ScrollTrigger API](https://greensock.com/docs/v3/Plugins/ScrollTrigger)).

<div class="table-overflow">


|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `endTrigger:String|Element`                          | `false`        | End trigger           |
| Option                  | `end:String|Number|Function`                          | `'bottom top'`        | End position: first argument is for endTrigger second argument is for scroller            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/limit"></div>
</demo>
