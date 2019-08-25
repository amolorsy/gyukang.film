import React from "react"
import { IconContext } from 'react-icons';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
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
      height: `100%`
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
      alignItems: `center`
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
      }
      date
      location {
        name
      }
    }
  }
`
