---
type: "Components"
category: "Core"
parent: "Drop"
title: "Drop"
description: "Highly customizable dropdowns that can contain anything you want."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions.

To customize this component in your `tailwind.config.js` file, as described in [css customization](/introduction/getting-started/setup#css-customization) instructions, use the keys like below.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      utilities: {
        overlay: {
          // modify utility
        },
      },
      components: {
        overlay: {
          // modify component
        },
      },
    }),
  })
}
```

#### Javascript

Follow the [js installation](/introduction/getting-started/setup#js-installation) instructions.

Import the component's **js** file.

```jsx
import 'xtend-library/src/core/drop/drop.js'
```

Or just import **core**.

```jsx
import 'xtend-library/src/xtend-core.js'
```

## Usage

Pass **elements** and **targets** options if different from defaults.

Elements listens to events, targets and inners are activated on events.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `false`        | Elements query            |
| Option                  | `targets:Query`                          | `:scope > .drop`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `:scope > a, :scope > button`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `:scope > .drop-inner`        | Inner targets query (scope inside targets)           |

</div>

#### Self

Use this markup to create a **self drop**.

<script type="text/plain" class="language-markup">
  <div class="drop-container" data-xt-drop>
  
    <button type="button">
      <!-- content -->
    </button>
    
    <div class="drop">
      <div class="drop-inner">
        <!-- content -->
      </div>
    </div>
    
  </div>
</script>

Then add and [style content](/components/core/drop/content-list).

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-self">
  </demovanilla>
</demo>

#### Unique

Use this markup to create a **unique drop**.

The **unique** mode is useful when triggering **targets outside the scope** of the component.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-drop="{ targets: '#drop--unique' }">
    <!-- content -->
  </button>
  
  <div class="drop-container">

    <div class="drop" id="drop--unique">
      <div class="drop-inner">
        <!-- content -->
      </div>
    </div>
    
  </div>
</script>

Then add and [style content](/components/core/drop/content-list).

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-unique">
  </demovanilla>
</demo>

#### Multiple

Use this markup to create **multiple drop**.

<script type="text/plain" class="language-markup">
  <div data-xt-drop="{ elements: ':scope > .drop-container', targets: ':scope > .drop-container > .drop' }">
  
    <div class="drop-container">
    
      <button type="button">
        <!-- content -->
      </button>
      
      <div class="drop">
        <div class="drop-inner">
          <!-- content -->
        </div>
      </div>
      
    </div>
    
    <div class="drop-container">
    
      <button type="button">
        <!-- content -->
      </button>
      
      <div class="drop">
        <div class="drop-inner">
          <!-- content -->
        </div>
      </div>
      
    </div>
    
  </div>
</script>

Then add and [style content](/components/core/drop/content-list).

<demo>
  <demovanilla src="vanilla/components/core/drop/usage-multiple">
  </demovanilla>
</demo>

## Initialization

Initialize automatically within markup with `[data-xt-drop="{ <options> }"]` on the **object**.

[[noteDefault]]
| **Object** is the DOM element you want to assign the component to.

Or initialize with **javascript**.

```js
let self = new Xt.Drop(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Drop(object, {
      // options
    })

    // unmount

    const unmount = () => {
      self.destroy()
      self = null
    }
    return unmount
  }
})
```
