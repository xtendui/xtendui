---
type: "Components"
badge: "Core"
parent: "Toggle"
title: "API"
date: "2000-12-01"
---

##Options

These are the default options for **Toggle**:

```js
{
  elements: ':scope > a, :scope > button',
  targets: ':scope > [class^="toggle-"], :scope > [class*=" toggle-"]',
  elementsInner: false,
  targetsInner: false,
  on: 'click',
  off: false,
  min: 0,
  max: 1,
  instant: { elements: true, targets: false, elementsInner: true, targetsInner: false },
  // defaults
  class: 'active',
  classIn: 'in',
  classOut: 'out',
  classInitial: 'initial',
  classInverse: 'inverse',
  eventLimit: '.event-limit',
  autoClose: false,
  autoDisable: true,
  onBlock: false,
  offBlock: false,
  loop: true,
  jump: false,
  imageLoadedInit: false,
  delayOn: false,
  delayOff: false,
  durationOn: false,
  durationOff: false,
  keyboard: {
    selector: false,
  },
  auto: {
    time: false,
    initial: true,
    step: 1,
    inverse: false,
    pause: false,
  },
  aria: {
    tabindex: true,
    controls: true,
    labelledby: true,
  },
}
```

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `elements:Query`                          | `:scope > a, :scope > button`        | Elements that triggers the events            |
| Option                  | `targets:Query`                           | `:scope > [class^="toggle-"], :scope > [class*=" toggle-"]`      | Targets that gets activated on events by the elements           |
| Option                  | `elementsInner:Query`                          | `false`        | Additional query inside elements that gets activated on events            |
| Option                  | `targetsInner:Query`                          | `false`        | Additional query inside targets that gets activated on events            |
| Option                  | `on:String`                          | `click`        | Activation event to attach to elements            |
| Option                  | `off:String`                          | `false`        | Dectivation event to attach to elements            |
| Option                  | `min:Number`                          | `0`        | Minimum number of concurrent elements activated            |
| Option                  | `max:Number`                          | `1`        | Maximum number of concurrent elements activated            |
| Option                  | `instant:Object`                          | `{ elements: true, targets: false, elementsInner: true, targetsInner: false }`        | Instant activation instead of waiting for delay and animations             |
| Option                  | `class:String`                          | `active`        | Class name for activation            |
| Option                  | `classIn:String`                          | `in`        | Class name for in animation            |
| Option                  | `classOut:String`                          | `out`        | Class name for out animation            |
| Option                  | `classInitial:String`                          | `initial`        | Class name for initialization            |
| Option                  | `classInverse:String`                          | `inverse`        | Class name for inverse direction activation            |
| Option                  | `eventLimit:Query`                          | `.event-limit`        | Limit events inside self.object            |
| Option                  | `autoClose:Boolean`                          | `false`        | Close automatically on `autoClose.xt` event            |
| Option                  | `autoDisable:Boolean`                          | `true`        | Disable automatically when cannot be activated             |
| Option                  | `onBlock:Milliseconds`                          | `true`        | Block concurrent activation events            |
| Option                  | `offBlock:Milliseconds`                          | `true`        | Block concurrent deactivation events            |
| Option                  | `loop:Boolean`                          | `true`        | Loop activation            |
| Option                  | `jump:Boolean`                          | `false`        | Clicking on targets triggers activation            |
| Option                  | `imageLoadedInit:Boolean`                          | `false`        | Reinit on image loaded            |
| Option                  | `delayOn:Boolean`                          | `false`        | Activation delay            |
| Option                  | `delayOff:Boolean`                          | `false`        | Deactivation delay            |
| Option                  | `durationOn:Boolean`                          | `false`        | Activation duration            |
| Option                  | `durationOff:Boolean`                          | `false`        | Deactivation duration            |
| Option                  | `keyboard.selector:Boolean`                          | `false`        | Elements that triggers the events            |
| Option                  | `auto.time:Milliseconds`                          | `false`        | Automatic activation time            |
| Option                  | `auto.initial:Boolean`                          | `true`        | Automatic activation on initial            |
| Option                  | `auto.step:Number`                          | `1`        | Automatic activation steps            |
| Option                  | `auto.inverse:Boolean`                          | `false`        | Automatic activation inverse order            |
| Option                  | `auto.pause:Query`                          | `false`        | Elements that pause automatic on mouseenter            |
| Option                  | `aria.tabindex:Boolean`                          | `true`        | Inject aria tabindex attributes            |
| Option                  | `aria.controls:Boolean`                          | `true`        | Inject aria controls attributes            |
| Option                  | `aria.labelledby:Boolean`                          | `true`        | Inject aria labelledby attributes            |

</div>

##Events

@TODO tables events
