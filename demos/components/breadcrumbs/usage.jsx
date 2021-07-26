import React from 'react'
export default function demo() {
  return (
    <div>
      <nav className="*** truncate ***">
        <a
          href="#"
          className="xt-button *** inline *** text-xs py-2 px-0 text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100">
          {' '}
          Home{' '}
        </a>
        <span className="xt-separator before:content-['/'] mx-2"></span>
        <a
          href="#"
          className="xt-button *** inline *** text-xs py-2 px-0 text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100">
          Lorem ipsum dolor sit amet
        </a>
        <span className="xt-separator before:content-['/'] mx-2"></span>
        <div className="xt-button text-xs py-2 px-0 text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100 pointer-events-none">
          Lorem ipsum
        </div>
      </nav>
    </div>
  )
}
