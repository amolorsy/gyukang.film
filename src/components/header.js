import { Link } from "gatsby"
import React, { Component } from "react"
import NavigationBar from "./navigationBar"

class Header extends Component {
  render() {
    return (
      <header style={styles.container}>
        <div>
          <Link to="/" style={styles.homeLink}>
            <p style={styles.logo}>gyukang.photo</p>
          </Link>
        </div>
        <div style={styles.navigationBar}>
          <NavigationBar />
        </div>
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
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 20,
    paddingRight: 20,
    height: 75,
    backgroundColor: 'white',
    zIndex: 9999,
  },
  homeLink: {
    textDecoration: `none`,
    color: 'hsla(0, 0%, 0%, 0.8)',
  },
  logo: {
    fontFamily: ['Sarina', 'sans-serif'],
    fontSize: `1.5em`,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  navigationBar: {
    flex: 1,
  },
}

export default Header
