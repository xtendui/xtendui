import React from 'react'
const spinner = require('components/snippets/spinner').default

class Component extends React.Component {
  render() {
    return (
      <div className="slider demo--test-react-iframe">
        <div className="loader loader--spinner loader--mouse loader--js">
          <span className="spinner">
            ${spinner({})}
          </span>
        </div>

        <div className="slides">
          <ul className="slides-inner">

            <li className="slide col-6 col-4--sm">
              <div className="slide-inner">

                <div className="card card--slide text-align-center">
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">1</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="slide col-6 col-4--sm">
              <div className="slide-inner">

                <div className="card card--slide text-align-center">
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">2</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="slide col-6 col-4--sm">
              <div className="slide-inner">

                <div className="card card--slide text-align-center">
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">3</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="slide col-6 col-4--sm">
              <div className="slide-inner">

                <div className="card card--slide text-align-center">
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">4</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="slide col-6 col-4--sm">
              <div className="slide-inner">

                <div className="card card--slide text-align-center">
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">5</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="slide col-12">
              <div className="slide-inner">

                <div className="card card--slide text-align-center"
                     style={{ height: '15rem' }}>
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">6</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

          </ul>
        </div>

        <nav className="slider-pagination">
          <button type="button" className="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
            <span className="loader loader--y loader--js">
              <span className="filler">
                <span></span><span></span>
              </span>
            </span>
          </button>
        </nav>

      </div>
    )
  }
}

export default Component

/**
 * Logic
 */

import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import 'xtend-library/src/extensions/slider/slider.js'
import 'xtend-library/src/extensions/animation/MouseFollow.js'
import { TweenMax, TimelineMax } from 'gsap/TweenMax'

Xt.mount.push({
  matches: '.demo--test-react-iframe',
  mount: function(object) {
    // vars

    const timeHide = Xt.vars.timeSmall
    const easeLinear = Xt.vars.easeLinear

    // init

    let self = new Xt.Slider(object, {
      auto: {
        time: 4000,
        pause: '[data-xt-pag]',
      },
    })

    // auto

    const eventAutoStart = function() {
      // on slider
      const spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle')
      const timeline = new TimelineMax()
      timeline.to(spinner, timeHide / 1000, { strokeDashoffset: 628, ease: easeLinear, autoRound: false })
      timeline.to(spinner, self.options.auto.time / 1000 - timeHide / 1000, {
        strokeDashoffset: 0,
        ease: easeLinear,
        autoRound: false,
      })
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.set(filler, { height: 0, top: '100%' })
          TweenMax.to(filler, self.options.auto.time / 1000, { height: '100%', top: 0, ease: easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.set(filler, { width: 0, left: 0 })
          TweenMax.to(filler, self.options.auto.time / 1000, { width: '100%', left: 0, ease: easeLinear })
        }
      }
    }

    const eventAutoStop = function() {
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, { height: 0, top: 0, ease: easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, { width: 0, left: '100%', ease: easeLinear })
        }
      }
    }

    const eventAutoPause = function() {
      // on slider
      const spinner = self.object.querySelectorAll('.spinner svg:nth-child(1) circle')
      TweenMax.to(spinner, timeHide / 1000, { strokeDashoffset: 628, ease: easeLinear, autoRound: false })
      // on elements
      const elements = self.elements.filter(x => self.hasCurrent(x))
      for (const element of elements) {
        const fillers = element.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, { height: 0, top: '100%', ease: easeLinear })
        }
      }
      // on targets
      const targets = self.targets.filter(x => self.hasCurrent(x))
      for (const target of targets) {
        const fillers = target.querySelectorAll('.filler span:nth-child(1)')
        for (const filler of fillers) {
          TweenMax.to(filler, timeHide / 1000, { width: 0, left: 0, ease: easeLinear })
        }
      }
    }

    self.object.addEventListener('start.xt.auto', eventAutoStart)
    self.object.addEventListener('stop.xt.auto', eventAutoStop)
    self.object.addEventListener('pause.xt.auto', eventAutoPause)

    // MouseFollow

    const mouseFollowObject = document.querySelector('.loader--mouse')
    const mouseFollowContainer = object

    let mouseFollow = new Xt.MouseFollow(mouseFollowObject, mouseFollowContainer, {
      mouseCheck: function() {
        return !this.object.classList.contains('loader--disable') || this.object.classList.contains('loader--js')
      },
    })

    // unmount

    return function unmount() {
      self.object.removeEventListener('start.xt.auto', eventAutoStart)
      self.object.removeEventListener('stop.xt.auto', eventAutoStop)
      self.object.removeEventListener('pause.xt.auto', eventAutoPause)
      self.destroy()
      self = null
      mouseFollow.destroy()
      mouseFollow = null
    }
  },
})
