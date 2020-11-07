import React from 'react'
import path from 'path'
const checkDefault = require('components/snippets/classes/form-check-default').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  full: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="megamenu">

  <span class="megamenu-line fixed top-0 left-0 bg-accent-900"></span>

  <div class="relative">

    <div class="container">

      <div class="list -mx-4">

        <div class="drop-container drop-container-static">

          <a href="#menu1" type="button" class="btn btn-lg btn-line py-6">
            Menu #1
          </a>

          <div class="drop p-0">
            <div class="drop-inner overflow-hidden">
              <div class="design-setup bg-accent-900 shadow-lg"></div>
              <div class="drop-content py-10 text-white links-inverse text-sm">

                <div class="container">
                  <div class="row row-4">

                    <div class="w-full md:w-4/12 lg:w-3/12 pr-6">
                      <div class="media-container ratio-75">
                        <div class="media-inner">
                          <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="w-full md:w-8/12 lg:w-9/12">
                      <div class="row row-2 flex-col flex-wrap" style="max-height: 15rem;">

                        <div class="w-full md:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Dolor sit amet
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                        </div>

                        <div class="w-full md:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Dolor sit amet
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div class="drop-container drop-container-static">

          <a href="#menu2" type="button" class="btn btn-lg btn-line py-6">
            Menu #2
          </a>

          <div class="drop p-0">
            <div class="drop-inner overflow-hidden">
              <div class="design-setup bg-accent-900 shadow-lg"></div>
              <div class="drop-content py-10 text-white links-inverse text-sm">

                <div class="container">
                  <div class="row row-4">

                    <div class="w-full md:w-4/12 lg:w-3/12 pr-6">
                      <div class="media-container ratio-100">
                        <div class="media-inner">
                          <img class="media object-cover object-center" src="/img-ratio.svg" loading="lazy" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="w-full md:w-8/12 lg:w-9/12">
                      <div class="row row-2 flex-col flex-wrap" style="max-height: 20rem;">

                        <div class="w-full md:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Dolor sit amet
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                        </div>

                        <div class="w-full md:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Dolor sit amet
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div class="drop-container drop-container-static">

          <a href="#menu3" type="button" class="btn btn-lg btn-line py-6">
            Menu #3
          </a>

          <div class="drop p-0">
            <div class="drop-inner overflow-hidden">
              <div class="design-setup bg-accent-900 shadow-lg"></div>
              <div class="drop-content py-10 text-white links-inverse text-sm">

                <div class="container">
                  <div class="row row-4">

                    <div class="w-full md:w-4/12 lg:w-3/12 pr-6">
                      <div class="media-container ratio-75">
                        <div class="media-inner">
                          <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">
                        </div>
                      </div>
                    </div>

                    <div class="w-full md:w-8/12 lg:w-9/12">
                      <div class="row row-2 flex-col flex-wrap" style="max-height: 15rem;">

                        <div class="w-full md:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Lorem ipsum
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Consectetur
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Adipiscing elit
                            </a>
                          </div>
                        </div>

                        <div class="w-full md:w-4/12">
                          <a href="#" class="h5 inline-block">
                            Dolor sit amet
                          </a>
                          <div class="list flex-col">
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Lorem ipsum
                            </a>
                            <a href="#" class="btn btn-sm text-reset px-0 py-0.5 opacity-75 hover:opacity-100">
                              Dolor sit amet
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <a href="#menu4" class="btn btn-lg btn-line py-6">
          Link #4
        </a>

        <a href="#menu5" class="btn btn-lg btn-line py-6">
          Link #5
        </a>

      </div>

    </div>
  </div>

  <!-- mouse events instead of click you can remove this -->
  <div class="container pt-4">
    <label class="form-label-check">
      <input type="checkbox" class="form-check form-checkbox ${checkDefault()}">
      <span class="ml-3">Use mouse events</span>
    </label>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
