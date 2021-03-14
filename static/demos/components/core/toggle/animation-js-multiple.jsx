import React from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/core/toggle'
import gsap from 'gsap'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
    this.init()
  }

  componentWillUnmount() {
    this.toggle.destroy()
    this.toggle = null
  }

  init() {
    this.toggle = new Xt.Toggle(this.object.querySelector('.demo--toggle-animation-js-multiple'), {
      duration: 500,
    })
    for (const target of this.toggle.targets) {
      target.addEventListener('on.xt.toggle', this.eventOn.bind(this))
      target.addEventListener('off.xt.toggle', this.eventOff.bind(this))
    }
  }

  eventOn(e) {
    const tr = e.target
    const targetTimeOn = 0.5
    const targetEaseOn = 'quint.out'
    // target
    gsap.killTweensOf(tr)
    gsap.set(tr, {
      x: -this.toggle.direction * 15,
      opacity: 0,
    })
    gsap.to(tr, {
      x: 0,
      opacity: 1,
      duration: targetTimeOn,
      ease: targetEaseOn,
    })
  }

  eventOff(e) {
    const tr = e.target
    const targetTimeOff = 0.5
    const targetEaseOff = 'quint.out'
    // target
    gsap.killTweensOf(tr)
    gsap.to(tr, {
      x: this.toggle.direction * 15,
      opacity: 0,
      duration: targetTimeOff,
      ease: targetEaseOff,
    })
  }

  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center demo--toggle-animation-js-multiple">
          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 0
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 1
          </button>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 0</div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 1</div>
        </div>
      </div>
    )
  }
}

export default Demo
