import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center"
     data-xt-toggle="{ durationOn: 1000, durationOff: 1000 }">
  <button type="button" class="btn btn--default">
    Toggle 0
  </button>
  <button type="button" class="btn btn--default">
    Toggle 1
  </button>
  <button type="button" class="btn btn--default">
    Toggle 2
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
</div>

<br>

<div class="list list--default list-space--small align-items-center"
     data-xt-toggle="{ on: 'mouseenter', off: 'mouseleave', durationOn: 1000, durationOff: 1000 }">
  <button type="button" class="btn btn--default">
    Toggle 0
  </button>
  <button type="button" class="btn btn--default">
    Toggle 1
  </button>
  <button type="button" class="btn btn--default">
    Toggle 2
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
</div>
`
