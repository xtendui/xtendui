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

###Variant

Classes for assigning variant (e.g.: border / background / font colors).

<div class="table--scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop--{variant}`                        | `.drop--default` `.drop--primary` |
| Mixin                   | `.drop--{variant}()`                      | `.drop--default()` `.drop--primary()`         |

</div>

<demo>
  <demovanilla src="vanilla/components/drop/variant">
  </demovanilla>
</demo>

###Position

Classes for assigning position.

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.drop--{position}`                        | `.drop--bottom` `.drop--top` `.drop--left` `.drop--right` `.drop--center` `.drop--before` `.drop--after` |
| Mixin                   | `.drop--{position}()`                      | `.drop--bottom()` `.drop--top()` `.drop--left()` `.drop--right()` `.drop--center()` `.drop--before()` `.drop--after()` |

        
<demo>
  <demovanilla src="vanilla/components/drop/position">
  </demovanilla>
</demo>

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
