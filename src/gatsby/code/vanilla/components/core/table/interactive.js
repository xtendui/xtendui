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
    <tr class="group cursor-pointer">
      <th class="transition group-hover:bg-gray-300 group-active:bg-gray-400">1</th>
      <td class="transition group-hover:bg-gray-300 group-active:bg-gray-400"><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</td>
      <td class="transition group-hover:bg-gray-300 group-active:bg-gray-400">1200</td>
    </tr>
    <tr class="group cursor-pointer">
      <th class="transition group-hover:bg-gray-300 group-active:bg-gray-400">2</th>
      <td class="transition group-hover:bg-gray-300 group-active:bg-gray-400">Dolor sit amet</td>
      <td class="transition group-hover:bg-gray-300 group-active:bg-gray-400">200</td>
    </tr>
    <tr class="group cursor-pointer">
      <th class="transition group-hover:bg-gray-300 group-active:bg-gray-400">3</th>
      <td class="transition group-hover:bg-gray-300 group-active:bg-gray-400">Consectetur adipiscing elit</td>
      <td class="transition group-hover:bg-gray-300 group-active:bg-gray-400">2400</td>
    </tr>
    <tr class="group cursor-pointer">
      <th class="transition group-hover:bg-gray-300 group-active:bg-gray-400">2</th>
      <td class="transition group-hover:bg-gray-300 group-active:bg-gray-400">Dolor sit amet</td>
      <td class="transition group-hover:bg-gray-300 group-active:bg-gray-400">200</td>
    </tr>
  </tbody>
</table>
`
