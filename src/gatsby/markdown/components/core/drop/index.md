---
type: "Components"
category: "Core"
parent: "Drop"
title: "Drop"
description: "Highly customizable dropdowns that can contain anything you want."
---

## Setup

To use this component import the **less** and **js** files accordingly:

```less
@import 'xtend-library/src/core/drop/drop.less';
```

```jsx
import '/src/core/drop/drop.js'
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

## Usage

Set `elements` `targets` `elementsInner` `targetsInner`, elements are responding to events, targets are activated on events.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `false`        | Elements query            |
| Option                  | `targets:Query`                          | `:scope > .drop`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `:scope > a, :scope > button`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `:scope > .drop-inner`        | Inner targets query (scope inside targets)           |

</div>

#### Unique

Use this markup to create a unique **drop**.

<script type="text/plain" class="language-markup">
  <div class="drop-container" data-xt-drop>
    <button type="button">
      <!-- content -->
    </button>
    <div class="drop drop-default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <!-- content -->
        </div>
      </div>
    </div>
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/core/drop/unique">
  </demovanilla>
</demo>

#### Multiple

Use this markup to create multiple **drop**.

The **multiple** mode is useful when you want special animations on more than one drop on interaction (see [themes](/themes/by-component/drop)). 

<script type="text/plain" class="language-markup">
  <div data-xt-drop="{ elements: '.drop-container', targets: '.drop-container > .drop' }">
  
    <div class="drop-container">
      <button type="button">
        <!-- content -->
      </button>
      <div class="drop drop-default">
        <div class="drop-inner">
          <div class="drop-design"></div>
          <div class="drop-content">
            <!-- content -->
          </div>
        </div>
      </div>
    </div>
    
    <div class="drop-container">
      <button type="button">
        <!-- content -->
      </button>
      <div class="drop drop-default">
        <div class="drop-inner">
          <div class="drop-design"></div>
          <div class="drop-content">
            <!-- content -->
          </div>
        </div>
      </div>
    </div>
    
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/core/drop/multiple">
  </demovanilla>
</demo>

## Initialization

Initialize automatically within markup with `[data-xt-drop="{ <options> }"]` on the **object**:

[[noteDefault]]
| **Object** is the DOM element you want to assign the component.

Or initialize with javascript:

```js
let self = new Xt.Drop(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer** (preferred method):

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
