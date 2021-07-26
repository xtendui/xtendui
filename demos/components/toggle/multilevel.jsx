import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div className="demo--multilevel-react">
      <div className="relative" data-xt-toggle="{ min: 1, duration: 500, queue: false }">
        <nav
          className="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-toggle-target
          data-xt-group="initial">
          <div className="xt-h5  flex items-center justify-between">
            <div>Menu</div>
            <button type="button" data-xt-toggle-element data-xt-group="initial"></button>
          </div>

          <nav className="xt-list flex-col">
            <button
              type="button"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-toggle-element
              data-xt-group="cat-0">
              Category 0
            </button>
            <button
              type="button"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-toggle-element
              data-xt-group="cat-1">
              Category 1
            </button>
            <a
              href="#"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              Link 0
            </a>
            <a
              href="#"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          className="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-toggle-target
          data-xt-group="cat-0">
          <div className="xt-h5  flex items-center justify-between">
            <div>Category 0</div>
            <button
              type="button"
              className="xt-button py-1.5 px-2.5 text-3xs text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element
              data-xt-group="initial">
              Back
            </button>
          </div>

          <nav className="xt-list flex-col">
            <button
              type="button"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-toggle-element
              data-xt-group="cat-0a">
              Category 0a
            </button>
            <button
              type="button"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
              data-xt-toggle-element
              data-xt-group="cat-0b">
              Category 0b
            </button>
            <a
              href="#"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              Link 0
            </a>
            <a
              href="#"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          className="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-toggle-target
          data-xt-group="cat-0a">
          <div className="xt-h5  flex items-center justify-between">
            <div>Category 0a</div>
            <button
              type="button"
              className="xt-button py-1.5 px-2.5 text-3xs text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element
              data-xt-group="cat-0">
              Back
            </button>
          </div>

          <nav className="xt-list flex-col">
            <a
              href="#"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              Link 0
            </a>
            <a
              href="#"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          className="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-toggle-target
          data-xt-group="cat-0b">
          <div className="xt-h5  flex items-center justify-between">
            <div>Category 0b</div>
            <button
              type="button"
              className="xt-button py-1.5 px-2.5 text-3xs text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element
              data-xt-group="cat-0">
              Back
            </button>
          </div>

          <nav className="xt-list flex-col">
            <a
              href="#"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              Link 0
            </a>
            <a
              href="#"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          className="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-toggle-target
          data-xt-group="cat-1">
          <div className="xt-h5  flex items-center justify-between">
            <div>Category 1</div>
            <button
              type="button"
              className="xt-button py-1.5 px-2.5 text-3xs text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-toggle-element
              data-xt-group="initial">
              Back
            </button>
          </div>

          <nav className="xt-list flex-col">
            <a
              href="#"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              Link 0
            </a>
            <a
              href="#"
              className="xt-button w-full justify-start text-left py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              Link 1
            </a>
          </nav>
        </nav>
      </div>
    </div>
  )
}
