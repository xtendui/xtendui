import React, { useRef, useCallback } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

export default function component() {
  const nodeRef = useRef(null)
  let unmount
  const ref = useCallback(ref => {
    if (nodeRef.current) {
      unmount(nodeRef.current)
    }
    nodeRef.current = ref
    if (ref !== null) {
      unmount = mount({ ref })
    }
  }, [])

  return (
    <div className="demo--slider-automaticscroll-react" ref={ref}>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 font-sans font-bold leading-tight tracking-tight normal-case text-lg rounded-md text-black bg-gray-200 text-center">
        Constant speed
      </div>

      <div className="xt-slider slider--text my-12">
        <div className="xt-slides">
          <ul className="xt-slides-inner xt-row xt-row-10">
            <div className="xt-slide xt-list xt-list-10 flex-nowrap whitespace-nowrap">
              <a href="#test-link-1" className="slide-text" title="item 1">
                <div className="xt-h4">One</div>
              </a>
              <a href="#test-link-2" className="slide-text" title="item 2">
                <div className="xt-h4">Two</div>
              </a>
              <a href="#test-link-3" className="slide-text" title="item 3">
                <div className="xt-h4">Three</div>
              </a>
              <a href="#test-link-4" className="slide-text" title="item 4">
                <div className="xt-h4">Four</div>
              </a>
              <a href="#test-link-5" className="slide-text" title="item 5">
                <div className="xt-h4">Five</div>
              </a>
              <a href="#test-link-6" className="slide-text" title="item 6">
                <div className="xt-h4">Six</div>
              </a>
              <a href="#test-link-7" className="slide-text" title="item 7">
                <div className="xt-h4">Seven</div>
              </a>
              <a href="#test-link-8" className="slide-text" title="item 8">
                <div className="xt-h4">Eight</div>
              </a>
              <a href="#test-link-9" className="slide-text" title="item 9">
                <div className="xt-h4">Nine</div>
              </a>
              <a href="#test-link-10" className="slide-text" title="item 10">
                <div className="xt-h4">Ten</div>
              </a>
              <a href="#test-link-11" className="slide-text" title="item 11">
                <div className="xt-h4">Eleven</div>
              </a>
              <a href="#test-link-12" className="slide-text" title="item 12">
                <div className="xt-h4">Twelve</div>
              </a>
            </div>
          </ul>
        </div>

        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-transparent to-white"></div>

        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white"></div>

        <nav className="xt-slider-pagination hidden">
          <button
            type="button"
            className="xt-button button-default xt-ignore"
            data-xt-pag
            title="Slide xt-num"></button>
        </nav>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 font-sans font-bold leading-tight tracking-tight normal-case text-lg rounded-md text-black bg-gray-200 text-center">
        Images
      </div>

      <div className="xt-slider slider--img my-12">
        <div className="xt-slides">
          <ul className="xt-slides-inner xt-row xt-row-px">
            <div className="xt-slide xt-list xt-list-px flex-nowrap">
              <a href="#test-link-1" className="slide-asset" title="item 0">
                <div className="xt-media-container bg-gray-600 xt-ratio-37.5">
                  <div className="xt-media-inner">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
              </a>
              <a href="#test-link-2" className="slide-asset" title="item 1">
                <div className="xt-media-container bg-gray-600 xt-ratio-37.5">
                  <div className="xt-media-inner">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
              </a>
              <a href="#test-link-3" className="slide-asset" title="item 2">
                <div className="xt-media-container bg-gray-600 xt-ratio-37.5">
                  <div className="xt-media-inner">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
              </a>
              <a href="#test-link-4" className="slide-asset" title="item 3">
                <div className="xt-media-container bg-gray-600 xt-ratio-37.5">
                  <div className="xt-media-inner">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
              </a>
              <a href="#test-link-5" className="slide-asset" title="item 4">
                <div className="xt-media-container bg-gray-600 xt-ratio-37.5">
                  <div className="xt-media-inner">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
              </a>
              <a href="#test-link-6" className="slide-asset" title="item 5">
                <div className="xt-media-container bg-gray-600 xt-ratio-37.5">
                  <div className="xt-media-inner">
                    <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="eager" alt="" />
                  </div>
                </div>
              </a>
            </div>
          </ul>
        </div>

        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-transparent to-white"></div>

        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white"></div>

        <nav className="xt-slider-pagination hidden">
          <button
            type="button"
            className="xt-button button-default xt-ignore"
            data-xt-pag
            title="Slide xt-num"></button>
        </nav>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountSliders = mountSliders({ ref })

  // unmount

  return () => {
    unmountSliders()
  }
}

/* mountSliders */

const mountSliders = ({ ref }) => {
  const sliders = ref.querySelectorAll('.xt-slider')
  const unmounts = []

  for (const slider of sliders) {
    // vars

    const timeScaleTimeOn = 0.75
    const timeScaleEaseOn = 'quint.in'
    const timeScaleTimeOff = 0.75
    const timeScaleEaseOff = 'quint.out'

    // slider

    let self = new Xt.Slider(slider, {
      align: 'left',
      jump: false,
      drag: {
        manual: true,
        wrap: true,
      },
    })

    // on

    const on = e => {
      const tr = e.target
      // check because of event propagation
      if (self.targets.includes(tr)) {
        if (self.intial || self.wrap) {
          // reset dragging position
          gsap.killTweensOf(self.dragger)
          gsap.set(self.dragger, { x: self.detail.dragPos })
          if (self.intial) {
            self.goToNext()
          }
        } else {
          // time depending on target and dragger width
          const slideWidth = tr.offsetWidth
          let time = (slideWidth * 15) / 1000 // constant speed
          // end dragging position
          gsap.killTweensOf(self.dragger)
          gsap
            .to(self.dragger, {
              x: self.detail.dragPos,
              duration: time,
              ease: 'linear',
            })
            .eventCallback('onComplete', () => {
              // wrap before changing slide if needed, needed with drag.wrap = true
              self.eventWrap()
              requestAnimationFrame(() => {
                // go to next slide
                self.goToNext()
              })
            })
        }
      }
    }

    self.object.addEventListener('on.xt.slider', on, true)

    // pause

    const pause = () => {
      // pause tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, {
          timeScale: 0,
          duration: timeScaleTimeOff,
          ease: timeScaleEaseOff,
        })
      }
    }

    self.object.addEventListener('mouseenter', pause, true)
    addEventListener('blur', pause)

    // resume

    const resume = () => {
      // resume tween
      const tweens = gsap.getTweensOf(self.dragger)
      for (const tween of tweens) {
        gsap.to(tween, {
          timeScale: 1,
          duration: timeScaleTimeOn,
          ease: timeScaleEaseOn,
        })
      }
    }

    self.object.addEventListener('mouseleave', resume, true)
    addEventListener('focus', resume)

    // unmount

    unmounts.push(() => {
      pause()
      removeEventListener('blur', pause)
      removeEventListener('focus', resume)
      self.destroy()
      self = null
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
