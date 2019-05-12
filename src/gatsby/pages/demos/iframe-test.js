import React from "react"

import DemoIframe from "components/demo-iframe"

const demo = {
  name: 'iframe-test',
  js: true,
  css: true,
  full: true
}

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require("./" + demo.name + ".source.js")
    }
  }

  render() {
    let htmlSource = `
      <!-- test comment -->
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
    let jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    let cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    let css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource} css={css} />
    )
  }
}

export default Page
