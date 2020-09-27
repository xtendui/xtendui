import { Xt } from 'xtend-library/src/xt.js'

Xt.mount.push({
  matches: 'form:not([novalidate])',
  mount: object => {
    // vars

    const scrollWindowFactor = 0.2
    const items = object.querySelectorAll('input, select, textarea')
    let raf

    // valid

    const eventChange = e => {
      const item = e.target
      if (item.dataset.xtValidate === 'true') {
        const name = item.getAttribute('name')
        for (const current of Array.from(items).filter(x => x.getAttribute('name') === name)) {
          current.classList.add('valid')
          current.classList.remove('invalid')
          current.checkValidity()
        }
      }
    }

    for (const item of items) {
      item.addEventListener('input', eventChange)
      item.addEventListener('change', eventChange)
    }

    // invalid

    const eventScroll = () => {
      window.scrollTo(window.scrollX, window.scrollY - Xt.windowHeight * scrollWindowFactor)
    }

    const eventInvalid = e => {
      const item = e.target
      item.classList.remove('valid')
      item.classList.add('invalid')
      item.dataset.xtValidate = 'true'
      // scroll to views
      addEventListener('scroll', eventScroll)
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        removeEventListener('scroll', eventScroll)
      })
    }

    const eventSubmit = () => {
      for (const item of items) {
        delete item.dataset.xtValidate
      }
    }

    for (const item of items) {
      item.addEventListener('invalid', eventInvalid)
      item.addEventListener('submit', eventSubmit)
    }

    // unmount

    const unmount = () => {
      removeEventListener('scroll', eventScroll)
    }
    return unmount
  },
})
