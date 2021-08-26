import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div
        className="*** xt-tooltip *** p-2 relative inline-block *** on ***"
        data-xt-tooltip="{ closeOutside: false, classSkip: false }">
        <div className="xt-card rounded-md shadow-md text-white xt-links-inverse font-medium bg-black">
          <div className="py-2 px-2.5 text-xs">Lorem ipsum dolor sit amet</div>
        </div>
      </div>
    </div>
  )
}
