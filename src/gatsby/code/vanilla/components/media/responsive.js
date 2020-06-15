import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="media-container media-responsive">
  <div class="media-inner">
    <img class="media" src="/img.svg" loading="lazy" alt=""/>
  </div>
</div>
`
