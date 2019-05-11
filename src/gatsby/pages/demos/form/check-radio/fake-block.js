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
      <div data-xt-toggle='{"elements": ".radio", "min": 1}'>
        <div class="form-item">
          <button type="button" class="checkbox active" data-xt-toggle='{"elements": false}'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
          </button>
        </div>

        <div class="form-item">
          <button type="button" class="radio active">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
          </button>
        </div>

        <div class="form-item">
          <button type="button" class="radio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
          </button>
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
