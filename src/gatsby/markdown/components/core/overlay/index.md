---
type: "Components"
category: "Core"
parent: "Overlay"
title: "Overlay"
description: "Used when you need to display any content over the main page, not only modals."
---

## Setup

To use this component import the **less** and **js** files accordingly:

```less
@import 'xtend-library/src/core/overlay/overlay.less';
```

```jsx
import '/src/core/overlay/overlay.js'
```

Or just import **core**:

```less
@import 'xtend-library/src/xtend-core.less';
```

```jsx
import '/src/xtend-core.js'
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

[[notePrimary]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

## Usage

Set `elements` `targets` `elementsInner` `targetsInner`, elements are responding to events, targets are activated on events.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `:scope > a, :scope > button`        | Elements query            |
| Option                  | `targets:Query`                          | `:scope > .overlay`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

#### Self

Use this markup to create a **self overlay**.

<script type="text/plain" class="language-markup">
  <div data-xt-overlay>
    <button type="button">
      <!-- content -->
    </button>
    <div class="overlay overlay-default">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/core/overlay/self">
  </demovanilla>
</demo>

#### Unique

Use this markup to create a **unique overlay**.

The **unique** mode is useful when triggering **targets outside the scope** of the component.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<script type="text/plain" class="language-markup">
  <button type="button"
    data-xt-overlay="{ targets: '#overlay--unique' }">
    <!-- content -->
  </button>
  <div class="overlay overlay-default" id="overlay--unique">
    <div class="overlay-container">
      <div class="overlay-inner">
        <div class="overlay-design"></div>
        <!-- content -->
      </div>
    </div>
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/core/overlay/unique">
  </demovanilla>
</demo>

#### Standalone

Use this markup to create a **standalone overlay**.

Just use the class `active-overlay` if you want to automatically open, or use the [api](/components/overlay/api)

<script type="text/plain" class="language-markup">
<div class="overlay overlay-default active-overlay" id="overlay--standalone"
  data-xt-overlay="{ on: false, instant: false }">
  <div class="overlay-container">
    <div class="overlay-inner">
      <div class="overlay-design"></div>
      <!-- content -->
    </div>
  </div>
</div>
</script>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/core/overlay/standalone">
  </div>
</demo>

## Initialization

Initialize automatically within markup with `[data-xt-overlay="{ <options> }"]` on the **object**:

[[noteDefault]]
| **Object** is the DOM element you want to assign the component.

Or initialize with javascript:

```js
let self = new Xt.Overlay(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer** (preferred method):

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
