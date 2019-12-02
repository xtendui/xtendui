---
type: "Components"
badge: "Core"
parent: "Drop"
title: "API"
date: "2000-01-01"
---

[[noteDefault]]
| Drop uses toggle for logic, refer to [toggle's API](/components/toggle/api) for all **API**.

##Initialization

Initialize automatically within markup with `[data-xt-drop="{ <options> }"]`.

Or initialize with javascript:

```jsx
new Xt.Drop(document.querySelector('.my-drop'), {
  // options
});
```

##Option

###Class

You can start with toggled elements and targets just by adding **one of the classes** to the **elements** or **targets**.

It's recommended to use `active-drop` on drops otherwise the overlay flashes visible on page load.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-drop`        | Class name for activation            |

</div>

###Event

You can specify **on** and **off** events for the drop. Fore example `on: 'mouseenter'` `off: 'mouseleave'`. Default is `on: 'click'`.

<div class="table--scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `on: String`                              | `'click'`                     | Set event to listen for activation           |
| Option                  | `off: String`                             | `false`                       | Set event to listen for deactivation if not present `options.on` deactivate when already activated          |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/event">
  </demovanilla>
</demo>

##Events

@TODO tables events
