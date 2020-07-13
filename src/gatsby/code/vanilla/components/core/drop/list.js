import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="drop-container" data-xt-drop>
  <button type="button" class="btn btn-primary">
    Toggle
  </button>
  <div class="drop drop-default">
    <div class="drop-inner">
      <div class="drop-design"></div>
      <div class="drop-content">
    
        <nav class="list-block list-drop">
          <a href="#">
            Lorem Ipsum
          </a>
          <button type="button">
            Dolor sit
          </button>
          <button type="button" class="btn btn-default btn-small btn-wide btn-squared">
            Dolor sit
          </button>
        </nav>
    
      </div>
    </div>
  </div>
</div>
`
