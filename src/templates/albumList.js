import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Thumbnail from "../components/thumbnail"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

const AlbumListTemplate = ({ data }) => (
  <Layout>
    <GridList style={styles.albumList}>
      {
        data.allStrapiAlbum.edges.map(edge => {
          const AlbumListItem = () => (
            <div style={styles.albumListItem}>
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
            </div>
          )

          return (
            <GridListTile
              key={edge.node.strapiId}
              component={AlbumListItem}
            />
          )
        })
      }
    </GridList>
  </Layout>
)

const styles = {
  albumList: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 75,
  },
  albumListItem: {
    position: `relative`,
    width: '75%',
    minWidth: 240,
    maxWidth: 500,
    marginBottom: 14,
    marginLeft: 7,
    marginRight: 7,
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

export default AlbumListTemplate

export const query = graphql`
  query AlbumListTemplate {
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
