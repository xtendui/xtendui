---
type: "Components"
badge: "Core"
parent: "Form"
title: "Item and Label"
date: "2019-11-01"
---

## Usage

Use this markup to create a **form label** and **form item**.

<script type="text/plain" class="language-markup">
  <form class="form-default">
    <div class="form-group">
      <label class="form-label">
        <!-- content -->
      </label>
      <input type="text" class="form-item"/>
    </div>
  </form>
</script>

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.form-label`                | `.form-label()`        | Form label            | |
| Option                  | `.form-item`                | `.form-item()`        | Form item            | |

</div>

[[notePrimary]]
| Form label and item must be inside [form group](/components/form/group) to have default styles.

[[notePrimary]]
| Form group must be inside `.form-default` or another form variant to have default styles.

<demo>
  <demovanilla src="vanilla/components/form/form-mixins">
  </demovanilla>
</demo>

## Size

Size is done with **em** so it's relative to the container element. To set `.form-item` and `.form-label` size use [form group](/components/form/group#size).

## Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

You can set the size globally on **form**.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.form-{variant}`                | Not Possible        | Form variant styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/form/variant-default">
  </demovanilla>
  <demovanilla src="vanilla/components/form/variant-inverse">
  </demovanilla>
</demo>

## Validation

Validation with html attributes.

[[notePrimary]]
| Form validation must be inside `form` or `.form` to work.

<demo>
  <demovanilla src="vanilla/components/form/validation-default">
  </demovanilla>
  <demovanilla src="vanilla/components/form/validation-inverse">
  </demovanilla>
</demo>
