import React, { Component } from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"

class Layout extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
          <link rel="manifest" href="./site.webmanifest" />
        </Helmet>

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
    justifyContent: `space-between`,
    alignItems: 'center',
    minHeight: '100%',
  },
}

export default Layout
