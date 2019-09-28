import { Xt } from 'xtend-library'

/**
 * xtend extension: group-number
 */

Xt.mount.push({
  matches: '.group-number',
  mount: function (object) {
    // methods

    function inputNumberChange (step, e) {
      if (!e || !e.detail || !e.detail.skip) {
        const input = object.querySelector('input')
        let val = parseFloat(input.value)
        val = val + step
        inputNumberValidate.bind(object)(val)
      }
    }

    function inputNumberValidate (val) {
      const input = object.querySelector('input')
      const addEl = object.querySelector('.group-number-add')
      const removeEl = object.querySelector('.group-number-remove')
      // disabled
      addEl.removeAttribute('disabled')
      removeEl.removeAttribute('disabled')
      // check min and max
      const inputMin = parseFloat(input.getAttribute('min')) || 1
      const inputMax = parseFloat(input.getAttribute('max')) || Infinity
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
      input.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: { skip: true } }))
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
  }
})
