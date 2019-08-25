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
              padding: `10px`,
            }}
          >
            <img src={logo} width="180" height="90" alt="logo" />
          </Link>
        </h1>
      </header>
    )
  }
}

export default Header
