---
type: "Components"
badge: "Core"
parent: "Overlay"
title: "API"
date: "2000-01-01"
---

## Initialization

Initialize automatically within markup with `[data-xt-overlay="{ <options> }"]`.

Or initialize with javascript (object is the DOM element you assigned the component):

```jsx
let self = new Xt.Overlay(document.querySelector('#my-object'), {
  // options
});
```

## Usage

Use this markup to create an **overlay**.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-overlay="{ targets: '#overlay_custom' }">
    <!-- content -->
  </button>
  <div class="overlay" id="overlay-custom">
    <div class="overlay-container">
      <div class="overlay-inner">
        <!-- content -->
      </div>
    </div>
  </div>
</script>

You can use this markup to create an **overlay** with **unique mode** (without toggle).

<script type="text/plain" class="language-markup">
<div class="overlay active" id="overlay_custom" data-xt-overlay="{ on: false }">
  <div class="overlay-container">
    <div class="overlay-inner">
      <!-- content -->
    </div>
  </div>
</div>
</script>

[[notePrimary]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

## Options

[[noteDefault]]
| Overlay uses toggle for logic, refer to [toggle's options](/components/toggle/api#options).

### Class

You can start with toggled elements and targets just by adding **one of the classes** to the **elements** or **targets**.

It's recommended to use `active-overlay` on overlay otherwise the overlay flashes visible on page load.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-overlay`        | Class name for activation            |

</div>

## Events and Methods

### Util

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `let self = Xt.get('xt-overlay', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

### Methods

Call methods this way (object is the DOM element you assigned the component):

```jsx
let self = Xt.get('xt-overlay', document.querySelector('#my-object'))
self.destroy()
self = null
```

<div class="table-scroll">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.restart()`                          | Restart component to initial             |
| Method                  | `self.reinit(saveCurrents:Boolean)`       | Reinit component and save currents as initial (default: `true`)             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>

### Trigger

Trigger events this way:

```jsx
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.trigger.xt'))
```

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.trigger.xt`       | `elements` `targets` | Activation event             |
| Event                   | `off.trigger.xt`      | `elements` `targets` | Deactivation event            |

</div>

### Listen

Listen to events this way:

```jsx
document.querySelector('#my-element-or-target').addEventListener('on.xt', function(e) {
  // logic
})
```

Listen to events delegation with **useCapture** this way:

```jsx
let object = document.querySelector('#my-object')
let self = Xt.get('xt-overlay', object)

object.addEventListener('on.xt', function(e) {
  const el = e.target
  // useCapture delegation
  if (self.elements.includes(el)) {
    // logic
  }
}, true)

object.addEventListener('on.xt', function(e) {
  const tr = e.target
  // useCapture delegation
  if (self.targets.includes(tr)) {
    // logic
  }
}, true)
```

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt`       | `elements` `targets` | Activation event             |
| Event                   | `off.xt`      | `elements` `targets` | Deactivation event            |
| Event                   | `ondone.xt`           | `elements` `targets` | Activation event after delay and duration             |
| Event                   | `offdone.xt`           | `elements` `targets` | Deactivation event after delay and duration             |
| Event                   | `medialoaded.xt`           | `elements` `targets` | Images loaded event            |
| Event                   | `init.xt`           | `object` | Init event             |
| Event                   | `restart.xt`           | `object` | Restart event             |
| Event                   | `reinit.xt`           | `object` | Reinit event             |
| Event                   | `destroy.xt`           | `object` | Destroy event             |

</div>

### Demo

<demo>
  <demovanilla src="vanilla/components/overlay/events-methods">
  </demovanilla>
</demo>
