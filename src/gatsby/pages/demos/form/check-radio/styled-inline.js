import React from "react"

import DemoIframe from "components/demo-iframe"

const demo = {
  name: 'inline',
  full: false
}

class Page extends React.Component {
  componentDidMount() {
  }

  render() {
    let htmlSource = `
      <div class="form-item--inline">
        <div class="form-item">
          <input type="checkbox" id="checkbox-inline" checked>
          <label class="form-label" for="checkbox-inline">
            Lorem ipsum dolor
          </label>
        </div>

        <div class="form-item">
          <input type="radio" id="radio-inline-0" name="radio-inline" checked>
          <label class="form-label" for="radio-inline-0">
            Lorem ipsum dolor
          </label>
        </div>

        <div class="form-item">
          <input type="radio" id="radio-inline-1" name="radio-inline">
          <label class="form-label" for="radio-inline-1">
            Lorem ipsum dolor
          </label>
        </div>
      </div>
    `
    let jsSource = null
    let cssSource = null
    return (
      <DemoIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
