import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import { Header } from './Navigation'
import Footer from './Footer'
import styles from '../styles/layout.module.css'
import '../styles/default.css'
class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.container} >
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
