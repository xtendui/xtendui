import React from "react"

import SEO from "components/seo"
import Layout from "components/demo-layout"

const demoName = 'react-test'

class Page extends React.Component {
  componentDidMount() {
    document.querySelector('html').classList.add('demo-' + demoName)
    require("./" + demoName + ".source.less")
  }
  render() {
    const description = "Demo"
    let htmlSource = null
    let cssSource = require("!!raw-loader!./" + demoName + ".source.less").default
    let jsSource = require("!!raw-loader!./" + demoName + ".source.js").default
    let Component = require("./" + demoName + ".source.js").default
    const title = demoName
    return (
      <Layout title={title} description={description} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}>
        <SEO title={title + ' — ' + description}/>
        <div id="body-outer">
          <div id="body-inner" className="demo-source-from">
            <Component demoName={demoName}></Component>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page
