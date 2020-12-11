---
type: "Components"
category: "Addons"
parent: "Form"
title: "Group Number"
description: "Input number with list group and javascript for and effective interaction."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/addons/groupnumber'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/groupnumber.css.js](https://github.com/minimit/xtendui/blob/master/src/addons/groupnumber.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      'groupnumber': {
        component: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use this code to create a **list group number**.

<demo>
  <demovanilla src="vanilla/components/addons/form/groupnumber">
  </demovanilla>
</demo>
