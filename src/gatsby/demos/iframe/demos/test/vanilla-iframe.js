import path from 'path'
import React from 'react'

import DemoVanillaIframe from 'components/demo-vanilla-iframe'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  full: true,
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="drop_outer" data-xt-drop>
  <button type="button" class="btn btn--primary">
    Toggle
  </button>
  <div class="drop">
    <div class="drop_inner">
      <div class="drop_design"></div>
      <div class="drop_content">
        <ul class="list list--drop">
          <li>
            <button type="button">
              Lorem ipsum dolor
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
`

class Page extends React.Component {
  render () {
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
