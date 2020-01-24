---
type: "Components"
badge: "Core"
parent: "Form"
title: "Group"
date: "2019-11-01"
---

## Usage

Use this markup to create a **form group**.

<script type="text/plain" class="language-markup">
  <form>
    <div class="form-group">
      <!-- content -->
    </div>
  </form>
</script>

If you want to customize form's group singularly use the class `.form-group.xt-custom`.

In css you can use `.form-groups({});` to style all `.form-group:not(.xt-custom)`.

[[notePrimary]]
| Form group must be inside `form` or `.form` to have default styles.

## Mode

There are several form group mode to change the form layout. They aren't just less classes to apply, but they need major markup formatting.

#### Normal

<script type="text/plain" class="language-markup">
<form>
  <div class="form-group">
    <!-- content -->
  </div>
  <div class="form-group">
    <!-- content -->
  </div>
</form>
</script>

<demo>
  <demovanilla src="vanilla/components/form/mode-normal">
  </demovanilla>
</demo>

#### Horizontal

Horizontal label and input, by default not on mobile, you can edit the media queries in `~xtend-library/src/core/form/form.less`.

<script type="text/plain" class="language-markup">
<form>
  <div class="form-group">
    <div class="form-group-horizontal">
      <div class="col-12 col-3-sm">
        <!-- content -->
      </div>
      <div class="col-12 col-9-sm">
        <!-- content -->
      </div>
    </div>
  </div>

  <div class="form-group">
    <div class="form-group-horizontal">
      <div class="col-12 col-3-sm">
        <!-- content -->
      </div>
      <div class="col-12 col-9-sm">
        <!-- content -->
      </div>
    </div>
  </div>
</form>
</script>

<demo>
  <demovanilla src="vanilla/components/form/mode-horizontal">
  </demovanilla>
</demo>

#### Row

Multiple columns of `.form-group`, by default not on mobile, you can edit the media queries in `~xtend-library/src/core/form/form.less`.

For columns sizes see [column page](/components/column).

<script type="text/plain" class="language-markup">
<form>
  <div class="form-group-row">
    <div class="col-12 col-3-sm">
      <div class="form-group">
        <!-- content -->
      </div>
    </div>
    <div class="col-12 col-9-sm">
      <div class="form-group">
        <!-- content -->
      </div>
    </div>
  </div>
</form>
</script>

<demo>
  <demovanilla src="vanilla/components/form/mode-row">
  </demovanilla>
</demo>

#### Inline Group

Inline **form group**, by default not on mobile, you can edit the media queries in `~xtend-library/src/core/form/form.less`.

<script type="text/plain" class="language-markup">
<form>
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

<demo>
  <demovanilla src="vanilla/components/form/mode-inline-group">
  </demovanilla>
</demo>

#### Inline multipe

Inline **form input** and **form label**, by default not on mobile, you can edit the media queries in `~xtend-library/src/core/form/form.less`.

<script type="text/plain" class="language-markup">
<form>
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
  <demovanilla src="vanilla/components/form/mode-inline-multiple">
  </demovanilla>
</demo>

## Size

Classes for assigning size (e.g.: padding or font size). Add or remove selectors at your discretion.

You can set the size globally on **form**.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.form-{size}`                        | `.form-small` `.form-medium` `.form-big`     |
| Mixin                   | `.form-{size}()`                      | `.form-small()` `.form-medium()` `.form-big()`     |

</div>

Or granularly on **form group**.

<div class="table-scroll">

|                         | Syntax                                    | Example                       |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Class                   | `.form-group-{size}`                        | `.form-group-small` `.form-group-medium` `.form-group-big`     |
| Mixin                   | `.form-group-{size}()`                      | `.form-group-small()` `.form-group-medium()` `.form-group-big()`     |

</div>

<demo>
  <demovanilla src="vanilla/components/form/group-small">
  </demovanilla>
  <demovanilla src="vanilla/components/form/group-medium">
  </demovanilla>
  <demovanilla src="vanilla/components/form/group-big">
  </demovanilla>
</demo>
