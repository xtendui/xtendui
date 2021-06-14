const html = /* HTML */ `
  <div>
    <table class="my-4 xt-my-auto w-full">
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
        <tr class="cursor-pointer group">
          <th
            class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border *** transition group-hover:bg-gray-300 ***"
          >
            1
          </th>
          <td class="py-2 px-4 text-sm align-top leading-snug border *** transition group-hover:bg-gray-300 ***">
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </td>
          <td class="py-2 px-4 text-sm align-top leading-snug border *** transition group-hover:bg-gray-300 ***">
            1200
          </td>
        </tr>
        <tr class="cursor-pointer group">
          <th
            class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border *** transition group-hover:bg-gray-300 ***"
          >
            2
          </th>
          <td class="py-2 px-4 text-sm align-top leading-snug border *** transition group-hover:bg-gray-300 ***">
            Dolor sit amet
          </td>
          <td class="py-2 px-4 text-sm align-top leading-snug border *** transition group-hover:bg-gray-300 ***">
            200
          </td>
        </tr>
        <tr class="cursor-pointer group">
          <th
            class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border *** transition group-hover:bg-gray-300 ***"
          >
            3
          </th>
          <td class="py-2 px-4 text-sm align-top leading-snug border *** transition group-hover:bg-gray-300 ***">
            Consectetur adipiscing elit
          </td>
          <td class="py-2 px-4 text-sm align-top leading-snug border *** transition group-hover:bg-gray-300 ***">
            2400
          </td>
        </tr>
        <tr class="cursor-pointer group">
          <th
            class="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border *** transition group-hover:bg-gray-300 ***"
          >
            4
          </th>
          <td class="py-2 px-4 text-sm align-top leading-snug border *** transition group-hover:bg-gray-300 ***">
            Dolor sit amet
          </td>
          <td class="py-2 px-4 text-sm align-top leading-snug border *** transition group-hover:bg-gray-300 ***">
            200
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`

export const object = {
  html: html,
}
