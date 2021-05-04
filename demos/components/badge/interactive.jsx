import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <a
          role="button"
          className="xt-badge text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300">
          {' '}
          Gray{' '}
        </a>

        <a
          role="button"
          className="xt-badge text-xs py-2.5 px-3.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-500">
          {' '}
          Primary{' '}
        </a>
      </div>
    </div>
  )
}
