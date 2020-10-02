---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Overlay"
description: "Used when you need to display any content over the main page."
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
        core: {
          overlay: {
            // modify utility
          },
        },
      },
      components: {
        core: {
          overlay: {
            // modify component
          },
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
import 'xtend-library/src/core/overlay'
```

[[notePrimary]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

## Usage

Pass **elements** and **targets** options if different from defaults.

Elements listens to events, targets and inners are activated on events.

<div class="table-scroll">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `:scope > a, :scope > button`        | Elements query            |
| Option                  | `targets:Query`                          | `:scope > .overlay`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

#### Self

Use markup to create a **overlay** in **self mode**.

<script type="text/plain" class="language-markup">
  <div data-xt-overlay>
  
    <button type="button">
      <!-- content -->
    </button>
    
    <div class="overlay">
      <div class="overlay-container">
        <div class="overlay-inner">
          <!-- content -->
        </div>
      </div>
    </div>
    
  </div>
</script>

Then add and [style content](/components/core/overlay/content).

<demo>
  <demovanilla src="vanilla/components/core/overlay/usage-self">
  </demovanilla>
</demo>

#### Unique

Use markup to create a **overlay** in **unique mode**.

The **unique** mode is useful when triggering **targets outside the scope** of the component.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<script type="text/plain" class="language-markup">
  <button type="button"
    data-xt-overlay="{ targets: '#overlay--unique' }">
    <!-- content -->
  </button>
  
  <div class="overlay" id="overlay--unique">
    <div class="overlay-container">
      <div class="overlay-inner">
        <!-- content -->
      </div>
    </div>
  </div>
</script>

Then add and [style content](/components/core/overlay/content).

<demo>
  <demovanilla src="vanilla/components/core/overlay/usage-unique">
  </demovanilla>
</demo>

#### Standalone

Use markup to create a **overlay** in **standalone mode**.

Just use the class `active-overlay` if you want to automatically open, or use the [api](/components/core/overlay/api)

<script type="text/plain" class="language-markup">
<div class="overlay active-overlay" id="overlay--standalone"
  data-xt-overlay="{ on: false, instant: false }">
  <div class="overlay-container">
    <div class="overlay-inner">
      <!-- content -->
    </div>
  </div>
</div>
</script>

Then add and [style content](/components/core/overlay/content).

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/overlay/usage-standalone">
  </div>
</demo>

## Initialization

Initialize automatically within markup with `[data-xt-overlay="{ <options> }"]` on the **object** (the DOM element you assigned the component).

Or initialize with **javascript**.

```js
let self = new Xt.Overlay(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer**.

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Overlay(object, {
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
