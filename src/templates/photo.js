import React from "react"
import { IconContext } from 'react-icons';
import { FiCalendar, FiMapPin, FiCamera, FiAperture, FiSettings } from 'react-icons/fi';
import Moment from "react-moment"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import Layout from "../components/layout"

const PhotoTemplate = ({ data }) => (
  <Layout>
    <div style={styles.container}>
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
            {data.strapiPhoto.image.fields.exif.cameraModel}
          </p>
        </div>
      </div>
      <div style={styles.exifRow}>
        <div style={styles.exifWrapper}>
          <IconContext.Provider value={{ color: `gray` }}>
            <FiAperture />
          </IconContext.Provider>
          <p style={styles.exif}>
            {data.strapiPhoto.image.fields.exif.lensModel}
          </p>
        </div>
      </div>
      <div style={styles.exifRow}>
        <div style={styles.exifWrapper}>
          <IconContext.Provider value={{ color: `gray` }}>
            <FiSettings />
          </IconContext.Provider>
          <p style={styles.exif}>
            {data.strapiPhoto.image.fields.exif.focalLength}mm, F{data.strapiPhoto.image.fields.exif.fNumber}, {data.strapiPhoto.image.fields.exif.exposureTime}s, ISO {data.strapiPhoto.image.fields.exif.iso}
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

const styles = {
  container: {
    flex: 1,
    width: '100%',
    minWidth: 315,
    maxWidth: '45vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 75,
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: 7,
    marginBottom: 7,
  },
  exifRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  exifWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  exif: {
    color: 'gray',
    fontFamily: ['Sen', 'sans-serif'],
    fontSize: '0.75em',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 3,
    marginRight: 0,
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
