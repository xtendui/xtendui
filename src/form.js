/*!
 * Xtend (https://xtendui.com/)
 * @copyright (c) 2017 - 2021 Riccardo Caroli
 * @license Apache-2.0 (https://github.com/minimit/xtendui/blob/beta/LICENSE)
 */

import { Xt } from './xt'

/**
 * checks labels .on
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
        Xt.on({ el: label })
      } else {
        Xt.off({ el: label })
      }
    }

    const change = () => {
      // fix execute after activation/deactivation because sometimes component toggle is initialized after this javascript
      requestAnimationFrame(() => {
        for (const input of inputs) {
          toggle(input)
        }
      })
    }

    ref.addEventListener('change', change)

    if (ref.checked) {
      change()
    }
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
      addEventListener('scroll', scroll, { once: true })
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
