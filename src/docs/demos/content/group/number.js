/**
 * xtend extension: group-number
 */

(function () {

  // methods

  function inputNumberChange(step, e) {
    if (!e || !e.detail || !e.detail.skip) {
      let main = this;
      let input = main.querySelectorAll('input')[0];
      let val = parseFloat(input.value);
      val = val + step;
      inputNumberValidate.bind(main)(val);
    }
  }

  function inputNumberValidate(val) {
    let main = this;
    let input = main.querySelectorAll('input')[0];
    let addEl = main.querySelectorAll('.group-number-add')[0];
    let removeEl = main.querySelectorAll('.group-number-remove')[0];
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

  // .group-number

  let groupNumbers = document.querySelectorAll('.group-number');
  for (let groupNumber of groupNumbers) {

    // init

    inputNumberChange.bind(groupNumber, 0)();

    // vars

    let inputEl = groupNumber.querySelectorAll('input')[0];
    let step = parseFloat(inputEl.getAttribute('step')) || 1;

    // add

    let addEl = groupNumber.querySelectorAll('.group-number-add')[0];
    let addStep = step;
    let addHandler = Xt.dataStorage.get(addEl, 'addHandler');
    addHandler = addHandler ? addHandler : Xt.dataStorage.set(addEl, 'addHandler', inputNumberChange.bind(groupNumber, addStep));
    addEl.removeEventListener('click', addHandler);
    addEl.addEventListener('click', addHandler);

    // remove

    let removeEl = groupNumber.querySelectorAll('.group-number-remove')[0];
    let removeStep = -step;
    let removeHandler = Xt.dataStorage.get(removeEl, 'removeHandler');
    removeHandler = removeHandler ? removeHandler : Xt.dataStorage.set(removeEl, 'removeHandler', inputNumberChange.bind(groupNumber, removeStep));
    removeEl.removeEventListener('click', removeHandler);
    removeEl.addEventListener('click', removeHandler);

    // change

    let inputHandler = Xt.dataStorage.get(inputEl, 'inputHandler');
    inputHandler = inputHandler ? inputHandler : Xt.dataStorage.set(inputEl, 'inputHandler', inputNumberChange.bind(groupNumber, 0));
    inputEl.removeEventListener('change', inputHandler);
    inputEl.addEventListener('change', inputHandler);

  }

})();
