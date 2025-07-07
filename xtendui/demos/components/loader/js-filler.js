import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--loader-js-filler .xt-loader',
  mount: ({ ref }) => {
    // vars

    const loader = ref

    // init

    const loaderTimeout = () => {
      const filler = ref.querySelectorAll('.xt-filler span:nth-child(2)')
      if (loader.dataset.loaderTimeout) {
        clearTimeout(loader.dataset.loaderTimeout)
        delete loader.dataset.loaderTimeout
        Xt.on({ el: loader })
        gsap.set(filler, {
          width: 0,
        })
        gsap
          .to(filler, {
            width: '100%',
            duration: 1,
            ease: 'linear',
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
