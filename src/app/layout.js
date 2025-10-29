/* global package_json_keywords */
import { Inter } from 'next/font/google'
import { getPosts } from 'src/app/snippets/getPosts'
import LayoutStructure from 'src/app/layout-structure'
import { postSort } from 'src/app/snippets/post-sort'
import 'src/app/assets/styles/app.css'
const classes = require('src/app/snippets/classes').classes

// no google font as head style
// https://github.com/facebook/react/issues/24430
// https://github.com/cypress-io/cypress/issues/27204
const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }) {
  const posts = await getPosts()

  const page = {
    posts: posts,
    menus: {
      posts: posts.filter(x => x.post.frontmatter.menu === true).sort(postSort),
    },
    categories: {},
    postsAdiacent: {},
  }

  return (
    <html lang="en" className="xt-html" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/xtendui/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/xtendui/apple-touch-icon.png" type="image/png" sizes="512x512" />
        <link rel="manifest" href="/xtendui/manifest.json" />
        <meta name="keywords" content={package_json_keywords.join(', ')} />
        <meta name="theme-color" content="#0067DD" />
        <meta name="twitter:card" content="/xtendui/social.png" />
        <meta property="og:image" content="/xtendui/social.png" />
        <link rel="preload" as="image" fetchPriority="high" href="/xtendui/logo-white.svg" />
      </head>
      <body
        className={`xt-body ${classes.textDefault()} xl:text-lg ${inter.className}`}
        data-version={encodeURIComponent(require('uuid').v1())}
        suppressHydrationWarning={true}>
        <LayoutStructure page={page}>{children}</LayoutStructure>
      </body>
    </html>
  )
}
