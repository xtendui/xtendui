import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default
const imgAlt = require('components/snippets/img').alt

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="container">
  <div class="row row-default">

    <div class="col-6 col-sm-4">
      <a href="#" class="media--opacity full">
        ${img({ classes: 'media-cover', ratio: '37.5%' })}
      </a>
    </div>

    <div class="col-6 col-sm-4">
      <a href="#" class="media--opacity full">
        ${imgAlt({ classes: 'media-cover', ratio: '37.5%' })}
      </a>
    </div>

    <div class="col-6 col-sm-4">
      <a href="#" class="media--opacity full">
        ${img({ classes: 'media-cover', ratio: '37.5%' })}
      </a>
    </div>

    <div class="col-6 col-sm-4">
      <a href="#" class="media--opacity full">
        ${imgAlt({ classes: 'media-cover', ratio: '37.5%' })}
      </a>
    </div>

  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
