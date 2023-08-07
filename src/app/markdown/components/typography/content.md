---
type: "Components"
category: "Core"
parent: "Typography"
title: "Content"
date: "2030-10-10"
---

## Automatic spacing

Use **component classes** to space reset automatically on `:first-child` and `:last-child`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-mt-auto`                     | `xt-mt-auto`                | `responsive`                | Reset margin top on `:first-child`            |
| Utility                  | `.xt-mb-auto`                     | `xt-mb-auto`                | `responsive`                | Reset margin bottom on `:last-child`            |
| Utility                  | `.xt-my-auto`                     | `xt-my-auto`                | `responsive`                | Reset margin top on `:first-child` and bottom on `:last-child`            |

</div>

## Variant

Use **Tailwind CSS** to assign styles (e.g. [text-color](https://tailwindcss.com/docs/text-color), [text-opacity](https://tailwindcss.com/docs/text-opacity)).

Text styles on **parent elements** are applied when **inerithed**.

See [link variant](/components/link#variant) to style **links**.

<demo>
  <demoinline src="demos/components/typography/variant">
  </demoinline>
</demo>

## Headers

You can use headers **classes or tags** with customizable styles.

> To have custom styles use **Tailwind CSS**, this styles are for **automatically styling blank html tags**, for example coming from cms or wysiwyg editors. Tags `h1...h6` are automatically styled when they **don't have `[class]`**. You can [customize components](/components/global/preset#customization) check [xtendui/src/typography.css.js](https://github.com/xtendui/xtendui/blob/master/src/typography.css.js) for default styles.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `h1` or `.xt-h1`       | `xt-h1`                | `responsive`                | Tag styles            |
| Utility                  | `h2` or `.xt-h2`       | `xt-h2`                | `responsive`                | Tag styles            |
| Utility                  | `h3` or `.xt-h3`       | `xt-h3`                | `responsive`                | Tag styles            |
| Utility                  | `h4` or `.xt-h4`       | `xt-h4`                | `responsive`                | Tag styles            |
| Utility                  | `h5` or `.xt-h5`       | `xt-h5`                | `responsive`                | Tag styles            |
| Utility                  | `h6` or `.xt-h6`       | `xt-h6`                | `responsive`                | Tag styles            |

</div>

<demo>
  <demoinline src="demos/components/typography/headers">
  </demoinline>
</demo>

Use **Tailwind CSS** to assign custom headers (e.g. [font-size](https://tailwindcss.com/docs/font-size), [line-height](https://tailwindcss.com/docs/line-height), [letter-spacing](https://tailwindcss.com/docs/letter-spacing)).

> Remember to **override text line height with responsive leading**.

<demo>
  <demoinline src="demos/components/typography/headers-custom">
  </demoinline>
</demo>

## Paragraph

You can use paragraph **classes or tags** with customizable styles.

> To have custom styles use **Tailwind CSS**, this styles are for **automatically styling blank html tags**, for example coming from cms or wysiwyg editors. Tags `p` are automatically styled when they **don't have `[class]`**. You can [customize components](/components/global/preset#customization) check [xtendui/src/typography.css.js](https://github.com/xtendui/xtendui/blob/master/src/typography.css.js) for default styles.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `p` or `.xt-p`       | `xt-p`                | `responsive`                | Tag styles            |

</div>

<demo>
  <demoinline src="demos/components/typography/paragraph">
  </demoinline>
</demo>

## Text

Text tags are styles by **Tailwind CSS or component classes**.

<demo>
  <demoinline src="demos/components/typography/text">
  </demoinline>
</demo>

## List

You can use lists **classes or tags** with customizable styles.

> To have custom styles use **Tailwind CSS**, this styles are for **automatically styling blank html tags**, for example coming from cms or wysiwyg editors. Tags `ul` and `ol` are automatically styled when they **don't have `[class]`**. You can [customize components](/components/global/preset#customization) check [xtendui/src/typography.css.js](https://github.com/xtendui/xtendui/blob/master/src/typography.css.js) for default styles.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `ul` or `.xt-ul`       | `xt-ul`                | `responsive`                | Tag styles            |
| Utility                  | `ol` or `.xt-ol`       | `xt-ol`                | `responsive`                | Tag styles            |

</div>

<demo>
  <demoinline src="demos/components/typography/list">
  </demoinline>
</demo>

## Definition List

You can use definition lists **classes or tags** with customizable styles.

> To have custom styles use **Tailwind CSS**, this styles are for **automatically styling blank html tags**, for example coming from cms or wysiwyg editors. Tags `dl` are automatically styled when they **don't have `[class]`**. You can [customize components](/components/global/preset#customization) check [xtendui/src/typography.css.js](https://github.com/xtendui/xtendui/blob/master/src/typography.css.js) for default styles.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `dl` or `.xt-dl`       | `xt-dl`                | `responsive`                | Tag styles            |

</div>

<demo>
  <demoinline src="demos/components/typography/definition-list">
  </demoinline>
</demo>

## Other

You can use figure and figcaption and hr **classes or tags** with customizable styles.

> To have custom styles use **Tailwind CSS**, this styles are for **automatically styling blank html tags**, for example coming from cms or wysiwyg editors. Tags `figure` and `figcaption` are automatically styled when they **don't have `[class]`**. You can [customize components](/components/global/preset#customization) check [xtendui/src/typography.css.js](https://github.com/xtendui/xtendui/blob/master/src/typography.css.js) for default styles.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `figure` or `.xt-figure`       | `xt-figure`                | `responsive`                | Tag styles            |
| Utility                  | `figcaption` or `.xt-figcaption`       | `xt-figcaption`                | `responsive`                | Tag styles            |
| Utility                  | `hr` or `.xt-hr`       | `xt-hr`                | `responsive`                | Tag styles            |

</div>

<demo>
  <demoinline src="demos/components/typography/other">
  </demoinline>
</demo>

These are typography's **component utilities**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-text-reset`       | `xt-text-reset`                | `responsive`                | Reset text styles            |
| Utility                  | `.xt-lowercase-capitalize`       | `xt-lowercase-capitalize`                | `responsive`                | Text transform lowercase and capitalize first letter            |

</div>
