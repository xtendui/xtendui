import { Xt } from '../xt.js'

/**
 * Radio change event on same name radios
 */

Xt.mount.push({
  matches: 'input[type="radio"]',
  mount: object => {
    // vars

    const name = object.getAttribute('name')
    const others = document.querySelectorAll(`input[type="radio"][name="${name}"]`)

    // eventInput

    const eventInput = () => {
      // propagate to other radios
      for (const other of Array.from(others).filter(x => x !== object)) {
        other.dispatchEvent(new Event('change'))
      }
    }

    object.addEventListener('input', eventInput)
  },
})

/**
 * checks labels .active
 */

Xt.mount.push({
  matches: 'label input[type="checkbox"], label input[type="radio"]',
  mount: object => {
    // vars

    const label = object.closest('label')

    // eventChange

    const eventChange = () => {
      if (object.checked) {
        label.classList.add('active')
      } else {
        label.classList.remove('active')
      }
    }

    object.addEventListener('change', eventChange)
    eventChange()
  },
})

/**
 * Validation
 */

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
        item.classList.add('form-valid')
        item.classList.remove('form-invalid')
        item.checkValidity()
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
      item.classList.remove('form-valid')
      item.classList.add('form-invalid')
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

    return () => {
      removeEventListener('scroll', eventScroll)
    }
  },
})
