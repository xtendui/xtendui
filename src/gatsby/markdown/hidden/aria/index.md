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
| Option                  | `aria:Object\|false`                          | `false`        | Aria options            |
| Option                  | `aria.role:String\|false`                          | `null`        | Inject `role` and related attributes, can be `'dialog'`, `'tooltip'`, `'carousel'`            |
| Option                  | `aria.labelElements:Boolean`                          | `null`        | Inject `aria-labelledby` attributes on elements (linking to targets)            |
| Option                  | `aria.labelTargets:Boolean`                          | `null`        | Inject `aria-labelledby` attributes on targets (linking to elements)            |
| Option                  | `aria.controls:Boolean`                          | `null`        | Inject `aria-controls` attributes            |
| Option                  | `aria.selected:Boolean`                          | `null`        | Inject `aria-selected` attributes            |
| Option                  | `aria.expanded:Boolean`                          | `null`        | Inject `aria-expanded` attributes            |
| Option                  | `aria.live:Boolean`                          | `null`        | Inject `aria-live` attributes on auto            |
| Option                  | `aria.disabled:Boolean`                          | `null`        | Inject `aria-disabled` attributes on enable/disable           |

</div>

> **Do not rely/use aria attributes**, they are generated and they can change anytime.

> The overlay uses `aria: 'dialog'` so **aria attributes and keyboard interactions are managed automatically** following [aria dialog practices](https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190814/examples/dialog-modal/dialog.html).

> For usability purpose **to bettere describe the content** add `aria-label` attribute or `aria-labelledby`/`aria-describedby` attributes.

## Keyboard

Use `keyboard: { selector: 'object' }` or `keyboard: { selector: Query }` to enable keyboard navigation on focus.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `keyboard.selector:Boolean`                          | `false`        | Elements that triggers the events            |

</div>

<demo>
  <demoinline src="demos/components/toggle/usability-keyboard">
  </demoinline>
</demo>
