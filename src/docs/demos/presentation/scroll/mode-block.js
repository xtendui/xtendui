// test .scroll--block after 2 seconds

setTimeout( function() {
  for (let el of document.querySelectorAll('.scroll')) {
    el.classList.add('scroll--block');
  }
  alert('scroll blocked');
}, 2000);