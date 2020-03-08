import React, { Component } from "react"
import { IconContext } from "react-icons"
import { FiInstagram, FiMail, FiGithub } from "react-icons/fi"

class Footer extends Component {
  render() {
    return (
      <footer style={styles.container}>
        <ul style={styles.snsBadgeList}>
          <li style={styles.snsBadgeListItem}>
            <a href="https://github.com/gyu-kang/gyukang.photo">
              <IconContext.Provider value={styles.snsIcon}>
                <FiGithub/>
              </IconContext.Provider>
            </a>
          </li>
          <li style={styles.snsBadgeListItem}>
            <a href="https://instagram.com/gyukang.photo">
              <IconContext.Provider value={styles.snsIcon}>
                <FiInstagram/>
              </IconContext.Provider>
            </a>
          </li>
        </ul>
        <p style={styles.copyright}>
          Copyright {new Date().getFullYear()}. Gyu Kang. All rights reserved.
        </p>
      </footer>
    )
  }
}

const styles = {
  container: {
    position: `fixed`,
    bottom: 0,
    right: 0,
    width: `100%`,
    display: `flex`,
    flexDirection: 'column',
    justifyContent: `center`,
    alignItems: `center`,
  },
  snsBadgeList: {
    listStyle: `none`,
    margin: `0 auto`,
    display: `flex`,
  },
  snsBadgeListItem: {
    margin: `0 10px`,
  },
  snsIcon: {
    color: `#27211d`,
    size: `1.5em`,
  },
  copyright: {
    color: `#27211d`,
    textDecoration: `none`,
    fontFamily: [`Cabin`, `cursive`],
    fontSize: `0.75em`,
    margin: 0,
    textAlign: `center`,
    marginBottom: `0.9em`,
  },
}

export default Footer
