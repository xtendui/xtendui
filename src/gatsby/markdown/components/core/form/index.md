---
type: "Components"
category: "Core"
parent: "Form"
title: "Form"
description: "Form styles with multiple layouts, custom checkbox/radio, and more."
---

## Installation

Import the **component javascript** file.

```jsx
import 'xtendui/src/core/form'
```

## Customization

You can **customize this component** inside `tailwind.config.js`, check [xtendui/src/core/form.css.js](https://github.com/minimit/xtendui/blob/master/src/core/form.css.js) for default values.

```jsx
module.exports = {
  theme:{
    xtendui: {
      form: {
        components: theme => ({
          // modify components
        }),
      },
    },
  },
}
```

## Usage

Use this code to create a **form items**.

<demo>
  <demovanilla src="vanilla/components/core/form/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/form/content) and [customize layout](/components/core/form/layout).
