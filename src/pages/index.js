import React from "react"
import { graphql } from "gatsby"
import PhotoGrid from "../components/photoGrid"

export default ({ data }) => (
  <PhotoGrid edges={data.allStrapiPhoto.edges} />
)

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
