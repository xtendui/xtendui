import React from 'react'
import 'xtendui/src/textareaautosize'

export default function component() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900"> Textarea autosize </label>
            <textarea
              className="block w-full h-20 max-h-48 rounded-md py-2 px-4 text-black placeholder-black placeholder-opacity-50 bg-gray-200 transition focus:bg-gray-300 overflow-hidden resize-none"
              aria-label="Textarea autosize"
              data-xt-textareaautosize></textarea>
          </div>
        </div>
      </form>
    </div>
  )
}
