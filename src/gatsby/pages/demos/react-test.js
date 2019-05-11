import React from "react"

import DemoReact from "components/demo-react"

const demo = {
  name: 'react-test',
  full: false
}

class Page extends React.Component {
  componentDidMount() {
    require("./" + demo.name + ".source.less")
  }

  render() {
    let htmlSource = false
    let jsSource = require("!!raw-loader!./" + demo.name + ".source.js").default
    let cssSource = require("!!raw-loader!./" + demo.name + ".source.less").default
    let Component = require("./" + demo.name + ".source.js").default
    return (
      <DemoReact demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}
                 Component={Component}/>
    )
  }
}

export default Page
