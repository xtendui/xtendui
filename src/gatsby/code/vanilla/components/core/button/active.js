import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()} active">
    Gray
  </button>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()} active">
    Primary
  </button>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md text-black ${classes.buttonText()} active">
    Text
  </button>

  <button type="button" class="xt-button ${classes.buttonMd()} rounded-md xt-link active">
    Link
  </button>

</div>
`
