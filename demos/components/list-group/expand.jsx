import React, { useRef, useCallback } from 'react'

export default function demo() {
  const refCurrent = useRef(null)
  let unmount
  let ref = useCallback(ref => {
    if (refCurrent.current) {
      unmount(refCurrent.current)
    }
    refCurrent.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--group-expand-react" ref={ref}>
      <form className="text-sm">
        <div className="xt-list flex-nowrap max-w-sm">
          <div className="xt-list-inner flex-auto">
            <button
              type="button"
              className="xt-button text-xs py-2.5 px-3.5 rounded-l-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
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
              className="block w-full py-2 px-4 text-black placeholder-black placeholder-opacity-50 bg-gray-200 transition focus:bg-gray-300"
              aria-label="Search"
              placeholder="Seach Catalog"
            />
          </div>

          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-r-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountExpand = mountExpand({ ref })

  // unmount

  return () => {
    unmountExpand()
  }
}

/* mountExpand */

const mountExpand = ({ ref }) => {
  // vars

  const lists = ref.querySelectorAll('.xt-list')

  for (const list of lists) {
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
  }

  // unmount

  return () => {}
}
