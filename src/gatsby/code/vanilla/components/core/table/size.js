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
      <th class="px-6 py-5 text-lg">#</th>
      <th class="px-6 py-5 text-lg">Description</th>
      <th class="px-6 py-5 text-lg">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="px-6 py-5 text-lg">1</th>
      <td class="px-6 py-5 text-lg"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</td>
      <td class="px-6 py-5 text-lg">1200</td>
    </tr>
    <tr>
      <th class="px-6 py-5 text-lg">2</th>
      <td class="px-6 py-5 text-lg">Dolor sit amet</td>
      <td class="px-6 py-5 text-lg">200</td>
    </tr>
    <tr>
      <th class="px-6 py-5 text-lg">3</th>
      <td class="px-6 py-5 text-lg">Consectetur adipiscing elit</td>
      <td class="px-6 py-5 text-lg">2400</td>
    </tr>
    <tr>
      <th class="px-6 py-5 text-lg">3</th>
      <td class="px-6 py-5 text-lg">Lorem ipsum</td>
      <td class="px-6 py-5 text-lg">400</td>
    </tr>
  </tbody>
</table>
`
