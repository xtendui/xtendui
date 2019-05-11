import React from "react"

import DemoIframe from "components/demo-iframe"

const demo = {
  name: 'line',
  full: false
}

class Page extends React.Component {
  componentDidMount() {
  }

  render() {
    let htmlSource = `
      <button type="button" class="group">
        <span class="group_inner">
          <span class="btn btn--primary">
            <span>btn 1</span>
          </span>
        </span>
        <span class="group_inner">
          <span class="btn btn--primary-empty">
            <span>btn 2</span>
          </span>
        </span>
        <span class="group_inner">
          <span class="btn btn--secondary">
            <span>btn 3</span>
          </span>
        </span>
        <span class="group_inner">
          <span class="btn btn--secondary-empty">
            <span>btn 4</span>
          </span>
        </span>
      </button>
    `
    let jsSource = null
    let cssSource = null
    return (
      <DemoIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
