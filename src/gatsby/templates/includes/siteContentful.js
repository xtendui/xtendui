import { useStaticQuery, graphql } from 'gatsby'
export const useSiteContentful = () => {
  return useStaticQuery(graphql`
    query {
      assets: allContentfulAsset {
        items: edges {
          item: node {
            title
            file {
              url
            }
          }
        }
      }
    }
  `)
}
