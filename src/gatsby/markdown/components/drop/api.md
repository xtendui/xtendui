---
type: "Components"
badge: "Core"
parent: "Drop"
title: "API"
date: "2000-01-01"
---

## Initialization

Initialize automatically within markup with `[data-xt-drop="{ <options> }"]` on the **object**:

[[noteDefault]]
| **Object** is the DOM element you want to assign the component.

Or initialize with javascript:

```js
let self = new Xt.Drop(document.querySelector('#my-object'), {
  // options
});
```

Or inizialize with **mutation observer** (preferred method):

```js
Xt.mount.push({
  matches: '#my-object',
  mount: function(object) {
    // init

    let self = new Xt.Drop(object, {
      // options
    });

    // unmount

    const unmount = function() {
      self.destroy()
      self = null
    }
    return unmount
  }
})
```

## Usage

Use this markup to create a **drop**.

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

## Options

[[noteDefault]]
| Drop uses toggle for logic, refer to [toggle's options](/components/toggle/api#options).

### Class

You can start with toggled elements and targets just by adding **one of the classes** to the **elements** or **targets**.

It's recommended to use `active-drop` on drops otherwise the overlay flashes visible on page load.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-drop`        | Class name for activation            |

</div>

### Event

You can specify **on** and **off** events for the drop. Fore example `on: 'mouseenter'` `off: 'mouseleave'`. Default is `on: 'click'`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                              | `'click'`                     | Set event to listen for activation           |
| Option                  | `off:String`                             | `false`                       | Set event to listen for deactivation if not present `options.on` deactivate when already activated          |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/event">
  </demovanilla>
</demo>

## Events and Methods

### Util

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `let self = Xt.get('xt-drop', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

### Methods

Call methods this way (object is the DOM element you assigned the component):

```js
let self = Xt.get('xt-drop', document.querySelector('#my-object'))
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

```js
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

```js
const eventOn = function(e) {
  // logic
}

document.querySelector('#my-element-or-target').addEventListener('on.xt', eventOn)
```

Listen to events delegation with **useCapture** this way:

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-drop', object)

const eventOn = function(e) {
  const el = e.target
  // useCapture delegation
  if (self.elements.includes(el)) {
    // logic
  }
  if (self.targets.includes(tr)) {
    // logic
  }
}

object.addEventListener('on.xt', eventOn, true)
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
