// @PROBLEM js gets executed instantly (dom not ready) and also on root app

setTimeout ( function() {
  console.log('bbb', document, document.querySelectorAll('.drop--disable'))
}, 1000)
