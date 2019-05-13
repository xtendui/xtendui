---
path: "/docs/content/group/button"
type: "docs"
date: "2030-01-01"
title: "Button"
description: "Description"
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
  <demovanilla src="demos/docs/content/group/button/line" name="line">
  </demovanilla>
  <demovanilla src="demos/docs/content/group/button/stack" name="stack">
  </demovanilla>
</demo>
