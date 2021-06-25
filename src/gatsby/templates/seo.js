import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from 'src/gatsby/templates/includes/siteMetadata'

export default function SEO({ title, description, lang, meta }) {
  const { site } = useSiteMetadata()
  let metaTitle = title === 'Home' ? site.siteMetadata.description : title || site.siteMetadata.description
  metaTitle = `${site.siteMetadata.title} - ${metaTitle}`
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
          content: site.siteMetadata.image,
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

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}
