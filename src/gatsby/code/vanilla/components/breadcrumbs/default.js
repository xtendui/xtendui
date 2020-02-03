import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
  <div class="breadcrumbs"
       itemscope itemtype="https://schema.org/BreadcrumbList">
    <div class="container">

      <div class="breadcrumbs-inner">
        <nav class="list">
          <li itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem">
            <a href="/" class="btn">
              <span itemprop="name">
                Home
              </span>
            </a>
            <meta itemprop="position" content="1">
          </li>
          <li>
            <span class="separator separator-slash"></span>
          </li>
          <li itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem">
            <a href="/" class="btn">
              <span itemprop="name">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia rutrum ornare
              </span>
            </a>
            <meta itemprop="position" content="2">
          </li>
          <span class="separator separator-slash"></span>
          <li itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem">
            <a role="button" class="btn" disabled>
              <span itemprop="name">
                  Destination
              </span>
            </a>
            <meta itemprop="position" content="3">
          </li>
        </nav>
      </div>

    </div>
  </div>
`
