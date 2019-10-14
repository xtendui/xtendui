---
type: "Core"
parent: "Group"
title: "Merge"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

##Usage

Use this markup to merge multiple `.btn` in one `[button]` as line.

<script type="text/plain" class="language-markup">
  <button type="button" class="group">
  
    <div class="group_inner">
      <div class="btn btn--default">
        <!-- content -->
      </div>
    </div>

    <div class="group_inner">
      <div class="btn btn--default">
        <!-- content -->
      </div>
    </div>
    
  </button>
</script>

Use this markup to merge multiple `.btn` in one `[button]` as stack.

<script type="text/plain" class="language-markup">
  <button type="button" class="group">
  
    <div class="group_inner">
      <div class="btn btn--default">
        <!-- content -->
      </div>
      
      <div class="btn btn--default">
        <!-- content -->
      </div>
      
    </div>
  </button>
</script>

<div class="alert">
  <div class="alert_content">
    @TODO see propagate-interaction
  </div>
</div>

##Modes

<demo>
  <demovanilla src="inline/core/group/merge-line">
  </demovanilla>
  <demovanilla src="inline/core/group/merge-stack">
  </demovanilla>
</demo>
