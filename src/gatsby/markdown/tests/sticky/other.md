---
type: "Tests"
category: "Tests"
parent: "Sticky"
title: "Other"
date: "2005-10-10"
---

## Disable

You can disable styles and javascript using `.sticky-disable`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.sticky-disable`       | `sticky-disable`                | `responsive`                | Disable the slider            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/disable">
  </div>
</demo>

## Show and Hide

To show or hide content when sticky activates use `.show-sticky` or `.hide-sticky`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.show-sticky`                     | `NOT POSSIBLE`                | Show node only on sticky activation            |
| Component                  | `.hide-sticky`                     | `NOT POSSIBLE`                | Show node only on sticky deactivation            |

</div>

<demo>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/showhide-top">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/showhide-bottom">
  </div>
  <div class="gatsby_demo_item toggle" data-iframe="iframe/components/core/sticky/showhide-hide">
  </div>
</demo>
