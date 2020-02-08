---
type: "Components"
badge: "Core"
parent: "Note"
title: "Option Css"
date: "2019-12-01"
---

## Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.note-{variant}`                        | `.note-default` `.note-primary` `.note-success` `.note-error` |
| Mixin                   | `.note-{variant}()`                      | `.note-default()` `.note-primary()`  `.note-success()` `.note-error()`   |

</div>

<demo>
  <demovanilla src="vanilla/components/note/variant">
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
  <demovanilla src="vanilla/components/note/size">
  </demovanilla>
</demo>

#List

Use `.note-list` to make a list block inside contents.

<script type="text/plain" class="language-markup">
  <div class="note note-default">
    <div class="note-list">
      <!-- content -->
    </div>
  </div>
</script>

<demo>
  <demovanilla src="vanilla/components/note/block">
  </demovanilla>
</demo>
