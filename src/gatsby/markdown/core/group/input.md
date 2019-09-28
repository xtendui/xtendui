---
path: "/core/group/input"
type: "core"
title: "Input"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Content"]
parent: "Group"
---

##Usage

Use this markup to create a input group as line.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <div class="group_inner">
      <button type="button" class="btn">
        <!-- content -->
      </button>
    </div>

    <input type="text" class="form-item">

    <div class="group_inner">
      <button type="button" class="btn">
        <!-- content -->
      </button>
    </div>
    
  </div>
</script>

Use this markup to create a input group as stack.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <div class="group_inner">
      <button type="button" class="btn">
        <!-- content -->
      </button>
      <button type="button" class="btn">
        <!-- content -->
      </button>
    </div>

    <input type="text" class="form-item">
    
    <div class="group_inner">
      <button type="button" class="btn">
        <!-- content -->
      </button>
      <button type="button" class="btn">
        <!-- content -->
      </button>
    </div>
    
  </div>
</script>

##Modes

<demo>
  <demovanilla src="demos/inline/demos/group/input-line">
  </demovanilla>
  <demovanilla src="demos/inline/demos/group/input-stack">
  </demovanilla>
</demo>
