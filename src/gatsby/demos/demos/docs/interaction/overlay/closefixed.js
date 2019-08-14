import React from 'react'
import path from 'path'

import DemoVanillaIframe from 'components/demo-vanilla-iframe'

const demo = {
  name: path.basename(__filename, '.js'),
  js: false,
  css: true,
  full: false
}
demo.htmlSource = `
<div class="list list-space--small align-items--center justify-content--center demo-source-from">
  <div data-xt-overlay>
    <button type="button" class="btn btn--primary">
      <span>default</span>
    </button>
    <div class="overlay_outer">
      <div class="overlay">
        <div class="overlay_inner">
          <div class="overlay_design"></div>
          <div class="btn--close_outer xt-fixed">
            <button type="button" class="btn btn--close overlay_dismiss" aria-label="Close"><span></span></button>
          </div>
          <div class="overlay_content">
            <div class="h2">Lorem ipsum</div>
            <div class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn--primary">
      <span>screen</span>
    </button>
    <div class="overlay_outer overlay--screen">
      <div class="overlay">
        <div class="overlay_inner">
          <div class="overlay_design"></div>
          <div class="btn--close_outer xt-fixed">
            <button type="button" class="btn btn--close overlay_dismiss" aria-label="Close"><span></span></button>
          </div>
          <div class="overlay_content">
            <div class="h2">Lorem ipsum</div>
            <div class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require('./' + demo.name + '.source.js')
    }
  }

  render() {
    if (demo.js) {
      demo.jsSource = require('!!raw-loader!./' + demo.name + '.source.js').default
    }
    if (demo.css) {
      demo.cssSource = require('!!raw-loader!./' + demo.name + '.source.less').default
      demo.css = demo.css ? require('!raw-loader!less-loader!./' + demo.name + '.source.less').default : null
    }
    return (
      <DemoVanillaIframe demo={demo}/>
    )
  }
}

export default Page
