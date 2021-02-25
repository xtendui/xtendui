import React from 'react'
import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="hero relative block overflow-hidden w-full">
  <div class="xt-media-container bg-gray-200 h-96">
    <div class="xt-media-inner">
      <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="container flex items-end justify-center text-center">
    <a href="#" class="group block w-full py-8 md:py-12">
      <h2 class="xt-h1 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet
      </h2>
      <h3 class="xt-p max-w-lg mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
      </h3>
      <div class="xt-list xt-list-3 justify-center max-w-2xl mx-auto">
        <div class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
            Lorem ipsum
        </div>
      </div>
    </a>
  </div>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
