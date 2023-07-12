const html = /* HTML */ `
  <div>
    <table class="my-4 xt-my-auto w-full">
      <thead>
        <tr>
          <th
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-xs align-top font-medium leading-snug tracking-wider uppercase text-left">
            #
          </th>
          <th
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-xs align-top font-medium leading-snug tracking-wider uppercase text-left">
            Description
          </th>
          <th
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-xs align-top font-medium leading-snug tracking-wider uppercase text-left">
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-t border-b border-gray-200 ***">
            1
          </th>
          <td class="py-2 px-4 text-sm align-top leading-snug *** border-t border-b border-gray-200 ***">
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </td>
          <td
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-sm align-top leading-snug *** border-t border-b border-gray-200 ***">
            1200
          </td>
        </tr>
        <tr>
          <th
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-t border-b border-gray-200 ***">
            2
          </th>
          <td
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-sm align-top leading-snug *** border-t border-b border-gray-200 ***">
            Dolor sit amet
          </td>
          <td
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-sm align-top leading-snug *** border-t border-b border-gray-200 ***">
            200
          </td>
        </tr>
        <tr>
          <th
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-t border-b border-gray-200 ***">
            3
          </th>
          <td
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-sm align-top leading-snug *** border-t border-b border-gray-200 ***">
            Consectetur adipiscing elit
          </td>
          <td
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-sm align-top leading-snug *** border-t border-b border-gray-200 ***">
            2400
          </td>
        </tr>
        <tr>
          <th
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-t border-b border-gray-200 ***">
            4
          </th>
          <td
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-sm align-top leading-snug *** border-t border-b border-gray-200 ***">
            Lorem ipsum
          </td>
          <td
            class="py-2 px-4 *** first:pl-0 last:pr-0 *** text-sm align-top leading-snug *** border-t border-b border-gray-200 ***">
            400
          </td>
        </tr>
      </tbody>
    </table>

    <table class="my-4 xt-my-auto w-full">
      <thead>
        <tr>
          <th
            class="py-2 px-4 text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-2 border-primary-500 bg-primary-500 text-white ***">
            #
          </th>
          <th
            class="py-2 px-4 text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-2 border-primary-500 bg-primary-500 text-white ***">
            Description
          </th>
          <th
            class="py-2 px-4 text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-2 border-primary-500 bg-primary-500 text-white ***">
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            class="py-2 px-4 text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-2 border-primary-500 text-primary-500 ***">
            1
          </th>
          <td class="py-2 px-4 text-sm align-top leading-snug *** border-2 border-primary-500 text-primary-500 ***">
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </td>
          <td class="py-2 px-4 text-sm align-top leading-snug *** border-2 border-primary-500 text-primary-500 ***">
            1200
          </td>
        </tr>
        <tr>
          <th
            class="py-2 px-4 text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-2 border-primary-500 bg-primary-100 text-primary-500 ***">
            2
          </th>
          <td
            class="py-2 px-4 text-sm align-top leading-snug *** border-2 border-primary-500 bg-primary-100 text-primary-500 ***">
            Dolor sit amet
          </td>
          <td
            class="py-2 px-4 text-sm align-top leading-snug *** border-2 border-primary-500 bg-primary-100 text-primary-500 ***">
            200
          </td>
        </tr>
        <tr>
          <th
            class="py-2 px-4 text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-2 border-primary-500 text-primary-500 ***">
            3
          </th>
          <td class="py-2 px-4 text-sm align-top leading-snug *** border-2 border-primary-500 text-primary-500 ***">
            Consectetur adipiscing elit
          </td>
          <td class="py-2 px-4 text-sm align-top leading-snug *** border-2 border-primary-500 text-primary-500 ***">
            2400
          </td>
        </tr>
        <tr>
          <th
            class="py-2 px-4 text-xs align-top font-medium leading-snug tracking-wider uppercase text-left *** border-2 border-primary-500 bg-primary-100 text-primary-500 ***">
            4
          </th>
          <td
            class="py-2 px-4 text-sm align-top leading-snug *** border-2 border-primary-500 bg-primary-100 text-primary-500 ***">
            Lorem ipsum
          </td>
          <td
            class="py-2 px-4 text-sm align-top leading-snug *** border-2 border-primary-500 bg-primary-100 text-primary-500 ***">
            400
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`

export const object = {
  html: html,
}
