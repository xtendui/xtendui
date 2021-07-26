import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
        Size xs
      </div>
      Lorem ipsum <span className="xt-separator before:content-['-'] *** mx-1 text-xs ***"></span> dolor sit amet
      <span className="xt-separator before:content-['/'] *** mx-1 text-xs ***"></span> Lorem ipsum
      <span className="xt-separator before:content-['|'] *** mx-1 text-xs ***"></span> dolor sit amet
      <span className="xt-separator before:content-['•'] *** mx-1 text-xs ***"></span> Lorem ipsum
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
        Size xl
      </div>
      Lorem ipsum <span className="xt-separator before:content-['-'] *** mx-3 text-xl ***"></span> dolor sit amet
      <span className="xt-separator before:content-['/'] *** mx-3 text-xl ***"></span> Lorem ipsum
      <span className="xt-separator before:content-['|'] *** mx-3 text-xl ***"></span> dolor sit amet
      <span className="xt-separator before:content-['•'] *** mx-3 text-xl ***"></span> Lorem ipsum
    </div>
  )
}
