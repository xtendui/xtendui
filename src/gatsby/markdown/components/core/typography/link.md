---
type: "Components"
category: "Core"
parent: "Typography"
title: "Link"
date: "1990-10-10"
---

## Usage

Use markup to create a **link**.

<script type="text/plain" class="language-markup">
  <a href="#">
    <!-- content -->
  </a>

  <button type="button" class="btn link">
    <!-- content -->
  </button>
  
  <div class="link">
    <!-- content -->
  </div>
</script>

Links with the tag `a` are styled **unless they have a class**. So use **tailwind classes** to replace `a` link styles.

You can also use `.link` to style any element as a link.

[[noteDefault]]
| To customize utils and components follow [css customization](/introduction/getting-started/setup#css-customization) instructions.

<div class="table-scroll">

|                         | Syntax                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Component                  | `.link`                 | `link`              | Stile a tag with link            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/typography/link">
  </demovanilla>
</demo>

Inside `.text-inverse` links are styled accordingly.

<demo>
  <demovanilla src="vanilla/components/core/typography/link-inverse">
  </demovanilla>
</demo>

