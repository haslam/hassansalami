import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Cover from '../components/Cover'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'

import { GaplessCard } from '../components/Card'
import { gaplessContainer } from '../styles/card.module.css'


const path = require('path')

const portfolioData = [
  {
    name: 'Growth Hub',
    url: 'https://growthhub.ca',
    screen: 'growthhub.jpg',
    caption: 'Growth strategy company'
  },
  {
    name: 'Expensified',
    url: 'https://react-expensified.herokuapp.com/',
    screen: 'expensified.jpg',
    caption: 'A expense management platform'
  },
  {
    name: 'Global GERS',
    url: 'https://globalgers.ca',
    screen: 'gers.jpg',
    caption: 'A global ecosystem of ventures'
  },
  {
    name: 'Jtool',
    url: 'https://jtool.cugcr.ca',
    screen: 'jtool.jpg',
    caption: 'A topic modelling tool for academic research'
  },
  {
    name: 'LTW Ontario',
    url: 'https://cugcr.ca/ontario/en.php',
    screen: 'LTW_ON.jpg',
    caption: 'An Accelerator-in-a-box prototype for LTW Ontario'
  },
  {
    name: 'Canvas prototype',
    url: 'https://haslam.github.io/RandPages/index.html',
    screen: 'canvasbox.jpg',
    caption: 'A growth canvas prototype for entrepreneurs'
  },
  {
    name: 'GESR prototype',
    url: 'https://haslam.github.io/RandPages/gers2.html',
    screen: 'gersgrowth.jpg',
    caption: 'A growth prototype for GERS'
  },
  {
    name: 'Knewrow Resources',
    url: 'https://knewrowresources.com',
    screen: 'knewrow.jpg',
    caption: 'A management training for scheduling courses'
  },
  {
    name: 'Firstworld Communities',
    url: 'http://firstworld-communities.com/firstworld/',
    screen: 'firstworld.jpg',
    caption: 'A property development company in Lagos'
  },
  {
    name: 'Good Schools Guide Nigeria',
    url: 'https://goodschoolsguidenigeria.com/',
    screen: 'gsgn.jpg',
    caption: 'A local school finder application'
  },
]
class About extends React.Component {
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
        <Cover />
        <div>
         <h3
          style={{
              ...scale(1/2),
              marginBottom: rhythm(3),
              marginTop: 0,
              textAlign: 'center',
            }}
            id='contributions'
            >Contributions</h3>
        <div className={gaplessContainer} style={{marginTop: rhythm(3), marginBottom: rhythm(1)}}>
        {portfolioData.map(({ name, url, screen, caption }) => {
          {/* const assetPath = path.join(__dirname, '..', 'assets', `${screen}`) */}
          {/* const screenPath = require(`${assetPath}`) */}
          return (
            <GaplessCard
              extUrl={url}
              extScreen={screen} 
              extText={caption}
              key={name}
             />
          )
        })}
        </div>
        </div>
      </Layout>
    )
  }
}

export default About

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
