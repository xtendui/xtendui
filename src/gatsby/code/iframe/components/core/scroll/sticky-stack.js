import React from 'react'
import path from 'path'

const cardSm = require('components/snippets/classes').cardSm
const cardDefault = require('components/snippets/classes').cardDefault
const cardPrimary = require('components/snippets/classes').cardPrimary

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="demo--sticky-stack-top xt-sticky">
  <div class="xt-card ${cardSm()} ${cardPrimary()}">
    <div class="xt-h4 ">Top</div>
  </div>
</div>

<div class="xt-card ${cardSm()} ${cardDefault()} demo--sticky-hide-content">
  <div class="xt-h4 ">Lorem ipsum</div>
  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
</div>

<div class="demo--sticky-stack-topsecond xt-sticky">
  <div class="xt-card ${cardSm()} ${cardDefault()}">
    <div class="xt-h6">Top Second</div>
  </div>
</div>

<div class="xt-card ${cardSm()} ${cardDefault()} demo--sticky-hide-content">
  <div class="xt-h4 ">Lorem ipsum</div>
  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
</div>

<div class="demo--sticky-stack-topthird xt-sticky">
  <div class="xt-card ${cardSm()} ${cardDefault()}">
    <div class="xt-h6">Top Third</div>
  </div>
</div>

<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>

<div class="demo--sticky-stack-bottom xt-sticky">
  <div class="xt-card ${cardSm()} ${cardPrimary()}">
    <div class="xt-h4 ">Bottom</div>
  </div>
</div>

<div class="xt-card ${cardSm()} ${cardDefault()} demo--sticky-hide-content">
  <div class="xt-h4 ">Lorem ipsum</div>
  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
  <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
</div>

<div class="demo--sticky-stack-bottomsecond xt-sticky">
  <div class="xt-card ${cardSm()} ${cardDefault()}">
    <div class="xt-h6">Bottom Second</div>
  </div>
</div>

<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
