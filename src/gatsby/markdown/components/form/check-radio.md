---
type: "Components"
badge: "Core"
parent: "Form"
title: "Check and Radio"
date: "2019-06-01"
---

## Usage

#### Styled

Use this markup to create a **styled** **checkbox** or **radio**.

<script type="text/plain" class="language-markup">
  <form class="form-default">
    <div class="form-group">
      <input type="checkbox" id="checkbox-styled">
      <label class="form-label" for="checkbox-styled">
        <!-- content -->
      </label>
    </div>

    <div class="form-group">
      <input type="radio" id="radio-styled" name="radio-styled">
      <label class="form-label" for="radio-styled">
        <!-- content -->
      </label>
    </div>
  </form>
</script>

[[notePrimary]]
| Checkbox and radio must be inside [form group](/components/form/group) to have default styles.

<demo>
  <demovanilla src="vanilla/components/form/check-radio-styled-block">
  </demovanilla>
  <demovanilla src="vanilla/components/form/check-radio-styled-inline">
  </demovanilla>
  <demovanilla src="vanilla/components/form/check-radio-styled-disabled">
  </demovanilla>
</demo>

#### Fake

Use this markup to create a **fake** **styled** **checkbox** or **radio**.

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.checkbox`                 | `.checkbox()`        | Set up fake styled checkbox            |
| Option                  | `.radio`                 | `.radio()`        | Set up fake styled radio            |

</div>

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

<demo>
  <demovanilla src="vanilla/components/form/check-radio-fake-block">
  </demovanilla>
  <demovanilla src="vanilla/components/form/check-radio-fake-inline">
  </demovanilla>
  <demovanilla src="vanilla/components/form/check-radio-fake-disabled">
  </demovanilla>
</demo>

#### Unstyled

Use this markup to create a **unstyled** **checkbox** or **radio**.

<div class="table-scroll">

|                         | Class                                     | Mixin                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `.unstyled`                 | Not Possible        | Set up unstyled checkbox and radio            |

</div>

<script type="text/plain" class="language-markup">
  <form class="form-default">
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

[[notePrimary]]
| Checkbox and radio must be inside [form group](/components/form/group) to have default styles.

<demo>
  <demovanilla src="vanilla/components/form/check-radio-unstyled-block">
  </demovanilla>
  <demovanilla src="vanilla/components/form/check-radio-unstyled-inline">
  </demovanilla>
  <demovanilla src="vanilla/components/form/check-radio-unstyled-disabled">
  </demovanilla>
</demo>
