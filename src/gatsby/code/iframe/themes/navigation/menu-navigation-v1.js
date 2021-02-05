import React from 'react'
import path from 'path'
const checkDefault = require('components/snippets/classes/form-check-default').default

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: false,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="megamenu relative bg-accent-500 text-white">

  <!-- mouse events instead of click you can remove this -->
  <div class="container-fluid pt-10">
    <label class="form-label-check">
      <input type="checkbox" class="form-check form-checkbox rounded-md ${checkDefault()}" checked>
      <span class="ml-3">Use mouse events</span>
    </label>
  </div>

  <span class="megamenu-line absolute top-0 left-0 bg-white"></span>

  <div class="container-fluid">

    <div class="list -mx-4">

      <div class="drop-container">

        <a href="/" class="btn btn-lg btn-line rounded-md py-6 opacity-75 hover:opacity-100 active:opacity-100">
          Menu #1
        </a>

        <div class="drop drop-static drop-nospace">
          <div class="drop-inner overflow-hidden">
            <div class="design-setup bg-accent-900"></div>
            <div class="drop-content">

              <div class="pt-16 pb-24 text-white links-inverse">
                <div class="container-fluid">
                  <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                    Lorem ipsum
                  </a>
                  <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                    Dolor sit amet
                  </a>
                  <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                    Consectetur adipiscing elit
                  </a>
                  <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                    Morbi nec mauris est
                  </a>
                  <a href="#" class="btn btn-md link mt-6 py-2 px-0">
                    Show all
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div class="drop-container">

        <a href="/" class="btn btn-lg btn-line rounded-md py-6 opacity-75 hover:opacity-100 active:opacity-100">
          Menu #2
        </a>

        <div class="drop drop-static drop-nospace">
          <div class="drop-inner overflow-hidden">
            <div class="design-setup bg-accent-900"></div>
            <div class="drop-content">

              <div class="pt-16 pb-24 text-white links-inverse">
                <div class="container-fluid">
                  <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                    Lorem ipsum
                  </a>
                  <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                    Dolor sit amet
                  </a>
                  <a href="#" class="btn btn-md link mt-6 py-2 px-0">
                    Show all
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div class="drop-container">

        <a href="/" class="btn btn-lg btn-line rounded-md py-6 opacity-75 hover:opacity-100 active:opacity-100">
          Menu #3
        </a>

        <div class="drop drop-static drop-nospace">
          <div class="drop-inner overflow-hidden">
            <div class="design-setup bg-gray-100"></div>
            <div class="drop-content">

              <div class="pt-16 pb-24 text-black links-default">
                <div class="container-fluid">
                  <div class="row row-4">
                    <div class="w-6/12">
                      <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                        Lorem ipsum
                      </a>
                      <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                        Dolor sit amet
                      </a>
                      <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                        Consectetur adipiscing elit
                      </a>
                      <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                        Morbi nec mauris est
                      </a>
                    </div>
                    <div class="w-6/12">
                      <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                        Dolor sit amet
                      </a>
                      <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                        Consectetur adipiscing elit
                      </a>
                      <a href="#" class="btn w-full py-4 px-0 font-sans font-medium tracking-normal normal-case" style="font-size: 28px;">
                        Morbi nec mauris est
                      </a>
                      <a href="#" class="btn btn-md link mt-6 py-2 px-0">
                          Show all
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <a href="/" class="btn btn-lg btn-line rounded-md py-6 opacity-75 hover:opacity-100 active:opacity-100">
        Link #4
      </a>

    </div>

  </div>

</div>

<div class="container-fluid py-24">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>
  <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>
  <p>Morbi eget odio nibh. Pellentesque consectetur vitae libero ac blandit. Ut et lectus id diam pretium mattis ac at massa. Sed sagittis fermentum dictum. Nulla interdum justo vitae orci pharetra congue. Nullam enim dui, tempor ac dapibus in, maximus eget orci. Pellentesque mollis felis vel sapien sagittis luctus. Etiam vitae condimentum ligula. Cras blandit vehicula arcu fermentum blandit. Ut eu urna finibus felis bibendum tincidunt at vitae ante.</p>
  <p>Vestibulum tempus nunc sed varius pellentesque. Fusce feugiat non ex eu consequat. Donec neque ligula, vehicula et felis at, imperdiet malesuada odio. Quisque metus felis, consequat et mollis sit amet, malesuada ac quam. Phasellus eu cursus purus. Nullam eleifend auctor ipsum eu semper. Morbi volutpat tortor lectus, vitae ullamcorper nibh congue ut. In hac habitasse platea dictumst. Mauris a est at enim hendrerit porttitor sit amet vitae felis. Morbi sollicitudin urna at dignissim gravida. Aliquam in quam sapien.</p>
  <p>Maecenas pharetra ante id tortor scelerisque, id vehicula nibh finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent et ante et mauris condimentum tempus. Donec efficitur sodales lobortis. In eu mi nec arcu lacinia aliquet vel et dolor. Integer feugiat mauris non erat hendrerit, eu sollicitudin tellus vestibulum. Duis convallis malesuada nunc vel imperdiet. Donec in ligula et nisl vestibulum lobortis vitae in nunc. Morbi non lorem nibh. Mauris blandit viverra interdum. In bibendum orci vel molestie vulputate.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>
  <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>
  <p>Morbi eget odio nibh. Pellentesque consectetur vitae libero ac blandit. Ut et lectus id diam pretium mattis ac at massa. Sed sagittis fermentum dictum. Nulla interdum justo vitae orci pharetra congue. Nullam enim dui, tempor ac dapibus in, maximus eget orci. Pellentesque mollis felis vel sapien sagittis luctus. Etiam vitae condimentum ligula. Cras blandit vehicula arcu fermentum blandit. Ut eu urna finibus felis bibendum tincidunt at vitae ante.</p>
  <p>Vestibulum tempus nunc sed varius pellentesque. Fusce feugiat non ex eu consequat. Donec neque ligula, vehicula et felis at, imperdiet malesuada odio. Quisque metus felis, consequat et mollis sit amet, malesuada ac quam. Phasellus eu cursus purus. Nullam eleifend auctor ipsum eu semper. Morbi volutpat tortor lectus, vitae ullamcorper nibh congue ut. In hac habitasse platea dictumst. Mauris a est at enim hendrerit porttitor sit amet vitae felis. Morbi sollicitudin urna at dignissim gravida. Aliquam in quam sapien.</p>
  <p>Maecenas pharetra ante id tortor scelerisque, id vehicula nibh finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent et ante et mauris condimentum tempus. Donec efficitur sodales lobortis. In eu mi nec arcu lacinia aliquet vel et dolor. Integer feugiat mauris non erat hendrerit, eu sollicitudin tellus vestibulum. Duis convallis malesuada nunc vel imperdiet. Donec in ligula et nisl vestibulum lobortis vitae in nunc. Morbi non lorem nibh. Mauris blandit viverra interdum. In bibendum orci vel molestie vulputate.</p>
</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page
