
setTimeout( function() {
  for (let el of document.querySelectorAll('.fade')) {
    el.classList.add('fade-block');
  }
  alert('fade blocked');
}, 2000);