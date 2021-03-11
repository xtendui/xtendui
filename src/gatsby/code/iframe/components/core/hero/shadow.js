import React from 'react'
import path from 'path'

const classes = require('components/snippets/classes').classes

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
  <div class="xt-media-container bg-gray-200 w-full h-full absolute">
    <div class="xt-media-inner">
      <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
  </div>
  <div class="flex relative min-h-screen">
    <div class="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left group">
      <h2 class="xt-h1">
        Lorem ipsum dolor sit amet
      </h2>
      <h3 class="xt-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
      </h3>
      <a href="#" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        Lorem ipsum
      </a>
    </div>
  </div>
</div>

<div class="hero relative overflow-hidden">
  <div class="xt-media-container bg-gray-200 w-full h-full absolute">
    <div class="xt-media-inner">
      <img class="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
    </div>
    <div class="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-50"></div>
  </div>
  <div class="flex relative min-h-screen">
    <div class="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left group">
      <h2 class="xt-h1">
        Lorem ipsum dolor sit amet
      </h2>
      <h3 class="xt-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
      </h3>
      <a href="#" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        Lorem ipsum
      </a>
    </div>
  </div>
</div>

<div class="hero relative overflow-hidden">
  <div class="xt-media-container bg-gray-200 w-full h-full absolute">
    <div class="xt-media-inner">
      <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
    <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>
  </div>
  <div class="flex relative min-h-screen">
    <div class="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:mr-0 max-w-2xl text-white xt-links-inverse text-center md:text-right group">
      <h2 class="xt-h1">
        Lorem ipsum dolor sit amet
      </h2>
      <h3 class="xt-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.
      </h3>
      <a href="#" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        Lorem ipsum
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
