---
type: "Components"
category: "Addons"
parent: "Group"
title: "number"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Setup

#### Javascript

Follow the [javascript installation](/introduction/getting-started/setup#javascript-installation) instructions and **import the component javascript** file.

```jsx
import 'xtend-ui/src/addons/group-number'
```

## Usage

Use this code to create a **group number**.

<script type="text/plain" class="language-markup">
  <div data-xt-group-number>

    <button type="button" data-xt-group-number-step="<value to add on click>">
      <!-- content -->
    </button>

    <input type="number" value="<initial value>" min="<min value>" max="<max value>">

  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/addons/group-number">
  </demovanilla>
</demo>
