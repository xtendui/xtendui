const scrollContainerBlocks = document.querySelectorAll('.demo--scroll-container-block > *')

if (scrollContainerBlocks.length) {
  setTimeout(() => {
    // after 2 seconds
    for (const scrollContainerBlock of scrollContainerBlocks) {
      scrollContainerBlock.classList.add('scroll-block')
    }
    alert('scroll blocked')
  }, 2000)
}
