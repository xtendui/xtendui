import React from 'react'
export default function demo() {
  return (
    <div>
      <table className="*** table-fixed *** my-4 xt-my-auto w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border border-gray-200">
              #
            </th>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border border-gray-200">
              Description
            </th>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border border-gray-200">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border border-gray-200">
              1
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">1200</td>
          </tr>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border border-gray-200">
              2
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">Dolor sit amet</td>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">200</td>
          </tr>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border border-gray-200">
              3
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
              Consectetur adipiscing elit
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">2400</td>
          </tr>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border border-gray-200">
              4
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">Lorem ipsum</td>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">400</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
