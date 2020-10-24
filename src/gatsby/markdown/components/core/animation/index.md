---
type: "Components"
category: "Core"
parent: "Animation"
title: "Animation"
description: "Animation components and utilities."
---

## Installation

Follow the [installation instructions](http://localhost:8888/introduction/getting-started/installation#javascript-animations) for javascript animations.

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/animation.css.js](https://github.com/minimit/xtendui/blob/master/src/core/animation.css.js) for default values.

```jsx
module.exports = {
  theme:{
    extend: {
      transitionTimingFunction: {
        // add transition timing functions
      },
      keyframes: theme => ({
        // add keyframe animations
      }),
    },
  },
}
```

## Usage

Check subpage to [use css](/components/core/animation/css).
