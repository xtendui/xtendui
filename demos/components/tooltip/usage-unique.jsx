import React from 'react'
export default function component() {
  return (
    <div>
      Lorem ipsum{' '}
      <a href="#" data-xt-tooltip="{ targets: '#tooltip--unique-1, #tooltip--unique-2' }">
        dolor
      </a>{' '}
      sit amet
      <div className="xt-tooltip p-2" id="tooltip--unique-1">
        <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
          Lorem ipsum dolor sit amet
        </div>
      </div>
      <div className="xt-tooltip p-2" id="tooltip--unique-2" data-xt-position="right-end">
        <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
          Consectetur adipiscing elit
        </div>
      </div>
    </div>
  )
}
