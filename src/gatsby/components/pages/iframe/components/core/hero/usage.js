import React from 'react'
import path from 'path'

const classes = require('components/snippets/classes').classes

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="hero relative overflow-hidden">
  <div class="xt-media-container bg-gray-200 w-full h-full absolute">
    <div class="xt-media-inner">
      <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="flex relative min-h-screen">
    <a href="#" class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center group">
      <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">
        Lorem ipsum
      </h2>
      <h3 class="xt-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
      </h3>
      <div class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        Lorem ipsum
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
