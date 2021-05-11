import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Footer() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          version
        }
      }
    }
  `)
  return (
    <div className="text-2xs md:text-xs lg:text-sm">
      <div className="xt-row xt-row-1.5 text-black text-opacity-75 justify-between flex-auto">
        <div>
          {site.siteMetadata.title} v{site.siteMetadata.version}{' '}
          <a
            href="https://github.com/minimit/xtendui/blob/beta/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-black no-underline hover:underline">
            Apache-2.0
          </a>{' '}
        </div>
        <div>
          © 2017 <span className="xt-separator xt-separator-dash"></span> {new Date().getFullYear()}{' '}
          {site.siteMetadata.author}
        </div>
      </div>
    </div>
  )
}
