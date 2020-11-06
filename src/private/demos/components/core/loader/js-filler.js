import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--loader-js-filler',
  mount: object => {
    // init

    const loaderTimeout = () => {
      const filler = object.querySelectorAll('.filler span:nth-child(1)')
      if (object.dataset.loaderTimeout) {
        clearTimeout(object.dataset.loaderTimeout)
        delete object.dataset.loaderTimeout
        object.classList.remove('hidden')
        requestAnimationFrame(() => {
          object.classList.add('active')
        })
        gsap.set(filler, { width: 0 })
        gsap.to(filler, { width: '100%', duration: 1000, ease: 'linear' }).eventCallback('onComplete', loaderTimeout)
      } else {
        delete object.dataset.loaderActive
        object.classList.remove('active')
        Xt.animTimeout(object, () => {
          object.classList.add('hidden')
          object.dataset.loaderTimeout = setTimeout(loaderTimeout, 3000)
        })
      }
    }

    object.dataset.loaderTimeout = setTimeout(loaderTimeout, 3000)

    // unmount

    return () => {
      clearTimeout(object.dataset.loaderTimeout)
    }
  },
})
