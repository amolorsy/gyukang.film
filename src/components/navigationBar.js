import React, { Component } from 'react';
import MediaQuery from "react-responsive"
import { IconContext } from "react-icons"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import SwipeableDrawer from "@material-ui/core/Drawer"

class NavigationBar extends Component {
  state = {
    toggle: false
  }

  toggle = () => {
    this.setState({ toggle:!this.state.toggle })
  }

  render() {
    return (
      <div style={styles.container}>
        <MediaQuery minWidth={1224}>
          <ul style={styles.menuList}>
            <li style={styles.menuListItem}>
              <Link to="/" style={styles.menuLink}>
                <p style={styles.menuName}>overview</p>
              </Link>
            </li>
            <li style={styles.menuListItem}>
              <Link to="/albums" style={styles.menuLink}>
                <p style={styles.menuName}>albums</p>
              </Link>
            </li>
            <li style={styles.menuListItem}>
              <Link to="/about" style={styles.menuLink}>
                <p style={styles.menuName}>about</p>
              </Link>
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <button style={styles.hamburgerButton} onClick={this.toggle}>
            <IconContext.Provider value={{color: 'hsla(0, 0%, 0%, 0.8)'}}>
              <FaBars />
            </IconContext.Provider>
          </button>
          <SwipeableDrawer anchor="top" open={this.state.toggle} onClose={this.toggle}>
            <ul style={styles.drawerMenuList}>
              <li style={styles.drawerMenuListItem}>
                <Link to="/" style={styles.menuLink}>
                  <p style={styles.drawerMenuName}>overview</p>
                </Link>
              </li>
              <li style={styles.drawerMenuListItem}>
                <Link to="/albums" style={styles.menuLink}>
                  <p style={styles.drawerMenuName}>albums</p>
                </Link>
              </li>
              <li style={styles.drawerMenuListItem}>
                <Link to="/about" style={styles.menuLink}>
                  <p style={styles.drawerMenuName}>about</p>
                </Link>
              </li>
            </ul>
          </SwipeableDrawer>
        </MediaQuery>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  hamburgerButton: {
    border: 'none',
    background: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  menuList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 0,
  },
  menuListItem: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  drawerMenuList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  drawerMenuListItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  menuLink: {
    flex: 1,
    textDecoration: `none`,
    color: 'hsla(0, 0%, 0%, 0.8)',
  },
  menuName: {
    fontFamily: ['Sen', 'sans-serif'],
    fontSize: '0.9em',
    textAlign: 'center',
  },
  drawerMenuName: {
    fontFamily: ['Sen', 'sans-serif'],
    fontSize: '0.9em',
    textAlign: 'left',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
    marginBottom: 0,
  }
}

export default NavigationBar;
