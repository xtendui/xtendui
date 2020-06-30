---
type: "Components"
category: "Core"
parent: "Note"
title: "Background"
date: "2019-05-01"
---

Use `.note-background` to style the note with an internal padding and background.

## Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.note-{variant}`                        | `.note-default` `.note-primary` `.note-success` `.note-error` |
| Mixin                   | `.note-{variant}()`                      | `.note-default()` `.note-primary()`  `.note-success()` `.note-error()`   |

</div>

<demo>
  <demovanilla src="vanilla/components/note/variant-background">
  </demovanilla>
</demo>

## Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.note-{size}`                           | `.note-small` `.note-medium` `.note-large`|
| Mixin                   | `.note-{size}()`                         | `.note-small()` `.note-medium()`  `.note-large()`   |

</div>

<demo>
  <demovanilla src="vanilla/components/note/size-background">
  </demovanilla>
</demo>

#Block

Use `.note-list` to make a list block inside contents.

<script type="text/plain" class="language-markup">
  <div class="note note-default">
    <div class="note-list">
      <!-- content -->
    </div>
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/note/block-background">
  </demovanilla>
</demo>
