import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
import gsap from 'gsap'

export default function Demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--toggle-animation-js-react" ref={ref}>
      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button py-2 px-3 text-xs rounded-full font-medium leading-snug text-gray-900 bg-gray-100 transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
          data-xt-toggle-element>
          Toggle 1
        </button>

        <div
          className="off:hidden out:pointer-events-none bg-white rounded-full text-xs py-2 px-3 font-medium shadow w-full"
          data-xt-toggle-target>
          Target 0
        </div>

        <div
          className="off:hidden out:pointer-events-none bg-white rounded-full text-xs py-2 px-3 font-medium shadow w-full"
          data-xt-toggle-target>
          Target 1
        </div>
      </div>
    </div>
  )
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref
  const targetTimeOn = 0.5
  const targetEaseOn = 'quint.out'
  const targetXOn = 16
  const targetTimeOff = 0.5
  const targetEaseOff = 'quint.out'
  const targetXOff = 16

  // init

  let selfDestroy = () => {}
  new Xt.Toggle(toggle, {
    duration: 500,
  }).then(self => {
    // on

    const on = e => {
      const tr = e.target
      gsap.killTweensOf(tr)
      gsap.set(tr, {
        x: -self.direction * targetXOn,
        opacity: 0,
      })
      gsap.to(tr, {
        x: 0,
        opacity: 1,
        duration: targetTimeOn,
        ease: targetEaseOn,
      })
    }

    for (const tr of self.targets) {
      tr.addEventListener('on.xt.toggle', on)
    }

    // off

    const off = e => {
      const tr = e.target
      gsap.killTweensOf(tr)
      gsap.to(tr, {
        x: self.direction * targetXOff,
        opacity: 0,
        duration: targetTimeOff,
        ease: targetEaseOff,
      })
    }

    for (const tr of self.targets) {
      tr.addEventListener('off.xt.toggle', off)
    }

    // destroy

    selfDestroy = () => {
      self.destroy()
      self = null
    }
  })

  // unmount

  return () => {
    selfDestroy()
  }
}

/* mount */

const mount = ({ ref }) => {
  const unmountToggle = mountToggle({ ref })

  // unmount

  return () => {
    unmountToggle()
  }
}
