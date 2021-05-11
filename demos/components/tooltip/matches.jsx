import React from 'react'
export default function demo() {
  return (
    <div>
      <div data-xt-tooltip="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">
        Lorem ipsum
        <div className="xt-tooltip-item">
          <a href="#">dolor</a>

          <div className="xt-tooltip p-2">
            <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
        sit amet
      </div>
    </div>
  )
}
