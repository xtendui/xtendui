---
type: "Components"
category: "Global"
parent: "Form"
title: "Form"
description: "Form styles with multiple layouts, custom checkbox/radio, javascript validation, and more."
---

## Installation

Import the **javascript** file with `import 'xtendui/src/form'`.

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.form`, check [xtendui/src/form.css.js](https://github.com/minimit/xtendui/blob/beta/src/form.css.js) for default styles.

## Usage

Use this code to create a **form items**.

[[notePrimary]]
| For aria purpose [label form controls](https://www.w3.org/WAI/tutorials/forms/labels/) on `input, select, textarea`, we use `aria-label="Label"`.

<demo>
  <demoinline src="demos/components/form/usage">
  </demoinline>
</demo>

Check subpage to [customize content](/components/form/content) and [customize layout](/components/form/layout).
