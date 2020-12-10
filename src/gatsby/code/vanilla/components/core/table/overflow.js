import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="table-overflow">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Description</th>
        <th>Additional</th>
        <th>Another</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Lorem ipsum</td>
        <td>Lorem ipsum</td>
        <td>Lorem ipsum</td>
        <td>1200</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Dolor sit amet</td>
        <td>Dolor sit amet</td>
        <td>Dolor sit amet</td>
        <td>200</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Consectetur adipiscing elit</td>
        <td>Consectetur adipiscing elit</td>
        <td>Consectetur adipiscing elit</td>
        <td>2400</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Lorem ipsum</td>
        <td>Lorem ipsum</td>
        <td>Lorem ipsum</td>
        <td>400</td>
      </tr>
    </tbody>
  </table>
</div>
`
