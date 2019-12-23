---
type: "Components"
badge: "Core"
parent: "Overlay"
title: "API"
date: "2000-01-01"
---

## Events and Methods

[[noteDefault]]
| Overlay uses toggle for logic, refer to [toggle's Events and Methods](/components/toggle/api#events-and-methods).



## Initialization

Initialize automatically within markup with `[data-xt-overlay="{ <options> }"]`.

Or initialize with javascript:

```jsx
new Xt.Overlay(document.querySelector('#my-overlay'), {
  // options
});
```

## Usage

Use this markup to create an **overlay**.

<script type="text/plain" class="language-markup">
  <button type="button" data-xt-overlay="{ targets: '#overlay_custom' }">
    <!-- content -->
  </button>
  <div class="overlay" id="overlay-custom">
    <div class="overlay-container">
      <div class="overlay-inner">
        <!-- content -->
      </div>
    </div>
  </div>
</script>

You can use this markup to create an **overlay** with **unique mode**.

<script type="text/plain" class="language-markup">
<div class="overlay active" id="overlay_custom" data-xt-overlay="{ on: false }">
  <div class="overlay-container">
    <div class="overlay-inner">
      <!-- content -->
    </div>
  </div>
</div>
</script>

[[notePrimary]]
| Overlays are moved to **body** to prevent **z-index** problems. Style and query overlay's content accordingly.

## Options

[[noteDefault]]
| Overlay uses toggle for logic, refer to [toggle's options](/components/toggle/api#options).

### Class

You can start with toggled elements and targets just by adding **one of the classes** to the **elements** or **targets**.

It's recommended to use `active-overlay` on overlay otherwise the overlay flashes visible on page load.

<div class="table-scroll">

|                         | Syntax                                    | Default                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `class:String`                          | `active active-overlay`        | Class name for activation            |

</div>
