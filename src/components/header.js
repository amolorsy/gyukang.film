import { Link } from "gatsby"
import React, { Component } from "react"
import logo from "../../static/logo.png"

class Header extends Component {
  render() {
    return (
      <header style={styles.container}>
        <Link to="/" style={styles.homeLink}>
          <img
            src={logo}
            width="180"
            height="90"
            alt="logo"
            style={styles.logoImage}
          />
        </Link>
      </header>
    )
  }
}

const styles = {
  container: {
    position: `fixed`,
    top: 0,
    left: 0,
    width: `100%`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  homeLink: {
    textDecoration: `none`,
    margin: `0.1em`,
  },
  logoImage: {
    margin: 0,
  },
}

export default Header
