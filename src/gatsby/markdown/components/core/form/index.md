---
type: "Components"
category: "Core"
parent: "Form"
title: "Form"
description: "Form styles with multiple layouts, custom checkbox/radio, javascript validation, and more."
---

## Installation

Import the **component javascript** file with `import 'xtendui/src/core/form'`.

You can **customize this component** inside `tailwind.config.js` setting `theme.extend.xtendui.form`, check [xtendui/src/core/form.css.js](https://github.com/minimit/xtendui/blob/beta/src/core/form.css.js) for default styles.

## Usage

Use this code to create a **form items**.

[[notePrimary]]
| For aria purpose [label form controls](https://www.w3.org/WAI/tutorials/forms/labels/) on `input, select, textarea`, we use `aria-label="Label"`.

<demo>
  <demovanilla src="vanilla/components/core/form/usage">
  </demovanilla>
</demo>

Check subpage to [customize content](/components/core/form/content) and [customize layout](/components/core/form/layout).
