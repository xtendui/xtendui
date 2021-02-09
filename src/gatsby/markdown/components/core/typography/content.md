---
type: "Components"
category: "Core"
parent: "Typography"
title: "Content"
date: "2030-10-10"
---

## Automatic spacing

Check out the [automatic spacing classes](/components/core/layout/css#utils) to **reset margin top** when `:first-child` with `mt-fc` and **reset margin bottom** when `:last-child` with `mb-lc`.

## Html

Inside `html` we assign **default lineHeight** and **default font color** with `@apply text-black links-default`.

#### Rem

Inside `html` there are the styles for **base rem typography**. We assign a root **responsive font size** for `html` and all **rem sizes** defined are relative to this font size.

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

<div class="table-overflow">

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
| Paragrap `p` is automatically styled when it **donesn't have `[class]`**. To have custom styles use **tailwind classes**.

<div class="table-overflow">

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

Use the tags `ul` or `ol` to create a **unordered or ordered list**.

[[noteDefault]]
| List `ul` and `ol` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

<demo>
  <demovanilla src="vanilla/components/core/typography/list">
  </demovanilla>
</demo>

## Definition List

Use **tailwind classes** to create a **definition list**.

<demo>
  <demovanilla src="vanilla/components/core/typography/definition-list">
  </demovanilla>
</demo>

## Figure

Use **component classes** to style `figure` and` figcaption`.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `figure` or `.figure`                     | `figure`                | Media styles inside text            |
| Component                  | `figcaption` or `.figcaption`                     | `figcaption`                | Media caption styles inside text            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/typography/figure">
  </demovanilla>
</demo>

## Other

These are typography's **component utilities**.

<div class="table-overflow">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.text-reset`       | `text-reset`                | `responsive`                | Reset text styles            |
| Utility                  | `.ellipsis`       | `ellipsis`                | `responsive`                | Ellipsis text styles            |
| Utility                  | `.lowercase-capitalize`       | `lowercase-capitalize`                | `responsive`                | Text transform lowercase and capitalize first letter            |

</div>
