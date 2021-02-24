import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-media-container bg-gray-200">
  <div class="xt-media-inner relative">
    <img class="xt-media" src="/img.svg" loading="lazy" alt=""/>
  </div>
</div>
`
