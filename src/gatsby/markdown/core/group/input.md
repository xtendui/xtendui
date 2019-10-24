---
type: "Core"
parent: "Group"
title: "Input"
---

##Usage

Use this markup to create a input group as line.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <div class="group-inner">
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
    </div>

    <input type="text" class="form-item">

    <div class="group-inner">
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
    </div>
    
  </div>
</script>

Use this markup to create a input group as stack.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <div class="group-inner">
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
    </div>

    <input type="text" class="form-item">
    
    <div class="group-inner">
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
      <button type="button" class="btn btn--default">
        <!-- content -->
      </button>
    </div>
    
  </div>
</script>

##Modes

<demo>
  <demovanilla src="inline/core/group/input-line">
  </demovanilla>
  <demovanilla src="inline/core/group/input-stack">
  </demovanilla>
</demo>
