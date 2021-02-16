import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-m-auto w-full">
  <table class="my-4 xt-m-auto w-full">
    <thead>
      <tr>
        <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
          #
        </th>
        <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
          Description
        </th>
        <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
          Additional
        </th>
        <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
          Another
        </th>
        <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
          Value
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
          1
        </th>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Lorem ipsum
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Lorem ipsum
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Lorem ipsum
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          1200
        </td>
      </tr>
      <tr>
        <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
          2
        </th>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Dolor sit amet
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Dolor sit amet
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Dolor sit amet
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          200
        </td>
      </tr>
      <tr>
        <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
          3
        </th>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Consectetur adipiscing elit
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Consectetur adipiscing elit
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Consectetur adipiscing elit
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          2400
        </td>
      </tr>
      <tr>
        <th class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
          4
        </th>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Lorem ipsum
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Lorem ipsum
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          Lorem ipsum
        </td>
        <td class="py-2 px-4 text-sm align-top leading-snug border ">
          400
        </td>
      </tr>
    </tbody>
  </table>
</div>
`
