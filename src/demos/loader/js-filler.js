import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--loader--js-filler',
  mount: function(object) {
    // vars

    const time = Xt.vars.timeGiant
    const easeLinear = Xt.vars.easeLinear

    // timeout
    function loaderTimeout() {
      const filler = object.querySelectorAll('.filler span:nth-child(1)')
      object.dataset.loaderActive = object.dataset.loaderActive === 'true' ? 'false' : 'true'
      if (object.dataset.loaderActive === 'true') {
        object.classList.add('active')
        object.classList.remove('out')
        gsap.set(filler, { width: 0 })
        gsap.to(filler, { duration: time / 1000, width: '100%', ease: easeLinear })
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
