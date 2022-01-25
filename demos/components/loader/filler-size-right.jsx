import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center justify-center">
        <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100">
          <div className="p-6 sm:p-8 text-sm">
            <div className="xt-h5">Small</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 *** w-1 left-auto ***">
              <span className="block absolute bg-current opacity-25 w-full h-full *** right-0 ***"></span>
              <span className="block absolute bg-current *** w-full right-0 animate-xt-filler-y ***"></span>
            </span>
          </span>
        </div>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
          Lorem ipsum
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 *** w-1 left-auto ***">
              <span className="block absolute bg-current opacity-25 w-full h-full *** right-0 ***"></span>
              <span className="block absolute bg-current *** w-full right-0 animate-xt-filler-y ***"></span>
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}