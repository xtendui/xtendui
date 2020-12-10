import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Description</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</td>
      <td>1200</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Dolor sit amet</td>
      <td>200</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Consectetur adipiscing elit</td>
      <td>2400</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Lorem ipsum</td>
      <td>400</td>
    </tr>
  </tbody>
</table>
`
