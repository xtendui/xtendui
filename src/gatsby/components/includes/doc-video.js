import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

export default class DocVideo extends React.Component {
  render() {
    const { adiacent } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            media: allContentfulAsset {
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
        `}
        render={data =>
          data.media.items.map((assets, z) => {
            if (assets.item.title === adiacent.frontmatter.title) {
              return (
                <div className="media-container" key={z}>
                  <div className="media-inner">
                    <video className="media object-cover object-center" preload="metadata" muted playsInline loop autoPlay>
                      <source type="video/mp4" src={assets.item.file.url ? assets.item.file.url : null} />
                    </video>
                  </div>
                </div>
              )
            }
          })
        }
      />
    )
  }
}

DocVideo.propTypes = {
  data: PropTypes.shape({
    media: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          item: PropTypes.shape({
            title: PropTypes.string.isRequired,
            file: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    }),
  }),
  adiacent: PropTypes.shape({
    frontmatter: PropTypes.shape({
      type: PropTypes.string.isRequired,
      category: PropTypes.string,
      parent: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      demos: PropTypes.array,
    }),
  }),
}
