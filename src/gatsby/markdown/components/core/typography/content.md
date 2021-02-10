---
type: "Components"
category: "Core"
parent: "Typography"
title: "Content"
date: "2030-10-10"
---

## Automatic spacing

Use **component classes** to automatic space. With `mt-fc` you can **reset margin top** when `:first-child`, with `mb-lc` you can **reset margin bottom** when `:last-child`.

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- | ----------------------------- |
| Utility                  | `.mt-fc`                     | `mt-fc`                | `responsive`                | Reset margin top on `:first-child`            |
| Utility                  | `.mb-lc`                     | `mb-lc`                | `responsive`                | Reset margin bottom on `:last-child`            |

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

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `h1` or `.h1`       | `h1`                | `responsive`                | Header h1            |
| Utility                  | `h2` or `.h2`       | `h2`                | `responsive`                | Header h2            |
| Utility                  | `h3` or `.h3`       | `h3`                | `responsive`                | Header h3            |
| Utility                  | `h4` or `.h4`       | `h4`                | `responsive`                | Header h4            |
| Utility                  | `h5` or `.h5`       | `h5`                | `responsive`                | Header h5            |
| Utility                  | `h6` or `.h6`       | `h6`                | `responsive`                | Header h6            |

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

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `p` or `.p`       | `p`                | `responsive`                | Paragraph            |

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

<div class="overflow-sub overflow-y-hidden overflow-x-scroll my-4 mt-fc mb-lc w-full">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.text-reset`       | `text-reset`                | `responsive`                | Reset text styles            |
| Utility                  | `.ellipsis`       | `ellipsis`                | `responsive`                | Ellipsis text styles            |
| Utility                  | `.lowercase-capitalize`       | `lowercase-capitalize`                | `responsive`                | Text transform lowercase and capitalize first letter            |

</div>
