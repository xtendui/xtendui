import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="slider"
     data-xt-slider="{ align: 'center' }">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide col-12">
        <div class="slide-inner">

          <div class="card card-slide card-primary card-small align-center">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">1</h1>
                </div>

                <div class="card-block card-item">
                  <div class="card card-default card-medium">
                    <div class="card-design"></div>
                    <div class="card-inner">
                      <div class="btn btn-close" aria-label="Close"></div>
                      <div class="card-content">
                        <div class="card-block card-item">
                          <div class="card-title">Lorem Ipsum</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                        </div>
                        <div class="card-block card-item">
                          <div class="card-title">Lorem Ipsum</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-block card-item">
                  <div class="card card-default card-white card-large">
                    <div class="card-design"></div>
                    <div class="card-inner">
                      <div class="btn btn-close" aria-label="Close"></div>
                      <div class="card-content">
                        <div class="card-item-nested card-item card-group">
                          <div class="card-block card-item">
                            <div class="card-title">Lorem ipsum</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                          </div>
                          <div class="card-block card-item">
                            <div class="card-title">Lorem ipsum</div>
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

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide card-primary card-large align-center">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">2</h1>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4-sm">
        <div class="slide-inner">

          <div class="card card-slide card-primary card-large align-center">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="card-content">
                <div class="card-block card-item">
                  <div class="card-title">3</h1>
                </div>
              </div>
            </div>
          </div>

        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination">
    <button type="button" class="btn btn-default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>
`
