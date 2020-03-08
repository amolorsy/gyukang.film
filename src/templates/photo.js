import React from "react"
import { IconContext } from 'react-icons';
import { FiCalendar, FiMapPin, FiCamera, FiAperture } from 'react-icons/fi';
import Moment from "react-moment"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

import "../components/layout.css"

const PhotoTemplate = ({ data }) => (
  <div
    style={styles.container}
  >
    <GatsbyImage
      style={styles.image}
      fluid={data.strapiPhoto.image.childImageSharp.fluid}
    />
    <div style={styles.exifRow}>
      <div style={styles.exifWrapper}>
        <IconContext.Provider value={{ color: `gray` }}>
          <FiMapPin />
        </IconContext.Provider>
        <p style={styles.exif}>
          {data.strapiPhoto.location.name}
        </p>
      </div>
      <div style={styles.exifWrapper}>
        <IconContext.Provider value={{ color: `gray` }}>
          <FiCalendar />
        </IconContext.Provider>
        <p style={styles.exif}>
          <Moment format="YYYY. M. D">{new Date(data.strapiPhoto.image.fields.exif.dateTimeOriginal)}</Moment>
        </p>
      </div>
    </div>
    <div style={styles.exifRow}>
      <div style={styles.exifWrapper}>
        <IconContext.Provider value={{ color: `gray` }}>
          <FiCamera />
        </IconContext.Provider>
        <p style={styles.exif}>
          {data.strapiPhoto.image.fields.exif.cameraModel}, {data.strapiPhoto.image.fields.exif.lensModel}
        </p>
      </div>
      <div style={styles.exifWrapper}>
        <IconContext.Provider value={{ color: `gray` }}>
          <FiAperture />
        </IconContext.Provider>
        <p style={styles.exif}>
          {data.strapiPhoto.image.fields.exif.focalLength}mm, F{data.strapiPhoto.image.fields.exif.fNumber}, {data.strapiPhoto.image.fields.exif.exposureTime}s, ISO {data.strapiPhoto.image.fields.exif.iso}
        </p>
      </div>
    </div>
  </div>
)

const styles = {
  container: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    maxWidth: `740px`,
    margin: `0 auto`,
    padding: `10px`,
    minHeight: `100%`,
    overflow: 'scroll'
  },
  image: {
    marginBottom: `10px`,
  },
  exifRow: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    flexWrap: `wrap`
  },
  exifWrapper: {
    display: `flex`,
    alignItems: `center`
  },
  exif: {
    color: `gray`,
    fontFamily: [`Sen`, `sans-serif`],
    fontSize: `0.75em`,
    margin: `1px 0 1px 3px`,
    textAlign: `right`,
  }
}

export default PhotoTemplate

export const query = graphql`
  query PhotoTemplate($id: String!) {
    strapiPhoto(strapiId: {eq: $id}) {
      image {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
        fields {
          exif {
            dateTimeOriginal
            cameraModel
            lensModel
            focalLength
            fNumber
            exposureTime
            iso
          }
        }
      }
      location {
        name
      }
    }
  }
`
