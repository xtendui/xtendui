import React from 'react'
export default function demo() {
  return (
    <div className="demo--media-skeleton-react">
      <div className="xt-list xt-list-3 items-center">
        <div className="xt-media-container *** bg-gray-200 *** pb-[25%]">
          <img
            className="xt-media *** h-10 w-auto absolute inset-0 m-auto ***"
            src="/logo-white.svg"
            loading="lazy"
            alt=""
          />
        </div>

        <div className="xt-media-container *** bg-gray-500 *** pb-[25%]">
          <img
            className="xt-media *** h-10 w-auto absolute inset-0 m-auto ***"
            src="/logo-white.svg"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
