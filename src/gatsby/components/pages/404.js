import React from 'react'

import SEO from 'components/seo'
import Layout from 'components/layout'

class Page extends React.Component {
  render() {
    const seo = {}
    seo.title = '404'
    seo.description = 'Page not found'
    return (
      <Layout seo={seo}>
        <SEO title={seo.title} description={seo.description} />
        <h1>Error 404</h1>
        <p>Page not found.</p>
      </Layout>
    )
  }
}

export default Page
