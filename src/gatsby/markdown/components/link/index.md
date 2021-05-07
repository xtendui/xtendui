---
type: "Components"
category: "Design"
parent: "Link"
title: "Link"
description: "Default link styles for html links, can also be applied to buttons and other tags."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.link` see [preset customization](/components/tailwind-preset#customization). Check [xtendui/src/link.css.js](https://github.com/minimit/xtendui/blob/beta/src/link.css.js) for default styles.

## Usage

Use `a` without classes or `.xt-link` to create a **link**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.xt-link`                 | `xt-link`              | Link styles            |

</div>

[[noteDefault]]
| Links `a` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

[[notePrimary]]
| Links `a` with `target="_blank"` needs `rel="noopener"` or `rel="noreferrer"` to avoid [cross-origin issues](https://web.dev/external-anchors-use-rel-noopener/).

<demo>
  <demoinline src="demos/components/link/usage">
  </demoinline>
</demo>

## Variant

Use **component utility** `.xt-links-default` and `.xt-links-inverse` on **parent elements** to style **child links**.

You can nest **up to two time included the body** to override links styles.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-links-default`       | `xt-links-default`                | `responsive`                | Default links colors            |
| Utility                  | `.xt-links-inverse`       | `xt-links-inverse`                | `responsive`                | Inverse links colors            |

</div>

<demo>
  <demoinline src="demos/components/link/variant-inverse">
  </demoinline>
</demo>
