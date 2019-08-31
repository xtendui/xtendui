import { TweenMax } from 'gsap/TweenMax'
import { Xt } from 'xtend-library'

/**
 * .demo--loader--js-filler
 */

Xt.mount.push({
  matches: '.demo--loader--js-filler',
  fnc: function mount (object) {
    // vars

    const time = 2000
    const easeLinear = Power0.easeNone

    // timeout
    function loaderTimeout () {
      const filler = object.querySelectorAll('.filler span:nth-child(1)')
      object.dataset.loaderActive = object.dataset.loaderActive === 'true' ? 'false' : 'true'
      if (object.dataset.loaderActive === 'true') {
        object.classList.add('active')
        object.classList.remove('out')
        TweenMax.set(filler, { width: 0 })
        TweenMax.to(filler, time / 1000, { width: '100%', ease: easeLinear })
        setTimeout(loaderTimeout, time)
      } else {
        object.classList.remove('active')
        object.classList.add('out')
        Xt.animTimeout(object, loaderTimeout)
      }
    }

    loaderTimeout()
  }
})
