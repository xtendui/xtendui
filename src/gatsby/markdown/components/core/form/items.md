---
type: "Components"
category: "Core"
parent: "Form"
title: "Items"
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
| Option                  | `.form-group`                | `.form-group()`        | Form group            |
| Option                  | `.form-label`                | `.form-label()`        | Form label            |
| Option                  | `.form-item`                | `.form-item()`        | Form item            |

</div>

[[notePrimary]]
| Form group must be inside `.form-default` or another form variant to have default styles.

<demo>
  <demovanilla src="vanilla/components/core/form/form-mixins">
  </demovanilla>
</demo>

## Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

Size is done with **em** so it's relative to the container element.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.form-group-{size}`                        | `.form-group-small` `.form-group-medium` `.form-group-large`     |
| Mixin                   | `.form-group-{size}()`                      | `.form-group-small()` `.form-group-medium()` `.form-group-large()`     |

</div>

You can set the size globally on **form**.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.form-{size}`                        | `.form-small` `.form-medium` `.form-large`     |
| Mixin                   | `.form-{size}()`                      | `.form-small()` `.form-medium()` `.form-large()`     |

</div>

[[notePrimary]]
| Form label and item must be inside `.form-group` to have default size.

<demo>
  <demovanilla src="vanilla/components/core/form/group-small">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/group-medium">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/group-large">
  </demovanilla>
</demo>

## Variant

Classes for assigning variant (e.g.: border / background / color). Add or remove selectors at your discretion.

You can set the size globally on **form**.

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.form-{variant}`                | Not Possible        | Form variant styles            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/variant-default">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/variant-inverse">
  </demovanilla>
</demo>

## Mode

There are several form group mode to change the form layout. They aren't just less classes to apply, but they need major markup formatting.

#### Normal

<script type="text/plain" class="language-markup">
  <form class="form-default">
    <div class="form-group">
      <!-- content -->
    </div>
    <div class="form-group">
      <!-- content -->
    </div>
  </form>
</script>

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.form-group`                | `.form-group()`        | Form group            | |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/mode-normal">
  </demovanilla>
</demo>

#### Horizontal

Horizontal label and input, add or remove selectors at your discretion.

<script type="text/plain" class="language-markup">
<form class="form-default">
  <div class="form-group">
    <div class="form-group-horizontal">
      <div class="col-form-label">
        <!-- content -->
      </div>
      <div class="col-form-item">
        <!-- content -->
      </div>
    </div>
  </div>

  <div class="form-group">
    <div class="form-group-horizontal">
      <div class="col-form-label">
        <!-- content -->
      </div>
      <div class="col-form-item">
        <!-- content -->
      </div>
    </div>
  </div>
</form>
</script>

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.form-group-horizontal`                | `.form-group-horizontal()`        | Form group horizontal            |
| Option                  | `.form-group-horizontal-sm`                | `.form-group-horizontal-sm()`        | Form group horizontal responsive            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/mode-horizontal">
  </demovanilla>
</demo>

#### Row

Multiple columns of `.form-group`, add or remove selectors at your discretion.

For columns sizes see [column page](/components/core/column).

<script type="text/plain" class="language-markup">
<form class="form-default">
  <div class="row row-form">
    <div class="col-form-double">
      <div class="form-group">
        <!-- content -->
      </div>
    </div>
    <div class="col-form-double">
      <div class="form-group">
        <!-- content -->
      </div>
    </div>
  </div>
</form>
</script>

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.col-form-double`                | `.col-form-double()`        | Form with double columns            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/mode-row">
  </demovanilla>
</demo>

#### Inline

Inline **form group**, add or remove selectors at your discretion.

<script type="text/plain" class="language-markup">
<form class="form-default">
  <div class="form-group-inline">
    <div class="form-group">
        <!-- content -->
    </div>
    <div class="form-group">
        <!-- content -->
    </div>
  </div>
</form>
</script>

<div class="table-scroll">

|                         | Class                                     | Mixin                         | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.form-group-inline`                | `.form-group-inline()`        | Form group inline            |
| Option                  | `.form-group-inline-sm`                | `.form-group-inline-sm()`        | Form group inline responsive           |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/mode-inline">
  </demovanilla>
</demo>

Inline **form input** and **form label**.

<script type="text/plain" class="language-markup">
<form class="form-default">
  <div class="form-group-inline">
    <div class="form-group">
      <div class="form-group-inline">
        <!-- content -->
      </div>
    </div>
    <div class="form-group">
      <div class="form-group-inline">
        <!-- content -->
      </div>
    </div>
  </div>
</form>
</script>

<demo>
  <demovanilla src="vanilla/components/core/form/mode-inline-inner">
  </demovanilla>
</demo>
