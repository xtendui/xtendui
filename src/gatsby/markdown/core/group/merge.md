---
type: "Core"
parent: "Group"
title: "Merge"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Content"]
---

##Usage

Use this markup to merge multiple `.btn` in one `[button]` as line.

<script type="text/plain" class="language-markup">
  <button type="button" class="group">
  
    <div class="group_inner">
      <div class="btn">
        <!-- content -->
      </div>
    </div>

    <div class="group_inner">
      <div class="btn">
        <!-- content -->
      </div>
    </div>
    
  </button>
</script>

Use this markup to merge multiple `.btn` in one `[button]` as stack.

<script type="text/plain" class="language-markup">
  <button type="button" class="group">
  
    <div class="group_inner">
      <div class="btn">
        <!-- content -->
      </div>
      
      <div class="btn">
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
  <demovanilla src="demos/inline/demos/group/merge-line">
  </demovanilla>
  <demovanilla src="demos/inline/demos/group/merge-stack">
  </demovanilla>
</demo>
