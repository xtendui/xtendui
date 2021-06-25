import { useStaticQuery, graphql } from 'gatsby'
export const useSiteMetadata = () => {
  return useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          version
          title
          description
          keywords
          image
          author
          npm
          github
          twitter
          download
        }
      }
    }
  `)
}
