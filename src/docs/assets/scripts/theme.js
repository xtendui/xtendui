//////////////////////
// imports
//////////////////////

import '../../../scripts/xtend.js';

console.log('theme loaded');

// @TODO toggle

document.getElementsByClassName('btn-menu')[0].addEventListener('click', function (e) {
  console.log(e);
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }
});