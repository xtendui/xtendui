import React from 'react'
import 'xtendui/src/textareaautosize'

export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="block mb-3 font-semibold text-gray-900"> Textarea autosize </label>
            <textarea
              className="block w-full h-20 max-h-48 rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none overflow-hidden resize-none"
              aria-label="Textarea autosize"
              data-xt-textareaautosize></textarea>
          </div>
        </div>
      </form>
    </div>
  )
}
