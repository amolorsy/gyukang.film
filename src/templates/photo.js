import React from "react"
import { IconContext } from 'react-icons';
import { FiCalendar, FiMapPin, FiCamera, FiAperture } from 'react-icons/fi';
import Moment from "react-moment"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

import "../components/layout.css"

const PhotoTemplate = ({ data }) => (
  <div
    style={{
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      maxWidth: `740px`,
      margin: `0 auto`,
      padding: `10px`,
      minHeight: `100%`,
      overflow: 'scroll'
    }}
  >
    <GatsbyImage
      style={{
        marginBottom: `10px`,
      }}
      fluid={data.strapiPhoto.image.childImageSharp.fluid}
    />
    <div style={{
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      flexWrap: `wrap`
    }}>
      <div style={{
        display: `flex`,
        alignItems: `center`
      }}>
        <IconContext.Provider value={{ color: `gray` }}>
          <FiMapPin />
        </IconContext.Provider>
        <p style={{
          color: `gray`,
          fontFamily: [`Rubik`, `sans-serif`],
          fontSize: `0.75em`,
          margin: `1px 0 1px 3px`,
          textAlign: `right`,
        }}>
          {data.strapiPhoto.location.name}
        </p>
      </div>
      <div style={{
        display: `flex`,
        alignItems: `center`
      }}>
        <IconContext.Provider value={{ color: `gray` }}>
          <FiCalendar />
        </IconContext.Provider>
        <p style={{
          color: `gray`,
          fontFamily: [`Rubik`, `sans-serif`],
          fontSize: `0.75em`,
          margin: `1px 0 1px 3px`,
          textAlign: `right`,  
        }}>
          <Moment format="YYYY. M. D">{new Date(data.strapiPhoto.date)}</Moment>
        </p>
      </div>
    </div>
    <div style={{
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      flexWrap: `wrap`
    }}>
      <div style={{
        display: `flex`,
        alignItems: `center`
      }}>
        <IconContext.Provider value={{ color: `gray` }}>
          <FiCamera />
        </IconContext.Provider>
        <p style={{
          color: `gray`,
          fontFamily: [`Rubik`, `sans-serif`],
          fontSize: `0.75em`,
          margin: `1px 0 1px 3px`,
          textAlign: `right`,  
        }}>
          {data.strapiPhoto.image.fields.exif.cameraModel}, {data.strapiPhoto.image.fields.exif.lensModel}    
        </p>
      </div>
      <div style={{
        display: `flex`,
        alignItems: `center`
      }}>
        <IconContext.Provider value={{ color: `gray` }}>
          <FiAperture />
        </IconContext.Provider>
        <p style={{
          color: `gray`,
          fontFamily: [`Rubik`, `sans-serif`],
          fontSize: `0.75em`,
          margin: `1px 0 1px 3px`,
          textAlign: `right`,  
        }}>
          {data.strapiPhoto.image.fields.exif.focalLength}mm, F{data.strapiPhoto.image.fields.exif.fNumber}, {data.strapiPhoto.image.fields.exif.exposureTime}s, ISO {data.strapiPhoto.image.fields.exif.iso}
        </p>
      </div>
    </div>
  </div>
)

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
            cameraModel
            lensModel
            focalLength
            fNumber
            exposureTime
            iso
          }
        }
      }
      date
      location {
        name
      }
    }
  }
`
