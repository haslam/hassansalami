import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
       <img
          src={profilePic}
          alt={`Hassan Salami`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{marginLeft: "10px"}}>
          <a href="https://twitter.com/haslam956">
            I share things on Twitter, too.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
