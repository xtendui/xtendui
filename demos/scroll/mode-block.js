/**
 * .scroll_container_block
 */

let scrollContainerBlock = document.querySelectorAll('.scroll_container_block > *')
if (scrollContainerBlock.length) {
  setTimeout( function() { // after 2 seconds
    for (let el of scrollContainerBlock) {
      el.classList.add('scroll--block');
    }
    alert('scroll blocked');
  }, 2000);
}
