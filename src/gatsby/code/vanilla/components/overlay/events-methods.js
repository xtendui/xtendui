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
  <button type="button" class="btn btn-primary btn-tiny" id="demo--overlay-events-first-element">
    1st element
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--overlay-events-first-target">
    1st target
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--overlay-events-reinit">
    Reinit
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--overlay-events-restart">
    Restart
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--overlay-events-destroy">
    Destroy
  </button>
  <button type="button" class="btn btn-primary btn-tiny" id="demo--overlay-events-unmount">
    Unmount
  </button>
</div>

<br/>

<div class="list list-default list-space-tiny align-items-center">
  <button type="button" class="btn btn-primary" id="demo--overlay-events">
    Open Overlay
  </button>
  <button type="button" class="btn btn-primary" id="demo--overlay-events-alt">
    Open Same Overlay
  </button>
</div>

<div class="overlay overlay-large" id="overlay-nested">
  <div class="overlay-container">
    <div class="overlay-inner">

      <div class="card card-overlay">
        <div class="card-design"></div>
        <div class="card-inner">
          <div class="btn btn-close" aria-label="Close"></div>
          <div class="card-content">
            <div class="card-block card-item">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                justo.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
              <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                justo.</p>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<br/>

<div class="card card-default card-small">
  <div class="card-design"></div>
  <div class="card-inner">
    <div class="card-content">
      <div class="card-block card-item card-overflow-y" id="demo--overlay-events-log">
      </div>
    </div>
  </div>
</div>
`
