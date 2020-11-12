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
  <div class="media-container h-64 md:h-screen">
    <div class="media-inner">
      <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
  </div>
  <div class="container md:absolute inset-0 flex items-end justify-center text-center md:justify-start md:text-left">
    <div class="block w-full max-w-xl container-y md:text-white md:links-inverse">
      <div class="h1">
        Lorem ipsum dolor sit amet
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
      <div class="list list-2 justify-center md:justify-start">
        <a href="#" class="btn btn-md rounded-md ${btnPrimary()}">
          Lorem ipsum
        </a>
        <a href="#" class="btn btn-md rounded-md ${btnPrimary()}">
          Dolor sit amet
        </a>
      </div>
    </div>
  </div>
</div>

<div class="relative block overflow-hidden w-full">
  <div class="media-container h-64 md:h-screen">
    <div class="media-inner">
      <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
    </div>
    <div class="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent to-black opacity-50"></div>
  </div>
  <div class="container md:absolute inset-0 flex items-end justify-center text-center md:items-center md:justify-start md:text-left">
    <div class="block w-full max-w-xl container-y md:text-white md:links-inverse">
      <div class="h1">
        Lorem ipsum dolor sit amet
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
      <div class="list list-2 justify-center md:justify-start">
        <a href="#" class="btn btn-md rounded-md ${btnPrimary()}">
          Lorem ipsum
        </a>
        <a href="#" class="btn btn-md rounded-md ${btnPrimary()}">
          Dolor sit amet
        </a>
      </div>
    </div>
  </div>
</div>

<div class="relative block overflow-hidden w-full">
  <div class="media-container h-64 md:h-screen">
    <div class="media-inner">
      <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
    </div>
    <div class="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-black opacity-50"></div>
  </div>
  <div class="container md:absolute inset-0 flex items-end justify-center text-center md:items-center md:justify-end md:text-right">
    <div class="block w-full max-w-xl container-y md:text-white md:links-inverse">
      <div class="h1">
        Lorem ipsum dolor sit amet
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
      <div class="list list-2 justify-center md:justify-end">
        <a href="#" class="btn btn-md rounded-md ${btnPrimary()}">
          Lorem ipsum
        </a>
        <a href="#" class="btn btn-md rounded-md ${btnPrimary()}">
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
