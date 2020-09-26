---
type: "Components"
category: "Core"
parent: "Form"
title: "Content"
date: "2030-10-10"
---

## Variant

Use **tailwind classes** to assign variant (e.g.: border, background, color).

<demo>
  <demovanilla src="vanilla/components/core/form/variant-default">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/variant-primary">
  </demovanilla>
</demo>

## Size

Use **component's classes** to assign size (e.g.: padding, font size).

[[noteDefault]]
| To customize utils and components follow [css customization](/introduction/getting-started/setup#css-customization) instructions.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `form, .form`                     | `form`                | Default size            |
| Component                  | `.form-sm`                     | `form-sm`                | Size small            |
| Component                  | `.form-md`                     | `form-md`                | Size medium            |
| Component                  | `.form-lg`                     | `form-lg`                | Size large            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/size-sm">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/size-md">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/size-lg">
  </demovanilla>
</demo>

## Check and Radio

#### Styled

Use this markup to create a **styled** **checkbox** or **radio**.

<script type="text/plain" class="language-markup">
  <form>
    <div class="form-group">
      <input type="checkbox" id="checkbox-styled">
      <label class="form-label" for="checkbox-styled">
        <!-- content -->
      </label>
    </div>

    <div class="form-group">
      <input type="radio" id="radio-styled-0" name="radio-styled">
      <label class="form-label" for="radio-styled-0">
        <!-- content -->
      </label>
    </div>
  </form>
</script>

<demo>
  <demovanilla src="vanilla/components/core/form/check-radio-styled-block">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/check-radio-styled-inline">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/check-radio-styled-disabled">
  </demovanilla>
</demo>

For inline or other checkbox and radio layout refer to [form mode](/components/core/form/items#mode).

#### Fake

Use this markup to create a **fake** **styled** **checkbox** or **radio**.

<script type="text/plain" class="language-markup">
  <div class="form-group">
    <div class="checkbox">
      <!-- content -->
    </div>
  </div>

  <div class="form-group">
    <div class="radio">
      <!-- content -->
    </div>
  </div>
</script>

<div class="table-scroll">

|                         | Syntax                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.checkbox`                 | `.checkbox()`        | Set up fake styled checkbox            |
| Option                  | `.radio`                 | `.radio()`        | Set up fake styled radio            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/form/check-radio-fake-block">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/check-radio-fake-inline">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/check-radio-fake-disabled">
  </demovanilla>
</demo>

#### Unstyled

Use this markup to create a **unstyled** **checkbox** or **radio**.

<script type="text/plain" class="language-markup">
  <form>
    <div class="form-group">
      <input type="checkbox" id="checkbox-unstyled" class="unstyled">
      <label class="form-label" for="checkbox-unstyled">
        <!-- content -->
      </label>
    </div>

    <div class="form-group">
      <input type="radio" id="radio-unstyled" name="radio-unstyled" class="unstyled">
      <label class="form-label" for="radio-unstyled">
        <!-- content -->
      </label>
    </div>
  </form>
</script>

<div class="table-scroll">

|                         | Syntax                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.unstyled`                 | Not Possible        | Set up unstyled checkbox and radio            |

</div>

[[notePrimary]]
| Checkbox and radio must be inside [form group](/components/core/form/group) to have default styles.

<demo>
  <demovanilla src="vanilla/components/core/form/check-radio-unstyled-block">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/check-radio-unstyled-inline">
  </demovanilla>
  <demovanilla src="vanilla/components/core/form/check-radio-unstyled-disabled">
  </demovanilla>
</demo>
