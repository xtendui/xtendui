import path from 'path'
const img = require('components/snippets/img').default

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="row">
  <div class="col-12 col-6--sm">
    <button type="button" class="box box-card box-card--default  box-card--small box--collapse box--small-collapse box--full box--small-full">
      <div class="box-design"></div>
      <div class="box-inner">
        <div class="box-content">
          <div class="box-block box-item">
            <div class="box-title">Small full</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  
  <div class="col-12 col-6--sm">
    <button type="button" class="box box-card box-card--default  box-card--medium box--collapse box--medium-collapse box--full box--medium-full">
      <div class="box-design"></div>
      <div class="box-inner">
        <div class="box-content">
          <div class="box-block box-item">
            <div class="box-title">Medium full</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  
  <div class="col-12 col-6--sm">
    <button type="button" class="box box-card box-card--default  box-card--big box--collapse box--big-collapse box--full box--big-full">
      <div class="box-design"></div>
      <div class="box-inner">
        <div class="box-content">
          <div class="box-block box-item">
            <div class="box-title">Big full</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
</div>
`
