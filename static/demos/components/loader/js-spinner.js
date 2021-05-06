import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--loader-js-spinner',
  mount: ({ ref }) => {
    const unmountLoader = mountLoader({ ref })

    // unmount

    return () => {
      unmountLoader()
    }
  },
})

/* mountLoader */

const mountLoader = ({ ref }) => {
  // vars

  const loaders = ref.querySelectorAll('.xt-loader')
  const unmounts = []

  for (const loader of loaders) {
    // init

    const loaderTimeout = () => {
      const spinner = loader.querySelectorAll('.xt-spinner svg:nth-child(2) circle')
      if (loader.dataset.loaderTimeout) {
        clearTimeout(loader.dataset.loaderTimeout)
        delete loader.dataset.loaderTimeout
        Xt.on(loader)
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
        Xt.off(loader)
        loader.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)
      }
    }

    loader.dataset.loaderTimeout = setTimeout(loaderTimeout, 2000)

    // unmount

    unmounts.push(() => {
      clearTimeout(loader.dataset.loaderTimeout)
    })
  }

  // unmount

  return () => {
    for (const unmount of unmounts) {
      unmount()
    }
  }
}
