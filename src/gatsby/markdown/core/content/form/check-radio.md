---
path: "/core/form/check-radio"
type: "core"
date: "2019-02-01"
title: "Check and Radio"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Content"]
parent: "Form"
---

##Unstyled

###Usage

Use this markup to create a checkbox or radio **unstyled**.

<script type="text/plain" class="language-markup">
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
</script>

###Modes

<demo>
  <demovanilla src="demos/inline/demos/form/check-radio-unstyled-block">
  </demovanilla>
  <demovanilla src="demos/inline/demos/form/check-radio-unstyled-inline">
  </demovanilla>
  <demovanilla src="demos/inline/demos/form/check-radio-unstyled-disabled">
  </demovanilla>
</demo>

##Styled

###Usage

Use this markup to create a checkbox or radio **styled**.

<script type="text/plain" class="language-markup">
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
</script>

###Modes

<demo>
  <demovanilla src="demos/inline/demos/form/check-radio-styled-block">
  </demovanilla>
  <demovanilla src="demos/inline/demos/form/check-radio-styled-inline">
  </demovanilla>
  <demovanilla src="demos/inline/demos/form/check-radio-styled-disabled">
  </demovanilla>
</demo>

##Fake

###Usage

Use this markup to create a **fake** checkbox or radio **styled**.

<script type="text/plain" class="language-markup">
  <div class="form-group">
    <div class="checkbox-styled">
      <!-- content -->
    </div>
  </div>

  <div class="form-group">
    <div class="radio-styled">
      <!-- content -->
    </div>
  </div>
</script>

###Modes

<demo>
  <demovanilla src="demos/inline/demos/form/check-radio-fake-block">
  </demovanilla>
  <demovanilla src="demos/inline/demos/form/check-radio-fake-inline">
  </demovanilla>
  <demovanilla src="demos/inline/demos/form/check-radio-fake-disabled">
  </demovanilla>
</demo>
