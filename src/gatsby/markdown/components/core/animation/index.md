---
type: "Components"
category: "Core"
parent: "Animation"
title: "Animation"
description: "Animation components and utilities with css or javascript transitions/animations."
---

## Installation

Follow the [installation instructions](http://localhost:8888/introduction/getting-started/setup#javascript-animations) for javascript animations.

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/animation.css.js](https://github.com/minimit/xtendui/blob/master/src/core/animation.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      transitionDelay: {
        // modify transition delay
      },
      transitionDuration: {
        // modify transition duration
      },
      transitionTimingFunction: {
        // modify transition timing function
      },
      animation: {
        // modify animations
      },
      keyframes: theme => ({
        // modify keyframe
      }),
    },
    xtendui: {
      animation: {
        utility: theme => ({
          // modify utilities
        }),
      },
    },
  },
}
```

## Usage

Check subpage to [use css](/components/core/animation/css).