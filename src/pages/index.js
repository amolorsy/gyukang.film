import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Thumbnail from "../components/thumbnail"

const IndexPage = ({ data }) => (
  <Layout>
    <div style={styles.container}>
      <ul style={styles.albumList}>
        {
          data.allStrapiAlbum.edges.map(edge => {
            return (
              <li
                key={edge.node.strapiId}
                style={styles.albumListItem}
              >
                <Link
                  to={`/albums/${edge.node.strapiId}`}
                  style={styles.albumLink}
                >
                  <Thumbnail
                    image={edge.node.thumbnail}
                  />
                </Link>
                <p style={styles.albumTitle}>
                  {edge.node.title}
                </p>
              </li>
            )
          })
        }
      </ul>
    </div>
  </Layout>
)

const styles = {
  container: {
    width: `100%`,
  },
  albumList: {
    display: `flex`,
    overflow: `scroll`,
    listStyle: `none`,
    margin: 0,
  },
  albumListItem: {
    margin: `10px`,
    position: `relative`,
  },
  albumLink: {
    textDecoration: `none`,
  },
  albumTitle: {
    width: `100%`,
    backgroundColor: `rgba(0, 0, 0, 0.25)`,
    position: `absolute`,
    left: `50%`,
    bottom: 0,
    transform: `translate(-50%, 0)`,
    textAlign: `center`,
    fontFamily: [`Lexend Deca`, "Kosugi Maru"],
    fontSize: `1.0em`,
    padding: `25px 0`,
    color: `white`,
    opacity: `0.75`,
  },
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    allStrapiAlbum(sort: {fields: number, order: DESC}) {
      edges {
        node {
          strapiId
          title
          thumbnail {
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
