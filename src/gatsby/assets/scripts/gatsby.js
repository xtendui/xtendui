const gatsbySidebarContain = () => {
  const sidebar = document.querySelector('.gatsby_site-article_sidebar')
  sidebar.scrollTop = window.keepSidebarScroll
  let sidebarActive = document.querySelector(
    '.gatsby_button-site_article_sidebar--sub.xt-active, .gatsby_button-site_article_sidebar--sub.current'
  )
  if (sidebarActive) {
    const add = 25
    sidebarActive = sidebarActive.closest('.gatsby_site-header_item_container')
    const sidebarActiveTop = sidebarActive.getBoundingClientRect().top + sidebar.scrollTop
    const sidebarActiveBottom = sidebarActiveTop + sidebarActive.offsetHeight
    if (sidebar.scrollTop > sidebarActiveTop) {
      sidebar.scrollTop = sidebarActiveTop - add
    }
    if (sidebar.scrollTop + sidebar.offsetHeight < sidebarActiveBottom) {
      sidebar.scrollTop = sidebarActiveBottom - sidebar.offsetHeight + add
    }
  }
}

export { gatsbySidebarContain }
