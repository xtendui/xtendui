import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="media-container ratio-37.5 md:ratio-75 lg:ratio-100">
  <div class="media-inner">
    <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt=""/>
  </div>
</div>
`
