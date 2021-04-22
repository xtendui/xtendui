import React from 'react'
export default function component() {
  return (
    <div>
      <table className="my-4 xt-my-auto w-full">
        <thead>
          <tr>
            <th className="px-6 py-5 text-base align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              #
            </th>
            <th className="px-6 py-5 text-base align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              Description
            </th>
            <th className="px-6 py-5 text-base align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="px-6 py-5 text-base align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              1
            </th>
            <td className="px-6 py-5 text-lg align-top leading-snug border">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </td>
            <td className="px-6 py-5 text-lg align-top leading-snug border">1200</td>
          </tr>
          <tr>
            <th className="px-6 py-5 text-base align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              2
            </th>
            <td className="px-6 py-5 text-lg align-top leading-snug border">Dolor sit amet</td>
            <td className="px-6 py-5 text-lg align-top leading-snug border">200</td>
          </tr>
          <tr>
            <th className="px-6 py-5 text-base align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              3
            </th>
            <td className="px-6 py-5 text-lg align-top leading-snug border">Consectetur adipiscing elit</td>
            <td className="px-6 py-5 text-lg align-top leading-snug border">2400</td>
          </tr>
          <tr>
            <th className="px-6 py-5 text-base align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              4
            </th>
            <td className="px-6 py-5 text-lg align-top leading-snug border">Lorem ipsum</td>
            <td className="px-6 py-5 text-lg align-top leading-snug border">400</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}