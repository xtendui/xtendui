import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--collapse-initial-react" ref={ref}>
      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12" data-xt-toggle="{ collapseHeight: 'targets', duration: 500 }">
          <div className="mb-6 text-lg *** max-h-20 overflow-hidden transition-all ***" data-xt-toggle-target>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
            vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at magna
            aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia orci at,
            pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo
            hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo eget, iaculis
            non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at. Cras et facilisis
            leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla quis tempus risus, a
            aliquet ligula.
          </div>

          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 group"
            data-xt-toggle-element>
            <span className="group-on:hidden"> Show more </span>
            <span className="hidden group-on:block"> Show less </span>
          </button>
        </div>

        <div className="w-full md:w-6/12" data-xt-toggle="{ collapseHeight: 'targets', duration: 500 }">
          <div
            className="mb-6 text-lg *** max-h-20 overflow-hidden transition-all *** *** on ***"
            data-xt-toggle-target>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis purus odio, et dictum felis
            vestibulum sed. Morbi sodales ex sed dui posuere, a tempor purus consectetur. Curabitur vitae leo at magna
            aliquam pellentesque. Nam sed neque in risus volutpat maximus. Sed vitae enim vehicula, lacinia orci at,
            pretium nulla. Cras tincidunt quis ipsum et luctus. Cras venenatis, justo in euismod lacinia, urna leo
            hendrerit enim, sit amet gravida nunc lectus id augue. Nullam dolor nibh, commodo at commodo eget, iaculis
            non diam. Ut at rhoncus massa. Sed placerat tincidunt nisl, eu consequat neque pretium at. Cras et facilisis
            leo. Mauris justo elit, porttitor sed pellentesque vitae, imperdiet nec ante. Nulla quis tempus risus, a
            aliquet ligula.
          </div>

          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 group"
            data-xt-toggle-element>
            <span className="group-on:hidden"> Show more </span>
            <span className="hidden group-on:block"> Show less </span>
          </button>
        </div>

        <div className="w-full md:w-6/12" data-xt-toggle="{ collapseHeight: 'targets', duration: 500 }">
          <div className="mb-6 text-lg *** max-h-20 overflow-hidden transition-all ***" data-xt-toggle-target>
            This target is not overflowing so the custom javascript hides the element.
          </div>

          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 group"
            data-xt-toggle-element>
            <span className="group-on:hidden"> Show more </span>
            <span className="hidden group-on:block"> Show less </span>
          </button>
        </div>
      </div>
    </div>
  )
}

/* mountToggles */

const mountToggles = ({ ref }) => {
  // mount granularly

  Xt.mount({
    root: ref,
    matches: '[data-xt-toggle]',
    mount: ({ ref }) => {
      return mountToggle({ ref })
    },
  })

  // unmount

  return () => {}
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref

  // init

  const init = () => {
    const self = Xt.get({ name: 'xt-toggle', el: toggle })
    // disable if not overflowing and not on
    for (const tr of self.targets) {
      if (tr.scrollHeight <= tr.clientHeight) {
        const els = self.getElements({ el: tr }).filter(x => !self.hasCurrent({ el: x }))
        if (els.length) {
          tr.style.maxHeight = 'none'
          for (const el of els) {
            el.classList.add('hidden')
          }
        }
      }
    }
  }

  toggle.addEventListener('init.xt.toggle', init)

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountToggles = mountToggles({ ref })

  // unmount

  return () => {
    unmountToggles()
  }
}
