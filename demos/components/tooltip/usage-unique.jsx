import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      Lorem ipsum{' '}
      <a href="/" data-xt-tooltip="{ targets: '#tooltip--unique' }">
        dolor
      </a>{' '}
      sit
      <a href="/" data-xt-tooltip="{ targets: '#tooltip--unique' }">
        amet
      </a>
      <div className="*** xt-tooltip p-3 ***" id="tooltip--unique">
        <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
          <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
        </div>
      </div>
    </div>
  )
}
