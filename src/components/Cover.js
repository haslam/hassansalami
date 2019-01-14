import React from 'react'
import { rhythm, scale } from '../utils/typography'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'


export default class Cover extends React.Component {
  render () {
    return (
      <div style={{marginBottom: rhythm(3)}}>
        <div>
          <h2 
            style={{
              ...scale(1),
              marginBottom: rhythm(1),
              marginTop: 0,
            }}
            >
            Hello, I'm <span style={{color: "#cc5200"}}>Hassan Salami</span>
          </h2>
          <p>
            An avid developer of all things front-end and UI/UX. I research and talk technology innovation, designs, usabilty, accessibility, and sensemaking. you can also find me chatting away on photography, sports - mostly basketball, and music.
          </p>
          <p>
          As much as I enjoy fullstack development, my strongest suit is in frontend development. I’m mostly passionate about CSS, JavaScript, and React and its ecosystem and I’m enjoying digging more into GraphQL.
          </p>
          <p>
          I have worked on small teams with various goals and delivered. Thus I am capable of working autonomously with limited or no supervision. Nonetheless, One of my key strength is team communication as it helps norish project knowledge. I like interacting with people around me and very well support different path to learning and growth. I also like staying active on relevant platforms (meetups, twitter, or podcast) to connect with project contributors to learn about new contributions, features, and development.
          </p>
          <p>What do I bring? Apart from great attitude, aptitude and technical capability needed to deliver, I also pride myself as a continuous learner, listener, and teacher who understands the process of customer success. </p>
    
  
        </div>
        
      </div>
    )
  }
}


