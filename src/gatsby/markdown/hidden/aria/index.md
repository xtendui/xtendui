---
type: "Hidden"
category: "Future"
parent: "Aria"
title: "Aria"
---

## Aria

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `aria:Object\|false`                          | `<Object>`        | Aria options            |
| Option                  | `aria.role:String\|false`                          | `'tab'`        | Inject `role` and related attributes, can be `'dialog'`, `'tooltip'`, `'carousel'`            |
| Option                  | `aria.labelElements:Boolean`                          | `false`        | Inject `aria-labelledby` attributes on elements (linking to targets)            |
| Option                  | `aria.labelTargets:Boolean`                          | `true`        | Inject `aria-labelledby` attributes on targets (linking to elements)            |
| Option                  | `aria.controls:Boolean`                          | `true`        | Inject `aria-controls` attributes            |
| Option                  | `aria.selected:Boolean`                          | `true`        | Inject `aria-selected` attributes            |
| Option                  | `aria.expanded:Boolean`                          | `false`        | Inject `aria-expanded` attributes            |
| Option                  | `aria.live:Boolean`                          | `true`        | Inject `aria-live` attributes on auto            |
| Option                  | `aria.disabled:Boolean`                          | `true`        | Inject `aria-disabled` attributes on enable/disable           |
| Option                  | `aria.keyboard:Boolean`                          | `true`        | Automatic keyboard **next**, **previous** and **exit** interactions           |
| Option                  | `aria.vertical:Boolean`                          | `false`        | **Vertical arrows** instead of **horizontal** for keyboard events           |

</div>

> **Do not rely/use aria attributes**, they are generated and they can change anytime.

> The overlay uses `[aria: 'dialog']` so **aria attributes and keyboard interactions are managed automatically** following [aria dialog practices](https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190814/examples/dialog-modal/dialog.html).

> For usability purpose **to bettere describe the content** add `[aria-label]` or `[aria-labelledby]`/`[aria-describedby]`.
