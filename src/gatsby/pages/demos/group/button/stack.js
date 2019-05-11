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
      <div class="group">
        <div class="group_inner">
          <button type="button" class="btn btn--primary">
            <span>btn 1a</span>
          </button>
          <button type="button" class="btn btn--primary-empty">
            <span>btn 1b</span>
          </button>
        </div>
        <div class="group_inner">
          <button type="button" class="btn btn--secondary">
            <span>btn 2a</span>
          </button>
          <button type="button" class="btn btn--secondary-empty">
            <span>btn 2b</span>
          </button>
        </div>
        <div class="group_inner">
          <button type="button" class="btn btn--primary">
            <span>btn 3a</span>
          </button>
          <button type="button" class="btn btn--primary-empty">
            <span>btn 3b</span>
          </button>
        </div>
        <div class="group_inner">
          <button type="button" class="btn btn--secondary">
            <span>btn 4a</span>
          </button>
          <button type="button" class="btn btn--secondary-empty">
            <span>btn 4b</span>
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
