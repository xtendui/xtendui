---
type: "Core"
parent: "Toggle"
title: "Option"
date: "2000-02-01"
---

##Min and Max

You can specify **min** and **max** concurrent activations. The **min** option is fulfilled on initialization, the **max** options deactivates the first activated when max is reached.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `min: Number`                             | `0`                           | Minimum number of active elements           |
| Option                  | `max: Number`                             | `1`                           | Maximum number of active elements           |

</div>

<demo>
  <demovanilla src="vanilla/core/toggle/minmax">
  </demovanilla>
</demo>

##Class

You can specify classes to toggle with `class: 'my-class-0 my-class-1'`. Toggled class is by default `.active`.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class: QuerySelector`                    | `'active'`                    | Specify activation class           |
| Option                  | `classIn: QuerySelector`                  | `'in'`                        | Specify in class           |
| Option                  | `classOut: QuerySelector`                 | `'out'`                       | Specify out class           |
| Option                  | `classInitial: QuerySelector`             | `'initial'`                   | Specify initial class           |
| Option                  | `classInverse: QuerySelector`             | `'inverse'`                   | Specify inverse class           |

</div>

<demo>
  <demovanilla src="vanilla/core/toggle/class">
  </demovanilla>
  <demovanilla src="vanilla/core/toggle/start">
    <div class="gatsby_demo_text">
      You can start with toggled elements and targets just by adding the <strong>first class</strong> to the <strong>elements</strong> or <strong>targets</strong>. Following this activation the <strong>min</strong> option will take effect.
    </div>
  </demovanilla>
</demo>

##Event

You can specify **on** and **off** events for the toggle.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on: String`                              | `'click'`                     | Set event to listen for activation           |
| Option                  | `off: String`                             | `false`                       | Set event to listen for deactivation if not present `options.on` deactivate when already activated          |

</div>

<demo>
  <demovanilla src="vanilla/core/toggle/event">
  </demovanilla>
  <demovanilla src="vanilla/core/toggle/links">
    <div class="gatsby_demo_text">
      If you set <code>"on": "mouseenter"</code> or <code>"on": "mousehover"</code>, when the <strong>element</strong> have links on the tag or inside, they automatically get triggered only on double click when using touch devices.
    </div>
  </demovanilla>
</demo>

##Group

If you need to toggle **multiple targets** with the **same element** assign `data-xt-group` to **elements** and the associated targets **targets**. Group's additional elements aren't counted for min and max.

<demo>
  <demovanilla src="vanilla/core/toggle/group">
  </demovanilla>
</demo>

##Auto

[[noteDefault]]
| Auto doesn't run if the toggle is `display: none`.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `auto: { time: Milliseconds }`            | `false`                       | Set auto timing               |
| Option                  | `auto: { step: Number }`                  | `1`                           | Set auto step                 |
| Option                  | `auto: { initial: Boolean }`              | `true`                        | Run auto on initialization (only if toggle is visible and one already active)    |
| Option                  | `auto: { pause: QuerySelector }`          | `false`                       | Query internal elements to puase on mouseenter and resume on mouseleave          |
| Option                  | `auto: { inverse: Boolean }`              | `false`                       | Set auto inverse order        |

</div>

<demo>
  <demovanilla src="vanilla/core/toggle/auto-initial">
  </demovanilla>
  <demovanilla src="vanilla/core/toggle/auto-step">
  </demovanilla>
  <demovanilla src="vanilla/core/toggle/auto-inverse">
  </demovanilla>
  <demovanilla src="vanilla/core/toggle/auto-pause">
  </demovanilla>
  <demovanilla src="vanilla/core/toggle/auto-minmax">
  </demovanilla>
  <demovanilla src="vanilla/core/toggle/progress">
    <div class="gatsby_demo_text">
      Use <a href="/core/toggle/@TODO">auto events</a>.
    </div>
  </demovanilla>
</demo>

##Jump

Use `jump: true` to enable clicking on a **target** to jump to them.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `jump: Boolean`                           | `false`                       | Enable clicking on targets to jump to them           |

</div>

<demo>
  <demovanilla src="vanilla/core/toggle/jump">
  </demovanilla>
</demo>

##Navigation

You can add navigation with `navigation: QuerySelector`, set the amount to add (`+1`) or remove (`-1`) to the current activation index with `[data-xt-nav="value"]`.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `navigation: QuerySelector`               | `false`                       | Navigation with `[data-xt-nav="value"]`              |

</div>

<demo>
  <demovanilla src="vanilla/core/toggle/navigation">
  </demovanilla>
</demo>

##Loop

Use `loop: false` to disable looping on activation.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `loop: Boolean`                           | `true`                        | Loop on activation (auto, navigation, etc..)         |

</div>

##Timing

Activation/deactivation automatically waits for the <strong>duration</strong> of animations and transitions on <code>.active</code> and <code>.out</code>.

You can use a function for <code>delayOn</code> and <code>delayOff</code> for example <code>function(current, total) {return Math.min((total - current) * 150, 300)}</code>.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `durationOn: Milliseconds`                | `false`                       | Set activation duration            |
| Option                  | `durationOff: Milliseconds`               | `false`                       | Set deactivation duration           |
| Option                  | `delayOn: Milliseconds|Function`          | `false`                       | Set activation delay          |
| Option                  | `delayOff: Milliseconds|Function`         | `false`                       | Set deactivation delay        |
| Option                  | `instant: Boolean|Object`                 | `{ elements: true, targets: false, elementsInner: true, targetsInner: false }`     | Set instant activation and deactivation          |

</div>

<demo>
  <demovanilla src="vanilla/core/toggle/timing-duration">
  </demovanilla>
  <demovanilla src="vanilla/core/toggle/timing-delay">
  </demovanilla>
  <demovanilla src="vanilla/core/toggle/timing-delay-fnc">
  </demovanilla>
  <demovanilla src="vanilla/core/toggle/timing-instant">
  </demovanilla>
</demo>

##Keyboard

Use `keyboard: { selector: 'object' }` or `keyboard: { selector : QuerySelector }` to enable keyboard navigation on focus.

<demo>
  <demovanilla src="vanilla/core/toggle/usability-keyboard">
  </demovanilla>
</demo>

##Aria

Use `aria: false` to disable aria generation, or granularly see @TODO.

<demo>
  <demovanilla src="vanilla/core/toggle/usability-aria">
  </demovanilla>
</demo>
