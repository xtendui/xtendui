---
path: "/docs/group/input"
type: "docs"
date: "2019-03-01"
title: "Input"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
categories: ["100-Content"]
parent: "Group"
---

##Usage

Use this markup to create a input group as line.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <span class="group_inner">
      <button type="button" class="btn">
        <span><!-- content --></span>
      </button>
    </span>

    <input type="text" class="form-item">

    <span class="group_inner">
      <button type="button" class="btn">
        <span><!-- content --></span>
      </button>
    </span>
    
  </div>
</script>

Use this markup to create a input group as stack.

<script type="text/plain" class="language-markup">
  <div class="group">
  
    <span class="group_inner">
      <button type="button" class="btn">
        <span><!-- content --></span>
      </button>
      <button type="button" class="btn">
        <span><!-- content --></span>
      </button>
    </span>

    <input type="text" class="form-item">
    
    <span class="group_inner">
      <button type="button" class="btn">
        <span><!-- content --></span>
      </button>
      <button type="button" class="btn">
        <span><!-- content --></span>
      </button>
    </span>
    
  </div>
</script>

##Modes

<demo>
  <demovanilla src="demos/inline/demos/group/input-line">
  </demovanilla>
  <demovanilla src="demos/inline/demos/group/input-stack">
  </demovanilla>
</demo>
