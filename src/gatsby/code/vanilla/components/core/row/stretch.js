import path from 'path'

const cardMd = require('components/snippets/classes').cardMd
const cardDefault = require('components/snippets/classes').cardDefault

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-row xt-row-4 xt-row-stretch">

  <div class="w-full md:w-6/12">
    <div class="xt-card rounded-md ${cardDefault()}">
      <div class="xt-media-container bg-gray-200 rounded-t-md xt-ratio-37.5">
        <div class="xt-media-inner">
          <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
        </div>
      </div>
      <div class="${cardMd()}">
        <div class="xt-h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
      <div class="${cardMd()} mt-auto rounded-b-md bg-gray-400">
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
      </div>
    </div>
  </div>

  <div class="w-full md:w-6/12">
    <div class="xt-card rounded-md ${cardDefault()}">
      <div class="xt-media-container bg-gray-200 rounded-t-md xt-ratio-37.5">
        <div class="xt-media-inner">
          <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="">
        </div>
      </div>
      <div class="${cardMd()}">
        <div class="xt-h4">Lorem ipsum</div>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
      </div>
      <div class="${cardMd()} mt-auto rounded-b-md bg-gray-400">
        <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
      </div>
    </div>
  </div>

</div>
`
