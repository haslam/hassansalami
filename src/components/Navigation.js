import React from 'react';
import { Link } from "gatsby";
import { rhythm, scale } from '../utils/typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/layout.module.css';
import siteLogo from '../assets/H-3ree.png'

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBars: true
    }
    this.handleMobileMenu = this.handleMobileMenu.bind(this);
  }
  handleMobileMenu () {
    const navmenu = document.getElementById('nav_menu');
    navmenu.classList.toggle('mobile-toggler');  
    this.setState((prevState) => ({ navBars: !prevState.navBars }))
  }
  render () {
    return (
      <header className={styles.main__header}>
        <h1 className={styles.header__logo}>
          <Link className={styles.header__logo_text} to={'/'}>
          <img
            src={siteLogo}
            alt={`Hassan Salami - H-3ree`}
            style={{
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
             }}
          />
          </Link>
        </h1>
        <nav className={styles.header__nav}>
        <button 
          className={styles.header__nav_btn} 
          onClick={this.handleMobileMenu} 
          aria-label="Navigation Menu"
        >
          { this.state.navBars 
            ? <FontAwesomeIcon icon={faBars} size="2x" /> 
            : <FontAwesomeIcon icon={faTimes} size="2x" /> 
          }
        </button>
          <ul className={styles.header__menu} id="nav_menu">
            <li className={styles.header__menu_item}><Link to={'/'}>Home</Link></li>
            <li className={styles.header__menu_item}><Link to={'/blog'}>Blog</Link></li>
            <li className={styles.header__menu_item}><Link to={'#'}>Perks</Link></li>
            <li className={styles.header__menu_item}><Link to={'#'}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}


