import React from 'react'
export default function demo() {
  return (
    <div>
      <form className="text-sm">
        <div className="*** xt-list flex-col md:flex-row md:flex-nowrap ***">
          <div className="*** inline-flex flex-auto ***">
            <button
              type="submit"
              className="xt-button py-2.5 px-3.5 text-sm *** rounded-t-md md:rounded-tr-none md:rounded-l-md *** font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon text-xl -my-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            <input
              type="text"
              className="block w-full py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Search"
              placeholder="Seach Catalog"
            />
          </div>

          <button
            type="submit"
            className="xt-button py-2.5 px-3.5 text-sm *** rounded-b-md md:rounded-bl-none md:rounded-r-md *** font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
            Search
          </button>
        </div>
      </form>

      <form className="text-sm mt-6">
        <div className="*** xt-list ***">
          <div className="*** inline-flex flex-col md:flex-row md:flex-nowrap ***">
            <a
              href="/"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-t-md md:rounded-tl-none md:rounded-r-md md:order-3 *** font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              +
            </a>
            <input
              type="number"
              className="block w-full w-16 text-center py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none *** md:order-2 ***"
              aria-label="Quantity"
              defaultValue="1"
              min="0"
              max="100"
            />
            <a
              href="/"
              className="xt-button text-2xs py-1 px-2.5 *** rounded-b-md md:rounded-br-none md:rounded-l-md md:order-1 *** font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              -
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}
