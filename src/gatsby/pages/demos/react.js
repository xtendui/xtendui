import React from "react"

import SEO from "components/seo"
import Layout from "components/demo-layout"

import cssSource from "!!raw-loader!./react.source.less"
import "./react.source.less"
import jsSource from "!!raw-loader!./react.source.js"
import "./react.source.js"

class Page extends React.Component {
  render() {
    const title = "Demo"
    let htmlSource = `
<div class="drop_outer drop--disable" data-xt-drop>
  <button type="button" class="btn btn--primary">
    <span>Toggle</span>
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

<div class="drop_outer drop--disable-example" data-xt-drop>
  <button type="button" class="btn btn--primary">
    <span>Toggle</span>
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
          <li class="drop_outer event-limit" data-xt-drop>
            <button type="button" class="btn">
              <span>Toggle</span>
            </button>
            <div class="drop drop--primary drop--after drop--middle">
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
                    <li class="drop_outer event-limit" data-xt-drop>
                      <button type="button" class="btn">
                        <span>Toggle</span>
                      </button>
                      <div class="drop drop--secondary drop--center drop--middle">
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
    `
    return (
      <Layout title={title} htmlSource={htmlSource} cssSource={cssSource} jsSource={jsSource}>
        <SEO title={title}/>
        <div id="body-outer">
          <div id="body-inner" className="demo-source-from" dangerouslySetInnerHTML={{__html: htmlSource}} />
        </div>
      </Layout>
    )
  }
}

export default Page
