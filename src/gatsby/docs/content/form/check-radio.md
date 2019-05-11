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
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/form/check-radio/unstyled-block" data-name="block">
      <div class="demo-text">
        <div class="alert_content">
          <code>.unstyled</code>
        </div>
      </div>
    </div>
  </div>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/form/check-radio/unstyled-inline" data-name="inline">
      <div class="demo-text">
        <div class="alert_content">
          <code>.form-item--inline .unstyled</code> (@TODO link to form group)
        </div>
      </div>
    </div>
  </div>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/form/check-radio/unstyled-disabled" data-name="disabled">
      <div class="demo-text">
        <div class="alert_content">
          <code>.unstyled[disabled]</code>
        </div>
      </div>
    </div>
  </div>
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
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/form/check-radio/styled-block" data-name="block">
      <div class="demo-text">
        <div class="alert_content">
          Check and radio design
        </div>
      </div>
    </div>
  </div>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/form/check-radio/styled-inline" data-name="inline">
      <div class="demo-text">
        <div class="alert_content">
          <code>.form-item--inline</code> (@TODO link to form group)
        </div>
      </div>
    </div>
  </div>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/form/check-radio/styled-disabled" data-name="disabled">
      <div class="demo-text">
        <div class="alert_content">
          <code>[disabled]</code>
        </div>
      </div>
    </div>
  </div>
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
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/form/check-radio/fake-block" data-name="block">
      <div class="demo-text">
        <div class="alert_content">
          Check and radio design
        </div>
      </div>
    </div>
  </div>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/form/check-radio/fake-inline" data-name="inline">
      <div class="demo-text">
        <div class="alert_content">
          <code>.form-item--inline</code> (@TODO link to form group)
        </div>
      </div>
    </div>
  </div>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/form/check-radio/fake-disabled" data-name="disabled">
      <div class="demo-text">
        <div class="alert_content">
          <code>[disabled]</code>
        </div>
      </div>
    </div>
  </div>
</demo>
