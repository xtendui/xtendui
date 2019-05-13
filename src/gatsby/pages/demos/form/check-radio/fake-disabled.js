import React from "react"

import DemoVanillaIframe from "components/demo-vanilla-iframe"

const demo = {
  name: 'disabled',
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
      <div data-xt-toggle='{"elements": ".radio", "min": 1}'>
        <div class="form-item">
          <button type="button" class="checkbox active disabled" data-xt-toggle='{"elements": false}'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
          </button>
        </div>

        <div class="form-item">
          <button type="button" class="radio active disabled">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
          </button>
        </div>

        <div class="form-item">
          <button type="button" class="radio disabled">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
          </button>
        </div>
      </div>
    `
    let jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    let cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoVanillaIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
