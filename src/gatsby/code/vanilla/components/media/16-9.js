import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="media-container media-16-9">
  <div class="media-inner">
    <iframe class="media" type="text/html" src="https://www.youtube.com/embed/hNQFjqDvPhA?autoplay=0&showinfo=0&enablejsapi=1&rel=0" frameborder="0"></iframe>
  </div>
</div>
`
