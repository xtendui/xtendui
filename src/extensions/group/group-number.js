import {Xt} from 'xtend-library'

/**
 * xtend extension: group-number
 */

Xt.mount.push({
  matches: '.group-number',
  fnc: function mount(object) {

    // methods

    function inputNumberChange(step, e) {
      if (!e || !e.detail || !e.detail.skip) {
        let input = object.querySelector('input');
        let val = parseFloat(input.value);
        val = val + step;
        inputNumberValidate.bind(object)(val);
      }
    }

    function inputNumberValidate(val) {
      let input = object.querySelector('input');
      let addEl = object.querySelector('.group-number-add');
      let removeEl = object.querySelector('.group-number-remove');
      // disabled
      addEl.removeAttribute('disabled');
      removeEl.removeAttribute('disabled');
      // check min and max
      let inputMin = parseFloat(input.getAttribute('min')) || 1;
      let inputMax = parseFloat(input.getAttribute('max')) || Infinity;
      if (val <= inputMin) {
        val = inputMin;
        removeEl.setAttribute('disabled', 'disabled');
      }
      if (val >= inputMax) {
        val = inputMax;
        addEl.setAttribute('disabled', 'disabled');
      }
      // set value
      input.value = val;
      input.dispatchEvent(new CustomEvent('change', {bubbles: true, detail: {skip: true}}));
    }

    // init

    inputNumberChange.bind(object, 0)();

    // vars

    let inputEl = object.querySelector('input');
    let step = parseFloat(inputEl.getAttribute('step')) || 1;

    // add

    let addEl = object.querySelector('.group-number-add');
    let addStep = step;
    let addHandler = Xt.dataStorage.get(addEl, 'addHandler');
    addHandler = addHandler ? addHandler : Xt.dataStorage.set(addEl, 'addHandler', inputNumberChange.bind(object, addStep));
    addEl.removeEventListener('click', addHandler);
    addEl.addEventListener('click', addHandler);

    // remove

    let removeEl = object.querySelector('.group-number-remove');
    let removeStep = -step;
    let removeHandler = Xt.dataStorage.get(removeEl, 'removeHandler');
    removeHandler = removeHandler ? removeHandler : Xt.dataStorage.set(removeEl, 'removeHandler', inputNumberChange.bind(object, removeStep));
    removeEl.removeEventListener('click', removeHandler);
    removeEl.addEventListener('click', removeHandler);

    // change

    let inputHandler = Xt.dataStorage.get(inputEl, 'inputHandler');
    inputHandler = inputHandler ? inputHandler : Xt.dataStorage.set(inputEl, 'inputHandler', inputNumberChange.bind(object, 0));
    inputEl.removeEventListener('change', inputHandler);
    inputEl.addEventListener('change', inputHandler);

  }
});
