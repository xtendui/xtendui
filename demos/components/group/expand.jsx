import React, { useRef, useEffect } from 'react'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--group-expand-react" ref={ref}>
      <form className="text-sm">
        <div className="xt-list max-w-sm">
          <div className="inline-flex flex-auto">
            <button
              type="submit"
              className="xt-button py-2.5 px-3.5 text-sm rounded-l-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
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

          <a
            href="/"
            className="xt-button py-2.5 px-3.5 text-sm rounded-r-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
            Search
          </a>
        </div>
      </form>
    </div>
  )
}

/* mountExpand */

const mountExpand = ({ ref }) => {
  // vars

  const list = ref.querySelector('.xt-list')

  // on

  list.querySelector('input').addEventListener('focus', () => {
    list.classList.add('expand')
    list.classList.add('expand-focus')
  })

  list.addEventListener('mouseenter', () => {
    list.classList.add('expand-enter')
  })

  // off

  list.querySelector('input').addEventListener('blur', () => {
    list.classList.remove('expand-focus')
    if (!list.classList.contains('expand-enter')) {
      list.classList.remove('expand')
    }
  })

  list.addEventListener('mouseleave', () => {
    list.classList.remove('expand-enter')
    if (!list.classList.contains('expand-focus')) {
      list.classList.remove('expand')
    }
  })

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountExpand = mountExpand({ ref })

  // unmount

  return () => {
    unmountExpand()
  }
}
