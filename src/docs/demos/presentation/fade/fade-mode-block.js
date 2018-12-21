// test .fade--block after 2 seconds

setTimeout( function() {
  for (let [i, el] of document.querySelectorAll('.fade').entries()) {
    el.classList.add('fade--block');
  }
  alert('fade blocked');
}, 2000);