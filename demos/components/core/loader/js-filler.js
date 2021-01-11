import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--loader-js-filler',
  mount: ({ object }) => {
    // init

    const loaderTimeout = () => {
      const filler = object.querySelectorAll('.filler span:nth-child(1)')
      if (object.dataset.loaderTimeout) {
        clearTimeout(object.dataset.loaderTimeout)
        delete object.dataset.loaderTimeout
        Xt.animOn(object)
        gsap.set(filler, { width: 0 })
        gsap.to(filler, { width: '100%', duration: 1, ease: 'linear' }).eventCallback('onComplete', loaderTimeout)
      } else {
        Xt.animOff(object)
        object.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)
      }
    }

    object.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)

    // unmount

    return () => {
      clearTimeout(object.dataset.loaderTimeout)
    }
  },
})
