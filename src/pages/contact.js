import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { bright__link } from "../styles/layout.module.css";


class Contact extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div style={{marginTop: rhythm(1), marginBottom: rhythm(1/2)}}>
          <h3 style={{...scale(1/2)}}>Work prospect?</h3>
          <p>Thank you! Please feel free to <a href="mailto:hassan_salami@live.com" className={bright__link} >send me an email right away</a>. I usually reply to emails within a 24hrs period.</p>

          <h3 style={{...scale(1/2)}}>Just saying hi?</h3>
          <p>Great! You may also <a href="mailto:hassan_salami@live.com" className={bright__link}>send me an email</a> or better still, <a href="http://twitter.com/haslam956" target="_blank" rel="noreferrer noopener" className={bright__link}>tweet at me</a> and I promise to tweet you back.</p>
        </div>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }

  }
`
