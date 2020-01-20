const scrollContainerBlock = document.querySelectorAll('.demo--scroll-container-block > *')

if (scrollContainerBlock.length) {
  setTimeout(() => {
    // after 2 seconds
    for (const el of scrollContainerBlock) {
      el.classList.add('scroll-block')
    }
    alert('scroll blocked')
  }, 2000)
}
