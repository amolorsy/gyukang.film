import { graphql } from "gatsby"
import PhotoGrid from "../components/photoGrid"

export default PhotoGrid

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
