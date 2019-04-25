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

<h3>Test inline demos</h2>

<demo>
  <div class="demo-inner">
    <div class="demo-item demo-preview" data-name="variants">
      <div class="demo-text">
        <div class="alert_content">
          <code>.drop--primary</code> <code>.drop--secondary</code> <code>.drop--white</code>
        </div>
      </div>
      <div class="demo-source" data-lang="html">
        <div class="list list-space--small align-items--center demo-source-from">
          <div class="drop_outer" data-xt-drop>
            <button type="button" class="btn btn--primary">
              <span>default</span>
            </button>
            <div class="drop">
              <div class="drop_inner">
                <div class="drop_design"></div>
                <div class="drop_content">
                  <ul class="list list--drop">
                    <li>
                      <button type="button" class="btn">
                        <span>Lorem ipsum dolor</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="btn">
                        <span>Dolor sit</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="btn">
                        <span>Amet</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <div class="drop_outer" data-xt-drop>
            <button type="button" class="btn btn--primary">
              <span>primary</span>
            </button>
            <div class="drop drop--primary">
              <div class="drop_inner">
                <div class="drop_design"></div>
                <div class="drop_content">
                  <ul class="list list--drop">
                    <li>
                      <button type="button" class="btn">
                        <span>Lorem ipsum dolor</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="btn">
                        <span>Dolor sit</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="btn">
                        <span>Amet</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <div class="drop_outer" data-xt-drop>
            <button type="button" class="btn btn--primary">
              <span>secondary</span>
            </button>
            <div class="drop drop--secondary">
              <div class="drop_inner">
                <div class="drop_design"></div>
                <div class="drop_content">
                  <ul class="list list--drop">
                    <li>
                      <button type="button" class="btn">
                        <span>Lorem ipsum dolor</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="btn">
                        <span>Dolor sit</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="btn">
                        <span>Amet</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <div class="drop_outer" data-xt-drop>
            <button type="button" class="btn btn--primary">
              <span>white</span>
            </button>
            <div class="drop drop--white">
              <div class="drop_inner">
                <div class="drop_design"></div>
                <div class="drop_content">
                  <ul class="list list--drop">
                    <li>
                      <button type="button" class="btn">
                        <span>Lorem ipsum dolor</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="btn">
                        <span>Dolor sit</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="btn">
                        <span>Amet</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</demo>

<h3>Test iframe demos</h2>

<demo>
  <div class="demo-inner">
    <div class="demo-item" data-iframe="/demos/iframe" data-name="iframe">
    </div>
    <div class="demo-item" data-iframe="/demos/react" data-name="react">
    </div>
  </div>
</demo>
