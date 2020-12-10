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
      <th class="border-2 border-accent-500 bg-accent-500 text-white">#</th>
      <th class="border-2 border-accent-500 bg-accent-500 text-white">Description</th>
      <th class="border-2 border-accent-500 bg-accent-500 text-white">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="border-2 border-accent-500 text-accent-500">1</th>
      <td class="border-2 border-accent-500 text-accent-500"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</td>
      <td class="border-2 border-accent-500 text-accent-500">1200</td>
    </tr>
    <tr>
      <th class="border-2 border-accent-500 bg-accent-100 text-accent-500">2</th>
      <td class="border-2 border-accent-500 bg-accent-100 text-accent-500">Dolor sit amet</td>
      <td class="border-2 border-accent-500 bg-accent-100 text-accent-500">200</td>
    </tr>
    <tr>
      <th class="border-2 border-accent-500 text-accent-500">3</th>
      <td class="border-2 border-accent-500 text-accent-500">Consectetur adipiscing elit</td>
      <td class="border-2 border-accent-500 text-accent-500">2400</td>
    </tr>
    <tr>
      <th class="border-2 border-accent-500 bg-accent-100 text-accent-500">3</th>
      <td class="border-2 border-accent-500 bg-accent-100 text-accent-500">Lorem ipsum</td>
      <td class="border-2 border-accent-500 bg-accent-100 text-accent-500">400</td>
    </tr>
  </tbody>
</table>
`
