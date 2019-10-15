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
    <button type="button" class="card card--primary">
      <div class="card-inner">
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-block card-block--head">
            <div class="card-title">Lorem ipsum</div>
          </div>
          <div class="card-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
          <div class="card-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  
  <div class="col-12 col-6--sm">
    <button type="button" class="card card--primary card--full">
      <div class="card-inner">
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-block card-block--head">
            <div class="card-title">Lorem ipsum</div>
          </div>
          <div class="card-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
          <div class="card-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
</div>
`
