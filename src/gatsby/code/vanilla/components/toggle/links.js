import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename ).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center"
     data-xt-toggle="{ min: 1, on: 'mouseenter', off: 'mouseleave' }">
  <a href="#toggle-with-link-0" class="btn btn--default">
    Toggle 0
  </a>
  <a href="#toggle-with-link-1" class="btn btn--default">
    Toggle 1
  </a>
  <button type="button" class="btn btn--default">
    <a href="#toggle-with-link-2" class="link-none">Toggle 2</a>
  </button>
  <button type="button" class="btn btn--default">
    <a href="#toggle-with-link-3" class="link-none">Toggle 3</a>
  </button>
  <div class="note note--default note--background toggle-block">
    Target 0
  </div>
  <div class="note note--default note--background toggle-block">
    Target 1
  </div>
  <div class="note note--default note--background toggle-block">
    Target 2
  </div>
  <div class="note note--default note--background toggle-block">
    Target 3
  </div>
</div>
`
