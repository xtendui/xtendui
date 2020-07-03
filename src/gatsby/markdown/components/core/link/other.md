---
type: "Components"
category: "Core"
parent: "Link"
title: "Other"
date: "2019-03-15"
---

## Style

Links with the tag `a` are styled **unless they have a class**. If you are using a class on links add `.link` class.

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.link`                 | `.link()`        | Stile a tag with link            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/link/style">
  </demovanilla>
</demo>

## Decoration

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.link-none`                 | `.link-none()`        | Remove link underline styles            |
| Option                  | `.link-underline`                 | `.link-underline()`        | Add link underline styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/link/decoration">
  </demovanilla>
</demo>

## Variant

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.text-default`                 | `.text-default()`        | Styles child elements with **default** text styles            |
| Option                  | `.text-inverse`                 | `.text-inverse()`        | Styles child elements with **inverse** text styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/link/variant">
  </demovanilla>
</demo>
