---
type: "Components"
badge: "Core"
parent: "Link"
title: "Other"
date: "2000-10-01"
---

## Underline

Links with the tag `a` are styled with link underline styles. To have a `a` tag without underline (ex: buttons) use `.link-none()`.

<div class="table--scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.link-underline`                 | `.link-underline()`        | Apply link underline styles            |
| Option                  | `.link-none`                 | `.link-none()`        | Remove link underline styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/link/link">
  </demovanilla>
</demo>

## Inverse

Links under `.text-inverse` are styled accordingly.

<div class="table--scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.text-inverse`                 | `.text-inverse()`        | Styles child elements with **inverse** text styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/link/inverse">
  </demovanilla>
</demo>
