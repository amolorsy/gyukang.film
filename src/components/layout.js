import React, { Component } from "react"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"

class Layout extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

const styles = {
  container: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-around`,
    height: `100%`
  },
}

export default Layout
