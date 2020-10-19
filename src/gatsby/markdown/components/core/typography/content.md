---
type: "Components"
category: "Core"
parent: "Typography"
title: "Content"
date: "2030-10-10"
---

## Automatic spacing

Check out the [automatic spacing classes](/components/core/structure/css#utils) to **reset margin top** when `:first-child` with `mt-fc` and **reset margin bottom** when `:last-child` with `mb-lc`.

## Html

Inside `html` we assign **default lineHeight** and **default font color** with `@apply text-default`.

#### Rem

Inside `html` there are the styles for **base rem typography**. We assign a root **responsive font size** for `html` and all **rem sizes** defined are relative to this font size.

## Variant

Use **typography variants** to style text color.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.text-default`       | `text-default`                | `responsive hover`                | Default text and links colors            |
| Utility                  | `.text-inverse`       | `text-inverse`                | `responsive hover`                | Inverse text and links colors            |

</div>

[[notePrimary]]
| `.text-default` and `.text-inverse` don't support `text-opacity`. Use tailwind colors instead when using `text-opacity`.

<demo>
  <demovanilla src="vanilla/components/core/typography/variant">
  </demovanilla>
</demo>

## Headers

You can use headers **tags or classes**, classes takes precedence with css specificity.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `h1` or `.h1`       | `h1`                | `responsive`                | Header h1            |
| Utility                  | `h2` or `.h2`       | `h2`                | `responsive`                | Header h2            |
| Utility                  | `h3` or `.h3`       | `h3`                | `responsive`                | Header h3            |
| Utility                  | `h4` or `.h4`       | `h4`                | `responsive`                | Header h4            |
| Utility                  | `h5` or `.h5`       | `h5`                | `responsive`                | Header h5            |
| Utility                  | `h6` or `.h6`       | `h6`                | `responsive`                | Header h6            |
| Utility                  | `.h-block`       | `h-block`                | `responsive`                | Header special block            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/typography/headers">
  </demovanilla>
</demo>

You can add **additional headers** for example `.h7` or `.h-line`.

## Paragraph

Use **tailwind classes** to style paragraphs (e.g. [font-size](https://tailwindcss.com/docs/font-size), [line-height](https://tailwindcss.com/docs/line-height)).

You can use paragraph **tags or classes**, classes takes precedence with css specificity.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `p` or `.p`       | `p`                | `responsive`                | Paragraph            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/typography/paragraph">
  </demovanilla>
</demo>

## Lists

[[noteDefault]]
| List `ul` and `ol` are automatically styled when they **don't have `[class]`**. To have custom styles use **tailwind classes**.

<demo>
  <demovanilla src="vanilla/components/core/typography/list">
  </demovanilla>
</demo>

## Figure

Use **component classes** to style `figure` and` figcaption`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `figure` or `.figure`                     | `figure`                | Media styles inside text            |
| Component                  | `figcaption` or `.figcaption`                     | `figcaption`                | Media caption styles inside text            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/typography/figure">
  </demovanilla>
</demo>

## Other Utilities

These are typography's **component classes**.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Utility                  | `.text-reset`       | `text-reset`                | `responsive`                | Reset text styles            |
| Utility                  | `.ellipsis`       | `ellipsis`                | `responsive`                | Ellipsis text styles            |
| Utility                  | `.lowercase-capitalize`       | `lowercase-capitalize`                | `responsive`                | Text transform lowercase and capitalize first letter            |

</div>
