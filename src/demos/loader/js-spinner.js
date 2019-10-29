import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import { TweenMax } from 'gsap/TweenMax'

/**
 * .demo--loader--js-spinner
 */

Xt.mount.push({
  matches: '.demo--loader--js-spinner',
  mount: function(object) {
    // vars

    const time = Xt.vars.timeGiant
    const easeLinear = Xt.vars.easeLinear

    // timeout

    function loaderTimeout() {
      const spinner = object.querySelectorAll('.spinner svg:nth-child(1) circle')
      object.dataset.loaderActive = object.dataset.loaderActive === 'true' ? 'false' : 'true'
      if (object.dataset.loaderActive === 'true') {
        object.classList.add('active')
        object.classList.remove('out')
        TweenMax.set(spinner, { strokeDashoffset: 628 })
        TweenMax.to(spinner, time / 1000, { strokeDashoffset: 0, ease: easeLinear, autoRound: false })
        setTimeout(loaderTimeout, time)
      } else {
        object.classList.remove('active')
        object.classList.add('out')
        Xt.animTimeout(object, loaderTimeout)
      }
    }

    loaderTimeout()
  },
})
