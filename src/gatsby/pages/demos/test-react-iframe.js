import React from "react"

import DemoReactIframe from "components/demo-react-iframe"

const demo = {
  name: 'test-react-iframe',
  js: true,
  css: true,
  full: true
}

class Page extends React.Component {
  render() {
    let htmlSource = false
    let jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    let cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    let css = demo.css ? require("!raw-loader!less-loader!./" + demo.name + ".source.less").default : null
    let Component = require("./" + demo.name + ".source.js").default
    return (
      <DemoReactIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource} css={css} Component={Component}/>
    )
  }
}

export default Page
