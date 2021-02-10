import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<table class="my-4 mt-fc mb-lc w-full">
  <thead>
    <tr>
      <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
        #
      </th>
      <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
        Description
      </th>
      <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
        Value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="group cursor-pointer">
      <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        1
      </th>
      <td class="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
      </td>
      <td class="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        1200
      </td>
    </tr>
    <tr class="group cursor-pointer">
      <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        2
      </th>
      <td class="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        Dolor sit amet
      </td>
      <td class="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        200
      </td>
    </tr>
    <tr class="group cursor-pointer">
      <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        3
      </th>
      <td class="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        Consectetur adipiscing elit
      </td>
      <td class="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        2400
      </td>
    </tr>
    <tr class="group cursor-pointer">
      <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        4
      </th>
      <td class="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        Dolor sit amet
      </td>
      <td class="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
        200
      </td>
    </tr>
  </tbody>
</table>
`
