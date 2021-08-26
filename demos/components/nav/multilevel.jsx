import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div className="demo--multilevel-react">
      <div className="xt-card rounded-2xl text-white xt-links-inverse bg-primary-500">
        <div className="relative" data-xt-toggle="{ min: 1, duration: 500, queue: false }">
          <nav
            className="*** p-6 sm:p-8 text-sm off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
            data-xt-toggle-target
            data-xt-group="initial">
            <div className="xt-h5 flex items-center justify-between">
              <div>Menu</div>
              <button type="button" data-xt-toggle-element data-xt-group="initial"></button>
            </div>

            <nav className="xt-list flex-col">
              <button
                type="button"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                data-xt-toggle-element
                data-xt-group="cat-0">
                Category 0{' '}
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <button
                type="button"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                data-xt-toggle-element
                data-xt-group="cat-1">
                Category 1{' '}
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <a
                href="#"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Link 0
              </a>
              <a
                href="#"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Link 1
              </a>
            </nav>
          </nav>

          <nav
            className="*** p-6 sm:p-8 text-sm off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
            data-xt-toggle-target
            data-xt-group="cat-0">
            <div className="xt-h5  flex items-center justify-between">
              <div>Category 0</div>
              <button
                type="button"
                className="xt-button py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                data-xt-toggle-element
                data-xt-group="initial">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon mr-2 text-lg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>{' '}
                Back
              </button>
            </div>

            <nav className="xt-list flex-col">
              <button
                type="button"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                data-xt-toggle-element
                data-xt-group="cat-0a">
                Category 0a{' '}
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <button
                type="button"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                data-xt-toggle-element
                data-xt-group="cat-0b">
                Category 0b{' '}
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <a
                href="#"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Link 0
              </a>
              <a
                href="#"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Link 1
              </a>
            </nav>
          </nav>

          <nav
            className="*** p-6 sm:p-8 text-sm off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
            data-xt-toggle-target
            data-xt-group="cat-0a">
            <div className="xt-h5  flex items-center justify-between">
              <div>Category 0a</div>
              <button
                type="button"
                className="xt-button py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                data-xt-toggle-element
                data-xt-group="cat-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon mr-2 text-lg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>{' '}
                Back
              </button>
            </div>

            <nav className="xt-list flex-col">
              <a
                href="#"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Link 0
              </a>
              <a
                href="#"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Link 1
              </a>
            </nav>
          </nav>

          <nav
            className="*** p-6 sm:p-8 text-sm off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
            data-xt-toggle-target
            data-xt-group="cat-0b">
            <div className="xt-h5  flex items-center justify-between">
              <div>Category 0b</div>
              <button
                type="button"
                className="xt-button py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                data-xt-toggle-element
                data-xt-group="cat-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon mr-2 text-lg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>{' '}
                Back
              </button>
            </div>

            <nav className="xt-list flex-col">
              <a
                href="#"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Link 0
              </a>
              <a
                href="#"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Link 1
              </a>
            </nav>
          </nav>

          <nav
            className="*** p-6 sm:p-8 text-sm off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
            data-xt-toggle-target
            data-xt-group="cat-1">
            <div className="xt-h5  flex items-center justify-between">
              <div>Category 1</div>
              <button
                type="button"
                className="xt-button py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
                data-xt-toggle-element
                data-xt-group="initial">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon mr-2 text-lg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>{' '}
                Back
              </button>
            </div>

            <nav className="xt-list flex-col">
              <a
                href="#"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Link 0
              </a>
              <a
                href="#"
                className="xt-button w-full justify-between text-left py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                Link 1
              </a>
            </nav>
          </nav>
        </div>
      </div>
    </div>
  )
}
