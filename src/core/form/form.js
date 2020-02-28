import { Xt } from 'xtend-library'

//
// validation
//

Xt.mount.push({
  matches: 'form, .form',
  mount: object => {
    // vars

    const scrollWindowFactor = 0.2
    const items = object.querySelectorAll('input, select, textarea')
    let raf

    // valid

    const eventChange = e => {
      const item = e.target
      item.classList.add('valid')
      item.classList.remove('invalid')
      item.checkValidity()
    }

    for (const item of items) {
      item.addEventListener('input', eventChange)
      item.addEventListener('change', eventChange)
    }

    // invalid

    const eventInvalid = e => {
      const item = e.target
      item.classList.remove('valid')
      item.classList.add('invalid')
      // scroll to views
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        window.scrollTo(window.scrollX, window.scrollY - Xt.windowHeight * scrollWindowFactor)
      })
    }

    for (const item of items) {
      item.addEventListener('invalid', eventInvalid)
    }
  },
})
