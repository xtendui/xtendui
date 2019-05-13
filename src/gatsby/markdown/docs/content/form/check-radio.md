---
path: "/docs/content/form/check-radio"
type: "docs"
date: "2030-02-01"
title: "Checkbox and Radio"
description: "Description"
parent: "Form"
---

<h2>Unstyled</h2>

<h3>Usage</h3>

<p>Use this markup to create a checkbox or radio <strong>unstyled</strong>.</p>

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

<h3>Modes</h3>

<demo>
  <demovanilla src="demos/docs/content/form/check-radio/unstyled-block" name="block">
    <div class="demo-text">
      <div class="alert_content">
        <code>.unstyled</code>
      </div>
    </div>
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/unstyled-inline" name="inline">
    <div class="demo-text">
      <div class="alert_content">
        <code>.form-item--inline .unstyled</code> (@TODO link to form group)
      </div>
    </div>
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/unstyled-disabled" name="disabled">
    <div class="demo-text">
      <div class="alert_content">
        <code>.unstyled[disabled]</code>
      </div>
    </div>
  </demovanilla>
</demo>

<h2>Styled</h2>

<h3>Usage</h3>

<p>Use this markup to create a checkbox or radio <strong>styled</strong>.</p>

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

<h3>Modes</h3>

<demo>
  <demovanilla src="demos/docs/content/form/check-radio/styled-block" name="block">
    <div class="demo-text">
      <div class="alert_content">
        Check and radio design
      </div>
    </div>
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/styled-inline" name="inline">
    <div class="demo-text">
      <div class="alert_content">
        <code>.form-item--inline</code> (@TODO link to form group)
      </div>
    </div>
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/styled-disabled" name="disabled">
    <div class="demo-text">
      <div class="alert_content">
        <code>[disabled]</code>
      </div>
    </div>
  </demovanilla>
</demo>

<h2>Fake</h2>

<h3>Usage</h3>

<p>Use this markup to create a <strong>fake</strong> checkbox or radio <strong>styled</strong>.</p>

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

<h3>Modes</h3>

<demo>
  <demovanilla src="demos/docs/content/form/check-radio/fake-block" name="block">
    <div class="demo-text">
      <div class="alert_content">
        Check and radio design
      </div>
    </div>
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/fake-inline" name="inline">
    <div class="demo-text">
      <div class="alert_content">
        <code>.form-item--inline</code> (@TODO link to form group)
      </div>
    </div>
  </demovanilla>
  <demovanilla src="demos/docs/content/form/check-radio/fake-disabled" name="disabled">
    <div class="demo-text">
      <div class="alert_content">
        <code>[disabled]</code>
      </div>
    </div>
  </demovanilla>
</demo>
