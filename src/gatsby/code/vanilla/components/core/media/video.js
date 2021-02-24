import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-media-container bg-gray-200 xt-ratio-56.2">
  <div class="xt-media-inner">
    <video class="xt-media" poster="/placeholder-1080.jpg" preload="metadata" muted playsinline loop autoplay>
      <source type="video/mp4" src="/placeholder-1080.mp4" />
    </video>
  </div>
</div>
`
