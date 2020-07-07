import { Xt } from 'xtend-library'

//
// validation
//

Xt.mount.push({
  matches: 'form:not([novalidate]), .form:not([novalidate])',
  mount: object => {
    // vars

    const scrollWindowFactor = 0.2
    const items = object.querySelectorAll('input, select, textarea')
    let raf

    // valid

    const eventChange = e => {
      const item = e.target
      if (item.dataset.xtValidate === 'true') {
        item.classList.add('valid')
        item.classList.remove('invalid')
        item.checkValidity()
      }
    }

    for (const item of items) {
      item.addEventListener('input', eventChange)
      item.addEventListener('change', eventChange)
    }

    // invalid

    const eventScroll = e => {
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

    const eventSubmit = e => {
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
