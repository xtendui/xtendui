import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function Demo() {
  return (
    <div className="demo--toggle-prevent-event-react">
      <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ min: 1, preventEvent: true }">
        <a
          href="/"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 0
        </a>

        <a
          href="/"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 1
        </a>

        <div
          className="off:hidden out:pointer-events-none bg-white rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 0
        </div>

        <div
          className="off:hidden out:pointer-events-none bg-white rounded-full text-xs py-2 px-3 font-medium shadow"
          data-xt-toggle-target>
          Target 1
        </div>
      </div>
    </div>
  )
}
