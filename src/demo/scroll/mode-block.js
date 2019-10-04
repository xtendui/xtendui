/**
 * .demo--scroll_container--block
 */

const scrollContainerBlock = document.querySelectorAll('.demo--scroll_container--block > *')

if (scrollContainerBlock.length) {
  setTimeout(function () { // after 2 seconds
    for (const el of scrollContainerBlock) {
      el.classList.add('scroll--block')
    }
    alert('scroll blocked')
  }, 2000)
}
