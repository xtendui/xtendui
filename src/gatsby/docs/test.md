---
path: "/test"
type: "doc"
date: "2017-11-07"
title: "Title"
description: "Description"
tags: ["app", "design"]
categories: ["UI/UX Design", "Brand Design"]
---

<h2>Test shell</h2>

<pre>
  <code class="language-shell">
    $ mkdir -p xtend-library/
    $ cp -r node_modules/xtend-library/dist/ xtend-library/
  </code>
</pre>

<h2>Test css</h2>

<pre>
  <code class="language-css">
    @import (reference) "../../../../dist/styles/xtend.less";
    
    .drop--disable-example {
      @media @min-sm {
        .drop--disable();
      }
    }
    
    body {
      background: #ff0000;
    }
  </code>
</pre>

<h2>Test markup</h2>

<pre>
  <code class="language-markup">
    <a href="#" class="btn">
      <span><!-- content --></span>
    </a>
    <button type="button" class="btn">
      <span><!-- content --></span>
    </button>
  </code>
</pre>

<h2>Tests</h2>

<h3>Test iframe demos</h2>

<demo>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/iframe" data-name="iframe">
    </div>
    <div class="demo-item" data-iframe="/demos/react" data-name="react">
    </div>
  </div>
</demo>
