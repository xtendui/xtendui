import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="breadcrumbs breadcrumbs-background">
    <div class="container">
        <div class="breadcrumbs-inner">

            <nav class="list">
                <a href="/" class="btn">
                    Home
                </a>
                <span class="separator separator-slash"></span>
                <a href="/" class="btn">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia rutrum ornare
                </a>
                <span class="separator separator-slash"></span>
                <div class="btn" disabled>
                    Destination
                </div>
            </nav>
        </div>

        <h1 class="breadcrumbs-title">
            Lorem ipsum dolor sit amet
        </h1>

    </div>
</div>

`
