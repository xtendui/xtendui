---
path: "/docs/content/group/input"
type: "docs"
date: "2030-03-01"
title: "Input"
description: "Description"
parent: "Group"
---

<h2>Usage</h2>

<p>Use this markup to create a input group as line.</p>

<script type="text/plain" class="language-markup">
  <div class="group">
    <span class="group_inner">
      <button type="button" class="btn">
        <span><!-- content --></span>
      </button>
    </span>

    <input type="text" class="form-input">

    <span class="group_inner">
      <button type="button" class="btn">
        <span><!-- content --></span>
      </button>
    </span>
  </div>
</script>

<p>Use this markup to create a input group as stack.</p>

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

    <input type="text" class="form-input">
    
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
  <demovanilla src="demos/docs/content/group/input/line" name="line">
  </demovanilla>
  <demovanilla src="demos/docs/content/group/input/stack" name="stack">
  </demovanilla>
</demo>
