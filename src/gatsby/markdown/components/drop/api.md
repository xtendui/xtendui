---
type: "Components"
badge: "Core"
parent: "Drop"
title: "API"
date: "2000-12-01"
---

[[noteDefault]]
| Drop uses toggle for logic, refer to [toggle page](/components/toggle/api) for a complete **API**.

###Options

These are the default options for **Drop**:

```js
{
  elements: false,
  targets: ':scope > .drop',
  elementsInner: ':scope > a, :scope > button',
  on: 'click',
  min: 0,
  max: 1,
  class: 'active active-drop',
  eventLimit: '.event-limit, .drop',
  autoClose: true,
  closeOutside: 'body',
  closeInside: '.drop-dismiss, .card--drop > .card-inner > .btn-close, :scope > .backdrop',
  ariaControls: ':scope > a, :scope > button',
}
```

Other options are inherited from [toggle options](/components/toggle/api#options).

###Events

@TODO tables events
