import React from 'react'
export default function demo() {
  return (
    <div>
      Lorem ipsum <span className="*** inline relative align-baseline before:content-['-'] mx-2 ***"></span> dolor sit
      amet
      <span className="*** inline relative align-baseline before:content-['/'] mx-2 ***"></span> Lorem ipsum
      <span className="*** inline relative align-baseline before:content-['|'] mx-2 ***"></span> dolor sit amet
      <span className="*** inline relative align-baseline before:content-['•'] mx-2 ***"></span> Lorem ipsum
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Custom size and color
      </div>
      Lorem ipsum
      <span className="inline relative align-baseline before:content-['-'] *** mx-1 text-xs text-primary-500 ***"></span>
      dolor sit amet
      <span className="inline relative align-baseline before:content-['/'] *** mx-1 text-xs text-primary-500 ***"></span>
      Lorem ipsum
      <span className="inline relative align-baseline before:content-['|'] *** mx-1 text-xs text-primary-500 ***"></span>
      dolor sit amet
      <span className="inline relative align-baseline before:content-['•'] *** mx-1 text-xs text-primary-500 ***"></span>
      Lorem ipsum
    </div>
  )
}
