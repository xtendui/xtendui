import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-media-container bg-gray-200" style="padding-bottom: 25%;">
  <div class="xt-media-inner">
    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt=""/>
  </div>
</div>
`
