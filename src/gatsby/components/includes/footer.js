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
    <div className="gatsby_site_footer_bottom">
      <div className="row row-2 gatsby_site_footer_bottom_row">
        <div>
          {site.siteMetadata.title} v{site.siteMetadata.version} and demos licensed{' '}
          <a href="https://github.com/minimit/xtendui/blob/master/LICENSE" target="_blank" rel="noreferrer">
            MIT
          </a>
          <span className="separator separator-dash"></span> Docs licensed{' '}
          <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">
            CC BY 3.0
          </a>{' '}
        </div>
        <div className="gatsby_site_footer_bottom_right">
          © 2017 <span className="separator separator-dash"></span> {new Date().getFullYear()} {site.siteMetadata.author}
        </div>
      </div>
    </div>
  )
}
