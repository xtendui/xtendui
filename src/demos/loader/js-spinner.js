import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo_loader-js-spinner',
  mount: function(object) {
    // init

    function loaderTimeout() {
      const spinner = object.querySelectorAll('.spinner svg:nth-child(1) circle')
      object.dataset.loaderActive = object.dataset.loaderActive === 'true' ? 'false' : 'true'
      if (object.dataset.loaderActive === 'true') {
        object.classList.add('active')
        object.classList.remove('out')
        gsap.set(spinner, { strokeDashoffset: 628 })
        gsap.to(spinner, { duration: Xt.vars.timeGiant, strokeDashoffset: 0, ease: Xt.vars.easeLinear, autoRound: false })
        setTimeout(loaderTimeout, Xt.vars.timeGiant)
      } else {
        object.classList.remove('active')
        object.classList.add('out')
        Xt.animTimeout(object, loaderTimeout)
      }
    }

    loaderTimeout()
  },
})
