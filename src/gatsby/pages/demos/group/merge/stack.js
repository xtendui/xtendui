import React from "react"

import DemoIframe from "components/demo-iframe"

const demo = {
  name: 'stack',
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
            <span>btn 1a</span>
          </span>
          <span class="btn btn--primary-empty">
            <span>btn 1b</span>
          </span>
        </span>
        <span class="group_inner">
          <span class="btn btn--secondary">
            <span>btn 2a</span>
          </span>
          <span class="btn btn--secondary-empty">
            <span>btn 2b</span>
          </span>
        </span>
        <span class="group_inner">
          <span class="btn btn--primary">
            <span>btn 3a</span>
          </span>
          <span class="btn btn--primary-empty">
            <span>btn 3b</span>
          </span>
        </span>
        <span class="group_inner">
          <span class="btn btn--secondary">
            <span>btn 4a</span>
          </span>
          <span class="btn btn--secondary-empty">
            <span>btn 4b</span>
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
