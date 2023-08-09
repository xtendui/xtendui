'use client'

import { useLayoutEffect, useEffect, useRef } from 'react'
import { onRouteUpdate } from 'src/app/snippets/route-events'
import { usePathname, useParams } from 'next/navigation'
import DocFullscreen from 'src/app/includes/doc-fullscreen'
import Header from 'src/app/includes/header'
import HeaderHome from 'src/app/includes/header-home'
import Footer from 'src/app/includes/footer'
import DocHead from 'src/app/includes/doc-head'
import DocFoot from 'src/app/includes/doc-foot'
import { postSort } from 'src/app/snippets/post-sort'
const classes = require('src/app/snippets/classes').classes

export default function Structure({ page, children }) {
  const pathname = usePathname()
  const params = useParams()

  page.post = page.posts.filter(x => x.slug === params.slug?.join('/'))[0]?.post

  const category = []
  for (const post of page.posts) {
    const title = post.post.frontmatter.category
    if (title) {
      let object = category.filter(x => x.title === title)
      if (!object.length) {
        object = {}
        object.title = title
        object.type = post.post.frontmatter.type
        object.posts = []
        category.push(object)
      } else {
        object = object[0]
      }
      object.posts.push(post)
    }
  }
  for (const cat of category) {
    cat.posts = cat.posts.sort(postSort)
  }
  page.categories.category = category

  if (page.post) {
    page.categories.category = page.categories.category
      .filter(x => x.type === page.post.frontmatter.type)
      .sort((a, b) => a.title.localeCompare(b.title))
    page.postsAdiacent.posts = page.posts
      .filter(
        x =>
          x.post.frontmatter.type === page.post.frontmatter.type &&
          x.post.frontmatter.category === page.post.frontmatter.category &&
          x.post.frontmatter.parent === page.post.frontmatter.parent,
      )
      .sort(postSort)
  }

  useLayoutEffect(() => {
    const slug = params.slug ?? '' // fix homepage no slug
    if (typeof window !== 'undefined' && window.populateDone !== slug) {
      window.populateDone = slug
      require('src/app/assets/scripts/setup')
      require('src/app/assets/scripts/app')
      require('src/app/assets/scripts/demo').populateBlock()
      require('src/app/assets/scripts/demo').makeDocument()
      window.switchDemos = []
    }
  }, [params.slug])

  // onRouteUpdate

  const savedPathNameRef = useRef(pathname)

  useEffect(() => {
    if (savedPathNameRef.current !== pathname) {
      savedPathNameRef.current = pathname
      onRouteUpdate({ pathname, prevPathname: savedPathNameRef.current })
    }
  }, [pathname])

  return (
    <>
      <nav
        className="off:opacity-0 off:pointer-events-none out:pointer-events-none fixed z-above left-0 py-4 w-full flex justify-center transition opacity-0 -translate-y-4 in:opacity-100 in:translate-y-0"
        aria-label="Jump to content"
        id="docs_jumptocontent">
        <a
          href="#docs_jumptocontent_target"
          className={`xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}`}>
          Jump to content
        </a>
      </nav>
      {pathname === '/' ? (
        <div className="docs_site-wrapper">
          <HeaderHome />
          <main className="docs_home-main" id="docs_jumptocontent_target">
            {children}
          </main>
          <footer className="docs_home-footer docs_site-footer border-t border-gray-100">
            <div className="docs_site-footer_inner container py-4 lg:py-8">
              <Footer />
            </div>
          </footer>
        </div>
      ) : (
        <div className="docs_site-wrapper">
          <Header page={page} />
          <div className="docs_site-article docs_site-article--markdown flex flex-col flex-auto prose max-w-none bg-white">
            <main className="docs_site-main flex flex-col flex-auto min-h-screen">
              {page && page.post ? <DocHead page={page} /> : null}
              <article
                className="docs_site-article_content flex-auto container py-10 md:py-20"
                id="docs_jumptocontent_target">
                <div className="docs_site-article_content_inner">{children}</div>
              </article>
              <footer className="docs_site-footer border-t border-gray-100">
                <div className="docs_site-footer_inner container py-4 lg:py-8">
                  {page && page.post && page.post.frontmatter.type !== page.post.frontmatter.title ? (
                    <DocFoot page={page} />
                  ) : null}
                  <Footer />
                </div>
              </footer>
            </main>
          </div>
          <DocFullscreen />
        </div>
      )}
    </>
  )
}
