import React, { Component } from "react"
import GatsbyImage from "gatsby-image"

class Thumbnail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false,
    }
    this.toggleHover = this.toggleHover.bind(this)
  }

  render() {
    return (
      <div
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        style={{
          minWidth: `40vh`,
        }}
      >
        <GatsbyImage
          style={{
            transition: `all 0.25s`,
            opacity: this.state.hover ? 0.33 : 1,
          }}
          fluid={this.props.image.childImageSharp.fluid} />
      </div>
    )
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover })
  }
}

export default Thumbnail
