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
<div class="relative py-4 px-6 bg-primary-500">

  <div data-xt-drop>

    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
      static
    </button>

    <div class="xt-drop xt-drop-static xt-drop-nospace">
      <div class="xt-card w-full rounded-md shadow-drop ${cardWhite()}">
        <div class="md:xt-card-group">
          <div class="text-base p-8 md:w-7/12 bg-gray-400">
            <div class="xt-h4 ">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
          </div>
          <div class="md:w-5/12">
            <div class="text-base p-8 bg-gray-500">
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
