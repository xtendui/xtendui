import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="row">
  <div class="col-12 col-6--sm">
    <button type="button" class="card card--primary card--small">
      <div class="card-inner">
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-item">
            <div class="card-title">Small</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  
  <div class="col-12 col-6--sm">
    <button type="button" class="card card--primary card--full card--small">
      <div class="card-inner">
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-item">
            <div class="card-title">Small full</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  
  
  <div class="col-12 col-6--sm">
    <button type="button" class="card card--primary card--medium">
      <div class="card-inner">
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-item">
            <div class="card-title">Medium</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  
  <div class="col-12 col-6--sm">
    <button type="button" class="card card--primary card--full card--medium">
      <div class="card-inner">
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-item">
            <div class="card-title">Medium full</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  
  
  <div class="col-12 col-6--sm">
    <button type="button" class="card card--primary card--big">
      <div class="card-inner">
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-item">
            <div class="card-title">Big</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  
  <div class="col-12 col-6--sm">
    <button type="button" class="card card--primary card--full card--big">
      <div class="card-inner">
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-item">
            <div class="card-title">Big full</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
</div>
`
