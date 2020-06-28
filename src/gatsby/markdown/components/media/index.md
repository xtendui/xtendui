---
type: "Components"
badge: "Core"
parent: "Media"
title: "Media"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Core"]
---

## Setup

To use this component import the **less** files accordingly:

```less
@import 'xtend-library/src/core/media/media.less';
```

Or just import **core**:

```less
@import 'xtend-library/src/xtend-core.less';
```

[[noteDefault]]
| To modify a **less** or **js** file add [webpack resolve](/introduction/setup#usage-webpack) and fork the file copying it in your project.

## Usage

Use this markup to create a **media**.

Set the **aspect ratio** with css `padding-bottom`.

<script type="text/plain" class="language-markup">
  <div class="media-container" style="padding-bottom: 37.5%;">
    <div class="media-inner">
      <img class="media" src="/img.jpg" alt="" loading="lazy"/>
    </div>
  </div>
</script>
