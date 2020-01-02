import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-tiny align-items-center">
  <button type="button" class="btn btn-primary btn-tiny" id="demo_toggle-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo_toggle-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo_toggle-events-autostart">
    Autostart
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo_toggle-events-autostop">
    Autostop
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo_toggle-events-add">
    Add
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo_toggle-events-remove">
    Remove
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo_toggle-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo_toggle-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo_toggle-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo_toggle-events-unmount">
    Unmount
  </button>
</div>

<br/>

<div class="list list-default list-space-small align-items-center" id="demo_toggle-events">

  <button type="button" class="btn btn-default">
    Toggle 0
  </button>
  <button type="button" class="btn btn-default">
    Toggle 1
  </button>
  <button type="button" class="btn btn-default active">
    Toggle 2
  </button>

  <div class="note note-default note-background toggle-block">
    Target 0
  </div>
  <div class="note note-default note-background toggle-block">
    Target 1
  </div>
  <div class="note note-default note-background toggle-block">
    Target 2
  </div>

</div>

<br/>

<div class="card card-default card-small">
  <div class="card-design"></div>
  <div class="card-inner">
    <div class="card-content">
      <div class="card-block card-item card-overflow-y" id="demo_toggle-events-log">
      </div>
    </div>
  </div>
</div>
`
