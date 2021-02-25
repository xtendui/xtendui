import React from 'react'
import path from 'path'
const buttonDefault = require('components/snippets/classes/button-default').default
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardDefault = require('components/snippets/classes/card-default').default
const cardPrimary = require('components/snippets/classes/card-primary').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-sticky">
  <div class="xt-card text-sm p-6 ${cardPrimary()}">
    <div class="xt-list xt-list-3">
      <a href="#anchor-0" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
        #0
      </a>
      <a href="#anchor-1" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
        #1
      </a>
      <a href="#anchor-2" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
        #2
      </a>
    </div>
  </div>
</div>

<div class="container">

  <div class="xt-card text-sm p-6 ${cardDefault()}" id="anchor-0">
    <div class="xt-h4 ">Lorem ipsum dolor sit amet</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
    <div class="xt-list xt-list-3">
      <a href="#anchor-0" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        #0
      </a>
      <a href="#anchor-1" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        #1
      </a>
      <a href="#anchor-2" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        #2
      </a>
    </div>
  </div>

  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>

  <div class="xt-card text-sm p-6 ${cardDefault()}" id="anchor-1">
    <div class="xt-h4 ">Lorem ipsum dolor sit amet</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
    <div class="xt-list xt-list-3">
      <a href="#anchor-0" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        #0
      </a>
      <a href="#anchor-1" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        #1
      </a>
      <a href="#anchor-2" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        #2
      </a>
    </div>
  </div>

  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/>

  <div class="xt-card text-sm p-6 ${cardDefault()}" id="anchor-2">
    <div class="xt-h4 ">Lorem ipsum dolor sit amet</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
    <div class="xt-list xt-list-3">
      <a href="#anchor-0" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        #0
      </a>
      <a href="#anchor-1" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        #1
      </a>
      <a href="#anchor-2" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonDefault()}">
        #2
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
