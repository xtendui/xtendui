import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="bg-primary-500 py-5 px-6">
        <div className="xt-list xt-list-3 items-center text-white xt-links-inverse">
          <a href="#"> link </a>

          <a href="#" className="text-white text-opacity-75 underline">
            {' '}
            link custom{' '}
          </a>

          <button type="button" className="xt-button xt-link">
            link button
          </button>

          <div className="xt-link">link class</div>

          <div className="bg-white py-5 px-6">
            <div className="xt-list xt-list-3 items-center text-black xt-links-default">
              <a href="#"> link </a>

              <a href="#" className="text-primary-500 text-opacity-75 underline">
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
