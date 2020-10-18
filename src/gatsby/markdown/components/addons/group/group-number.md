---
type: "Components"
category: "Addons"
parent: "Group"
title: "number"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/addons/group-number'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/addons/group-number.css.js](https://github.com/minimit/xtendui/blob/master/src/addons/group-number.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      'group-number': {
        components: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use this code to create a **group number**.

<demo>
  <demovanilla src="vanilla/components/addons/group-number">
  </demovanilla>
</demo>
