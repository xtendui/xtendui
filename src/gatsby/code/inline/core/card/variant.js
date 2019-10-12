import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list-space--small align-items--center gatsby_demo_source--from">
  <div class="row row-space--small">
    <div class="col-12 col-6-sm">
      <button type="button" class="card">
        <div class="card_design"></div>
        <div class="card_content">
          <div class="card_title">Default</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
        </div>
      </button>
    </div>
    
    <div class="col-12 col-6-sm">
      <button type="button" class="card card--primary">
        <div class="card_design"></div>
        <div class="card_content">
          <div class="card_title">Primary</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
        </div>
      </button>
    </div>
    
    <div class="col-12 col-6-sm">
      <button type="button" class="card card--secondary">
        <div class="card_design"></div>
        <div class="card_content">
          <div class="card_title">Secondary</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
        </div>
      </button>
    </div>
    
    <div class="col-12 col-6-sm">
      <button type="button" class="card card--text">
        <div class="card_design"></div>
        <div class="card_content">
          <div class="card_title">Text</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
        </div>
      </button>
    </div>
  </div>
</div>
`
