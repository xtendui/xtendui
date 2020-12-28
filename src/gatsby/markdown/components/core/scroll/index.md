---
type: "Components"
category: "Core"
parent: "Scroll"
title: "Scroll"
description: "Content interactions and animations when you scroll the page, sticky pinned elements, fade elements, parallax."
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

# Usage

Use this code to create a **card**.

@Todo

Check subpage to [scroll sticky](/components/core/scroll/sticky) and [scroll fade](/components/core/scroll/fade) and [scroll parallax](/components/core/scroll/parallax).
