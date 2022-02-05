import React from 'react'
export default function Demo() {
  return (
    <div>
      <nav aria-label="Breadcrumbs" className="*** truncate ***">
        <a
          href="/"
          className="xt-button *** inline *** py-1.5 px-2 text-2xs rounded-full font-medium leading-snug tracking-wider uppercase transition hover:opacity-75">
          Home
        </a>
        <span className="inline relative align-baseline before:content-['/'] mx-0.5 text-sm"></span>
        <a
          href="/"
          className="xt-button *** inline *** py-1.5 px-2 text-2xs rounded-full font-medium leading-snug tracking-wider uppercase transition hover:opacity-75">
          Lorem ipsum dolor sit amet
        </a>
        <span className="inline relative align-baseline before:content-['/'] mx-0.5 text-sm"></span>
        <div className="xt-button py-1.5 px-2 text-2xs rounded-full font-medium leading-snug tracking-wider uppercase transition hover:opacity-75 pointer-events-none">
          Lorem ipsum
        </div>
      </nav>
    </div>
  )
}
