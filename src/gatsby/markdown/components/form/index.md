---
type: "Components"
category: "Form"
parent: "Form"
title: "Form"
description: "Form is a component for all form content has multiple layouts, custom checkbox/radio and more."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.form` see [css customization](/components/global/preset#customization). Check [xtendui/src/form.css.js](https://github.com/xtendui/xtendui/blob/beta/src/form.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/form'`.

## Usage

> For accessibility purpose[label form controls](https://www.w3.org/WAI/tutorials/forms/labels/) on `input, select, textarea, checkbox, radio`, we use `[aria-label="Label"]` and `[role="group"]` on checkbox and `[role="radiogroup"]` on radio.

<demo>
  <demoinline src="demos/components/form/usage">
  </demoinline>
</demo>
