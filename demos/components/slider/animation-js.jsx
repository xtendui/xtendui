import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--slider-animation-js-react" ref={ref}>
      <div className="xt-slider">
        <div className="p-4 md:p-6 lg:p-8">
          <div
            className="xt-slides transition ease-out-expo duration-300 on:ease-out-quint on:duration-1000 xt-row xt-row-4"
            data-xt-slider-dragger>
            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div data-node-target-content>
                <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                  <div className="xt-h4">1</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div data-node-target-content>
                <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                  <div className="xt-h4">2</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div data-node-target-content>
                <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                  <div className="xt-h4">3</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-full group" data-xt-slider-target>
              <div data-node-target-content>
                <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                  <div className="xt-h4">4</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div data-node-target-content>
                <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                  <div className="xt-h4">5</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div data-node-target-content>
                <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                  <div className="xt-h4">6</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div data-node-target-content>
                <div className="xt-card text-gray-900 xt-links-default rounded-md bg-gray-100 border-2 border-transparent transition group-in:border-gray-200 p-8 text-base text-center">
                  <div className="xt-h4">7</div>
                </div>
              </div>
            </div>
          </div>

          <nav
            aria-label="Slider Navigation"
            className="w-full xt-list xt-list-2 pt-4 items-center justify-center"
            data-xt-slider-pagination>
            <button
              type="button"
              className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-gray-900 font-medium leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
              data-xt-slider-element
              title="Slide xt-num"></button>
          </nav>
        </div>
      </div>
    </div>
  )
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')

  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetXOn = 192
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetXOff = 192

  // init

  /***/
  let self = new Xt.Slider(slider, {
    wrap: true,
    duration: 500,
  })
  /***/

  // setup

  /***/
  const init = () => {
    const trs = self.targets.filter(x => !self.hasCurrent({ el: x }))
    for (const tr of trs) {
      // content
      const content = tr.querySelector('[data-node-target-content]')
      gsap.set(content, {
        opacity: 0,
      })
    }
  }

  self.container.addEventListener('init.xt.slider', init, true) // useCapture event propagation
  /***/

  // on

  /***/
  const on = e => {
    const tr = e.target
    // useCapture event propagation check
    if (self.targets.includes(tr)) {
      // content
      const content = tr.querySelector('[data-node-target-content]')
      gsap.killTweensOf(content)
      gsap.set(content, {
        x: self.direction * targetXOn,
      })
      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }
  }

  self.container.addEventListener('on.xt.slider', on, true) // useCapture event propagation
  /***/

  // off

  /***/
  const off = e => {
    const tr = e.target
    // useCapture event propagation check
    if (self.targets.includes(tr)) {
      // content
      const content = tr.querySelector('[data-node-target-content]')
      gsap.killTweensOf(content)
      gsap.to(content, {
        x: -self.direction * targetXOff,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }
  }

  self.container.addEventListener('off.xt.slider', off, true) // useCapture event propagation
  /***/

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountSlider = mountSlider({ ref })

  // unmount

  return () => {
    unmountSlider()
  }
}
