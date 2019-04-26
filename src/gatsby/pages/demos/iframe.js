import React from "react"

import SEO from "components/seo"
import Layout from "components/demo-layout"

const demoName = 'iframe'
const title = demoName.charAt(0).toUpperCase() + demoName.slice(1)

class Page extends React.Component {
  componentDidMount() {
    document.querySelector('html').classList.add('demo' + title)
    require("./" + demoName + ".source.less")
    require("./" + demoName + ".source.js")
  }
  render() {
    const description = "Demo"
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
    let cssSource = require("!!raw-loader!./" + demoName + ".source.less").default
    let jsSource = require("!!raw-loader!./" + demoName + ".source.js").default
    return (
      <Layout title={title} description={description} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}>
        <SEO title={title + ' — ' + description}/>
        <div id="body-outer">
          <div id="body-inner" className="demo-source-from" dangerouslySetInnerHTML={{__html: htmlSource}} />
        </div>
      </Layout>
    )
  }
}

export default Page
