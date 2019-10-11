import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<form>
  <div class="form-group form-group--tiny">
    <label class="form-label">
      Lorem
    </label>
    <input type="text" class="form-item">
    <div class="form-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis.
    </div>
  </div>
  
  <div class="form-group form-group--medium">
    <label class="form-label">
      Lorem Ipsum
    </label>
    <input type="text" class="form-item">
    <div class="form-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis.
    </div>
  </div>
  
  <div class="form-group form-group--giant">
    <label class="form-label">
      Lorem
    </label>
    <input type="text" class="form-item">
    <div class="form-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis.
    </div>
  </div>
</form>
`
