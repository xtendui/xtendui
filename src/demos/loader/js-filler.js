import { Xt } from 'xtend-library'
import 'xtend-library/src/vars.js'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.demo--loader-js-filler',
  mount: object => {
    // vars

    const fillerTime = Xt.vars.timeBig
    const fillerEase = 'linear'

    // init

    function loaderTimeout() {
      const filler = object.querySelectorAll('.filler span:nth-child(1)')
      object.dataset.loaderActive = object.dataset.loaderActive === 'true' ? 'false' : 'true'
      if (object.dataset.loaderActive === 'true') {
        object.classList.add('active')
        object.classList.remove('out')
        gsap.set(filler, { width: 0 })
        gsap.to(filler, { width: '100%', duration: fillerTime, ease: fillerEase })
        setTimeout(loaderTimeout, fillerTime)
      } else {
        object.classList.remove('active')
        object.classList.add('out')
        Xt.animTimeout(object, loaderTimeout)
      }
    }

    loaderTimeout()
  },
})
