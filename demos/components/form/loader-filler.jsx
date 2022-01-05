import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--form-loader-filler-react" ref={ref}>
      <script type="text/x-template" data-node-loader-template>
        <div className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-30">
          <span className="xt-filler absolute inset-0 m-auto h-1 left-1/4 right-1/4">
            <span className="block absolute bg-current opacity-25 w-full h-full"></span>
            <span className="block absolute bg-current h-full animate-xt-filler-x"></span>
          </span>
        </div>
      </script>

      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="block mb-3 font-medium text-gray-700"> Email </label>
            <input
              type="email"
              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Email"
              placeholder="Email"
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              submit
            </button>
          </div>
        </div>
      </form>

      <form className="text-sm mt-12">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="block mb-3 font-medium text-gray-700"> Email </label>
            <input
              type="email"
              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Email"
              placeholder="Email"
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
              submit
            </button>
          </div>
        </div>
      </form>

      <form className="text-sm mt-12 *** xt-loadable ***">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="block mb-3 font-medium text-gray-700"> Email </label>
            <input
              type="email"
              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Email"
              placeholder="Email"
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="xt-button *** xt-loadable-ignore *** py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

/* mountFormLoaders */

const mountFormLoaders = ({ ref }) => {
  // vars

  const loadables = ref.querySelectorAll('button[type="submit"], .xt-loadable')
  const loaderTemplate = ref.querySelector('[data-node-loader-template]')

  for (const loadable of loadables) {
    // vars

    const form = loadable.form || loadable.closest('form')

    // submit

    const submit = () => {
      loadable.classList.add('xt-loading')
    }

    if (!loadable.classList.contains('xt-loadable-ignore')) {
      form.addEventListener('submit', submit)
    }

    // reset
    // if you want to deactivate xt-loading on ajax use form.dispatchEvent(new CustomEvent('reset'))

    const reset = () => {
      loadable.classList.remove('xt-loading')
    }

    if (!loadable.classList.contains('xt-loadable-ignore')) {
      form.addEventListener('reset', reset)
      addEventListener('pageshow', reset)
    }

    // inject

    if (loadable.classList.contains('xt-loadable')) {
      loadable.append(Xt.node({ str: loaderTemplate.innerHTML }))
    } else {
      loadable.classList.add('xt-loadable')
      const text = loadable.innerHTML
      loadable.innerHTML = ''
      loadable.append(Xt.node({ str: `<span class="xt-loadable-content"></span>` }))
      loadable.append(Xt.node({ str: loaderTemplate.innerHTML }))
      const content = loadable.querySelector('.xt-loadable-content')
      content.innerHTML = Xt.sanitize(text)
    }
  }

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountFormLoaders = mountFormLoaders({ ref })

  // unmount

  return () => {
    unmountFormLoaders()
  }
}
