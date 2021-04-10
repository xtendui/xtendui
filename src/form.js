import { Xt } from './xt'

/**
 * checks labels .active
 */

Xt.mount({
  matches: 'label input[type="checkbox"], label input[type="radio"]',
  mount: ({ ref }) => {
    // vars

    const name = ref.getAttribute('name')
    const inputs = document.querySelectorAll(`[name="${name}"]`)

    // change

    const toggle = input => {
      const label = input.closest('label')
      if (input.checked) {
        Xt.animOn(label)
      } else {
        Xt.animOff(label)
      }
    }

    const change = ({ initial = false }) => {
      if (!initial && inputs.length) {
        for (const input of inputs) {
          toggle(input)
        }
      } else {
        toggle(ref)
      }
    }

    ref.addEventListener('change', change.bind(null, { initial: false }))
    change({ initial: true })
  },
})

/**
 * Validation
 */

Xt.mount({
  matches: 'form:not([novalidate])',
  mount: ({ ref }) => {
    // vars

    const items = ref.elements
    const scrollWindowFactor = 0.2
    let raf

    // valid

    const change = e => {
      const item = e.target
      if (item.dataset.xtValidate === 'true') {
        item.classList.add('xt-form-valid')
        item.classList.remove('xt-form-invalid')
        item.checkValidity()
      }
    }

    for (const item of items) {
      item.addEventListener('input', change)
      item.addEventListener('change', change)
    }

    // invalid

    const scroll = () => {
      window.scrollTo(window.scrollX, window.scrollY - Xt.innerHeight * scrollWindowFactor)
    }

    const invalid = e => {
      const item = e.target
      item.classList.remove('xt-form-valid')
      item.classList.add('xt-form-invalid')
      item.dataset.xtValidate = 'true'
      // scroll to views
      addEventListener('scroll', scroll)
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        removeEventListener('scroll', scroll)
      })
    }

    const submit = () => {
      for (const item of items) {
        delete item.dataset.xtValidate
      }
    }

    for (const item of items) {
      item.addEventListener('invalid', invalid)
      item.addEventListener('submit', submit)
    }

    // unmount

    return () => {
      removeEventListener('scroll', scroll)
    }
  },
})
