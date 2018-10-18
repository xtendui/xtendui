// extension: group-number

function inputNumberValidate(val) {
  let group = this;
  let input = group.querySelectorAll('input')[0];
  let addEl = group.querySelectorAll('.group-number-add')[0];
  let removeEl = group.querySelectorAll('.group-number-remove')[0];
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
  input.dispatchEvent(new CustomEvent('keyup', {detail: {skip: true}}));
  input.dispatchEvent(new CustomEvent('change', {detail: {skip: true}}));
}

function inputNumberChange(step, e) {
  if (!e || !e.detail || !e.detail.skip) {
    let group = this;
    let input = group.querySelectorAll('input')[0];
    let val = parseFloat(input.value);
    val = val + step;
    inputNumberValidate.bind(group)(val);
  }
}

function inputNumberInit(container) {
  for (let [i, group] of container.querySelectorAll('.group-number-line, .group-number-stack').entries()) {
    // init
    inputNumberChange.bind(group, 0)();
    // vars
    let inputEl = group.querySelectorAll('input')[0];
    let step = parseFloat(inputEl.getAttribute('step')) || 1;
    // add
    let addEl = group.querySelectorAll('.group-number-add')[0];
    let addStep = step;
    let addHandler = Xt.dataStorage.get(addEl, 'addHandler');
    addHandler = addHandler ? addHandler : Xt.dataStorage.put(addEl, 'addHandler', inputNumberChange.bind(group, addStep));
    addEl.removeEventListener('click', addHandler);
    addEl.addEventListener('click', addHandler);
    // remove
    let removeEl = group.querySelectorAll('.group-number-remove')[0];
    let removeStep = -step;
    let removeHandler = Xt.dataStorage.get(removeEl, 'removeHandler');
    removeHandler = removeHandler ? removeHandler : Xt.dataStorage.put(removeEl, 'removeHandler', inputNumberChange.bind(group, removeStep));
    removeEl.removeEventListener('click', removeHandler);
    removeEl.addEventListener('click', removeHandler);
    // change
    let inputHandler = Xt.dataStorage.get(inputEl, 'inputHandler');
    inputHandler = inputHandler ? inputHandler : Xt.dataStorage.put(inputEl, 'inputHandler', inputNumberChange.bind(group, 0));
    inputEl.removeEventListener('change', inputHandler);
    inputEl.addEventListener('change', inputHandler);
  }
}

inputNumberInit(document);