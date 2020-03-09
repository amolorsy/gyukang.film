import { graphql } from "gatsby"
import PhotoGrid from "../components/photoGrid"

export default PhotoGrid

export const query = graphql`
  query IndexPage {
    allStrapiPhoto(sort: {fields: image___fields___exif___dateTimeOriginal, order: DESC}) {
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
