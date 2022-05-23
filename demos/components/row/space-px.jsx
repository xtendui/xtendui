import React from 'react'
export default function Demo() {
  return (
    <div>
      <div className="xt-row *** xt-row-px ***">
        <div className="w-4/12">
          <div className="w-full h-12 bg-gray-200"></div>
        </div>

        <div className="w-8/12">
          <div className="w-full h-12 bg-gray-200"></div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="w-full h-12 bg-gray-200"></div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="w-full h-12 bg-gray-200"></div>
        </div>

        <div className="w-full md:w-4/12">
          <div className="w-full h-12 bg-gray-200"></div>
        </div>

        <div className="w-full md:w-auto flex-1">
          <div className="w-full py-3 px-4 text-sm bg-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut
            ex at ex pellentesque efficitur.
          </div>
        </div>
      </div>
    </div>
  )
}