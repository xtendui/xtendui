import React from 'react'
import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardScroll = require('components/snippets/classes/card-scroll').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="row row-space-3 demo--scroll-block">

  <div class="w-full">
    <button type="button" class="btn btn-medium ${btnPrimary()} demo--scroll-block--btn">
      Click to block/unblock and fade out/in
    </button>
  </div>

  <div class="w-full">
    <div class="card ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-full">
    <div class="card ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-full sm:w-6/12">
    <div class="card ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-full sm:w-6/12">
    <div class="card ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-full sm:w-6/12">
    <div class="card ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-full sm:w-6/12">
    <div class="card ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-6/12 sm:w-4/12">
    <div class="card ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-6/12 sm:w-4/12">
    <div class="card ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
    </div>
  </div>

  <div class="w-6/12 sm:w-4/12">
    <div class="card ${cardScroll()}">
      <div class="h4">Lorem ipsum</div>
      <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
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
