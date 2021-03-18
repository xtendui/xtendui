import { Xt } from '../xt.js'

/**
 * checks labels .active
 */

Xt.mount.push({
  matches: 'label input[type="checkbox"], label input[type="radio"]',
  mount: ({ object }) => {
    // vars

    const name = object.getAttribute('name')
    const inputs = document.querySelectorAll(`[name="${name}"]`)

    // eventChange

    const change = input => {
      const label = input.closest('label')
      if (input.checked) {
        label.classList.add('active')
      } else {
        label.classList.remove('active')
      }
    }

    const eventChange = (initial = false) => {
      if (!initial && inputs.length) {
        for (const input of inputs) {
          change(input)
        }
      } else {
        change(object)
      }
    }

    object.addEventListener('change', eventChange)
    eventChange(true)
  },
})

/**
 * Validation
 */

Xt.mount.push({
  matches: 'form:not([novalidate])',
  mount: ({ object }) => {
    // vars

    const scrollWindowFactor = 0.2
    const items = object.querySelectorAll('input, select, textarea')
    let raf

    // valid

    const eventChange = e => {
      const item = e.target
      if (item.dataset.xtValidate === 'true') {
        item.classList.add('xt-form-valid')
        item.classList.remove('xt-form-invalid')
        item.checkValidity()
      }
    }

    for (const item of items) {
      item.addEventListener('input', eventChange)
      item.addEventListener('change', eventChange)
    }

    // invalid

    const eventScroll = () => {
      window.scrollTo(window.scrollX, window.scrollY - Xt.innerHeight * scrollWindowFactor)
    }

    const eventInvalid = e => {
      const item = e.target
      item.classList.remove('xt-form-valid')
      item.classList.add('xt-form-invalid')
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
