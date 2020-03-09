import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import Thumbnail from "./thumbnail"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

const PhotoGrid = ({ data }) => (
  <Layout>
    <GridList style={styles.photoList}>
      {
        data.allStrapiPhoto.edges.map(edge => {
          const PhotoListItem = () => (
            <Link
              to={`/photos/${edge.node.strapiId}`}
              style={styles.photoListItem}>
              <Thumbnail image={edge.node.image}/>
            </Link>
          )

          return (
            <GridListTile
              key={edge.node.strapiId}
              component={PhotoListItem}
            />
          )
        })
      }
    </GridList>
  </Layout>
)

const styles = {
  photoList: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 75,
  },
  photoListItem: {
    width: '27.5%',
    minWidth: 90,
    maxWidth: 320,
    marginBottom: 14,
    marginLeft: 7,
    marginRight: 7,
  }
}

export default PhotoGrid
