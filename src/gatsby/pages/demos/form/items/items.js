import React from "react"

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: 'items',
  js: false,
  css: false,
  full: true
}

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require("./" + demo.name + ".source.js")
    }
    if (demo.css) {
      require("./" + demo.name + ".source.less")
    }
  }

  render() {
    let htmlSource = `
      <form>

        <legend>Test normal</legend>
        <div class="form-item">
          <label class="form-label">
            Lorem
          </label>
          <input type="text" class="form-input">
        </div>
        <div class="form-item">
          <label class="form-label">
            Lorem Ipsum
          </label>
          <input type="text" class="form-input">
        </div>

        <legend>Test flex</legend>
        <div class="form-item--flex-sm">
          <div class="col--12 col--3-sm">
            <div class="form-item">
              <label class="form-label">
                Lorem
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
          <div class="col--12 col--9-sm">
            <div class="form-item">
              <label class="form-label">
                Lorem Ipsum
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
        </div>
        <div class="form-item--flex-sm">
          <div class="col--12 col--3-sm">
            <div class="form-item">
              <label class="form-label">
                Lorem
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
          <div class="col--12 col--9-sm">
            <div class="form-item">
              <label class="form-label">
                Lorem Ipsum
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
        </div>

        <legend>Test horizontal</legend>
        <div class="form-item">
          <div class="form-item--horizontal-sm">
            <div class="col--12 col--3-sm">
              <label class="form-label">
                Lorem
              </label>
            </div>
            <div class="col--12 col--9-sm">
              <input type="text" class="form-input">
            </div>
          </div>
        </div>
        <div class="form-item">
          <div class="form-item--horizontal-sm">
            <div class="col--12 col--3-sm">
              <label class="form-label">
                Lorem Ipsum
              </label>
            </div>
            <div class="col--12 col--9-sm">
              <input type="text" class="form-input">
            </div>
          </div>
        </div>

        <legend>Test inline input</legend>
        <div class="form-item--inline">
          <div class="form-item">
            <label class="form-label">
              Lorem
            </label>
            <input type="text" class="form-input">
          </div>
          <div class="form-item">
            <label class="form-label">
              Lorem Ipsum
            </label>
            <input type="text" class="form-input">
          </div>
        </div>
        <div class="form-item--inline">
          <div class="form-item">
            <label class="form-label">
              Lorem
            </label>
            <input type="text" class="form-input">
          </div>
          <div class="form-item">
            <label class="form-label">
              Lorem Ipsum
            </label>
            <input type="text" class="form-input">
          </div>
        </div>

        <legend>Test inline input and label</legend>
        <div class="form-item--inline">
          <div class="form-item">
            <div class="form-item--inline">
              <label class="form-label">
                Lorem
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
          <div class="form-item">
            <div class="form-item--inline">
              <label class="form-label">
                Lorem Ipsum
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
        </div>
        <div class="form-item--inline">
          <div class="form-item">
            <div class="form-item--inline">
              <label class="form-label">
                Lorem
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
          <div class="form-item">
            <div class="form-item--inline">
              <label class="form-label">
                Lorem Ipsum
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
        </div>

        <p>Lorem ipsum.</p>

        <legend>Test combo</legend>

        <div class="form-item">
          <label class="form-label">
            Lorem
          </label>
          <input type="text" class="form-input">
        </div>

        <div class="form-item--flex-sm">
          <div class="col--12 col--3-sm">
            <div class="form-item">
              <label class="form-label">
                Lorem
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
          <div class="col--12 col--9-sm">
            <div class="form-item">
              <label class="form-label">
                Lorem Ipsum
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
        </div>

        <div class="form-item">
          <div class="form-item--horizontal-sm">
            <div class="col--12 col--3-sm">
              <label class="form-label">
                Lorem
              </label>
            </div>
            <div class="col--12 col--9-sm">
              <input type="text" class="form-input">
            </div>
          </div>
        </div>

        <div class="form-item--inline">
          <div class="form-item">
            <label class="form-label">
              Lorem
            </label>
            <input type="text" class="form-input">
          </div>
          <div class="form-item">
            <label class="form-label">
              Lorem Ipsum
            </label>
            <input type="text" class="form-input">
          </div>
        </div>

        <div class="form-item--inline">
          <div class="form-item">
            <div class="form-item--inline">
              <label class="form-label">
                Lorem
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
          <div class="form-item">
            <div class="form-item--inline">
              <label class="form-label">
                Lorem Ipsum
              </label>
              <input type="text" class="form-input">
            </div>
          </div>
        </div>

        <div class="form-item">
          <label class="form-label">
            Lorem Ipsum
          </label>
          <textarea class="form-input"></textarea>
        </div>

        <div class="form-item">
          <button type="submit" class="btn btn--primary btn--sm">
            <span>Submit</span>
          </button>
        </div>

      </form>
    `
    let jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    let cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoVanillaIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
