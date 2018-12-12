import React from 'react'
import { rhythm, scale } from '../utils/typography'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPinterest, 
  faLinkedin, 
  faTwitter,  
} from "@fortawesome/free-brands-svg-icons";

import profilePic from './profile.jpg'
import styles from '../styles/bio.module.css'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'


class Bios extends React.Component {
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
            width: rhythm(5),
            height: rhythm(5),
          }}
        />
        <p style={{marginLeft: "10px"}}>
          <a href="https://twitter.com/haslam956">
            I share things on Twitter, too..
          </a>
        </p>
      </div>
    )
  }
}

export default class Bio extends React.Component {
  render () {
    return (
      <div className={styles.bio__wrapper}>
        <div className={styles.bio__note}>
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
          <div style={{display: "flex"}}>
            <span>Find me on</span>
            <ul className={styles.bio__social}>
              <li className={styles.bio__social_item}><a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
              <li className={styles.bio__social_item}><a href="#"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
              <li className={styles.bio__social_item}><a href="#"><FontAwesomeIcon icon={faPinterest} size="lg" /></a></li>
            </ul>
          </div>
  
        </div>
        <div className={styles.bio__photo}>
        <img
            src={profilePic}
            alt={`Hassan Salami`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
             }}
          />
        </div>
      </div>
    )
  }
}
