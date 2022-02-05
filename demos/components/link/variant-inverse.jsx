import React from 'react'
export default function Demo() {
  return (
    <div>
      <div className="xt-card p-7 sm:p-9 text-base rounded-2xl *** text-white xt-links-inverse *** bg-primary-500">
        <div className="xt-list xt-list-3 items-center">
          <a href="/"> link </a>

          <a href="/" className="text-white text-opacity-75 underline">
            {' '}
            link custom{' '}
          </a>

          <button type="button" className="xt-button xt-link">
            link button
          </button>

          <div className="xt-link">link class</div>

          <div className="xt-card p-7 sm:p-9 text-base rounded-2xl *** text-gray-900 xt-links-default *** bg-white">
            <div className="xt-list xt-list-3 items-center">
              <a href="/"> link </a>

              <a href="/" className="text-primary-500 text-opacity-75 underline">
                {' '}
                link custom{' '}
              </a>

              <button type="button" className="xt-button xt-link">
                link button
              </button>

              <div className="xt-link">link class</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
