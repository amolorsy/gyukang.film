import React, { Component } from "react"
import GatsbyImage from "gatsby-image"

class Thumbnail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false,
    }
  }

  render() {
    return (
      <div
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <GatsbyImage
          style={{
            ...styles.thumbnailImage,
            opacity: (this.state.hover ? 0.33 : 1)
          }}
          fluid={this.props.image.childImageSharp.fluid}/>
      </div>
    )
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  }
}

const styles = {
  thumbnailImage: {
    transition: `all 0.25s`,
  },
}

export default Thumbnail
