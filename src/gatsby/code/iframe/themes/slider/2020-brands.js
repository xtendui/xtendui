import React from 'react'
import path from 'path'
const img = require('components/snippets/img').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: true,
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider demo--2020-brands">

    <div class="slides">
        <ul class="slides-inner">

            <li class="slide">
                <div class="slide-inner">
                    <div class="slide_item">
                        <div class="slide_text">
                            Lorem
                        </div>
                        <div class="slide_text">
                            ipsum
                        </div>
                        <div class="slide_text">
                            dolor sit amet
                        </div>
                        <div class="slide_text">
                            consectetur
                        </div>
                        <div class="slide_text">
                            adipiscing elit
                        </div>
                        <div class="slide_text">
                            Nunc
                        </div>
                        <div class="slide_text">
                            tempus
                        </div>
                        <div class="slide_text">
                            laoreet
                        </div>
                        <div class="slide_text">
                            leo sit amet iaculis
                        </div>
                        <div class="slide_text">
                            Lorem
                        </div>
                        <div class="slide_text">
                            ipsum
                        </div>
                        <div class="slide_text">
                            dolor sit amet
                        </div>
                        <div class="slide_text">
                            consectetur
                        </div>
                        <div class="slide_text">
                            adipiscing elit
                        </div>
                        <div class="slide_text">
                            Nunc
                        </div>
                        <div class="slide_text">
                            tempus
                        </div>
                        <div class="slide_text">
                            laoreet
                        </div>
                        <div class="slide_text">
                            leo sit amet iaculis
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    </div>

    <nav class="slider-pagination display-none">
        <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
        </button>
    </nav>

</div>

<div class="slider demo--2020-brands demo--2020-brands--constant">

    <div class="slides">
        <ul class="slides-inner">

            <li class="slide">
                <div class="slide-inner">
                    <div class="slide_item">
                        <div class="slide_text">
                            Lorem
                        </div>
                        <div class="slide_text">
                            ipsum
                        </div>
                        <div class="slide_text">
                            dolor sit amet
                        </div>
                        <div class="slide_text">
                            consectetur
                        </div>
                        <div class="slide_text">
                            adipiscing elit
                        </div>
                        <div class="slide_text">
                            Nunc
                        </div>
                        <div class="slide_text">
                            tempus
                        </div>
                        <div class="slide_text">
                            laoreet
                        </div>
                        <div class="slide_text">
                            leo sit amet iaculis
                        </div>
                        <div class="slide_text">
                            Lorem
                        </div>
                        <div class="slide_text">
                            ipsum
                        </div>
                        <div class="slide_text">
                            dolor sit amet
                        </div>
                        <div class="slide_text">
                            consectetur
                        </div>
                        <div class="slide_text">
                            adipiscing elit
                        </div>
                        <div class="slide_text">
                            Nunc
                        </div>
                        <div class="slide_text">
                            tempus
                        </div>
                        <div class="slide_text">
                            laoreet
                        </div>
                        <div class="slide_text">
                            leo sit amet iaculis
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    </div>

    <nav class="slider-pagination display-none">
        <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
        </button>
    </nav>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
