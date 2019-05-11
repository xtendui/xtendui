---
path: "/docs/content/group/button"
type: "docs"
date: "2030-01-01"
title: "Button"
description: "Description"
parent: "Group"
---

<h2>Usage</h2>

<p>Use this markup to create a button group as line.</p>

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

<p>Use this markup to create a button group as stack.</p>

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

<h2>Modes</h2>

<demo>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/group/button/line" data-name="line">
    </div>
  </div>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/group/button/stack" data-name="stack">
    </div>
  </div>
</demo>
