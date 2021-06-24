import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--collapse-text-react" ref={ref}>
      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <div
            className="mb-6 text-lg *** max-h-20 overflow-hidden transition-all ***"
            id="demo--collapse-text-target-0">
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
            className="xt-button *** button--collapse *** text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500 group"
            data-xt-toggle="{ targets: '#demo--collapse-text-target-0', collapseHeight: 'targets', duration: 500 }">
            <span className="group-on:hidden"> Show more </span>
            <span className="hidden group-on:block"> Show less </span>
          </button>
        </div>

        <div className="w-full md:w-6/12">
          <div
            className="mb-6 text-lg *** max-h-20 overflow-hidden transition-all *** *** on ***"
            id="demo--collapse-text-target-1">
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
            className="xt-button *** button--collapse *** text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500 group"
            data-xt-toggle="{ targets: '#demo--collapse-text-target-1', collapseHeight: 'targets', duration: 500 }">
            <span className="group-on:hidden"> Show more </span>
            <span className="hidden group-on:block"> Show less </span>
          </button>
        </div>

        <div className="w-full md:w-6/12">
          <div
            className="mb-6 text-lg *** max-h-20 overflow-hidden transition-all ***"
            id="demo--collapse-text-target-2">
            This target is not overflowing so the custom javascript hides the element.
          </div>

          <button
            type="button"
            className="xt-button *** button--collapse *** text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500 group"
            data-xt-toggle="{ targets: '#demo--collapse-text-target-2', collapseHeight: 'targets', duration: 500 }">
            <span className="group-on:hidden"> Show more </span>
            <span className="hidden group-on:block"> Show less </span>
          </button>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountCollapse = mountCollapse({ ref })

  // unmount

  return () => {
    unmountCollapse()
  }
}

/* mountCollapse */

const mountCollapse = ({ ref }) => {
  // vars

  const buttons = ref.querySelectorAll('.button--collapse')

  // disable if not overflowing and not on

  for (const button of buttons) {
    const self = Xt.get('xt-toggle', button)
    for (const tr of self.targets) {
      if (tr.scrollHeight <= tr.clientHeight) {
        const elements = self.getElements(tr).filter(x => !self.hasCurrent(x))
        if (elements.length) {
          tr.style.maxHeight = 'none'
          for (const el of elements) {
            el.classList.add('hidden')
          }
        }
      }
    }
  }

  // unmount

  return () => {}
}
