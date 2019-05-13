---
path: "/docs/content/form/check-radio"
type: "docs"
date: "2030-02-01"
title: "Checkbox and Radio"
description: "Description"
parent: "Form"
---

##Unstyled

###Usage

Use this markup to create a checkbox or radio **unstyled**.

<script type="text/plain" class="language-markup">
  <div class="form-item">
    <input type="checkbox" id="checkbox-unstyled" class="unstyled">
    <label class="form-label" for="checkbox-unstyled">
      <!-- content -->
    </label>
  </div>

  <div class="form-item">
    <input type="radio" id="radio-unstyled" name="radio-unstyled" class="unstyled">
    <label class="form-label" for="radio-unstyled">
      <!-- content -->
    </label>
  </div>
</script>

###Modes

<demo>
  <demovanilla src="demos/docs/content/form/check-radio/unstyled-block" name="block">
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/unstyled-inline" name="inline">
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/unstyled-disabled" name="disabled">
  </demovanilla>
</demo>

##Styled

###Usage

Use this markup to create a checkbox or radio **styled**.

<script type="text/plain" class="language-markup">
  <div class="form-item">
    <input type="checkbox" id="checkbox-styled">
    <label class="form-label" for="checkbox-styled">
      <!-- content -->
    </label>
  </div>

  <div class="form-item">
    <input type="radio" id="radio-styled" name="radio-styled">
    <label class="form-label" for="radio-styled">
      <!-- content -->
    </label>
  </div>
</script>

###Modes

<demo>
  <demovanilla src="demos/docs/content/form/check-radio/styled-block" name="block">
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/styled-inline" name="inline">
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/styled-disabled" name="disabled">
  </demovanilla>
</demo>

##Fake

###Usage

Use this markup to create a **fake** checkbox or radio **styled**.

<script type="text/plain" class="language-markup">
  <div class="form-item">
    <div class="checkbox-styled">
      <!-- content -->
    </div>
  </div>

  <div class="form-item">
    <div class="radio-styled">
      <!-- content -->
    </div>
  </div>
</script>

###Modes

<demo>
  <demovanilla src="demos/docs/content/form/check-radio/fake-block" name="block">
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/fake-inline" name="inline">
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/fake-disabled" name="disabled">
  </demovanilla>
</demo>
