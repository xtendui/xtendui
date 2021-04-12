import React from 'react'
export default function component() {
  return (
    <div>
      <div className="w-full p-8 md:p-10 lg:p-12 bg-gray-200">
        <nav className="breadcrumbs leading-none truncate">
          <a
            href="#"
            className="xt-button text-xs py-2 px-0 text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100">
            {' '}
            Home{' '}
          </a>
          <span className="xt-separator xt-separator-slash mx-2"></span>
          <a
            href="#"
            className="xt-button text-xs py-2 px-0 text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100">
            Lorem ipsum dolor sit amet
          </a>
          <span className="xt-separator xt-separator-slash mx-2"></span>
          <div className="xt-button text-xs py-2 px-0 text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100 pointer-events-none">
            Lorem ipsum
          </div>
        </nav>

        <h1 className="xt-h2  mt-4">Lorem ipsum dolor sit amet</h1>
      </div>
    </div>
  )
}
