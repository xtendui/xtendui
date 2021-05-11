import React from 'react'
export default function demo() {
  return (
    <div>
      <table className="table-fixed my-4 xt-my-auto w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              #
            </th>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              Description
            </th>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              1
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border">1200</td>
          </tr>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              2
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border">Dolor sit amet</td>
            <td className="py-2 px-4 text-sm align-top leading-snug border">200</td>
          </tr>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              3
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border">Consectetur adipiscing elit</td>
            <td className="py-2 px-4 text-sm align-top leading-snug border">2400</td>
          </tr>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              4
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border">Lorem ipsum</td>
            <td className="py-2 px-4 text-sm align-top leading-snug border">400</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
