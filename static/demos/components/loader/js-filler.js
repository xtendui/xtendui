import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount({
  matches: '.demo--loader-js-filler',
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
      const filler = ref.querySelectorAll('.xt-filler span:nth-child(2)')
      if (loader.dataset.loaderTimeout) {
        clearTimeout(loader.dataset.loaderTimeout)
        delete loader.dataset.loaderTimeout
        Xt.on(loader)
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
