import React from 'react'

import SEO from 'components/seo'
import Layout from 'components/layout'

class Page extends React.Component {
  render() {
    const seo = {}
    seo.title = 'Home'
    seo.description = 'Description'
    return (
      <Layout seo={seo}>
        <SEO title={seo.title + ' — ' + seo.description} />
        <ul>
          <li>UI framework</li>
          <li>vanilla html components with js and less imports</li>
          <li>extremely customizable</li>
          <li>simple solutions for hard problems</li>
          <li>modular css and javascript for html apps</li>
          <li>(vanilla &gt; simple &gt; custom) library with extensible (markup &gt; styles &gt; javascript)</li>
          <li>designed for building custom websites with complex interactions</li>
          <li>advanced vanilla js with customizzable behaviour and animations</li>
          <li>a new approach to custom frontend development</li>
          <li>ecosystem of vanilla js plugins</li>
          <li>focused on interactions and animations</li>
          <li>focused on working speed, quality and customization</li>
          <li>highly customizzable library for who wants to customize the css without many variables or mixins</li>
          <li>
            includes core styles not to be modified and a separate smart theme template for custom styles, easy to use, extensible, intelligible code,
            contextualized code
          </li>
          <li>automatic aria attributes</li>
          <li>style real css, not a list of variables</li>
        </ul>
      </Layout>
    )
  }
}

export default Page
