---
type: "Components"
category: "Core"
parent: "List"
title: "List"
description: "Flex lists to space any element with margins, also spaces vertically."
---

## Setup

To use this component import the **less** files accordingly:

```less
@import 'xtend-library/src/core/list/list.less';
```

Or just import **core**:

```less
@import 'xtend-library/src/xtend-core.less';
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create a **horizontal list**.

<script type="text/plain" class="language-markup">
  <nav class="list">
    <!-- content -->
  </nav>
</script>

Use this markup to create a **vertical list**.

<script type="text/plain" class="language-markup">
  <nav class="list-block">
    <!-- content -->
  </nav>
</script>

#### Anything

You can use list to space childrens like [row](/components/core/row/content) does. But the childrens are spaced with **margin** instead of **padding**.

<demo>
  <demovanilla src="vanilla/components/core/list/anything-row" name="horizontal">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/anything-column" name="vertical">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/anything-nested" name="nested">
  </demovanilla>
</demo>

#### Button

In css you can use `.list-btns({});` to style with this selector `> a:not(.btn), > button:not(.btn)`.

<demo>
  <demovanilla src="vanilla/components/core/list/button-row" name="horizontal">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/button-column" name="vertical">
  </demovanilla>
  <demovanilla src="vanilla/components/core/list/button-nested" name="nested">
  </demovanilla>
</demo>
