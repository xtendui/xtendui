import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="media-container media-container-16-9">
  <div class="media-inner">
    <img class="media media-cover" src="/img.svg" loading="lazy" alt=""/>
  </div>
</div>
`
