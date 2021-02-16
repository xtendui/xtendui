---
type: "Components"
category: "Core"
parent: "Typography"
title: "Content"
date: "2030-10-10"
---

## Automatic spacing

Use **component classes** to space reset automatically on `:first-child` and `:last-child`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.xt-mt-auto`                     | `xt-mt-auto`                | `responsive`                | Reset margin top on `:first-child`            |
| Utility                  | `.xt-mb-auto`                     | `xt-mb-auto`                | `responsive`                | Reset margin bottom on `:last-child`            |
| Utility                  | `.xt-m-auto`                     | `xt-m-auto`                | `responsive`                | Reset margin top on `:first-child` and bottom on `:last-child`            |

</div>

## Variant

Use **tailwind classes** to assign styles (e.g. [text-color](https://tailwindcss.com/docs/text-color), [text-opacity](https://tailwindcss.com/docs/text-opacity)).

Text styles on **parent elements** are applied when **inerithed**.

See [link variant](/components/core/link#variant) to style **links**.

<demo>
  <demovanilla src="vanilla/components/core/typography/variant">
  </demovanilla>
</demo>

## Headers

You can use headers **classes or tags** with customizable styles.

[[noteDefault]]
| Headers `h1...h6` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `h1` or `.xt-h1`       | `xt-h1`                | `responsive`                | Header h1            |
| Utility                  | `h2` or `.xt-h2`       | `xt-h2`                | `responsive`                | Header h2            |
| Utility                  | `h3` or `.xt-h3`       | `xt-h3`                | `responsive`                | Header h3            |
| Utility                  | `h4` or `.xt-h4`       | `xt-h4`                | `responsive`                | Header h4            |
| Utility                  | `h5` or `.xt-h5`       | `xt-h5`                | `responsive`                | Header h5            |
| Utility                  | `h6` or `.xt-h6`       | `xt-h6`                | `responsive`                | Header h6            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/typography/headers">
  </demovanilla>
</demo>

Use **tailwind classes** to assign custom headers (e.g. [font-size](https://tailwindcss.com/docs/font-size), [line-height](https://tailwindcss.com/docs/line-height), [letter-spacing](https://tailwindcss.com/docs/letter-spacing)).

<demo>
  <demovanilla src="vanilla/components/core/typography/headers-custom">
  </demovanilla>
</demo>

## Paragraph

You can use paragraph **classes or tags** with customizable styles.

[[noteDefault]]
| Paragraphs `p` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `p` or `.xt-p`       | `xt-p`                | `responsive`                | Paragraph            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/typography/paragraph">
  </demovanilla>
</demo>

## Text

Text tags are styles by **tailwind or tailwind classes or component classes**.

<demo>
  <demovanilla src="vanilla/components/core/typography/text">
  </demovanilla>
</demo>

## List

[[noteDefault]]
| Lists `ul` and `ol` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

<demo>
  <demovanilla src="vanilla/components/core/typography/list">
  </demovanilla>
</demo>

## Definition List

[[noteDefault]]
| Definition lists `dl` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

<demo>
  <demovanilla src="vanilla/components/core/typography/definition-list">
  </demovanilla>
</demo>

## Figure

[[noteDefault]]
| Figure and Figcaption `figure` `figcaption` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

<demo>
  <demovanilla src="vanilla/components/core/typography/figure">
  </demovanilla>
</demo>

## Other

These are typography's **component utilities**.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.xt-text-reset`       | `xt-text-reset`                | `responsive`                | Reset text styles            |
| Utility                  | `.xt-lowercase-capitalize`       | `xt-lowercase-capitalize`                | `responsive`                | Text transform lowercase and capitalize first letter            |

</div>
