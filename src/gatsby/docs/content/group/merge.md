---
path: "/docs/content/group/merge"
type: "docs"
date: "2030-02-01"
title: "Merge"
description: "Description"
parent: "Group"
---

<h2>Usage</h2>

<p>Use this markup to merge multiple <code>.btn</code> in one <code>[button]</code> as line.</p>

<script type="text/plain" class="language-markup">
  <button type="button" class="group">
    <span class="group_inner">
      <span class="btn">
        <span><!-- content --></span>
      </span>
    </span>

    <span class="group_inner">
      <span class="btn">
        <span><!-- content --></span>
      </span>
    </span>
  </button>
</script>

<p>Use this markup to merge multiple <code>.btn</code> in one <code>[button]</code> as stack.</p>

<script type="text/plain" class="language-markup">
  <button type="button" class="group">
    <span class="group_inner">
      <span class="btn">
        <span><!-- content --></span>
      </span>
      
      <span class="btn">
        <span><!-- content --></span>
      </span>
    </span>
  </button>
</script>

<div class="alert">
  <div class="alert_content">
    Elements with <code>a, button</code> tag propagate <code>.hover</code> and <code>.active</code> classes on
    <code>.btn</code> childs automatically.
  </div>
</div>

<h2>Modes</h2>

<demo>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="demos/group/merge/line" data-name="line">
    </div>
  </div>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="demos/group/merge/stack" data-name="stack">
    </div>
  </div>
</demo>
