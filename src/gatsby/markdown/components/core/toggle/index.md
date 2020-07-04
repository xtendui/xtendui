---
type: "Components"
category: "Core"
parent: "Toggle"
title: "Toggle"
description: "Toggle is the main js component that toggle classes, it's inherited by many other js components."
---

## Setup

To use this component import the **less** and **js** files accordingly:

```less
@import 'xtend-library/src/core/toggle/toggle.less';
```

```jsx
import '/src/core/toggle/toggle.js'
```

Or just import **core**:

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
| Option                  | `elements:Query`                          | `:scope > a, :scope > button`        | Elements query            |
| Option                  | `targets:Query`                          | `:scope > [class^="toggle-"], :scope > [class*=" toggle-"]`        | Targets query            |
| Option                  | `elementsInner:Query`                          | `false`        | Inner elements query (scope inside elements)            |
| Option                  | `targetsInner:Query`                          | `false`        | Inner targets query (scope inside targets)     

</div>

#### Self

You can use this markup to create a **toggle** with **no targets**.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-toggle>
    <!-- content -->
  </button>
</script>

<demo>
  <demovanilla src="vanilla/components/core/toggle/self">
  </demovanilla>
</demo>

#### Multiple

You can create a toggle with **mutiple** mode by assigning the toggle to a container element, elements and targets must be inside the container.

With multiple mode, the **targets** activated are the ones with the same index of the toggled **element**.

<script type="text/plain" class="language-markup">
  <div  data-xt-toggle="{ elements: '.my-elements', targets: '.my-targets' }">
    <button type="button" class="my-elements">
      <!-- content -->
    </button>
    <div class="toggle-block" class="my-targets">
      <!-- content -->
    </div>
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/core/toggle/multiple-default">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/multiple-custom">
  </demovanilla>
</demo>

#### Unique

The **unique** mode is useful when triggering **targets outside the scope** of the toggle.

[[notePrimary]]
| To activate **unique mode** you **need** to specify targets with **#id**.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-toggle="{ targets: '#my-target' }">
    <!-- content -->
  </button>
  <div class="toggle-block" id="my-target">
    <!-- content -->
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/core/toggle/unique-single">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/unique-same">
  </demovanilla>
</demo>

## Initialization

Initialize automatically within markup with `[data-xt-toggle="{ <options> }"]` on the **object**:

[[noteDefault]]
| **Object** is the DOM element you want to assign the component.

Or initialize with javascript:

```js
let self = new Xt.Toggle(document.querySelector('#my-object'), {
  // options
})
```

Or inizialize with **mutation observer** (preferred method):

```js
Xt.mount.push({
  matches: '#my-object',
  mount: object => {
    // init

    let self = new Xt.Toggle(object, {
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
