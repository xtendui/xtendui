---
type: "Components"
badge: "Core"
parent: "Note"
title: "Note"
description: "Text and block to present note and alerts to the user."
categories: ["100-Core"]
---

## Setup

To use this component import the **less** files accordingly:

```less
@import '~xtend-library/src/core/note/note.less';
```

Or just import **core**:

```less
@import '~xtend-library/src/xtend-core.less';
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create a **note**.

<script type="text/plain" class="language-markup">
  <div class="note note-default">
    <!-- content -->
  </div>
</script>
