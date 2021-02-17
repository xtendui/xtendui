import React from 'react'
import path from 'path'

const buttonDefault = require('components/snippets/classes/button-default').default
const buttonPrimary = require('components/snippets/classes/button-primary').default
const buttonText = require('components/snippets/classes/button-text').default

const cardDefault = require('components/snippets/classes/card-default').default
const cardPrimary = require('components/snippets/classes/card-primary').default
const cardDefaultInteractive = require('components/snippets/classes/card-default-interactive').default
const cardPrimaryInteractive = require('components/snippets/classes/card-primary-interactive').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Button
</div>

<div class="xt-list xt-list-2 items-center">

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
    Gray
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
    Primary
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonText()}">
    Text
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md xt-link">
    Link
  </button>

</div>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Card
</div>

<div class="xt-row xt-row-6">

  <div class="w-full md:w-6/12">
    <a role="button" class="xt-card rounded-md ${cardDefaultInteractive()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

  <div class="w-full md:w-6/12">
    <a role="button" class="xt-card rounded-md ${cardPrimaryInteractive()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

  <div class="w-full md:w-6/12">
    <div class="xt-card rounded-md ${cardDefault()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
          Gray
        </button>
      </div>
    </div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="xt-card rounded-md ${cardPrimary()}">
      <div class="text-base p-8">
        <div class="xt-h4 ">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
          Primary
        </button>
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
