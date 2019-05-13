import React from 'react'
import { rhythm, scale } from '../utils/typography'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPinterest, 
  faLinkedin, 
  faTwitter,
  faGithub,  
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
      <div className={styles.bio__wrapper} style={{marginBottom: rhythm(3)}}>
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
             Front-End. UX/UI. Art. Basketball.
          </p>
          <div style={{display: "flex"}}>
            <span style={{fontWeight: "600"}}>Find me on</span>
            <ul className={styles.bio__social}>
              <li className={styles.bio__social_item}><a href="https://twitter.com/haslam956" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
              <li className={styles.bio__social_item}><a href="https://www.linkedin.com/in/hassanhersen-salami" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
              <li className={styles.bio__social_item}><a href="https://www.pinterest.com/haslam414/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest} size="lg" /></a></li>
              <li className={styles.bio__social_item}><a href="https://www.github.com/haslam/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" /></a></li>
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
              borderRadius: "50px"
             }}
          />
        </div>
      </div>
    )
  }
}


export const BioPost = () => {
  return (
    <div className={styles.bio__wrapper} style={{marginBottom: rhythm(4)}}>
      <div className={styles.bio__note}>
        <h4 
          style={{
            ...scale(1/4),
            marginBottom: rhythm(1),
            marginTop: 0,
          }}
          >
          Hey, it's <span style={{color: "#cc5200"}}>Hassan</span> again.
        </h4>
        <p>
          Thanks for stopping by! Hope you had a good read here today. I'd very much appreciate your visit again 🙂. 
        </p>
        <div style={{display: "flex"}}>
          <span style={{fontWeight: "600"}}>In the meantime, do find me on</span>
          <ul className={styles.bio__social}>
            <li className={styles.bio__social_item}><a href="https://twitter.com/haslam956" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
            <li className={styles.bio__social_item}><a href="https://www.linkedin.com/in/hassanhersen-salami" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
            <li className={styles.bio__social_item}><a href="https://www.pinterest.com/haslam414/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest} size="lg" /></a></li>
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
            borderRadius: "50px"
           }}
        />
      </div>
    </div>
  )
}
