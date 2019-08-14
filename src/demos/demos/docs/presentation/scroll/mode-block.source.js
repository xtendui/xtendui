/**
 * .scroll--block
 */

// test .scroll--block after 2 seconds

setTimeout( function() {
  for (let el of document.querySelectorAll('.scroll_container > *')) {
    el.classList.add('scroll--block');
  }
  alert('scroll blocked');
}, 2000);
