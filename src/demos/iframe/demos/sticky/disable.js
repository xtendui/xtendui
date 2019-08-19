import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo-vanilla-iframe'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  css: true,
  js: false,
  full: false,
}

demo.htmlSource = `
<br><br><br><br><br><br><br>

<div class="sticky-0 demo--sticky--disable-sm"
     data-xt-sticky='{"limit": {"top": 0, "bottom": ".sticky-1.xt-clone"}}'> <!-- if limit to sticky use .xt-clone -->
  <div class="card card--squared card--dark">
    <div class="card_design"></div>
    <div class="card_content">
      Sticky top
    </div>
  </div>
</div>

<div class="card card--light">
  <div class="card_design"></div>
  <div class="card_content">
    <h3>Lorem ipsum dolor sit amet</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
  </div>
</div>

<div class="sticky-1 demo--sticky--disable-sm"
     data-xt-sticky='{"position": "bottom", "limit": {"bottom": 50}}'>
  <div class="card card--squared card--light">
    <div class="card_design"></div>
    <div class="card_content">
      Sticky bottom
    </div>
  </div>
</div>

<div class="card card--light">
  <div class="card_design"></div>
  <div class="card_content">
    <h3>Lorem ipsum dolor sit amet</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit sagittis quam eget elementum. Vestibulum eu nulla nisl. Duis nec commodo tortor. Aenean feugiat, libero eget ultricies viverra, justo nunc efficitur lorem, at aliquet ante eros in est.</p>
  </div>
</div>

<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
<br><br><br><br><br><br><br>
`

class Page extends React.Component {
  render() {
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
