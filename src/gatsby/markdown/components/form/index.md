---
type: "Components"
category: "Layout"
parent: "Form"
title: "Form"
description: "Form styles with multiple layouts, custom checkbox/radio, javascript validation, and more."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.form`.

Check [xtendui/src/form.css.js](https://github.com/minimit/xtendui/blob/beta/src/form.css.js) for default styles.

## Javascript

Import the **javascript** file with `import 'xtendui/src/form'`.


## Usage

Use this code to create a **form items**.

[[notePrimary]]
| For usability purpose [label form controls](https://www.w3.org/WAI/tutorials/forms/labels/) on `input, select, textarea`, we use `aria-label="Label"`.

<demo>
  <demoinline src="demos/components/form/usage">
  </demoinline>
</demo>
