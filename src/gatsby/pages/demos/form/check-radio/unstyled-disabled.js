import React from "react"

import DemoIframe from "components/demo-iframe"

const demoName = 'disabled'

class Page extends React.Component {
  componentDidMount() {
  }

  render() {
    let htmlSource = `
      <div class="form-item">
        <input type="checkbox" class="unstyled" id="checkbox-disabled-unstyled" disabled checked>
        <label class="form-label" for="checkbox-disabled-unstyled">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
        </label>
      </div>

      <div class="form-item">
        <input type="radio" class="unstyled" id="radio-disabled-unstyled-0" name="radio-disabled-unstyled" disabled checked>
        <label class="form-label" for="radio-disabled-unstyled-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
        </label>
      </div>

      <div class="form-item">
        <input type="radio" class="unstyled" id="radio-disabled-unstyled-1" name="radio-disabled-unstyled" disabled>
        <label class="form-label" for="radio-disabled-unstyled-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
        </label>
      </div>
    `
    let jsSource = null
    let cssSource = null
    return (
      <DemoIframe demoName={demoName} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
