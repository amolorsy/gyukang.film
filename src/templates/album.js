import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Thumbnail from "../components/thumbnail"

const AlbumTemplate = ({ data }) => (
  <Layout>
    <div style={{
      width: `100%`,
    }}>
      <ul style={{
        display: `flex`,
        overflow: `scroll`,
        listStyle: `none`,
        margin: 0,
      }}>
        {
          data.allStrapiPhoto.edges.map(edge => {
            return (
              <li
                key={edge.node.strapiId}
                style={{
                  margin: `10px`
                }}>
                <Link
                  to={`/photos/${edge.node.strapiId}`}
                  style={{ textDecoration: `none` }}
                >
                  <Thumbnail image={edge.node.image} />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  </Layout>
)

export default AlbumTemplate

export const query = graphql`
  query AlbumTemplate($id: String!) {
    allStrapiPhoto(sort: {fields: image___fields___exif___dateTimeOriginal, order: ASC}, filter: {album: {id: {eq: $id}}}) {
      edges {
        node {
          strapiId
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
