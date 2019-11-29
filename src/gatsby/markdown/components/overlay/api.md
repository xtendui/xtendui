---
type: "Components"
badge: "Core"
parent: "Overlay"
title: "API"
date: "2000-12-01"
---

[[noteDefault]]
| Overlay uses toggle for logic, refer to [toggle page](/components/toggle/api) for a complete **API**.

###Options

These are the default options for **Overlay**:

```js
{
  elements: ':scope > a, :scope > button',
  targets: ':scope > .overlay',
  on: 'click',
  min: 0,
  max: 1,
  class: 'active active-overlay',
  eventLimit: '.event-limit, .card--overlay > .card-inner > .card-content',
  autoClose: true,
  appendTo: 'body',
  backdrop: 'targets',
  classHtml: 'xt-overlay',
  closeInside: '.overlay-dismiss, .card--overlay > .card-inner > .btn-close, :scope > .backdrop',
  scrollbar: true,
  focusLimit: true,
}
```

Other options are inherited from [toggle options](/components/toggle/api#options).

###Events

@TODO tables events
