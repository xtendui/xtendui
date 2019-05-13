---
path: "/faq"
type: "faq"
date: "2019-01-01"
title: "Faq"
description: "Description"
categories: []
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
  <code class="language-less">
    // test comment
    
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

<script type="text/plain" class="language-markup">
  <a href="#" class="btn">
    <span><!-- content --></span>
  </a>
  <button type="button" class="btn">
    <span><!-- content --></span>
  </button>
</script>

<h2>Demos</h2>

<h3>Inline demos</h2>

<demo>
  <div class="demo-inline">
    <div class="demo-item demo-preview" data-name="vanilla">
      <div class="demo-text">
        <div class="alert_content">
          <code>.unstyled</code>
        </div>
      </div>
      <div class="demo-source demo-source-from" data-lang="language-markup">
        <div class="form-item">
          <input type="checkbox" class="unstyled" id="checkbox-block-unstyled">
          <label class="form-label" for="checkbox-block-unstyled">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
          </label>
        </div>
  
        <div class="form-item">
          <input type="radio" class="unstyled" id="radio-block-unstyled-0" name="radio-block-unstyled">
          <label class="form-label" for="radio-block-unstyled-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
          </label>
        </div>
  
        <div class="form-item">
          <input type="radio" class="unstyled" id="radio-block-unstyled-1" name="radio-block-unstyled">
          <label class="form-label" for="radio-block-unstyled-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
          </label>
        </div>
      </div>
    </div>
  </div>
</demo>

<h3>Demos</h2>

<demo>
  <demovanilla src="demos/test-vanilla" name="vanilla">
    <div class="demo-text">
      <div class="alert_content">
        Test
      </div>
    </div>
  </demovanilla>
  <demoreact src="demos/test-react" name="react">
    <div class="demo-text">
      <div class="alert_content">
        Test
      </div>
    </div>
  </demoreact>
</demo>

<h3>Iframe demos</h2>

<demo>
  <div class="demo-item" data-iframe="demos/test-vanilla-iframe" data-name="vanilla">
    <div class="demo-text">
      <div class="alert_content">
        Test
      </div>
    </div>
  </div>
  <div class="demo-item" data-iframe="demos/test-react-iframe" data-name="react">
    <div class="demo-text">
      <div class="alert_content">
        Test
      </div>
    </div>
  </div>
</demo>
