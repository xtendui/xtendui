//////////////////////
// xtend extension: group-number
//////////////////////

Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.group-number',
  fnc: inputNumberInit
});

function inputNumberInit(main, index) {
  // init
  inputNumberChange.bind(main, 0)();
  // vars
  let inputEl = main.querySelectorAll('input')[0];
  let step = parseFloat(inputEl.getAttribute('step')) || 1;
  // add
  let addEl = main.querySelectorAll('.group-number-add')[0];
  let addStep = step;
  let addHandler = Xt.dataStorage.get(addEl, 'addHandler');
  addHandler = addHandler ? addHandler : Xt.dataStorage.put(addEl, 'addHandler', inputNumberChange.bind(main, addStep));
  addEl.removeEventListener('click', addHandler);
  addEl.addEventListener('click', addHandler);
  // remove
  let removeEl = main.querySelectorAll('.group-number-remove')[0];
  let removeStep = -step;
  let removeHandler = Xt.dataStorage.get(removeEl, 'removeHandler');
  removeHandler = removeHandler ? removeHandler : Xt.dataStorage.put(removeEl, 'removeHandler', inputNumberChange.bind(main, removeStep));
  removeEl.removeEventListener('click', removeHandler);
  removeEl.addEventListener('click', removeHandler);
  // change
  let inputHandler = Xt.dataStorage.get(inputEl, 'inputHandler');
  inputHandler = inputHandler ? inputHandler : Xt.dataStorage.put(inputEl, 'inputHandler', inputNumberChange.bind(main, 0));
  inputEl.removeEventListener('change', inputHandler);
  inputEl.addEventListener('change', inputHandler);
}

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
