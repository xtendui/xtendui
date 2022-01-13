---
type: "Components"
category: "Core"
parent: "Link"
title: "Link"
description: "Link is a component to style default links, can also be applied to other tags."
---

## Styles

You can **customize the default styles of this component** inside `tailwind.config.js` setting `theme.extend.xtendui.link` see [css customization](/components/global/preset#customization). Check [xtendui/src/link.css.js](https://github.com/xtendui/xtendui/blob/beta/src/link.css.js) for default styles.

## Global Styles

Add to the `body` the class `xt-links-default` or `xt-links-inverse` to have link global styles.

## Usage

Use `a` without classes or `.xt-link` to create a **link**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.xt-link`                 | `xt-link`              | Link styles            |

</div>

> To have custom styles use **tailwind classes**, this styles are for **automatically styling blank html tags**, for example coming from cms or wysiwyg editors. Links `a` are automatically styled when they **don't have `[class]`**. You can [customize components](/components/global/preset#customization) check [xtendui/src/link.css.js](https://github.com/xtendui/xtendui/blob/beta/src/link.css.js) for default styles.

> Links `a` with `target="_blank"` needs `rel="noopener"` or `rel="noreferrer"` to avoid [cross-origin issues](https://web.dev/external-anchors-use-rel-noopener/).

<demo>
  <demoinline src="demos/components/link/usage">
  </demoinline>
</demo>

## Variant

Use **component utility** `.xt-links-default` and `.xt-links-inverse` on **parent elements** to style **child links**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-links-default`       | `xt-links-default`                | `responsive`                | Default links colors            |
| Utility                  | `.xt-links-inverse`       | `xt-links-inverse`                | `responsive`                | Inverse links colors            |

</div>

> You can **nest up to two time included the body** to override links styles.

<demo>
  <demoinline src="demos/components/link/variant-inverse">
  </demoinline>
</demo>
