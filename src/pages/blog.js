import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

import Card from '../components/Card'
import { card__container } from '../styles/card.module.css'

class Blog extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div className={card__container} style={{marginTop: rhythm(3), marginBottom: rhythm(4)}}>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const tag = get(node, 'frontmatter.tag') || 'no_tag'
          const slug = node.fields.slug
          const excerpt = node.excerpt
          const { date, author } = node.frontmatter

          return (
            <Card
              key={slug}
              tag={tag}
              title={title}
              excerpt={excerpt}
              date={date}
              author={author}
              slug={slug}
             />
          )
        })}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {tag: {ne: null}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tag
            author
          }
        }
      }
    }
  }
`
