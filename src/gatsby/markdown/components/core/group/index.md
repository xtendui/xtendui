---
type: "Components"
category: "Core"
parent: "Group"
title: "Group"
description: "Css component to group up buttons and form inputs."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions. To [customize styles](/introduction/getting-started/setup#css-customization) in your `tailwind.config.js` file.

```jsx
module.exports = {
@TODO
}
```

To **see the default values** see the source code of `node_modules/xtend-library/src/tailwind-xtend.js`.

## Usage

#### Button

Use this code to create a **button group as line**.

<demo>
  <demovanilla src="vanilla/components/core/group/button-line">
  </demovanilla>
</demo>

Use this code to create a **button group as stack**.

<demo>
  <demovanilla src="vanilla/components/core/group/button-stack">
  </demovanilla>
</demo>

#### Input

Use this code to create a **input group as line**.

<script type="text/plain" class="language-markup">
<form>
  <div class="form-group">
    <div class="group">

      <div class="group-inner">
        <button type="button" class="btn btn-default">
          <!-- content -->
        </button>
      </div>

      <div class="group-inner">
        <input type="text" class="form-item"/>
      </div>

    </div>
  </div>
</form>
</script>

Use this code to create a **input group as stack**.

<script type="text/plain" class="language-markup">
<form>
  <div class="form-group">
    <div class="group">

      <div class="group-inner">
        <button type="button" class="btn btn-default">
          <!-- content -->
        </button>
        <button type="button" class="btn btn-default">
          <!-- content -->
        </button>
      </div>

      <div class="group-inner">
        <input type="text" class="form-item"/>
      </div>

    </div>
  </div>
</form>
</script>

<demo>
  <demovanilla src="vanilla/components/core/group/input-line">
  </demovanilla>
  <demovanilla src="vanilla/components/core/group/input-stack">
  </demovanilla>
</demo>
