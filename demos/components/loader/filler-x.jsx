import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center justify-center">
        <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
          <div className="text-sm py-6 px-7">
            <div className="xt-h5">Small</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 text-opacity-50">
              <span className="absolute bg-current opacity-25 w-full h-full"></span>
              <span className="absolute bg-current h-full animate-xt-filler-x"></span>
            </span>
          </span>
        </div>

        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
          Lorem ipsum
          <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 text-opacity-50">
              <span className="absolute bg-current opacity-25 w-full h-full"></span>
              <span className="absolute bg-current h-full animate-xt-filler-x"></span>
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}
