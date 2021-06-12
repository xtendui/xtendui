import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div
        className="xt-tooltip p-2 relative inline-block *** on ***"
        data-xt-tooltip="{ closeOutside: false, classSkip: false }">
        <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  )
}
