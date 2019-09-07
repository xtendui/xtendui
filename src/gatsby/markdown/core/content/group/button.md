---
path: "/core/group/button"
type: "core"
date: "2019-01-01"
title: "Button"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Content"]
parent: "Group"
---

##Usage

Use this markup to create a button group as line.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <button type="button" class="btn">
      <span><!-- content --></span>
    </button>
    
    <button type="button" class="btn">
      <span><!-- content --></span>
    </button>
    
  </div>
</script>

Use this markup to create a button group as stack.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <div class="group_inner">
      <button type="button" class="btn">
        <span><!-- content --></span>
      </button>
      
      <button type="button" class="btn">
        <span><!-- content --></span>
      </button>
      
    </div>
  </div>
</script>

##Modes

<demo>
  <demovanilla src="demos/inline/demos/group/button-line" >
  </demovanilla>
  <demovanilla src="demos/inline/demos/group/button-stack">
  </demovanilla>
</demo>
