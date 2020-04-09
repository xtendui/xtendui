import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--loader-js-spinner',
  mount: object => {
    // vars

    const spinnerTime = Xt.vars.timeBig
    const spinnerEase = 'linear'

    // init

    function loaderTimeout() {
      const spinner = object.querySelectorAll('.spinner svg:nth-child(1) circle')
      object.dataset.loaderActive = object.dataset.loaderActive === 'true' ? 'false' : 'true'
      if (object.dataset.loaderActive === 'true') {
        Xt.animOn(object)
        gsap.set(spinner, { strokeDashoffset: 628 })
        gsap.to(spinner, { strokeDashoffset: 0, duration: spinnerTime, ease: spinnerEase, autoRound: false })
        setTimeout(loaderTimeout, spinnerTime)
      } else {
        Xt.animOff(object)
        Xt.animTimeout(object, loaderTimeout)
      }
    }

    loaderTimeout()
  },
})
