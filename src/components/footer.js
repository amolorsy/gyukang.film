import React, { Component } from "react"
import { IconContext } from "react-icons"
import { FaInstagram } from "react-icons/fa"

class Footer extends Component {
  render() {
    return (
      <footer style={styles.container}>
        <ul style={styles.snsBadgeList}>
          <li style={styles.snsBadgeListItem}>
            <a
              href="https://instagram.com/gyukang.photo"
              style={styles.snsBadgeListItemLink}
            >
              <IconContext.Provider
                value={{ color: "hsla(0, 0%, 0%, 0.8)", size: 21, }}
              >
                <FaInstagram/>
              </IconContext.Provider>
            </a>
          </li>
        </ul>
        <p style={styles.copyright}>
          ⓒ {new Date().getFullYear()}. Gyu Kang. All rights reserved.
        </p>
      </footer>
    )
  }
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  snsBadgeList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
  },
  snsBadgeListItem: {
    margin: 0,
  },
  snsBadgeListItemLink: {
    display: 'flex',
    alignItems: 'center',
    padding: 5,
  },
  copyright: {
    color: 'hsla(0, 0%, 0%, 0.8)',
    textDecoration: 'none',
    fontFamily: ['Sen', 'sans-serif'],
    fontSize: '0.75em',
    textAlign: 'center',
    margin: 0,
  },
}

export default Footer
