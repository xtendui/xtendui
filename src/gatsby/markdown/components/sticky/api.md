---
type: "Components"
badge: "Extensions"
parent: "Sticky"
title: "API"
date: "2000-01-01"
---

## Initialization

Initialize automatically within markup with `[data-xt-sticky="{ <options> }"]` on the **object**:

[[noteDefault]]
| **Object** is the DOM element you want to assign the component.

Or initialize with javascript:

```js
let self = new Xt.Sticky(document.querySelector('#my-object'), {
  // options
});
```

Or inizialize with **mutation observer** (preferred method):

```js
Xt.mount.push({
  matches: '#my-object',
  mount: function(object) {
    // init

    let self = new Xt.Sticky(object, {
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

Use this markup to create a **sticky**.

<script type="text/plain" class="language-markup">
  <div data-xt-xticky>
    <div>
      <!-- content -->
    </div>
  </div>
</script>

[[notePrimary]]
| It's recomended to style and animate a inner div <code>[data-xt-xticky] > div</code> when using <strong>sticky component</strong>.

## Options

[[noteDefault]]
| Sticky uses toggle for logic, refer to [toggle's options](/components/toggle/api#options).

### Mode

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `sticky:String`                          | `false`        | Sticky mode 'absolute' or 'fixed' or 'fixed-always'            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/mode-absolute">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/mode-fixed">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/mode-fixed-always">
  </div>
</demo>

### Position

The default **position** is `position: 'top'` you can also use `position: 'bottom'`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `position:String`                          | `'top'`        | Position 'top' or 'bottom'            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/position"></div>
</demo>

### Limit

The default **limit** for `limit: { top: Element }` is the element's own position, for `limit: { bottom: Element }` is Infinity.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `limit.top:Number|Query`                          | `false`        | Limit top sticky to pixel or query           |
| Option                  | `limit.bottom:Number|Query`                          | `'Infinity'`        | Limit bottom sticky to pixel or query            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/limit">
  </div>
</demo>

### Contain

Use the `contain: {}` option to stack consecutive sticky elements. with `contain: { top: Element }` you stack the sticky to a previous element, with `contain: { bottom: Element }` you stack the sticky to a next element. The two solutions brings **different stacking effects**.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `contain.top:Query`                          | `false`        | Contain top sticky to query            |
| Option                  | `contain.bottom:Query`                          | `false`        | Contain bottom sticky to query            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/contain-top">
  </div>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/contain-bottom">
  </div>
</demo>

### Hide

To hide the sticky when scrolling down or up use `hide: 'down'` or `hide: 'up'`. Here's a complex example with hide behaviour.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `hide:String`                          | `false`        | Hide sticky on 'up' or 'down'            |

</div>

<demo>
  <div class="gatsby_demo_item" data-iframe="iframe/components/sticky/hide">
  </div>
</demo>

## Events and Methods

### Util

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `let self = Xt.get('xt-sticky', {DOM element})`       | `object` `elements` `targets` | Get object self for this component class             |

</div>

### Methods

Call methods this way (object is the DOM element you assigned the component):

```js
let self = Xt.get('xt-sticky', document.querySelector('#my-object'))
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

### Listen

Listen to events this way:

```js
const eventChange = function(e) {
  // logic
}

document.querySelector('#my-element').addEventListener('change.xt', eventChange)
```

Listen to events delegation with **useCapture** this way:

```js
let object = document.querySelector('#my-object')
let self = Xt.get('xt-sticky', object)

const eventChange = function(e) {
  const el = e.target
  // useCapture delegation
  if (self.elements.includes(el)) {
    // logic
  }
}

object.addEventListener('change.xt', eventChange, true)
```

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `change.xt`       | `elements` | Computation event             |
| Event                   | `show.xt`       | `elements` | Show event             |
| Event                   | `hide.xt`       | `elements` | Hide event             |
| Event                   | `medialoaded.xt`           | `elements` `targets` | Images loaded event            |
| Event                   | `init.xt`           | `object` | Init event             |
| Event                   | `restart.xt`           | `object` | Restart event             |
| Event                   | `reinit.xt`           | `object` | Reinit event             |
| Event                   | `destroy.xt`           | `object` | Destroy event             |

</div>
