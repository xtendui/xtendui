import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

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
        gsap.set(spinner, { strokeDashoffset: 628 })
        gsap.to(spinner, { duration: time / 1000, strokeDashoffset: 0, ease: easeLinear, autoRound: false })
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
