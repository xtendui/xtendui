import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const cardWhite = require('components/snippets/classes/card-white').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <div data-xt-drop>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      group
    </button>

    <div class="xt-drop">
      <div class="xt-card w-screen max-w-2xl rounded-md shadow-drop ${cardWhite()}">
        <div class="md:xt-card-group">
          <div class="text-base p-8 md:w-7/12">
            <div class="xt-h4 ">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
          <div class="text-sm p-6 md:w-5/12 rounded-b-md md:rounded-b-none md:rounded-r-md bg-gray-400">
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div data-xt-drop>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      group complex
    </button>

    <div class="xt-drop">
      <div class="xt-card w-screen max-w-2xl rounded-md shadow-drop ${cardWhite()}">
        <div class="md:xt-card-group">
          <div class="text-base p-8 md:w-7/12 bg-gray-400 md:rounded-tl-md">
            <div class="xt-h4 ">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
          <div class="md:w-5/12">
            <div class="text-sm p-6 bg-gray-500 md:rounded-tr-md">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
            </div>
            <div class="text-base p-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
            </div>
          </div>
        </div>
        <div class="xt-media-container bg-gray-700 rounded-b-md xt-ratio-25">
          <div class="xt-media-inner">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
`
