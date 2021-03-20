import { Xt } from 'xtendui'
import gsap from 'gsap'

Xt.mount.push({
  matches: '.CCC--loader-js-filler',
  mount: ({ object }) => {
    const unmountLoader = mountLoader({ object })

    // unmount

    return () => {
      unmountLoader()
    }
  },
})

/* mountLoader */

const mountLoader = ({ object }) => {
  const loaders = object.querySelectorAll('.xt-loader')
  const unmounts = []

  for (const loader of loaders) {
    // init

    const loaderTimeout = () => {
      const filler = object.querySelectorAll('.xt-filler span:nth-child(2)')
      if (loader.dataset.loaderTimeout) {
        clearTimeout(loader.dataset.loaderTimeout)
        delete loader.dataset.loaderTimeout
        Xt.animOn(loader)
        gsap.set(filler, { width: 0 })
        gsap.to(filler, { width: '100%', duration: 1, ease: 'linear' }).eventCallback('onComplete', loaderTimeout)
      } else {
        Xt.animOff(loader)
        loader.classList.remove('active')
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
