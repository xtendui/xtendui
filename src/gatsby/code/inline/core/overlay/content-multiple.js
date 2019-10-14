import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div data-xt-overlay>
  <button type="button" class="btn btn--primary">
    position right
  </button>
  <div class="overlay_outer overlay--default overlay-position overlay-position--right demo--overlay--content-multiple">
    <div class="overlay">
      <div class="overlay_inner">
        <div class="overlay_design"></div>
        <div class="overlay_close xt-fixed--check">
          <button type="button" class="btn btn--close" aria-label="Close"></button>
        </div>
        <div class="overlay_menu">
          <button type="button" class="btn btn--primary btn--big btn--wide btn--tall">
            Menu
          </button>
          <button type="button" class="btn btn--primary btn--big btn--wide btn--tall">
            Account
          </button>
        </div>
        <div class="overlay_content" style="margin-top: 0">
          <div class="h2">Lorem ipsum</div>
        </div>
        <div class="overlay_content" style="margin-top: 0">
          <div class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
            ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
            justo.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
            ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
            justo.</p>
        </div>
        <div class="overlay_content" style="margin-bottom: 0">
          <button type="button" class="btn btn--primary overlay_dismiss">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
