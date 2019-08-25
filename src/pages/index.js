import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Thumbnail from "../components/thumbnail"

const IndexPage = ({ data }) => (
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
          data.allStrapiAlbum.edges.map(edge => {
            return (
              <li
                key={edge.node.strapiId}
                style={{
                  margin: `10px`,
                  position: `relative`,
                }}
              >
                <Link
                  to={`/albums/${edge.node.strapiId}`}
                  style={{ textDecoration: `none` }}
                >
                  <Thumbnail
                    image={edge.node.photos[0].image}
                  />
                </Link>
                <p style={{
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
                }}>
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

export default IndexPage

export const query = graphql`
  query IndexPage {
    allStrapiAlbum {
      edges {
        node {
          strapiId
          title
          photos {
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
  }
`
