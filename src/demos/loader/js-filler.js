import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo_loader-js-filler',
  mount: function(object) {
    // init

    function loaderTimeout() {
      const filler = object.querySelectorAll('.filler span:nth-child(1)')
      object.dataset.loaderActive = object.dataset.loaderActive === 'true' ? 'false' : 'true'
      if (object.dataset.loaderActive === 'true') {
        object.classList.add('active')
        object.classList.remove('out')
        gsap.set(filler, { width: 0 })
        gsap.to(filler, { width: '100%', duration: Xt.vars.timeGiant, ease: Xt.vars.easeLinear })
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
