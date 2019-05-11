import React from "react"

import DemoIframe from "components/demo-iframe"

const demo = {
  name: 'block',
  full: false
}

class Page extends React.Component {
  componentDidMount() {
  }

  render() {
    let htmlSource = `
      <div class="form-item">
        <input type="checkbox" class="unstyled" id="checkbox-block-unstyled" checked>
        <label class="form-label" for="checkbox-block-unstyled">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
        </label>
      </div>

      <div class="form-item">
        <input type="radio" class="unstyled" id="radio-block-unstyled-0" name="radio-block-unstyled" checked>
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
    `
    let jsSource = null
    let cssSource = null
    return (
      <DemoIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
