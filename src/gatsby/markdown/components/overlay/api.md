---
type: "Components"
badge: "Core"
parent: "Overlay"
title: "API"
date: "2000-01-01"
---

[[notePrimary]]
| Overlay uses toggle for logic, refer to [toggle's API](/components/toggle/api) for all **API**.

## Initialization

Initialize automatically within markup with `[data-xt-overlay="{ <options> }"]`.

Or initialize with javascript:

```jsx
new Xt.Overlay(document.querySelector('.my-overlay'), {
  // options
});
```

## Option

### Class

You can start with toggled elements and targets just by adding **one of the classes** to the **elements** or **targets**.

It's recommended to use `active-overlay` on overlay otherwise the overlay flashes visible on page load.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-overlay`        | Class name for activation            |

</div>

## Events

@TODO tables events
