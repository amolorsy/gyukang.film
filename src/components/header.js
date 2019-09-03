import { Link } from "gatsby"
import React, { Component } from "react"
import logo from "../../static/logo.png"

class Header extends Component {
  render() {
    return (
      <header style={{
        position: `fixed`,
        top: 0,
        left: 0,
        width: `100%`,
      }}>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              margin: `0.1em`
            }}
          >
            <img src={logo} width="180" height="90" alt="logo" style={{ margin: 0 }}/>
          </Link>
        </h1>
      </header>
    )
  }
}

export default Header
