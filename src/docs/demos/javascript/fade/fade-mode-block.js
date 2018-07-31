
setTimeout( function() {
  Array.from(container.querySelectorAll('.fade')).forEach(function (el, i) {
    el.classList.add('fade-block');
  });
  alert('fade blocked');
}, 2000);