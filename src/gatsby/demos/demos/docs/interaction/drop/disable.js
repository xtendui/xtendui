import React from "react"
import path from "path";

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: path.basename(__filename, '.js'),
  js: false,
  css: true,
  full: false
}
demo.htmlSource = `
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
            <button type="button">
              <span>Lorem ipsum dolor</span>
            </button>
          </li>
          <li>
            <button type="button">
              <span>Dolor sit</span>
            </button>
          </li>
          <li>
            <button type="button">
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
            <button type="button">
              <span>Lorem ipsum dolor</span>
            </button>
          </li>
          <li>
            <button type="button">
              <span>Dolor sit</span>
            </button>
          </li>
          <li class="drop_outer event-limit" data-xt-drop>
            <button type="button">
              <span>Toggle</span>
            </button>
            <div class="drop drop--primary drop--after drop--middle">
              <div class="drop_inner">
                <div class="drop_design"></div>
                <div class="drop_content">
                  <ul class="list list--drop">
                    <li>
                      <button type="button">
                        <span>Lorem ipsum dolor</span>
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <span>Dolor sit</span>
                      </button>
                    </li>
                    <li class="drop_outer event-limit" data-xt-drop>
                      <button type="button">
                        <span>Toggle</span>
                      </button>
                      <div class="drop drop--secondary drop--center drop--middle">
                        <div class="drop_inner">
                          <div class="drop_design"></div>
                          <div class="drop_content">
                            <ul class="list list--drop">
                              <li>
                                <button type="button">
                                  <span>Lorem ipsum dolor</span>
                                </button>
                              </li>
                              <li>
                                <button type="button">
                                  <span>Dolor sit</span>
                                </button>
                              </li>
                              <li>
                                <button type="button">
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

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require("./" + demo.name + ".source.js")
    }
  }

  render() {
    if (demo.js) {
      demo.jsSource = require("!!raw-loader!./" + demo.name + ".source.js").default
    }
    if (demo.css) {
      demo.cssSource = require("!!raw-loader!./" + demo.name + ".source.less").default
      demo.css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    }
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
