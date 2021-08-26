import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--slider-status-react" ref={ref}>
      <div className="xt-slider" data-xt-slider="{ matches: { '(hover: none)': { disabled: true } } }">
        <div className="p-4 md:p-6 lg:p-8">
          {/* switcher for demo purpose remove this */}
          <form className="text-sm mb-8">
            <label className="cursor-pointer inline-flex items-baseline">
              <input
                type="checkbox"
                className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
                defaultChecked
              />
              <span className="ml-4">Group Same</span>
            </label>
          </form>

          <div
            className="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
            data-xt-slider-dragger>
            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">1</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">2</div>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">3</div>
              </div>
            </div>

            <div className="xt-slide w-full group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">4</div>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">5</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">6</div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="xt-card text-gray-900 xt-links-default rounded-md p-8 text-base text-center bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                <div className="xt-h4">7</div>
              </div>
            </div>
          </div>

          <div className="mt-6 mx-auto px-6 max-w-4xl" data-xt-slider-hide-disabled>
            <div className="relative">
              <div
                className="absolute left-0 top-0 h-0 border-t border-b border-black bg-black transition-all ease-in-out"
                data-xt-slider-status-current></div>
              <div
                className="h-0 w-full border-t border-b border-black border-opacity-5"
                data-xt-slider-status-total></div>
            </div>
          </div>

          <nav className="hidden" data-xt-slider-pagination>
            <button type="button" className="xt-button hidden" data-xt-slider-element></button>
          </nav>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountStatus = mountStatus({ ref })
  const unmountSwitcher = mountSwitcher({ ref })

  // unmount

  return () => {
    unmountStatus()
    unmountSwitcher()
  }
}

/* mountStatus */

const mountStatus = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const self = Xt.get({ name: 'xt-slider', el: slider })
  if (!self) return () => {}
  const current = slider.querySelector('[data-xt-slider-status-current]')
  const total = slider.querySelector('[data-xt-slider-status-total]')

  // change

  const change = e => {
    // check because of event propagation
    if (e.target === slider || self.targets.includes(e.target)) {
      // width
      const trs = self.targets.filter(x => self.hasCurrent({ el: x, same: window.demogroupedstatus })) // switcher window.demogroupedstatus true or false
      if (!trs.length) return
      let currentSizeContent = 0
      const left = trs[0].offsetLeft
      for (const tr of trs) {
        currentSizeContent += tr.offsetWidth
      }
      // set
      const totalWidth = total.offsetWidth
      const currentWidth = (currentSizeContent * totalWidth) / self.drag.sizeContent
      const currentLeft = (left * totalWidth) / self.drag.sizeContent
      current.style.width = `${currentWidth}px`
      current.style.left = `${currentLeft}px`
    }
  }

  slider.addEventListener('on.xt.slider', change, true)
  slider.addEventListener('init.xt.slider', change)
  slider.addEventListener('status.xt.slider', change)
  addEventListener('resize', change)

  // unmount

  return () => {
    removeEventListener('resize', change)
  }
}

/* mountSwitcher */

const mountSwitcher = ({ ref }) => {
  /* switcher for demo purpose remove this */

  // vars

  const slider = ref.querySelector('.xt-slider')
  const switcher = ref.querySelector('input[type="checkbox"]')

  // change

  const change = () => {
    if (switcher.checked) {
      window.demogroupedstatus = true
    } else {
      window.demogroupedstatus = false
    }
    slider.dispatchEvent(new CustomEvent('status.xt.slider'))
  }

  switcher.addEventListener('change', change)

  requestAnimationFrame(() => {
    change()
  })

  // unmount

  return () => {}
}
