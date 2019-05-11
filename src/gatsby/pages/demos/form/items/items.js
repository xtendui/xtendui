import React from "react"

import DemoIframe from "components/demo-iframe"

const demo = {
  name: 'items',
  full: false
}

class Page extends React.Component {
  componentDidMount() {
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
    let jsSource = null
    let cssSource = null
    return (
      <DemoIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
