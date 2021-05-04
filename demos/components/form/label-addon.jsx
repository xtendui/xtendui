import React from 'react'
export default function component() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900">
              Lorem ipsum
              <div className="ml-4">
                <div className="xt-list xt-list-3 items-center">
                  <a href="#" className="xt-button xt-link">
                    {' '}
                    link #1{' '}
                  </a>
                  <a href="#" className="xt-button xt-link">
                    {' '}
                    link #2{' '}
                  </a>
                </div>
              </div>
            </label>
            <input
              type="text"
              className="block w-full rounded-md py-2 px-4 text-black placeholder-black placeholder-opacity-50 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Lorem ipsum"
            />
          </div>

          <div className="w-full">
            <label className="flex mb-3 font-semibold text-gray-900">
              Dolor sit amet
              <div className="ml-auto">
                <div className="xt-list xt-list-3 items-center">
                  <a href="#" className="xt-button xt-link">
                    {' '}
                    link #1{' '}
                  </a>
                  <a href="#" className="xt-button xt-link">
                    {' '}
                    link #2{' '}
                  </a>
                </div>
              </div>
            </label>
            <input
              type="text"
              className="block w-full rounded-md py-2 px-4 text-black placeholder-black placeholder-opacity-50 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Dolor sit amet"
            />
          </div>

          <div className="w-full">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-2/12 md:self-center">
                <label className="flex flex-col font-semibold text-gray-900">
                  Lorem ipsum
                  <div className="mt-2">
                    <div className="xt-list xt-list-3 items-center">
                      <a href="#" className="xt-button xt-link">
                        {' '}
                        link #1{' '}
                      </a>
                      <a href="#" className="xt-button xt-link">
                        {' '}
                        link #2{' '}
                      </a>
                    </div>
                  </div>
                </label>
              </div>

              <div className="w-full md:w-10/12">
                <input
                  type="text"
                  className="block w-full rounded-md py-2 px-4 text-black placeholder-black placeholder-opacity-50 bg-gray-200 transition focus:bg-gray-300"
                  aria-label="Lorem ipsum"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="xt-row xt-row-x-6 xt-row-y-4">
              <div className="w-full md:w-2/12 md:self-center">
                <label className="flex flex-col font-semibold text-gray-900">
                  Dolor sit amet
                  <div className="mt-auto">
                    <div className="xt-list xt-list-3 items-center">
                      <a href="#" className="xt-button xt-link">
                        {' '}
                        link #1{' '}
                      </a>
                      <a href="#" className="xt-button xt-link">
                        {' '}
                        link #2{' '}
                      </a>
                    </div>
                  </div>
                </label>
              </div>

              <div className="w-full md:w-10/12">
                <input
                  type="text"
                  className="block w-full rounded-md py-2 px-4 text-black placeholder-black placeholder-opacity-50 bg-gray-200 transition focus:bg-gray-300"
                  aria-label="Dolor sit amet"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
