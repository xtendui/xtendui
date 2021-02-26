import React from 'react'
import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const cardMd = require('components/snippets/classes').cardMd

const buttonDefault = require('components/snippets/classes').buttonDefault
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const buttonText = require('components/snippets/classes').buttonText

const cardDefault = require('components/snippets/classes').cardDefault
const cardPrimary = require('components/snippets/classes').cardPrimary
const cardDefaultInteractive = require('components/snippets/classes').cardDefaultInteractive
const cardPrimaryInteractive = require('components/snippets/classes').cardPrimaryInteractive

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

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
    Gray
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    Primary
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md text-black ${buttonText()}">
    Text
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md xt-link">
    Link
  </button>

</div>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Card
</div>

<div class="xt-row xt-row-6">

  <div class="w-full md:w-6/12">
    <a role="button" class="xt-card rounded-md ${cardDefaultInteractive()}">
      <div class="${cardMd()}">
        <div class="xt-h4 ">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

  <div class="w-full md:w-6/12">
    <a role="button" class="xt-card rounded-md ${cardPrimaryInteractive()}">
      <div class="${cardMd()}">
        <div class="xt-h4 ">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </a>
  </div>

  <div class="w-full md:w-6/12">
    <div class="xt-card rounded-md ${cardDefault()}">
      <div class="${cardMd()}">
        <div class="xt-h4 ">Default</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
          Gray
        </button>
      </div>
    </div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="xt-card rounded-md ${cardPrimary()}">
      <div class="${cardMd()}">
        <div class="xt-h4 ">Primary</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
        <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonDefault()}">
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
