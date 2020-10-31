/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(query)
  let metaTitle = title === 'Home' ? site.siteMetadata.description : title || site.siteMetadata.description
  metaTitle = `Xtend UI - ${metaTitle}`
  const metaDescription = description || site.siteMetadata.description
  const keywords = site.siteMetadata.keywords
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: site.siteMetadata.image,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        keywords
        image
        author
      }
    }
  }
`
