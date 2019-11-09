---
type: "Components"
core: true
parent: "Form"
title: "Check and Radio"
date: "2000-05-01"
---

##Unstyled

###Usage

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

[[noteError]]
| Checkbox and radio must be inside [form group](/core/form/group) to have default styles.

###Modes

<demo>
  <demovanilla src="vanilla/core/form/check-radio-unstyled-block">
  </demovanilla>
  <demovanilla src="vanilla/core/form/check-radio-unstyled-inline">
  </demovanilla>
  <demovanilla src="vanilla/core/form/check-radio-unstyled-disabled">
  </demovanilla>
</demo>

##Styled

###Usage

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
      <input type="radio" id="radio-styled" name="radio-styled">
      <label class="form-label" for="radio-styled">
        <!-- content -->
      </label>
    </div>
  </form>
</script>

[[noteError]]
| Checkbox and radio must be inside [form group](/core/form/group) to have default styles.

###Modes

<demo>
  <demovanilla src="vanilla/core/form/check-radio-styled-block">
  </demovanilla>
  <demovanilla src="vanilla/core/form/check-radio-styled-inline">
  </demovanilla>
  <demovanilla src="vanilla/core/form/check-radio-styled-disabled">
  </demovanilla>
</demo>

##Fake

###Usage

Use this markup to create a **fake** **styled** **checkbox** or **radio**.

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
  <demovanilla src="vanilla/core/form/check-radio-fake-block">
  </demovanilla>
  <demovanilla src="vanilla/core/form/check-radio-fake-inline">
  </demovanilla>
  <demovanilla src="vanilla/core/form/check-radio-fake-disabled">
  </demovanilla>
</demo>
