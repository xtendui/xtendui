const gatsbySidebar = () => {
  requestAnimationFrame(() => {
    const sidebarArticle = document.querySelector('.gatsby_site_article_sidebar')
    let sidebarActive = document.querySelector('.gatsby_btn-site_article_sidebar--sub.active, .gatsby_btn-site_article_sidebar--sub.current')
    if (sidebarActive) {
      const add = 25
      sidebarActive = sidebarActive.closest('.gatsby_site_header_item_container')
      const sidebarActiveTop = sidebarActive.getBoundingClientRect().top + sidebarArticle.scrollTop
      const sidebarActiveBottom = sidebarActiveTop + sidebarActive.offsetHeight
      if (sidebarArticle.scrollTop > sidebarActiveTop) {
        sidebarArticle.scrollTop = sidebarActiveTop - add
      }
      if (sidebarArticle.scrollTop + sidebarArticle.offsetHeight < sidebarActiveBottom) {
        sidebarArticle.scrollTop = sidebarActiveBottom - sidebarArticle.offsetHeight + add
      }
    }
  })
}

export { gatsbySidebar }
