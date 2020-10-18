---
type: "Tests"
category: "Tests"
parent: "Sticky"
title: "Sticky"
description: "Sticky elements with complex interactions."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/core/sticky'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/sticky.css.js](https://github.com/minimit/xtendui/blob/master/src/core/sticky.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      sticky: {
        component: theme => ({
          // modify components
        }),
        utility: theme => ({
          // modify utilities
        }),
      },
    },
  },
}
```

## Usage

Use this code to create a **sticky**.

@TODO

Check subpage to [customize interaction](/components/core/sticky/interaction).
