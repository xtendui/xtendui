import React from "react"

import DemoReact from "components/demo-react"

const demoName = 'react-test'

class Page extends React.Component {
  componentDidMount() {
    require("./" + demoName + ".source.less")
  }
  render() {
    let htmlSource = false
    let jsSource = require("!!raw-loader!./" + demoName + ".source.js").default
    let cssSource = require("!!raw-loader!./" + demoName + ".source.less").default
    let Component = require("./" + demoName + ".source.js").default
    return (
      <DemoReact demoName={demoName} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource} Component={Component}/>
    )
  }
}

export default Page
