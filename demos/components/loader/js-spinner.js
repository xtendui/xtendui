import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--loader-js-spinner .xt-loader',
  mount: ({ ref }) => {
    // vars

    const loader = ref

    // init

    const loaderTimeout = () => {
      const spinner = loader.querySelectorAll('.xt-spinner svg:nth-child(2) circle')
      if (loader.dataset.loaderTimeout) {
        clearTimeout(loader.dataset.loaderTimeout)
        delete loader.dataset.loaderTimeout
        Xt.on({ el: loader })
        gsap.set(spinner, {
          strokeDashoffset: 628,
        })
        gsap
          .to(spinner, {
            strokeDashoffset: 0,
            duration: 1,
            ease: 'linear',
            autoRound: false,
          })
          .eventCallback('onComplete', loaderTimeout)
      } else {
        Xt.off({ el: loader })
        loader.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)
      }
    }

    loader.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)

    // unmount

    return () => {
      clearTimeout(loader.dataset.loaderTimeout)
    }
  },
})
