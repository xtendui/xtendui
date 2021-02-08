import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="relative block overflow-hidden w-full">
  <div class="media-container bg-gray-700 h-screen">
    <div class="media-inner">
      <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="container absolute inset-0 flex items-end justify-start text-left">
    <div class="block w-full max-w-xl container-y text-white links-inverse">
      <div class="h1">
        Lorem ipsum dolor sit amet
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
      <div class="list list-2 justify-start">
        <a href="#" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
          Lorem ipsum
        </a>
        <a href="#" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
          Dolor sit amet
        </a>
      </div>
    </div>
  </div>
</div>

<div class="relative block overflow-hidden w-full">
  <div class="media-container bg-gray-700 h-screen">
    <div class="media-inner">
      <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="container absolute inset-0 flex items-center justify-start text-left">
    <div class="block w-full max-w-xl container-y text-white links-inverse">
      <div class="h1">
        Lorem ipsum dolor sit amet
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
      <div class="list list-2 justify-start">
        <a href="#" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
          Lorem ipsum
        </a>
        <a href="#" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
          Dolor sit amet
        </a>
      </div>
    </div>
  </div>
</div>

<div class="relative block overflow-hidden w-full">
  <div class="media-container bg-gray-700 h-screen">
    <div class="media-inner">
      <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
  </div>
  <div class="container absolute inset-0 flex items-center justify-end text-right">
    <div class="block w-full max-w-xl container-y text-white links-inverse">
      <div class="h1">
        Lorem ipsum dolor sit amet
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
      <div class="list list-2 justify-end">
        <a href="#" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
          Lorem ipsum
        </a>
        <a href="#" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
          Dolor sit amet
        </a>
      </div>
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
