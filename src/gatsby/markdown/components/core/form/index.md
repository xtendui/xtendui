---
type: "Components"
category: "Core"
parent: "Form"
title: "Form"
description: "Form styles with multiple layouts, custom checkbox/radio, and more."
---

## Setup

#### Css

Follow the [css installation](/introduction/getting-started/setup#css-installation) instructions.

To customize this component in your `tailwind.config.js` file, as described in [css customization](/introduction/getting-started/setup#css-customization) instructions, use the keys like below.

```jsx
module.exports = {
  theme: require('xtend-library/src/tailwind-theme')({
    // xtend utilities and components in node_modules/xtend-library/src/tailwind-xtend.js
    xtend: theme => ({
      components: {
        form: {
          // modify component
        },
      },
    }),
  })
}
```

## Usage

Use this markup to create a form **label** and **input**.

<script type="text/plain" class="language-markup">
  <form>
    <label class="label mb-3" for="my-input">
      <!-- content -->
    </label>
    <input type="text" class="input" id="my-input" name="my-input"/>
  </form>
</script>

Use this markup to create a form **checkbox or radio**.

<script type="text/plain" class="language-markup">
  <form>
    <label class="label-check">
      <input type="checkbox" class="checkbox" id="my-checkbox" name="my-checkbox">
      <span class="ml-3"><!-- content --></span>
    </label>

    <label class="label-check">
      <input type="radio" class="radio" id="my-radio" name="my-radio">
      <span class="ml-3"><!-- content --></span>
    </label>
  </form>
</script>

Use this markup to create a form **checkbox or radio switches**.

<script type="text/plain" class="language-markup">
  <form>
    <label class="label-check">
      <input type="checkbox" class="switch" id="my-checkbox" name="my-checkbox">
      <span class="ml-3"><!-- content --></span>
    </label>

    <label class="label-check">
      <input type="radio" class="switch" id="my-radio" name="my-radio">
      <span class="ml-3"><!-- content --></span>
    </label>
  </form>
</script>

Then add and [style content](/components/core/form/content) and [style layout](/components/core/form/layout).

<demo>
  <demovanilla src="vanilla/components/core/form/usage">
  </demovanilla>
</demo>

If you omit **checkbox or radio** classes the styles are the browser's defaults.

<demo>
  <demovanilla src="vanilla/components/core/form/checks-unstyled">
  </demovanilla>
</demo>
