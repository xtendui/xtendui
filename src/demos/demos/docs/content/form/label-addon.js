import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo-vanilla-iframe'

const demo = {
  name: path.basename(__filename, '.js'),
  folder: path.basename(path.dirname(__filename)),
  js: false,
  css: true,
  full: true
}
demo.htmlSource = `
<form>

  <div class="form-group">
    <label class="form-label">
      Label
    </label>
    <input type="text" class="form-item">
    <a class="form-label-addon">
      <span>Label Addon</span>
    </a>
  </div>

</form>
`

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require('./' + demo.name + '.source.js')
    }
  }

  render() {
    if (demo.js) {
      demo.jsSource = require('!!raw-loader!xtend-library/components/' + demo.name).default
    }
    if (demo.css) {
      demo.cssSource = require('!!raw-loader!xtend-library/components/' + demo.name + '/' + demo.name + '.less').default
    }
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
