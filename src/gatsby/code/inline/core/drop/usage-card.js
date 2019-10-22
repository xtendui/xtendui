import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center demo-source-from">
  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn--primary">
      Toggle
    </button>
    <div class="drop drop--default">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
        
          <div class="box box-drop box-drop--default">
            <div class="box-design"></div>
            <div class="box-inner">
              <div class="btn btn-close" aria-label="Close"></div>
              <div class="box-content">
                <div class="box-block box-item">
                  <div class="box-title">Primary</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
`
