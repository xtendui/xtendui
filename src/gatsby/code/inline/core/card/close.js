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
    <div class="card card--default">
      <div class="card-inner">
        <button type="button" class="btn btn-close" aria-label="Close"></button>
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-item">
            <div class="card-title">Default</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="col-12 col-6--sm">
    <div class="card card--default card--full">
      <div class="card-inner">
        <button type="button" class="btn btn-close" aria-label="Close"></button>
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-item">
            <div class="card-title">Default full</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="col-12 col-6--sm">
    <div class="card card--primary">
      <div class="card-inner">
        <button type="button" class="btn btn-close" aria-label="Close"></button>
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-item">
            <div class="card-title">Primary</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="col-12 col-6--sm">
    <div class="card card--primary card--full">
      <div class="card-inner">
        <button type="button" class="btn btn-close" aria-label="Close"></button>
        <div class="card-design"></div>
        <div class="card-content">
          <div class="card-item">
            <div class="card-title">Primary full</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
