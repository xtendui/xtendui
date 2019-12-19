import path from 'path'
const img = require('components/snippets/img').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center">

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      variant and size
    </button>
    <div class="overlay">
      <div class="overlay-container">
        <div class="overlay-inner">

          <button type="button" class="card card-overlay card-primary card-small">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="btn btn-close" aria-label="Close"></div>
              <div class="card-content">

                <div class="card-block card-block-head">
                  <div class="card-title">Lorem ipsum</div>
                </div>

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

                <div class="card-block card-item">
                  <div class="card-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                </div>

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
              <div class="card-asset">
                ${img({})}
              </div>
            </div>
          </button>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      nested and collapse
    </button>
    <div class="overlay">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card card-overlay card-primary card-small card-collapse">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="btn btn-close" aria-label="Close"></div>
              <div class="card-content">

                <div class="card-block card-block-head">
                  <div class="card-title">Lorem ipsum</div>
                </div>

                <div class="card-item-nested card-item card-group">
                  <div class="card-block card-item card-block-big">
                    <div class="card-title">Lorem ipsum</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  </div>
                  <div class="card-block card-item card-block-big">
                    <div class="card-title">Lorem ipsum</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  </div>
                </div>

                <div class="card-block card-item card-block-small">
                  <div class="card-title">Default</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                </div>

                <div class="card-block card-item card-block-small">
                  <div class="card-title">Default</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
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
                  <div class="card card-default card-white card-big">
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

                <div class="card-asset">
                  ${img({})}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div data-xt-overlay>
    <button type="button" class="btn btn-primary">
      horizontal and overflow
    </button>
    <div class="overlay overlay-full">
      <div class="overlay-container">
        <div class="overlay-inner">

          <div class="card card-overlay card-horizontal-sm">
            <div class="card-design"></div>
            <div class="card-inner">
              <div class="btn btn-close" aria-label="Close"></div>
              <div class="card-content">
                <div class="card-asset">
                  ${img({})}
                </div>
                <div class="card-block card-item card-overflow-y">
                  <div class="card-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                </div>
                <div class="card-block card-item card-overflow-y">
                  <div class="card-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
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
