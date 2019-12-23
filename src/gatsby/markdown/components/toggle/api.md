---
type: "Components"
badge: "Core"
parent: "Toggle"
title: "API"
date: "2000-01-01"
---

## Events and Methods

Trigger events this way:

```jsx
document.querySelector('#my-element-or-target').dispatchEvent(new CustomEvent('on.xt'))
```

Listen to events this way:

```jsx
document.querySelector('#my-element-or-target').addEventListener('on.xt', function(e) {
  // add this check on events with bubbles: true
  if (this === e.target) {
    // logic
  }
})
```

<div class="table-scroll">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `on.xt`       | `elements` `targets` | Activation event (`bubbles: true`)             |
| Event                   | `off.xt`      | `elements` `targets` | Deactivation event (`bubbles: true`)            |
| Event                   | `ondone.xt`           | `elements` `targets` | Activation event after delay and duration (`bubbles: true`)             |
| Event                   | `offdone.xt`           | `elements` `targets` | Deactivation event after delay and duration (`bubbles: true`)             |
| Event                   | `imageLoaded.xt`           | `elements` `targets` | Images loaded event (`bubbles: true`)            |
| Event                   | `init.xt`           | `object` | Init event             |
| Event                   | `start.xt.auto`           | `object` | Auto start event             |
| Event                   | `stop.xt.auto`           | `object` | Auto stop event             |
| Event                   | `pause.xt.auto`           | `object` | Auto pause event             |

</div>

Trigger methods this way:

```jsx
const self = Xt.get('xt-toggle', document.querySelector('#my-toggle'))
self.destroy()
```

<div class="table-scroll">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Method                  | `self.reinit(saveCurrents:Boolean)`       | Reinitialize component and save currents as initial (default: `true`)             |
| Method                  | `self.restart()`                          | Restart component to initial             |
| Method                  | `self.destroy()`              | Destroy component            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/events-methods">
  </demovanilla>
</demo>



## Initialization

Initialize automatically within markup with `[data-xt-toggle="{ <options> }"]`.

Or initialize with javascript:

```jsx
new Xt.Toggle(document.querySelector('#my-toggle'), {
  // options
});
```

## Usage

### Self

You can use this markup to create a **toggle** with **no targets**.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-toggle>
    <!-- content -->
  </button>
</script>

<demo>
  <demovanilla src="vanilla/components/toggle/self">
  </demovanilla>
</demo>

### Multiple

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

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `:scope > a, :scope > button`        | Elements that triggers the events            |
| Option                  | `targets:Query`                           | `:scope > [class^="toggle-"], :scope > [class*=" toggle-"]`      | Targets that gets activated on events by the elements           |
| Option                  | `elementsInner:Query`                          | `false`        | Additional query inside elements that gets activated on events            |
| Option                  | `targetsInner:Query`                          | `false`        | Additional query inside targets that gets activated on events            |
</div>

Use `:scope` when using descendant selector on root (e.g. `:scope > *`).

<demo>
  <demovanilla src="vanilla/components/toggle/multiple-default">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/multiple-custom">
  </demovanilla>
</demo>

### Unique

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
  <demovanilla src="vanilla/components/toggle/unique-single">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/unique-same">
  </demovanilla>
</demo>

## Options

### Class

You can specify classes to toggle with `class: 'my-class-0 my-class-1'`. Toggled class is by default `.active`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active`        | Class name for activation            |
| Option                  | `classIn:String`                          | `in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `out`        | Class name for out animation            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/class">
  </demovanilla>
</demo>

You can start with toggled elements and targets just by adding **one of the classes** to the **elements** or **targets**.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-toggle`        | Class name for activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/start">
  </demovanilla>
</demo>

### Min and Max

You can specify **min** and **max** concurrent activations. The **min** option is fulfilled on initialization, the **max** options deactivates the first activated when max is reached.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min:Number`                          | `0`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/minmax">
  </demovanilla>
</demo>

### Event

You can specify **on** and **off** events for the toggle. Fore example `on: 'mouseenter'` `off: 'mouseleave'`. Default is `on: 'click'`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on:String`                          | `click`        | Activation event to attach to elements            |
| Option                  | `off:String`                          | `false`        | Dectivation event to attach to elements            |
| Option                  | `eventLimit:Query`                          | `.event-limit`        | Limit events inside self.object            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/event">
  </demovanilla>
</demo>

### Jump

Use `jump: true` to enable clicking on a **target** to jump to them.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `jump:Boolean`                          | `false`        | Clicking on targets triggers activation            |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/jump">
  </demovanilla>
</demo>

### Navigation

You can add navigation with `navigation: QuerySelector`, set the amount to add (`+1`) or remove (`-1`) to the current activation index with `[data-xt-nav="value"]`.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `navigation:Query`                          | `false`        | Query for navigation elements             |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/navigation">
  </demovanilla>
</demo>

### Loop

Use `loop: false` to disable looping on activation.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `loop:Boolean`                          | `true`        | Loop activation            |

</div>

### Timing

Activation/deactivation automatically waits for the <strong>duration</strong> of animations and transitions on <code>.active</code> and <code>.out</code>.

You can use a function for <code>delayOn</code> and <code>delayOff</code> for example <code>function(current, total) {return Math.min((total - current) * 150, 300)}</code>.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `delayOn:Milliseconds|Function`                          | `false`        | Activation delay            |
| Option                  | `delayOff:Milliseconds|Function`                          | `false`        | Deactivation delay            |
| Option                  | `durationOn:Milliseconds`                          | `false`        | Activation duration            |
| Option                  | `durationOff:Milliseconds`                          | `false`        | Deactivation duration            |
| Option                  | `instant: Boolean|Object`                 | `{ elements: true, targets: false, elementsInner: true, targetsInner: false }`     | Set instant activation and deactivation          |

</div>

<demo>
  <demovanilla src="vanilla/components/toggle/timing-duration">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/timing-delay">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/timing-delay-fnc">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/timing-instant">
  </demovanilla>
</demo>

### Auto

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |
| Option                  | `auto.pause:Query`                          | `false`        | Elements that pause automatic on mouseenter            |

</div>

[[notePrimary]]
| Auto doesn't run if the toggle is `display: none`.

<demo>
  <demovanilla src="vanilla/components/toggle/auto-initial">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/auto-step">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/auto-inverse">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/auto-pause">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/auto-minmax">
  </demovanilla>
  <demovanilla src="vanilla/components/toggle/progress">
    <div class="gatsby_demo_text">
      Use <a href="/core/toggle/@TODO">auto events</a>.
    </div>
  </demovanilla>
</demo>

### Keyboard

Use `keyboard: { selector: 'object' }` or `keyboard: { selector : QuerySelector }` to enable keyboard navigation on focus.

<demo>
  <demovanilla src="vanilla/components/toggle/usability-keyboard">
  </demovanilla>
</demo>

### Aria

Use `aria: false` to disable aria generation, or granularly see @TODO.

<demo>
  <demovanilla src="vanilla/components/toggle/usability-aria">
  </demovanilla>
</demo>

### Other

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `instant:Object`                          | `{ elements: true, targets: false, elementsInner: true, targetsInner: false }`        | Instant activation instead of waiting for delay and animations             |
| Option                  | `autoClose:Boolean`                          | `false`        | Close automatically on `autoClose.xt` event            |
| Option                  | `autoDisable:Boolean`                          | `true`        | Disable automatically when cannot be activated             |
| Option                  | `onBlock:Milliseconds`                          | `true`        | Block concurrent activation events            |
| Option                  | `offBlock:Milliseconds`                          | `true`        | Block concurrent deactivation events            |
| Option                  | `imageLoadedInit:Boolean`                          | `false`        | Reinit on image loaded            |
| Option                  | `keyboard.selector:Boolean`                          | `false`        | Elements that triggers the events            |
| Option                  | `aria.tabindex:Boolean`                          | `true`        | Inject aria tabindex attributes            |
| Option                  | `aria.controls:Boolean`                          | `true`        | Inject aria controls attributes            |
| Option                  | `aria.labelledby:Boolean`                          | `true`        | Inject aria labelledby attributes            |

</div>
