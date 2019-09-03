import React, { Component } from "react"
import { IconContext } from 'react-icons';
import { FiInstagram, FiMail, FiGithub } from 'react-icons/fi';

class Footer extends Component {
  render() {
    return (
      <footer style={{
        position: `fixed`,
        bottom: 0,
        right: 0,
        width: `100%`,
      }}>
        <div style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}>
          <ul style={{
            listStyle: `none`,
            margin: `0 auto`,
            display: `flex`,
          }}>
            <li style={{
              margin: `0 10px`
            }}>
              <a href="https://github.com/gyu-kang/gyukang.photo">
                <IconContext.Provider value={{ color: `#27211d`, size: `1.5em` }}>
                  <FiGithub />
                </IconContext.Provider>
              </a>
            </li>
            <li style={{
              margin: `0 10px`
            }}>
              <a href="https://instagram.com/gyukang.photo">
                <IconContext.Provider value={{ color: `#27211d`, size: `1.5em` }}>
                  <FiInstagram />
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            textAlign: `center`,
            marginBottom: `0.9em`
          }}
        >
          <p
            style={{
              color: `#27211d`,
              textDecoration: `none`,
              fontFamily: [`Cabin`, `cursive`],
              fontSize: `0.75em`,
              margin: 0
            }}
          >
            © {new Date().getFullYear()}. Gyu Kang. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
