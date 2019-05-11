import React from "react"

import DemoReact from "components/demo-react"

const demo = {
  name: 'react-test',
  js: true,
  css: true,
  full: false
}

class Page extends React.Component {
  componentDidMount() {
    require("./" + demo.name + ".source.less")
  }

  render() {
    let htmlSource = false
    let jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    let cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    let Component = require("./" + demo.name + ".source.js").default
    return (
      <DemoReact demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}
                 Component={Component}/>
    )
  }
}

export default Page
