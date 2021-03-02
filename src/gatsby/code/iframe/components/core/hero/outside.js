import React from 'react'
import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="hero relative overflow-hidden">
  <div class="xt-media-container bg-gray-200 w-full h-96">
    <div class="xt-media-inner">
      <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="flex relative">
    <a href="#" class="relative p-8 md:p-12 lg:p-16 xl:p-24 mx-auto md:max-w-lg lg:md:max-w-xl xl:max-w-2xl text-center group">
      <h2 class="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">
        Lorem ipsum
      </h2>
      <h3 class="xt-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
      </h3>
      <div class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
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
