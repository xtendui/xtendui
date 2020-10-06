import { Xt } from 'xtend-ui'

/**
 * group-number
 */

Xt.mount.push({
  matches: '.group-number',
  mount: object => {
    // methods

    const inputNumberChange = (step, e) => {
      // trigger external events and skip internal events
      if (!e || !e.detail || !e.detail.skip) {
        const input = object.querySelector('input')
        let val = parseFloat(input.value)
        val = val + step
        inputNumberValidate.bind(object)(val)
      }
    }

    const inputNumberValidate = val => {
      const input = object.querySelector('input')
      const addEl = object.querySelector('.group-number-add')
      const removeEl = object.querySelector('.group-number-remove')
      // disabled
      addEl.removeAttribute('disabled')
      removeEl.removeAttribute('disabled')
      // check min and max
      const minAttributeAsFloat = parseFloat(input.getAttribute('min'))
      const inputMin = isNaN(minAttributeAsFloat) ? 1 : minAttributeAsFloat
      const maxAttributeAsFloat = parseFloat(input.getAttribute('max'))
      const inputMax = isNaN(maxAttributeAsFloat) ? Infinity : maxAttributeAsFloat
      if (val <= inputMin) {
        val = inputMin
        removeEl.setAttribute('disabled', 'disabled')
      }
      if (val >= inputMax) {
        val = inputMax
        addEl.setAttribute('disabled', 'disabled')
      }
      // set value
      input.value = val
      // trigger external events and skip internal events
      input.dispatchEvent(new CustomEvent('change', { detail: { skip: true } }))
    }

    // init

    inputNumberChange.bind(object, 0)()

    // vars

    const inputEl = object.querySelector('input')
    const step = parseFloat(inputEl.getAttribute('step')) || 1

    // add

    const addEl = object.querySelector('.group-number-add')
    const addStep = step
    let addHandler = Xt.dataStorage.get(addEl, 'addHandler')
    addHandler = addHandler || Xt.dataStorage.set(addEl, 'addHandler', inputNumberChange.bind(object, addStep))
    addEl.removeEventListener('click', addHandler)
    addEl.addEventListener('click', addHandler)

    // remove

    const removeEl = object.querySelector('.group-number-remove')
    const removeStep = -step
    let removeHandler = Xt.dataStorage.get(removeEl, 'removeHandler')
    removeHandler = removeHandler || Xt.dataStorage.set(removeEl, 'removeHandler', inputNumberChange.bind(object, removeStep))
    removeEl.removeEventListener('click', removeHandler)
    removeEl.addEventListener('click', removeHandler)

    // change

    let inputHandler = Xt.dataStorage.get(inputEl, 'inputHandler')
    inputHandler = inputHandler || Xt.dataStorage.set(inputEl, 'inputHandler', inputNumberChange.bind(object, 0))
    inputEl.removeEventListener('change', inputHandler)
    inputEl.addEventListener('change', inputHandler)
  },
})
