import React from 'react'

import SEO from 'components/seo'
import Layout from 'components/layout'

class Page extends React.Component {
  render () {
    const seo = {};
    seo.title = 'Home'
    seo.description = 'Description'
    return (
      <Layout seo={seo}>
        <SEO title={seo.title + ' — ' + seo.description}/>
        <a href="/iframe/demos/scroll/parallax">
           parallax
        </a>
      </Layout>
    )
  }
}

export default Page
