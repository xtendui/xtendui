import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="media-container media-container-16-9">
  <div class="media-inner">
    <video class="media" poster="/placeholder-1080.jpg"
            muted loop playsinline controls>
        <source type="video/mp4" src="/placeholder-1080.mp4" />
    </video>
  </div>
</div>
`
