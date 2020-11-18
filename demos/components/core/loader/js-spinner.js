import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--loader-js-spinner',
  mount: object => {
    // init

    const loaderTimeout = () => {
      const spinner = object.querySelectorAll('.spinner svg:nth-child(1) circle')
      if (object.dataset.loaderTimeout) {
        clearTimeout(object.dataset.loaderTimeout)
        delete object.dataset.loaderTimeout
        object.classList.remove('hidden')
        requestAnimationFrame(() => {
          object.classList.add('active')
        })
        gsap.set(spinner, { strokeDashoffset: 628 })
        gsap.to(spinner, { strokeDashoffset: 0, duration: 1, ease: 'linear', autoRound: false }).eventCallback('onComplete', loaderTimeout)
      } else {
        object.classList.remove('active')
        Xt.animTimeout(object, () => {
          object.classList.add('hidden')
          object.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)
        })
      }
    }

    object.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)

    // unmount

    return () => {
      clearTimeout(object.dataset.loaderTimeout)
    }
  },
})
